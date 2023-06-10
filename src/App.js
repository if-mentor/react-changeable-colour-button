import React, { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

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
        Click me
      </button>
    </div>
  );
}
