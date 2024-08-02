import { FormId } from "./form-id";
import { ValidationField } from "./form-validation";

export type FormStatus = "Published" | "Hidden";

export type FormTag = "Dropdown" | "Text" | "Radio" | "Checkbox";

export interface FormFields {
  tag: FormTag;
  attributes: object[];
  validation: ValidationField;
  values: string[];
  order: number;
}

export interface Form {
  id: FormId;
  userId: string;
  link: string;
  fields: FormFields;
  status: FormStatus;
}

export interface CreateForm {
  userId: string;
  link: string;
  fields: FormFields;
  status: FormStatus;
}

export interface UpdateForm {
  fields: FormFields;
  status: FormStatus;
}