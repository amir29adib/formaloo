import { Email } from "../../../../data/email";
import { Int } from "../../../../data/int";

export interface ValidationField {
  required: boolean;
  email: boolean;
  min: Int;
  max: Int;
}
