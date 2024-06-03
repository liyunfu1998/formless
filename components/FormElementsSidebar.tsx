import React from "react";
import SidebarBtnElement from "./SidebarBtnElement";
import { FormElements } from "./FormElements";

export default function FormElementsSidebar() {
  return (
    <div>
      <SidebarBtnElement formElement={FormElements.TextField} />
    </div>
  );
}
