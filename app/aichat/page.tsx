"use client";

import { useChat } from "@ai-sdk/react";

export default function AiChat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch bg-background">
      {messages?.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User：" : "AI："}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={(e) => {
            if (e.target.value.length > 200) return;
            handleInputChange(e);
          }}
        />
      </form>
    </div>
  );
}
