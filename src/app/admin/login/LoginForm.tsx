"use client";

import { useActionState } from "react";
import { signIn } from "../actions";

const input =
  "w-full h-12 px-4 rounded-2xl border border-outline-variant text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all font-body-md";

export default function LoginForm() {
  const [state, action, pending] = useActionState(signIn, null);

  return (
    <form action={action} className="space-y-5">
      <div>
        <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="email">
          Correo electrónico
        </label>
        <input autoComplete="email" className={input} id="email" name="email" required type="email" />
      </div>
      <div>
        <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="password">
          Contraseña
        </label>
        <input autoComplete="current-password" className={input} id="password" name="password" required type="password" />
      </div>
      {state && !state.ok && (
        <p className="p-3 rounded-2xl bg-error-container text-on-error-container text-body-sm font-bold" role="alert">
          {state.error}
        </p>
      )}
      <button
        className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-white text-label-lg font-label-lg py-3.5 shadow-md hover:bg-primary active:scale-95 transition-all min-h-[48px] disabled:opacity-60"
        disabled={pending}
        type="submit"
      >
        {pending ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
}
