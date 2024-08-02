import { z } from "zod";
import { Brand } from "../utilities/brand";

export type Int = Brand<number, "Int">;

export const isInt = (value: number): value is Int => {
  return value >= 0 && Number.isInteger(value);
};

export const zodInt = z.coerce.number().refine(isInt);
