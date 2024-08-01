import { z } from "zod";
import { Brand } from "../utilities/brand";

export type NoneEmptyString = Brand<string, "NoneEmptyString">;

export const isNoneEmptyString = (x: string): x is NoneEmptyString => {
  return typeof x === "string" && x.length > 0;
};

export const zodNoneEmptyString = z.string().refine(isNoneEmptyString);
