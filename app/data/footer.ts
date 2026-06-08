export type FooterLink = {
  label: string;
  href: string;
};

export type FooterData = {
  identity: {
    logo: string;
    title: string;
    blurb: string;
    socials: {
      icon: string;
      href: string;
    }[];
  };
  quickLinks: FooterLink[];
  locations: {
    icon: string;
    lines: string[];
  }[];
  contact: {
    icon: string;
    lines: string[];
  }[];
  legal: {
    links: string[];
    notice: string;
  };
};

export const footer: FooterData = {
  identity: {
    logo: "/images/sobichos-brand-logo-clean.png",
    title: "SÓBICHOS",
    blurb: "Cuidamos do seu melhor amigo como ele merece.",
    socials: [
      {
        icon: "/images/icons/site-wide-mixed-icons-26-facebook-icon.svg",
        href: "https://www.facebook.com/veterinariasobichos",
      },
      {
        icon: "/images/icons/site-wide-mixed-icons-27-instagram-icon.svg",
        href: "#",
      },
    ],
  },
  quickLinks: [
    { label: "Clínica Veterinária", href: "#clinica" },
    { label: "Serviços Veterinários", href: "#servicos" },
    { label: "Veterinário ao Domicílio", href: "/veterinario-ao-domicilio" },
    { label: "Banhos e Tosquias", href: "/banhos-e-tosquias" },
    { label: "Contactos", href: "/contactos" },
  ],
  locations: [
    {
      icon: "/images/icons/site-wide-mixed-icons-23-map-marker.svg",
      lines: [
        "Clínica – R. Dr. António José Almeida, Nº30, 2830-341 Barreiro",
        "Consultório – Av. Afonso Henriques, Nº29, 2830-247 Barreiro",
      ],
    },
  ],
  contact: [
    {
      icon: "/images/icons/site-wide-mixed-icons-0-phone-call.svg",
      lines: [
        "212075557 / 212169038",
        "(Chamada para rede fixa nacional)",
      ],
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-24-contact-mail.svg",
      lines: ["sobichos@sapo.pt"],
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-25-business-clock.svg",
      lines: [
        "Clínica – 10h-13h / 14h-18h30",
        "Consultório – 10h-13h / 14h-19h",
      ],
    },
  ],
  legal: {
    links: ["Livro de Reclamações", "Política de Privacidade", "Política de Cookies"],
    notice:
      "O nosso website utiliza cookies para melhorar e personalizar a sua experiência de navegação. Saiba mais.",
  },
};
