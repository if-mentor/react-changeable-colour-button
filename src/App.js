import ReactDOM from "react-dom";
import React, { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(true);

  const handleChangeColor = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button
        style={{
          color: isActive ? "#fff" : "#000",
          backgroundColor: isActive ? "#008000" : "#ff0000",
          width: "150px",
          borderRadius: "24px",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={handleChangeColor}
      >
        {isActive ? "ON" : "OFF"}
      </button>
    </div>
  );
};
export default App;
