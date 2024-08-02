import { Brand } from "../utilities/brand";

export type Email = Brand<string, "Email">;

export const isEmail = (value: string): value is Email => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};
