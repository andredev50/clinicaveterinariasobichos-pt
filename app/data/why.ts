export type WhyFeature = {
  icon: string;
  text: string;
};

export type WhyData = {
  kicker: string;
  headlineStart: string;
  headlineEmph: string;
  features: WhyFeature[];
  cta: {
    label: string;
    href: string;
  };
  image: string;
};

export const why: WhyData = {
  kicker: "PORQUÊ ESCOLHER A SÓBICHOS?",
  headlineStart: "Mais do que uma clínica, somos ",
  headlineEmph: "família.",
  features: [
    {
      icon: "/images/icons/site-wide-mixed-icons-20-group-members.svg",
      text: "Cuidamos de cada animal como se fosse nosso.",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-12-medical-kit.svg",
      text: "Equipamentos modernos e instalações seguras.",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-13-heart-in-hands.svg",
      text: "Acompanhamento próximo em todas as fases da vida.",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-21-simple-paw.svg",
      text: "Serviços completos para cães, gatos e outros animais.",
    },
  ],
  cta: { label: "CONHECER A NOSSA CLÍNICA", href: "/sobre-nos" },
  image: "/images/veterinarian-and-dog.png",
};
