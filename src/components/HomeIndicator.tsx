export default function HomeIndicator() {
  return (
    <div
      style={{
        width: "100%",
        height: "34px",
        backgroundColor: "#FFFFFF",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "134px",
          height: "5px",
          backgroundColor: "#000000",
          borderRadius: "200px",
          top: "21px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}
