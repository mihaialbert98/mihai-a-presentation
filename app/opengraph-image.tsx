import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const runtime = "edge";
export const alt = `${personalInfo.name} — Senior Frontend Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020817 0%, #0a0f1e 50%, #0d0a1e 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Glass panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "60px 80px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(16px)",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          {/* Tag */}
          <div
            style={{
              display: "flex",
              color: "#60a5fa",
              fontSize: "16px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 500,
            }}
          >
            Portfolio
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            {personalInfo.displayName}
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 500,
              color: "transparent",
              backgroundImage: "linear-gradient(to right, #60a5fa, #a78bfa, #2dd4bf)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              marginBottom: "32px",
            }}
          >
            Senior Frontend Developer
          </div>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              borderRadius: "1px",
              marginBottom: "32px",
            }}
          />

          {/* Tech tags */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["React", "Next.js", "TypeScript", "8+ Years Exp."].map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  border: "1px solid rgba(59,130,246,0.3)",
                  background: "rgba(59,130,246,0.1)",
                  color: "#93c5fd",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
