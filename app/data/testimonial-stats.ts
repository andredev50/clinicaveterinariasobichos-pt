export type Testimonial = {
  photo?: string;
  stars: number;
  quote: string;
  author: string;
};

export type Stat = {
  icon: string;
  value: string;
  label: string;
};

export type TestimonialStatsData = {
  testimonial: Testimonial;
  stats: Stat[];
};

export const testimonialStats: TestimonialStatsData = {
  testimonial: {
    stars: 5,
    quote:
      "Profissionais incríveis! O Thor adora ir à Sóbichos. Atendimento atencioso e muito humano.",
    author: "- Mariana Silva",
  },
  stats: [
    {
      icon: "/images/icons/site-wide-mixed-icons-20-group-members.svg",
      value: "+20",
      label: "Anos de experiência",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-21-simple-paw.svg",
      value: "+2.500",
      label: "Animais felizes",
    },
    {
      icon: "/images/icons/site-wide-mixed-icons-22-simple-heart.svg",
      value: "100%",
      label: "Dedicação e carinho",
    },
  ],
};
