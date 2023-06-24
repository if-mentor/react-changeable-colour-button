import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  console.log("ステートの状態は：", isActive);
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={toggleIsActive}
        style={{
          color: isActive ? "#fff" : "#000",
          backgroundColor: isActive ? "#008000" : "#ff0000",
          borderRadius: "10px",
          padding: "10px 20px",
          border: "none",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          width: "100px",
          height: "50px",
        }}
      >
        {isActive ? "ON" : "OFF"}
      </button>
    </div>
  );
}
