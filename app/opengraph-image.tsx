import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "ClawSuite — The all-in-one command center for OpenClaw agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_B64 =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBmaWxsPSJub25lIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ib3JhbmdlQmdGaW5hbCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlYTU4MGM7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjk3MzE2O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmYjkyM2M7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICAKICA8IS0tIE9yYW5nZSBiYWNrZ3JvdW5kIC0tPgogIDxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgcng9IjE2IiBmaWxsPSJ1cmwoI29yYW5nZUJnRmluYWwpIi8+CiAgCiAgPCEtLSBUZXJtaW5hbCB3aW5kb3cgZnJhbWUgLSBkYXJrIG91dGxpbmUsIG5vIGZpbGwgLS0+CiAgPHJlY3QgeD0iMjAiIHk9IjI1IiB3aWR0aD0iNjAiIGhlaWdodD0iNTAiIHJ4PSI0IiBzdHJva2U9IiMxZTI5M2IiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPgogIAogIDwhLS0gVGVybWluYWwgaGVhZGVyIGRvdHMgLSBkYXJrIGZpbGwgLS0+CiAgPGNpcmNsZSBjeD0iMjgiIGN5PSIzMiIgcj0iMi41IiBmaWxsPSIjMWUyOTNiIi8+CiAgPGNpcmNsZSBjeD0iMzciIGN5PSIzMiIgcj0iMi41IiBmaWxsPSIjMWUyOTNiIi8+CiAgPGNpcmNsZSBjeD0iNDYiIGN5PSIzMiIgcj0iMi41IiBmaWxsPSIjMWUyOTNiIi8+CiAgCiAgPCEtLSBMZWZ0IGNsYXcgYnJhY2tldCAtIGRhcmsgLS0+CiAgPHBhdGggZD0iTSAzOCA0NSBMIDMyIDUwIEwgMzggNTUiIHN0cm9rZT0iIzFlMjkzYiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiLz4KICAKICA8IS0tIFJpZ2h0IGNsYXcgYnJhY2tldCAtIGRhcmsgLS0+CiAgPHBhdGggZD0iTSA2MiA0NSBMIDY4IDUwIEwgNjIgNTUiIHN0cm9rZT0iIzFlMjkzYiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiLz4KICAKICA8IS0tIENlbnRlciBjdXJzb3IgYmFyIC0gZGFyayBmaWxsIC0tPgogIDxyZWN0IHg9IjQ3IiB5PSI0NiIgd2lkdGg9IjQiIGhlaWdodD0iMTAiIHJ4PSIyIiBmaWxsPSIjMWUyOTNiIi8+Cjwvc3ZnPgo=";

export default function Image() {
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
          background:
            "linear-gradient(135deg, #0c0a09 0%, #1c1917 50%, #0c0a09 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.3), transparent 70%)",
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
            background:
              "radial-gradient(circle, rgba(234,88,12,0.2), transparent 70%)",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO_B64}
          alt=""
          width={88}
          height={88}
          style={{ marginBottom: "32px" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#fafaf9",
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            The all-in-one command center
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.2,
              color: "#f97316",
            }}
          >
            for OpenClaw agents
          </div>
        </div>

        <div
          style={{
            marginTop: "24px",
            fontSize: "22px",
            color: "#a8a29e",
            textAlign: "center",
          }}
        >
          Free &amp; open source · Self-hosted · Multi-model chat · Agent
          orchestration
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "36px",
            fontSize: "18px",
            color: "#57534e",
            letterSpacing: "0.05em",
          }}
        >
          clawsuite.io
        </div>
      </div>
    ),
    { ...size }
  );
}
