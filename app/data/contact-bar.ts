export type ContactBarItem = {
  icon: string;
  label: string;
  href?: string;
};

export type ContactBarData = {
  left: ContactBarItem;
  center: ContactBarItem;
  right: ContactBarItem;
};

export const contactBar: ContactBarData = {
  left: {
    icon: "/images/icons/site-wide-mixed-icons-0-phone-call.svg",
    label: "212075557 / 212169038",
    href: "tel:212075557",
  },
  center: {
    icon: "/images/icons/site-wide-mixed-icons-1-email-envelope.svg",
    label: "sobichos@sapo.pt",
    href: "mailto:sobichos@sapo.pt",
  },
  right: {
    icon: "/images/icons/site-wide-mixed-icons-2-location-pin.svg",
    label: "R. Dr. António José Almeida, Nº30, 2830-341 Barreiro",
  },
};
