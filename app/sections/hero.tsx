import Container from "~/components/container";
import Button from "~/components/button";
import Icon from "~/components/icon";
import type { HeroData } from "~/data/hero";

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <Container className="relative grid items-center gap-10 lg:grid-cols-2">
        {/* Left text */}
        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            {data.headline.map((seg, i) => (
              <span key={i} className={seg.tone === "accent" ? "text-accent" : "text-foreground"}>
                {seg.text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < seg.text.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="text-base text-muted md:text-lg">{data.sub}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="solid" size="lg" href={data.primaryCta.href}>
              {data.primaryCta.label}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={data.secondaryCta.href}
              leftIconSrc={data.secondaryCta.icon}
            >
              {data.secondaryCta.label}
            </Button>
          </div>

          {/* Features */}
          <div className="mt-2 flex flex-col gap-4 md:flex-row md:gap-6">
            {data.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    f.tone === "primary" ? "bg-primary/10" : "bg-accent/10"
                  }`}
                >
                  <Icon
                    src={f.icon}
                    alt=""
                    className={`h-5 w-5 ${
                      f.tone === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </div>
                <div className="text-sm font-semibold text-foreground">
                  <div>{f.line1}</div>
                  <div>{f.line2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex items-center justify-center">
          {/* Decorative blobs */}
          <div className="absolute -right-8 top-8 h-64 w-64 rounded-full bg-accent/15 md:h-80 md:w-80" />
          <div className="absolute -left-4 bottom-8 h-48 w-48 rounded-full bg-primary/10 md:h-56 md:w-56" />

          <img
            src={data.image}
            alt="Hero Dogs and Cat Composite"
            className="relative z-10 w-full max-w-md lg:max-w-lg"
          />
        </div>
      </Container>
    </section>
  );
}
