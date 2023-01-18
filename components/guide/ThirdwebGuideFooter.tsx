import React from "react";

export default function ThirdwebGuideFooter() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          cursor: "pointer",
        }}
        role="button"
        onClick={() =>
          window.open(
            "https://kroniclabz.com/",
            "_blank"
          )
        }
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src="/klabz.png"
          width={55}
          height={55}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://kroniclabz.com/",
              "_blank"
            )
          }
        />
      </div>
    </>
  );
}
