export const whatsappContactConfig = {
  // TODO: Reemplazar con el numero oficial validado en Notion.
  // Debe estar en formato internacional y solo contener digitos.
  phoneNumber: "573194312060",
  // TODO: Reemplazar con el copy oficial validado en Notion.
  greeting: "Hola,",
};

type WhatsAppMessageParams = {
  name?: string;
  email?: string;
  idea?: string;
};

export function buildWhatsAppMessage({
  name,
  email,
  idea,
}: WhatsAppMessageParams) {
  const normalizedName = name?.trim() || "[nombre]";
  const normalizedEmail = email?.trim() || "[correo]";
  const normalizedIdea = idea?.trim() || "[idea]";

  return `${whatsappContactConfig.greeting} soy ${normalizedName}, mi correo es ${normalizedEmail} y tengo esta idea en mente: ${normalizedIdea}`;
}
