import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0c0a09 0%, #1c1917 50%, #0c0a09 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Orange glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(249,115,22,0.3), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(234,88,12,0.2), transparent 70%)",
          }}
        />

        {/* Logo placeholder */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #ea580c, #f97316, #fb923c)",
            marginBottom: "32px",
            fontSize: "36px",
            fontWeight: 800,
            color: "#1e293b",
          }}
        >
          CS
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#fafaf9",
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            The all-in-one command center
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.1,
              background: "linear-gradient(90deg, #f97316, #fbbf24)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            for OpenClaw agents
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: "24px",
            fontSize: "24px",
            color: "#a8a29e",
            textAlign: "center",
          }}
        >
          Free &amp; open source · Self-hosted · Any model
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "20px",
            color: "#57534e",
            letterSpacing: "0.05em",
          }}
        >
          clawsuite.io
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
