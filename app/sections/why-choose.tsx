import Container from "~/components/container";
import Button from "~/components/button";
import Icon from "~/components/icon";
import type { WhyData } from "~/data/why";

export default function WhyChoose({ data }: { data: WhyData }) {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left text */}
        <div className="flex flex-col gap-6">
          <div className="text-xs font-bold uppercase tracking-widest text-accent">
            {data.kicker}
          </div>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            {data.headlineStart}
            <span className="text-primary">{data.headlineEmph}</span>
          </h2>
          <ul className="flex flex-col gap-4">
            {data.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Icon src={f.icon} alt="" className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm text-foreground">{f.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <Button variant="outline" href={data.cta.href}>
              {data.cta.label}
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex items-center justify-center">
          <img
            src={data.image}
            alt="Veterinarian and Dog"
            className="w-full max-w-sm rounded-[1rem] object-cover lg:max-w-md"
          />
        </div>
      </Container>
    </section>
  );
}
