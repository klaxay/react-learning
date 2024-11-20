import React from "react";


export default function Die({ value, isHeld, holdDie }) {
  return (
    <div
      className={`dice--box ${isHeld ? "held" : ""}`}
      onClick={holdDie}
    >
      {value}
    </div>
  );
}
