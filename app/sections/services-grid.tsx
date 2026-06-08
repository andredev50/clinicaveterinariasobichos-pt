import Container from "~/components/container";
import Button from "~/components/button";
import Card from "~/components/card";
import Icon from "~/components/icon";
import type { ServicesGridData } from "~/data/services-grid";

export default function ServicesGrid({ data }: { data: ServicesGridData }) {
  return (
    <section className="bg-surface py-12 md:py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="flex flex-col gap-3">
            <div className="text-xs font-bold uppercase tracking-widest text-accent">
              {data.kicker}
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              {data.headlineStart}
              <span className="text-primary">{data.headlineEmph}</span>
            </h2>
          </div>
          <Button variant="outline" href={data.cta.href}>
            {data.cta.label}
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {data.cards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-[1rem]"
            >
              <Card className="flex flex-col gap-4 p-5 h-full">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    card.variant === "solid"
                      ? "bg-primary text-white"
                      : "border border-primary/40 text-primary"
                  }`}
                >
                  <Icon src={card.icon} alt="" className="h-6 w-6" />
                </div>
                <div className="font-heading text-base font-semibold text-foreground">
                  {card.title}
                </div>
                <p className="text-sm text-muted">{card.desc}</p>
                <div className="mt-auto flex items-center justify-end text-primary transition-transform group-hover:translate-x-0.5">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
