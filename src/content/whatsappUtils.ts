export function buildMessage({
  name,
  email,
  idea,
}: {
  name?: string;
  email?: string;
  idea?: string;
}) {
  const n = name?.trim() || "[nombre]";
  const e = email?.trim() || "[correo]";
  const i = idea?.trim() || "[idea]";

  return `Hola, quiero hablar sobre un proyecto.%0A%0ANombre: ${n}%0ACorreo: ${e}%0AMensaje:%0A${i}`;
}
