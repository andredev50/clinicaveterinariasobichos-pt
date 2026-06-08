import Container from "~/components/container";
import Icon from "~/components/icon";
import Logo from "~/components/logo";
import type { FooterData } from "~/data/footer";

export default function FooterMain({ data }: { data: FooterData }) {
  return (
    <footer className="bg-white border-t border-border">
      <Container className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
        {/* Identity */}
        <div className="flex flex-col gap-4 lg:pr-6">
          <Logo src={data.identity.logo} alt={data.identity.title} />
          <p className="text-sm text-muted">{data.identity.blurb}</p>
          <div className="flex items-center gap-3">
            {data.identity.socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Icon src={s.icon} alt="" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 lg:px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            Links Úteis
          </div>
          <ul className="flex flex-col gap-2">
            {data.quickLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="text-sm text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div className="flex flex-col gap-4 lg:px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            Localizações
          </div>
          <ul className="flex flex-col gap-3">
            {data.locations.map((loc, i) => (
              <li key={i} className="flex items-start gap-2">
                <Icon src={loc.icon} alt="" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  {loc.lines.map((line, j) => (
                    <span key={j} className="text-sm text-muted">
                      {line}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 lg:pl-6">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            Contactos
          </div>
          <ul className="flex flex-col gap-3">
            {data.contact.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <Icon src={c.icon} alt="" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  {c.lines.map((line, j) => (
                    <span key={j} className="text-sm text-muted">
                      {line}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
