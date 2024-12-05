"use client";

import { useState } from "react";

const Main = () => {
  const [history, setHistory] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState<string>("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setHistory((prev) => [...prev, userMessage]);

    try {
      const villagerResponse = await fetch("/api/chat", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });
      const { message } = await villagerResponse.json();
      const villagerMessage = {
        role: "assistant",
        content: message,
      };
      setHistory((prev) => [...prev, villagerMessage]);
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
      const errorMessage = {
        role: "assistant",
        content: "에러가 발생했어요!",
      };
      setHistory((prev) => [...prev, errorMessage]);
    }

    setInput("");
  };
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>동물의 숲 제시카와 대화하기</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "400px",
          overflowY: "auto",
        }}
      >
        {history.map((his, index) => (
          <p
            key={index}
            style={{ textAlign: his.role === "user" ? "right" : "left" }}
          >
            <strong>{his.role === "user" ? "나" : "제시카"}:</strong>{" "}
            {his.content}
          </p>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "calc(100% - 50px)", padding: "10px" }}
        />
        <button onClick={handleSend} style={{ padding: "10px" }}>
          보내기
        </button>
      </div>
    </div>
  );
};

export default Main;
