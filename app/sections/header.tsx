import { useState } from "react";
import Container from "~/components/container";
import Button from "~/components/button";
import Logo from "~/components/logo";
import type { NavData } from "~/data/nav";

export default function Header({ nav }: { nav: NavData }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft">
      <Container className="flex items-center justify-between py-3 md:py-4">
        <Logo src={nav.logo} alt="Sóbichos" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {nav.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-xs font-semibold text-foreground uppercase tracking-wide hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {item.label}
              {item.caret && (
                <svg className="h-3 w-3 text-foreground" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="outline" href={nav.call.href} leftIconSrc={nav.call.icon}>
            {nav.call.label}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Menu"
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-border">
          <Container className="flex flex-col gap-3 py-4">
            {nav.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between text-sm font-semibold text-foreground uppercase tracking-wide py-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {item.label}
                {item.caret && (
                  <svg className="h-3 w-3 text-foreground" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </a>
            ))}
            <Button variant="outline" href={nav.call.href} leftIconSrc={nav.call.icon}>
              {nav.call.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
