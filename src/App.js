import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  console.log("ステートの初期状態は：", isActive);
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
          width: "100px", // ボタンの幅を固定
          height: "50px", // ボタンの高さを固定
        }}
      >
        {isActive ? "ON" : "OFF"}
      </button>
    </div>
  );
}
