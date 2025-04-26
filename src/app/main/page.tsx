"use client";

import { useState } from "react";
import { chat } from "../utils/chat";
import { InputWithButton } from "../components/InputButton";
import { Avatar } from "../components/Avatar";
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

      <ScrollArea className="h-150  rounded-md border w-[100%] p-2.5">
        {history.map((his, index) => {
          const isMe = his.role === "user";
          return (
            <div
              key={`${chat}_${index}`}
              className={`flex gap-1 items-center  ${
                his.role === "user" ? "flex-row-reverse" : "flex-row"
              } `}
            >
              <Avatar
                src={
                  isMe
                    ? "https://i.pinimg.com/474x/3d/95/0b/3d950ba473ba1ffe53c4b812f8d4d9ae.jpg"
                    : "https://i.pinimg.com/474x/43/86/6e/43866ea58f03a072282bb6df06bc16d7.jpg"
                }
              />
              <p
                className={`p-2 rounded-lg text-amber-50 font-medium text-xs whitespace-preline ${
                  isMe ? "bg-blue-300" : "bg-red-300"
                }`}
              >
                {his.content}
              </p>
            </div>
          );
        })}
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
