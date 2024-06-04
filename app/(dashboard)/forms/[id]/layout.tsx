import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="flex w-full flex-grow mx-auto">{children}</div>;
}
