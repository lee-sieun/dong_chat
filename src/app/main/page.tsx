"use client";

import { useState } from "react";

const Main = () => {
  const [history, setHistory] = useState("");

  const handle = () => setHistory("eeeee");
  return <div onClick={handle}>{history}</div>;
};

export default Main;
