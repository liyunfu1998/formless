import AiChat from "@/components/AiChat";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import { BsRobot } from "react-icons/bs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <div className="flex gap-4 items-center">
          <Popover>
            <PopoverTrigger>
              <BsRobot className="w-6 h-6" />
            </PopoverTrigger>
            <PopoverContent>
              <AiChat />
            </PopoverContent>
          </Popover>

          <ThemeSwitcher />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant="ghost">Log In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
      <main className="flex w-full flex-grow"> {children}</main>
    </div>
  );
}
