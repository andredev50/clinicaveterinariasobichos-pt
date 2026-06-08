import type { Route } from "./+types/home";

import TopBar from "~/sections/top-bar";
import Header from "~/sections/header";
import Hero from "~/sections/hero";
import ServicesBanner from "~/sections/services-banner";
import WhyChoose from "~/sections/why-choose";
import ServicesGrid from "~/sections/services-grid";
import TestimonialStats from "~/sections/testimonial-stats";
import FooterMain from "~/sections/footer-main";
import FooterLegal from "~/sections/footer-legal";

import { contactBar } from "~/data/contact-bar";
import { nav } from "~/data/nav";
import { hero } from "~/data/hero";
import { servicesBanner } from "~/data/services-banner";
import { why } from "~/data/why";
import { servicesGrid } from "~/data/services-grid";
import { testimonialStats } from "~/data/testimonial-stats";
import { footer } from "~/data/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sóbichos — Clínica Veterinária no Barreiro" },
    {
      name: "description",
      content:
        "Clínica veterinária completa no Barreiro. Consultas, cirurgia, vacinação, banhos e tosquias, veterinário ao domicílio.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <TopBar data={contactBar} />
      <Header nav={nav} />
      <main>
        <Hero data={hero} />
        <ServicesBanner data={servicesBanner} />
        <WhyChoose data={why} />
        <ServicesGrid data={servicesGrid} />
        <TestimonialStats data={testimonialStats} />
      </main>
      <FooterMain data={footer} />
      <FooterLegal data={footer.legal} />
    </>
  );
}
