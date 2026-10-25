export type NavLinkItem = Readonly<{
  label: string;
  href: string;
}>;

export type NavbarContent = {
  homeHref: string;
  logoAriaLabel: string;
  links: readonly NavLinkItem[];
  languageLabel: string;
  ctaLabel: string;
  ctaHref: string;
};

export type MobileMenuContent = {
  openMenuAriaLabel: string;
  closeMenuAriaLabel: string;
  languageLabel: string;
  ctaLabel: string;
  ctaHref: string;
};

export type FooterContent = {
  homeHref: string;
  logoAriaLabel: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  servicesNavAriaLabel: string;
  servicesHeading: string;
  contactHeading: string;
  contactSectionLinkLabel: string;
  availabilityLabel: string;
  availabilityValue: string;
  location: string;
  ecosystemHeading: string;
  githubUrl: string;
  githubLabel: string;
  copyrightSuffix: string;
  licenseText: string;
};

export type ThemeToggleContent = {
  toggleAriaLabel: string;
  switchToLightTitle: string;
  switchToDarkTitle: string;
};

export type ModalContent = {
  closeAriaLabel: string;
};

export type LayoutContent = {
  skipToContentLabel: string;
  mainContentId: string;
  navbar: NavbarContent;
  mobileMenu: MobileMenuContent;
  footer: FooterContent;
  themeToggle: ThemeToggleContent;
  modal: ModalContent;
};

export const NAV_LINKS: readonly NavLinkItem[] = [
  { label: "Problema", href: "#problema" },
  { label: "Solución", href: "#solucion" },
  { label: "Proceso", href: "#como-funciona" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "FAQ", href: "#faq" },
] as const;

export const layoutContent: LayoutContent = {
  skipToContentLabel: "Saltar al contenido principal",
  mainContentId: "main-content",
  navbar: {
    homeHref: "#inicio",
    logoAriaLabel: "Ir al inicio de RuntimeStudioDevs",
    links: NAV_LINKS,
    languageLabel: "ES",
    ctaLabel: "Contáctanos",
    ctaHref: "#contacto",
  },
  mobileMenu: {
    openMenuAriaLabel: "Abrir menú",
    closeMenuAriaLabel: "Cerrar menú",
    languageLabel: "ES",
    ctaLabel: "Contáctanos",
    ctaHref: "#contacto",
  },
  footer: {
    homeHref: "#inicio",
    logoAriaLabel: "Ir al inicio de RuntimeStudioDevs",
    description:
      "Desarrollo de software a la medida, aplicaciones web, sistemas internos, automatizaciones, integraciones y soluciones con inteligencia artificial.",
    primaryCtaLabel: "Iniciar proyecto",
    primaryCtaHref: "#contacto",
    servicesNavAriaLabel: "Servicios principales",
    servicesHeading: "Servicios",
    contactHeading: "Contacto",
    contactSectionLinkLabel: "Formulario de contacto técnico",
    availabilityLabel: "Disponibilidad:",
    availabilityValue: "Remoto global / Medellín, Colombia",
    location: "Medellín, Colombia",
    ecosystemHeading: "Código & Ecosistema",
    githubUrl: "https://github.com/RuntimeStudioDevs",
    githubLabel: "GitHub (@RuntimeStudioDevs)",
    copyrightSuffix: "RuntimeStudioDevs. Todos los derechos reservados.",
    licenseText: "Licencia MIT • Código Abierto",
  },
  themeToggle: {
    toggleAriaLabel: "Alternar tema visual",
    switchToLightTitle: "Cambiar a tema claro",
    switchToDarkTitle: "Cambiar a tema oscuro",
  },
  modal: {
    closeAriaLabel: "Cerrar modal",
  },
};
