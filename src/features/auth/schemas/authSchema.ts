import z from "zod";

export const BaseAuthSchema = z.object({
  name: z.string().min(1, { error: "El nombre es obligatorio" }),
  email: z.email({ error: "E-mail no es válido" }),
});
