import z from "zod";

export const BaseAuthSchema = z.object({
  name: z.string().min(1, { error: "El nombre es obligatorio" }),
  email: z.email({ error: "E-mail no es válido" }),
  password: z
    .string()
    .min(8, { error: "El Password debe ser mínimo de 8 caracteres" }),
  passwordConfirmation: z
    .string()
    .min(1, { error: "El Password de confirmación no puede ir vacio" }),
});

export const SignUpSchema = BaseAuthSchema.pick({
  name: true,
  email: true,
  password: true,
  passwordConfirmation: true,
});
