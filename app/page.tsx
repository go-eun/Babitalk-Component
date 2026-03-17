import StatusBar from "@/components/StatusBar";
import HomeIndicator from "@/components/HomeIndicator";
import TabBar from "@/components/TabBar";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 390,
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        border: "1px solid #ECECEF",
      }}
    >
      <StatusBar />

      <div style={{ flex: 1, padding: 16 }}>
        <p style={{ color: "#A3A3AF", fontSize: 14 }}>컴포넌트 미리보기 영역</p>
      </div>

      <TabBar />
      <HomeIndicator />
    </div>
  );
}
