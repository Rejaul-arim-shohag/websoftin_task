// src/context/BColorContext.js
import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export function useColor() {
  return useContext(ColorContext);
}

export function ColorProvider({ children }) {
  const [color, setColor] = useState("blue-300");

  const changeColor = () => {
    const newColor = color === "slate-50" ? "blue-300" : "slate-50";
    setColor(newColor);
  };

  return <ColorContext.Provider value={{ color, changeColor }}>{children}</ColorContext.Provider>;
}
