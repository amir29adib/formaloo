type TextType = "text" | "email" | "password";
interface TextInputProps {
  type: TextType;
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
}

interface CheckboxInputProps {
  type: "checkbox";
  name: string;
  label: string;
  value?: string | boolean;
}

interface RadioInputProps {
  type: "radio";
  name: string;
  label: string;
  value: string;
}

interface DropdownInputProps {
  type: "dropdown";
  name: string;
  label: string;
  placeholder?: string;
  options?: string[];
}

 interface FormProps {
  textInput: TextInputProps[];
  checkboxInput: CheckboxInputProps[];
  dropdownInput: DropdownInputProps[];
  radioInput: RadioInputProps[];
}

export interface FieldProps {
  type: string;
  placeholder?: string;
  value?: string | boolean;
  name: string;
  label?: string;
  id?: string;
  options?: string[];
  validation: {
    type: 'string' | 'boolean';
    email?: boolean;
    min?: [number, string];
    required?: string;
  };
}
