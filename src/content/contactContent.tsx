export const whatsappContactConfig = {
  phoneNumber: "573194312060",
  greeting: "Hola,",
};

export type ContactFieldContent = {
  label: string;
  placeholder: string;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  fields: {
    name: ContactFieldContent;
    email: ContactFieldContent;
    message: ContactFieldContent;
  };
  submitLabel: string;
  trustText: string;
  whatsapp: {
    phonePlaceholder: string;
  };
};

export const contactContent: ContactContent = {
  eyebrow: "Contacto",
  title: "Hablemos de tu proyecto",
  subtitle:
    "Transformamos ideas audaces en productos digitales excepcionales. Cuéntanos qué tienes en mente y hagamos que suceda.",
  fields: {
    name: {
      label: "Nombre completo",
      placeholder: "Escribe tu nombre aquí",
    },
    email: {
      label: "Correo electrónico",
      placeholder: "ejemplo@compañia.com",
    },
    message: {
      label: "Descripción del proyecto",
      placeholder:
        "Cuéntanos un poco sobre los objetivos y desafíos de tu proyecto...",
    },
  },
  submitLabel: "Enviar mensaje",
  trustText: "Respondemos en menos de 24 horas",
  whatsapp: {
    phonePlaceholder: whatsappContactConfig.phoneNumber,
  },
};
