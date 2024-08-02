import { z } from "zod";

export const CreateUserDTO = z.object({
  username: z.string(),
  password: z.string(),
});

export const UpdateUserDTO = z.object({
  password: z.string().optional(),
});

export const UserDTO = z.object({
  id: z.string(),
  username: z.string(),
});

export type CreateUserDTO = z.infer<typeof CreateUserDTO>;
export type UpdateUserDTO = z.infer<typeof UpdateUserDTO>;
export type UserDTO = z.infer<typeof UserDTO>;
