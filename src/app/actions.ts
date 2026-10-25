"use server";

import { getSupabase } from "@/lib/supabase";

export type FormResult = { ok: true } | { ok: false; error: string };

const field = (data: FormData, key: string, max = 500) =>
  String(data.get(key) ?? "").trim().slice(0, max);

async function insert(table: string, row: Record<string, unknown>): Promise<FormResult> {
  const supabase = getSupabase();
  if (!supabase) {
    // Supabase not connected yet: keep the forms usable in development.
    console.info(`[forms] Supabase no configurado, ${table} no se guardó:`, row);
    return { ok: true };
  }
  const { error } = await supabase.from(table).insert(row);
  if (error) {
    console.error(`[forms] Error al guardar en ${table}:`, error.message);
    return { ok: false, error: "No pudimos enviar tu mensaje. Intenta nuevamente o escríbenos por WhatsApp." };
  }
  return { ok: true };
}

export async function submitContact(data: FormData): Promise<FormResult> {
  const row = {
    name: field(data, "name", 120),
    email: field(data, "email", 160),
    phone: field(data, "phone", 40) || null,
    interest: field(data, "interest", 120) || null,
    message: field(data, "message", 2000),
    source: field(data, "source", 60) || null,
  };
  if (!row.name || !row.email || !row.message) {
    return { ok: false, error: "Completa nombre, correo y mensaje." };
  }
  return insert("contact_messages", row);
}

export async function submitTestimonial(data: FormData): Promise<FormResult> {
  const rating = Number(data.get("rating"));
  const row = {
    name: field(data, "name", 120),
    product: field(data, "product", 120),
    rating: Number.isInteger(rating) && rating >= 1 && rating <= 5 ? rating : 5,
    comment: field(data, "comment", 1000),
  };
  if (!row.name || !row.product || !row.comment) {
    return { ok: false, error: "Completa nombre, producto y testimonio." };
  }
  return insert("testimonials", row);
}
