import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  //以下の書き方もできます。
  const content = isActive ? (
    <input type="file" />
  ) : (
    "ここにテキストを表示します"
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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

      {/*
      {isActive ? <input type="file" /> : "ここにテキストを表示します"}
      */}

      {content}
    </div>
  );
}
