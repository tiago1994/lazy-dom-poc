import { Link } from "react-router-dom";

export function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: "100vh",
        gap: 20,
      }}
    >
      <div style={{ border: "1px solid black", padding: 20 }}>
        <Link to={"full-render"}>Full Render</Link>
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          <img src="full-render/1.png" style={{ width: 300 }} />
          <img src="full-render/2.png" style={{ width: 300 }} />
        </div>
      </div>
      <div style={{ border: "1px solid black", padding: 20 }}>
        <Link to={"split-render"}>Split Render 20/80%</Link>
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          <img src="split-render/1.png" style={{ width: 300 }} />
          <img src="split-render/2.png" style={{ width: 300 }} />
        </div>
      </div>
      <div style={{ border: "1px solid black", padding: 20 }}>
        <Link to={"lazy-load-render"}>Lazy Load Render</Link>
      </div>
    </div>
  );
}
