"use client";

import Form from "@/src/shared/components/forms/Form";
import FormInput from "@/src/shared/components/forms/FormInput";
import FormLabel from "@/src/shared/components/forms/FormLabel";
import FormSubmit from "@/src/shared/components/forms/FormSubmit";

export default function LoginForm() {
  return (
    <Form>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput type="email" id="email" placeholder="Ingresa tu E-mail" />

      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa tu Password"
      />

      <FormSubmit value="Iniciar Sesión" />
    </Form>
  );
}
