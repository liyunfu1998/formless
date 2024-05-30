import { TextFieldFormElement } from "./fields/TextField";

export type ElementsType = "TextField";

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;
  designerBtnelement: {
    icon: React.ElementType;
    label: string;
  };
  designerComponent: React.FC;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttrubutes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
