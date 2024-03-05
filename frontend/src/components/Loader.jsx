import React from "react";
import Loader from "../assets/Loader.gif";

const style = {
  display: "flex",
  justifyContent: "center",
};

export default function Loading() {
  return (
    <div style={style}>
      <img src={Loader} alt="Loading..." />
    </div>
  );
}
