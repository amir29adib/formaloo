export type FormStatus = "Published" | "Hidden";

export interface FormFields {
  tag: string;
  attributes: object[];
  validation: object;
  values: string[];
  order: number;
}

export interface Form {
  id: string;
  userId: string;
  link: string;
  fields: FormFields;
  status: FormStatus;
}