export type BannerZone = {
  icon: string;
  title: string;
  desc: string;
  href: string;
  tone?: "primary" | "accent";
};

export type ServicesBannerData = {
  zones: BannerZone[];
};

export const servicesBanner: ServicesBannerData = {
  zones: [
    {
      icon: "/images/icons/site-wide-mixed-icons-7-medical-stethoscope.svg",
      title: "Consultas Veterinárias",
      desc: "Saúde e bem-estar do seu melhor amigo",
      href: "/#consultas",
      tone: "primary",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-8-verified-shield.svg",
      title: "Serviços Veterinários",
      desc: "Diagnóstico, cirurgia e tratamentos",
      href: "/#servicos",
      tone: "accent",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-6-pet-house.svg",
      title: "Veterinário ao Domicílio",
      desc: "Conforto e segurança para o seu animal",
      href: "/veterinario-ao-domicilio",
      tone: "primary",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-19-grooming-bathtub.svg",
      title: "Banhos e Tosquias",
      desc: "Higiene com carinho e profissionalismo",
      href: "/banhos-e-tosquias",
      tone: "primary",
    },
  ],
};
