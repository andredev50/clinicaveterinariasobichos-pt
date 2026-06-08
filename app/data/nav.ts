export type NavItem = {
  label: string;
  href: string;
  caret?: boolean;
};

export type NavData = {
  logo: string;
  items: NavItem[];
  call: {
    icon: string;
    label: string;
    href: string;
  };
};

export const nav: NavData = {
  logo: "/images/sobichos-brand-logo-clean.png",
  items: [
    { label: "CLÍNICA", href: "#clinica", caret: true },
    { label: "SERVIÇOS", href: "#servicos", caret: true },
    { label: "VETERINÁRIO AO DOMICÍLIO", href: "/veterinario-ao-domicilio" },
    { label: "BANHOS E TOSQUIAS", href: "/banhos-e-tosquias" },
    { label: "SOBRE NÓS", href: "/sobre-nos" },
    { label: "CONTACTOS", href: "/contactos" },
  ],
  call: {
    icon: "/images/icons/site-wide-mixed-icons-3-alternative-phone.svg",
    label: "212075557",
    href: "tel:212075557",
  },
};
