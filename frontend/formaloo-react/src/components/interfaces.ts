export interface FieldProps {
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    value?: string | boolean;
    options?: { label: string; value: string }[];
  }