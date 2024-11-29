import { NextResponse, NextRequest } from "next/server";
import OpenAI from "openai";

const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY; // OpenAI API 키
const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
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
          content: reqBody.prompt,
        },
      ],
    });

    const message = response.choices[0].message.content;

    if (message === null) {
      throw new Error("메세지 요청 실패");
    }

    return NextResponse.json({ message: message });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ error: "An error occurred" });
  }
};
