// Genera l'SVG del QR di navigazione verso l'indirizzo del cliente.
// Uso: node scripts/gen-qr.mjs  (dalla root del progetto)
import QRCode from "qrcode";
import { writeFileSync } from "node:fs";

const dest = "Via Giuseppe Capruzzi 14, 70126 Bari BA";
const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}`;
const out = "public/work/special-sushi-poke/qr-navigazione.svg";

const svg = await QRCode.toString(url, {
  type: "svg",
  errorCorrectionLevel: "M",
  margin: 1,
  color: { dark: "#0A0A0A", light: "#FFFFFF" },
});

writeFileSync(out, svg);
console.log("QR generato:", out);
console.log("Encoded URL:", url);
