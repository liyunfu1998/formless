import React from "react";
import { Button } from "./ui/button";
import { HiSaveAs } from "react-icons/hi";

export default function PreviewDialogBtn() {
  return (
    <Button variant={"outline"} className="gap-2">
      <HiSaveAs className="h-6 w-6" />
      Save
    </Button>
  );
}
