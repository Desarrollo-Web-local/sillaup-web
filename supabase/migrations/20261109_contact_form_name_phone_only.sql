-- Formulario de asesoría: solo nombre y teléfono/WhatsApp son obligatorios.
-- El correo y el mensaje pasan a ser opcionales (el servidor exige nombre y teléfono).
alter table public.contact_messages alter column email drop not null;
alter table public.contact_messages alter column message drop not null;
alter table public.contact_messages drop constraint if exists contact_messages_phone_check;
alter table public.contact_messages add constraint contact_messages_phone_check
  check (phone is null or char_length(phone) between 6 and 40);
