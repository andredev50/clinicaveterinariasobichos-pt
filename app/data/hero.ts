export type HeroSegment = {
  text: string;
  tone: "accent" | "default";
};

export type HeroFeature = {
  icon: string;
  line1: string;
  line2: string;
  tone?: "primary" | "accent";
};

export type HeroData = {
  headline: HeroSegment[];
  sub: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
    icon: string;
  };
  features: HeroFeature[];
  image: string;
};

export const hero: HeroData = {
  headline: [
    { text: "CUIDAMOS", tone: "accent" },
    { text: " DE QUEM", tone: "default" },
    { text: "\nCUIDA", tone: "accent" },
    { text: " DE SI.", tone: "default" },
  ],
  sub: "Clínica veterinária completa no Barreiro com amor, competência e proximidade.",
  primaryCta: { label: "MARCAR CONSULTA", href: "#contacto" },
  secondaryCta: {
    label: "FALAR CONNOSCO",
    href: "tel:212075557",
    icon: "/images/icons/site-wide-mixed-icons-0-phone-call.svg",
  },
  features: [
    {
      icon: "/images/icons/site-wide-mixed-icons-4-outline-heart.svg",
      line1: "Atendimento",
      line2: "Personalizado",
      tone: "primary",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-8-verified-shield.svg",
      line1: "Profissionais",
      line2: "Experientes",
      tone: "accent",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-6-pet-house.svg",
      line1: "Serviços ao",
      line2: "Domicílio",
      tone: "accent",
    },
  ],
  image: "/images/hero-dogs-and-cat-composite.png",
};
