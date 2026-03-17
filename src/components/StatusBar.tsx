"use client";

import { useEffect, useState } from "react";

const BATTERY_DURATION = 10 * 60 * 1000; // 10분 (ms)

function getElapsedBattery(): number {
  const now = Date.now();
  const elapsed = now % BATTERY_DURATION;
  const val = Math.ceil(100 - (elapsed / BATTERY_DURATION) * 99);
  return Math.min(100, Math.max(1, val));
}

function getBatteryColor(battery: number): string {
  if (battery === 100) return "#00C27C";
  if (battery >= 20) return "#222227";
  return "#F82D3E";
}

export default function StatusBar() {
  const [time, setTime] = useState("");
  const [battery, setBattery] = useState(getElapsedBattery());

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m}`);
      setBattery(getElapsedBattery());
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const color = getBatteryColor(battery);
  const fillWidth = Math.max(0, (battery / 100) * 100);

  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "24px",
        paddingRight: "16px",
        boxSizing: "border-box",
        flexShrink: 0,
      }}
    >
      {/* 시간 */}
      <span
        style={{
          fontSize: "15px",
          fontWeight: 600,
          color: "#222227",
          fontFamily: "SF Pro, Apple SD Gothic Neo, sans-serif",
          letterSpacing: "-0.3px",
        }}
      >
        {time}
      </span>

      {/* 우측 아이콘 */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>

        {/* 신호 — Figma 원본 paths */}
        <svg width="17" height="12" viewBox="826.182 43.64 50.349 33.563" fill="none">
          <path d="M826.182 68.8112C826.182 67.2663 827.434 66.014 828.979 66.014H831.776C833.321 66.014 834.573 67.2663 834.573 68.8112V74.4056C834.573 75.9504 833.321 77.2028 831.776 77.2028H828.979C827.434 77.2028 826.182 75.9504 826.182 74.4056V68.8112Z" fill="#222227"/>
          <path d="M840.168 61.8182C840.168 60.2733 841.42 59.021 842.965 59.021H845.762C847.307 59.021 848.559 60.2733 848.559 61.8182V74.4056C848.559 75.9504 847.307 77.2028 845.762 77.2028H842.965C841.42 77.2028 840.168 75.9504 840.168 74.4056V61.8182Z" fill="#222227"/>
          <path d="M854.154 52.028C854.154 50.4831 855.406 49.2308 856.951 49.2308H859.748C861.293 49.2308 862.545 50.4831 862.545 52.028V74.4056C862.545 75.9504 861.293 77.2028 859.748 77.2028H856.951C855.406 77.2028 854.154 75.9504 854.154 74.4056V52.028Z" fill="#222227"/>
          <path d="M868.14 46.4336C868.14 44.8887 869.392 43.6364 870.937 43.6364H873.734C875.279 43.6364 876.531 44.8887 876.531 46.4336V74.4056C876.531 75.9504 875.279 77.2028 873.734 77.2028H870.937C869.392 77.2028 868.14 75.9504 868.14 74.4056V46.4336Z" fill="#222227"/>
        </svg>

        {/* 와이파이 — Figma 원본 paths */}
        <svg width="16" height="12" viewBox="890.18 43.64 47.664 33.099" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M913.959 50.8742C920.859 50.8745 927.494 53.5806 932.495 58.4331C932.871 58.8077 933.473 58.803 933.844 58.4225L937.443 54.7145C937.631 54.5216 937.736 54.2601 937.734 53.9882C937.733 53.7162 937.625 53.456 937.435 53.2653C924.311 40.4267 903.606 40.4267 890.482 53.2653C890.291 53.4559 890.184 53.7159 890.182 53.9879C890.18 54.2599 890.285 54.5214 890.472 54.7145L894.073 58.4225C894.443 58.8035 895.046 58.8083 895.422 58.4331C900.423 53.5802 907.059 50.8742 913.959 50.8742ZM914.059 62.0682C917.849 62.068 921.505 63.5062 924.315 66.1035C924.695 66.4721 925.294 66.4641 925.664 66.0855L929.259 62.3775C929.449 62.183 929.554 61.9192 929.551 61.645C929.548 61.3709 929.438 61.1093 929.245 60.9187C920.688 52.794 907.436 52.794 898.88 60.9187C898.686 61.1093 898.576 61.371 898.573 61.6453C898.571 61.9195 898.676 62.1833 898.866 62.3775L902.46 66.0855C902.831 66.4641 903.429 66.4721 903.809 66.1035C906.618 63.5079 910.27 62.0698 914.059 62.0682ZM921.369 69.3055C921.375 69.5804 921.269 69.8455 921.077 70.0381L914.858 76.4444C914.675 76.6326 914.427 76.7386 914.168 76.7386C913.908 76.7386 913.66 76.6326 913.477 76.4444L907.257 70.0381C907.065 69.8454 906.96 69.5802 906.965 69.3053C906.971 69.0303 907.088 68.77 907.288 68.5857C911.259 65.1568 917.076 65.1568 921.048 68.5857C921.247 68.7701 921.364 69.0306 921.369 69.3055Z" fill="#222227"/>
        </svg>

        {/* 배터리 */}
        <div style={{ display: "flex", alignItems: "center", gap: "1px" }}>
          {/* 배터리 바디 — 회색 배경 위에 컬러 fill */}
          <div
            style={{
              position: "relative",
              width: "25px",
              height: "14px",
              backgroundColor: "#B2B2B2",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {/* 충전 영역 */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: `${fillWidth}%`,
                backgroundColor: color,
                borderRadius: fillWidth >= 100 ? "4px" : "4px 0 0 4px",
                transition: "width 1s linear, background-color 0.3s",
              }}
            />
            {/* 숫자 */}
            <span
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: 700,
                color: "#FFFFFF",
                fontFamily: "SF Pro, Apple SD Gothic Neo, sans-serif",
                lineHeight: 1,
                zIndex: 1,
              }}
            >
              {battery}
            </span>
          </div>
          {/* 캡 */}
          <div
            style={{
              width: "2px",
              height: "6px",
              backgroundColor: "#B2B2B2",
              borderRadius: "0 1px 1px 0",
            }}
          />
        </div>
      </div>
    </div>
  );
}
