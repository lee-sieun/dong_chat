"use client";

import { useState } from "react";
import { chat } from "../utils/chat";
import { InputWithButton } from "../components/InputButton";
import { ScrollArea } from "#/components/ui/scroll-area";

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
      // const villagerResponse = await chat(input);
      const villagerMessage = {
        role: "assistant",
        content: "villagerResponse",
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
    <div
      style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}
      className="flex gap-5 flex-col"
    >
      <h1>동물의 숲 제시카와 대화하기</h1>
      <ScrollArea className="h-150  rounded-md border">
        {history.map((his, index) => (
          <p
            key={index}
            style={{ textAlign: his.role === "user" ? "right" : "left" }}
          >
            <strong>{his.role === "user" ? "나" : "제시카"}:</strong>{" "}
            {his.content}
          </p>
        ))}
      </ScrollArea>
      <InputWithButton
        buttonText="Send"
        onSubmit={(value) => {
          setInput(value);
          handleSend();
        }}
      />
    </div>
  );
};

export default Main;
