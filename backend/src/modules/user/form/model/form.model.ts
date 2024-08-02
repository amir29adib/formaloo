import { FormId } from "./form-id";
import { ValidationField } from "./form-validation";

export type FormStatus = "Published" | "Hidden";

export const isFormStatus = (value: string): value is FormStatus => {
  return value === "Published" || value === "Hidden";
};

export type FormTag = "Dropdown" | "Text" | "Radio" | "Checkbox";

export const isFormTag = (value: string): value is FormTag => {
  return (
    value === "Dropdown" ||
    value === "Text" ||
    value === "Radio" ||
    value === "Checkbox"
  );
};

export interface FormFields {
  tag: FormTag;
  attributes: object[];
  validation: ValidationField;
  options: string[];
  order: number;
}

export interface Form {
  id: FormId;
  userId: string;
  link: string;
  fields: FormFields[];
  status: FormStatus;
}

export interface CreateForm {
  userId: string;
  link: string;
  fields: FormFields[];
  status: FormStatus;
}

export interface UpdateForm {
  fields: FormFields[];
  status: FormStatus;
}
