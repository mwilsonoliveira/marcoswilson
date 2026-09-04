import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, color: "#eef5f1", background: "radial-gradient(circle at 85% 15%, #193b2b 0, #07100e 42%, #050908 100%)", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", color: "#b7ff3c", fontSize: 28, fontWeight: 700 }}>MW /dev</div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 82, lineHeight: 1, fontWeight: 700, letterSpacing: -4 }}>Marcos Wilson</div><div style={{ marginTop: 24, fontSize: 34, color: "#a9b8b0" }}>Full-Stack Developer · React · Next.js · Node.js</div></div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#b7ff3c" }}><span style={{ width: 12, height: 12, borderRadius: 999, background: "#b7ff3c" }} /><span>Building digital products end to end</span></div>
    </div>,
    size,
  );
}
