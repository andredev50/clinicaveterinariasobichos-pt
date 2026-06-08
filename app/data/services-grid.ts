export type ServiceCard = {
  icon: string;
  title: string;
  desc: string;
  variant: "solid" | "outline";
  href: string;
};

export type ServicesGridData = {
  kicker: string;
  headlineStart: string;
  headlineEmph: string;
  cta: {
    label: string;
    href: string;
  };
  cards: ServiceCard[];
};

export const servicesGrid: ServicesGridData = {
  kicker: "OS NOSSOS SERVIÇOS",
  headlineStart: "Tudo o que o seu animal precisa, ",
  headlineEmph: "num só lugar.",
  cta: { label: "VER TODOS OS SERVIÇOS", href: "/#servicos" },
  cards: [
    {
      icon: "/images/icons/site-wide-mixed-icons-18-heart-beat.svg",
      title: "Consultas Veterinárias",
      desc: "Avaliação completa e prevenção",
      variant: "solid",
      href: "/#consultas",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-16-injection-syringe.svg",
      title: "Vacinação e Desparasitação",
      desc: "Proteção essencial durante todo o ano",
      variant: "outline",
      href: "/#vacinacao",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-12-medical-kit.svg",
      title: "Cirurgias e Internamento",
      desc: "Segurança e cuidados especializados",
      variant: "outline",
      href: "/#cirurgias",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-18-heart-beat.svg",
      title: "Exames e Diagnóstico",
      desc: "Tecnologia ao serviço da saúde animal",
      variant: "solid",
      href: "/#diagnostico",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-19-grooming-bathtub.svg",
      title: "Banhos e Tosquias",
      desc: "Bem-estar e higiene com todo o carinho",
      variant: "solid",
      href: "/banhos-e-tosquias",
    },
  ],
};
