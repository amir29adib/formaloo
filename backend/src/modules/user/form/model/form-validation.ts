import { z } from "zod";
import { Int, isInt } from "../../../../data/int";

export interface ValidationField {
  required: boolean;
  email: boolean;
  min: Int;
  max: Int;
}

export const zodValidationField = z.object({
  required: z.boolean(),
  email: z.boolean(),
  min: z.coerce.number().refine(isInt),
  max: z.coerce.number().refine(isInt),
});
