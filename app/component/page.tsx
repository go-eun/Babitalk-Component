"use client";

import { useEffect, useState } from "react";
import StatusBar from "@/components/StatusBar";
import HomeIndicator from "@/components/HomeIndicator";
import TabBar from "@/components/TabBar";
import NavigationBar from "@/components/NavigationBar";

export default function PreviewPage() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F7F7F9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "40px 0",
        gap: "32px",
      }}
    >
      <p style={{ fontSize: "13px", color: "#7E7E8F", fontFamily: "sans-serif", textAlign: "center" }}>
        Component Preview — {width}px
      </p>

      {/* StatusBar */}
      <div style={{ width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
        <p style={{ fontSize: "11px", color: "#A3A3AF", marginBottom: "8px", fontFamily: "sans-serif" }}>
          StatusBar
        </p>
        <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <StatusBar />
        </div>
      </div>
      {/* NavigationBar — home */}
      <div style={{ width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
        <p style={{ fontSize: "11px", color: "#A3A3AF", marginBottom: "8px", fontFamily: "sans-serif" }}>NavigationBar / home</p>
        <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <NavigationBar type="home" />
        </div>
      </div>

      {/* NavigationBar — back */}
      <div style={{ width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
        <p style={{ fontSize: "11px", color: "#A3A3AF", marginBottom: "8px", fontFamily: "sans-serif" }}>NavigationBar / back</p>
        <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <NavigationBar type="back" title="Screen Name" rightIcons={["share", "trash", "more"]} />
        </div>
      </div>

      {/* NavigationBar — title */}
      <div style={{ width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
        <p style={{ fontSize: "11px", color: "#A3A3AF", marginBottom: "8px", fontFamily: "sans-serif" }}>NavigationBar / title</p>
        <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <NavigationBar type="title" title="Screen Name" rightIcons={["search", "notification"]} />
        </div>
      </div>

      {/* TabBar */}
      <div style={{ width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
        <p style={{ fontSize: "11px", color: "#A3A3AF", marginBottom: "8px", fontFamily: "sans-serif" }}>
          TabBar
        </p>
        <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <TabBar />
        </div>
      </div>

      {/* HomeIndicator */}
      <div style={{ width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
        <p style={{ fontSize: "11px", color: "#A3A3AF", marginBottom: "8px", fontFamily: "sans-serif" }}>
          HomeIndicator
        </p>
        <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <HomeIndicator />
        </div>
      </div>
    </div>
  );
}
