import { FormId } from "./form-id";

export type FormStatus = "Published" | "Hidden";

export type FormTag = "Select" | "Input" | "Radio" | "Checkbox";

export interface FormFields {
  tag: FormTag;
  attributes: object[];
  validation: object;
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