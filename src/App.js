import React, { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        onClick={toggleIsActive}
        style={{
          color: isActive ? "#fff" : "#000",
          backgroundColor: isActive ? "#008000" : "#ff0000",
        }}
      >
        {isActive ? "ON" : "OFF"}
      </button>
    </div>
  );
}
