"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormInput,
  FormLabel,
  FormSubmit,
} from "@/src/shared/components/forms";
import { SignUpSchema } from "../schemas/authSchema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  console.log(errors);

  const onSubmit = () => {
    console.log("Submit...");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Ingresa tu Nombre"
        {...register("name")}
      />

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Ingressa tu E-mail"
        {...register("email")}
      />

      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Password - Min. 8 Caracteres"
        {...register("password")}
      />

      <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
      <FormInput
        type="password"
        id="password_confirmation"
        placeholder="Repite tu Password"
        {...register("passwordConfirmation")}
      />

      <FormSubmit value={"Registrarme"} />
    </Form>
  );
}
