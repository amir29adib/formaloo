import { z } from "zod";
import { isInt } from "../../../../data/int";
import { isFormStatus, isFormTag } from "../model/form.model";
import { zodValidationField } from "../model/form-validation";

export const createFormDto = z.object({
  userId: z.string().min(1),
  link: z.string().min(1),
  fields: z.object({
    tag: z.string().refine(isFormTag),
    attributes: z.array(z.object({})),
    validation: zodValidationField,
    options: z.array(z.string()),
    order: z.coerce.number().refine(isInt),
  }),
  status: z.string().refine(isFormStatus),
});

export type CreateFormDto = z.infer<typeof createFormDto>;
