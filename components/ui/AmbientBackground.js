import React from "react";

export default function AmbientBackground() {
  return (
    <div className="ambient-glow-wrapper" aria-hidden="true">
      {/* Top right cyan/blue glow */}
      <div
        className="blob-blue -top-24 -right-24 opacity-60"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      {/* Mid left soft mint glow */}
      <div
        className="blob-mint top-[35%] -left-32 opacity-50"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      {/* Lower right subtle blue glow */}
      <div
        className="blob-blue top-[65%] -right-20 opacity-40"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      {/* Bottom left gentle cyan glow */}
      <div
        className="blob-mint top-[85%] -left-20 opacity-30"
        style={{ transform: "translate3d(0,0,0)" }}
      />
    </div>
  );
}
