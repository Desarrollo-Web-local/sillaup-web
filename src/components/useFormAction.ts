"use client";

import { useState, type FormEvent } from "react";
import type { FormResult } from "@/app/actions";

type Status = "idle" | "sending" | "success" | "error";

/** Wires a <form> to a server action and tracks its submit status. */
export function useFormAction(action: (data: FormData) => Promise<FormResult>, onSuccess?: () => void) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const result = await action(new FormData(form));
      if (result.ok) {
        form.reset();
        setStatus("success");
        onSuccess?.();
      } else {
        setError(result.error);
        setStatus("error");
      }
    } catch {
      setError("No pudimos enviar el formulario. Revisa tu conexión e intenta nuevamente.");
      setStatus("error");
    }
  }

  return { onSubmit, status, error, sending: status === "sending" };
}
