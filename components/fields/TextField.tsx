"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../FormElements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttrubutes: {
      label: "Text field",
      helperText: "Helper text",
      required: false,
      placeHolder: "value here ...",
    },
  }),

  designerBtnelement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: () => <div>Designer component</div>,
  formComponent: () => <div>formComponent component</div>,
  propertiesComponent: () => <div>propertiesComponent component</div>,
};
