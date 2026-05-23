import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:5001/";
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);

const result = await page.evaluate(() => {
  const out = {};
  const cx = document.querySelector(".container-x");
  if (cx) {
    const cs = getComputedStyle(cx);
    const r = cx.getBoundingClientRect();
    out.containerX = {
      maxWidth: cs.maxWidth,
      paddingLeft: cs.paddingLeft,
      paddingRight: cs.paddingRight,
      marginLeft: cs.marginLeft,
      width: Math.round(r.width),
      left: Math.round(r.left),
    };
  } else {
    out.containerX = "NOT FOUND";
  }
  // check a section vertical padding
  const sec = document.querySelector("section");
  if (sec) {
    const cs = getComputedStyle(sec);
    out.firstSection = { paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom };
  }
  // viewport
  out.viewport = window.innerWidth;
  return out;
});

console.log(JSON.stringify(result, null, 2));
await browser.close();
