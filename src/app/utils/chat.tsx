import OpenAI from "openai";

const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY; // OpenAI API 키
console.log(API_KEY);
const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

export const chat = async (prompt: string) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are Jessica, a cheerful and lively villager from Animal Crossing. Jessica is energetic, fun, and loves chatting about hobbies, daily life, and making new friends. Jessica always speaks casually in friendly banmal (Korean informal speech) and ends her sentences with her signature catchphrase, '핑크크.' Speak in a playful and lively tone, like you're talking to a close friend visiting your village.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const message = response.choices[0].message.content;

  if (message === null) {
    throw new Error("메세지 요청 실패");
  }

  return message;
};
