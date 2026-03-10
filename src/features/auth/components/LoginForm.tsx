"use client";

export default function LoginForm() {
  return (
    <form className="mt-10 space-y-3">
      <label className="block" htmlFor="email">
        E-mail
      </label>
      <input
        type="email"
        id="email"
        placeholder="Ingresa tu E-mail"
        className="border border-slate-200 w-full p-2"
      />

      <label className="block" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Ingresa tu Password"
        className="border border-slate-200 w-full p-2"
      />
    </form>
  );
}
