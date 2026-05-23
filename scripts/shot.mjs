import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:5001/";
const out = process.argv[3] || "shot.png";
const full = process.argv[4] === "full";
const channel = process.argv[5] || "msedge";

const browser = await chromium.launch({
  channel,
  args: ["--use-gl=angle", "--use-angle=gl", "--enable-webgl", "--ignore-gpu-blocklist"],
});
const vw = parseInt(process.env.VW || "1440", 10);
const vh = parseInt(process.env.VH || "900", 10);
const page = await browser.newPage({ viewport: { width: vw, height: vh }, deviceScaleFactor: 1 });
page.on("console", (m) => console.log("[console]", m.type(), m.text()));
page.on("pageerror", (e) => console.log("[pageerror]", e.message));
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
const scrollTo = parseInt(process.env.SCROLL || "0", 10);
if (scrollTo > 0) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), scrollTo);
  await page.waitForTimeout(1200);
}
// Check WebGL availability
const webgl = await page.evaluate(() => {
  const c = document.querySelector("canvas");
  if (!c) return "NO_CANVAS";
  const gl = c.getContext("webgl2") || c.getContext("webgl");
  return gl ? "WEBGL_OK" : "NO_WEBGL_CONTEXT";
});
console.log("[webgl]", webgl);
// give WebGL + animations a moment
await page.waitForTimeout(parseInt(process.env.WAIT || "3500", 10));
await page.screenshot({ path: out, fullPage: full });
await browser.close();
console.log("saved", out);
