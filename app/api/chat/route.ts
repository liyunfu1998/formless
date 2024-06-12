import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
  baseURL: "https://api.deepseek.com/v1",
});
// allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("deepseek-chat"),
    messages,
  });

  return result.toAIStreamResponse();
}
