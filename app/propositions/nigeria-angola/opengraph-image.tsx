import { ImageResponse } from "next/og";

export const alt = "Nigeria × Angola · The Supplier Corridor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "#f3efe8",
          background: "linear-gradient(145deg, #010205 0%, #03070a 58%, #080302 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 720,
            height: 720,
            right: -220,
            top: -300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(109,225,173,.22), rgba(109,225,173,.04) 34%, transparent 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            right: -180,
            bottom: -360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(231,123,83,.2), rgba(231,123,83,.03) 36%, transparent 70%)",
          }}
        />

        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "56px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 5, textTransform: "uppercase", color: "rgba(243,239,232,.55)" }}>
            <span>Dyrane Strategic Ventures</span>
            <span>Proposition 001</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 24, letterSpacing: 6, textTransform: "uppercase", color: "#6de1ad", marginBottom: 20 }}>
                KON 13 · Kwanza Basin
              </div>
              <div style={{ fontSize: 120, lineHeight: 0.76, letterSpacing: -9, fontWeight: 700, textTransform: "uppercase" }}>
                Nigeria<br />× Angola
              </div>
              <div style={{ fontSize: 38, letterSpacing: -2, marginTop: 26, color: "rgba(243,239,232,.72)" }}>
                The Supplier Corridor.
              </div>
            </div>

            <div style={{ width: 310, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div style={{ width: 300, height: 3, background: "linear-gradient(90deg, #6de1ad, #e6d59d, #e77b53)", boxShadow: "0 0 24px rgba(217,174,103,.4)" }} />
              <div style={{ marginTop: 20, fontSize: 26, lineHeight: 1.05, textAlign: "right" }}>
                Supply moves.<br />Capability stays.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
