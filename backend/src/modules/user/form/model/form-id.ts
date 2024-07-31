import { Brand } from "../../../../utilities/brand";
import { isUUID, UUID } from "../../../../data/uuid";
import { z } from "zod";

export type FormId = Brand<UUID, "FormId">;

export const isFormId = (value: string): value is FormId => isUUID(value);

export const zodFormId = z.string().refine(isFormId);