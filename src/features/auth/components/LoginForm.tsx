"use client";

import Form from "@/src/shared/components/forms/Form";
import FormLabel from "@/src/shared/components/forms/FormLabel";

export default function LoginForm() {
  return (
    <Form>
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <input
        type="email"
        id="email"
        placeholder="Ingresa tu E-mail"
        className="border border-slate-200 w-full p-2"
      />

      <FormLabel htmlFor="password">Password</FormLabel>
      <input
        type="password"
        id="password"
        placeholder="Ingresa tu Password"
        className="border border-slate-200 w-full p-2"
      />
    </Form>
  );
}
