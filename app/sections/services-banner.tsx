import Container from "~/components/container";
import Icon from "~/components/icon";
import type { ServicesBannerData } from "~/data/services-banner";

export default function ServicesBanner({ data }: { data: ServicesBannerData }) {
  return (
    <section className="relative z-20 -mt-6 md:-mt-8 px-4">
      <Container>
        <div className="grid grid-cols-1 gap-0 divide-y divide-white/20 overflow-hidden rounded-[1.5rem] bg-primary md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {data.zones.map((zone, i) => (
            <a
              key={i}
              href={zone.href}
              className="group flex items-center gap-4 p-5 text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-hover/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 md:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                <Icon
                  src={zone.icon}
                  alt=""
                  className={`h-6 w-6 ${zone.tone === "accent" ? "text-accent" : "text-primary"}`}
                />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">{zone.title}</div>
                <div className="text-xs text-white/80">{zone.desc}</div>
              </div>
              <div className="text-white/60 transition-transform group-hover:translate-x-0.5">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
