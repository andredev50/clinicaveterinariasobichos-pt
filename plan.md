# Sóbichos — single-page marketing landing in React + Tailwind

## Stack
Locked to the provided starter: React Router 7.14 (framework mode with SSR), React 19, TypeScript 5.9 (strict), Vite 8, Tailwind CSS 4.2 via @tailwindcss/vite, Node 20. No deviations required.

## Reference website
Live site: <https://www.clinicaveterinariasobichos.pt/banhos-e-tosquias>  
Use it as the authoritative fallback for logo art, copy, contact details, and social links whenever § Copy and content data or § Assets leave a gap.

## Setup
```
cd sobichos-landing
npm install
npm run dev
```
Available scripts:
- npm run dev — start React Router dev server.
- npm run build — SSR build to ./build/.
- npm run start — serve the production build.
- npm run typecheck — regenerate route types and run TypeScript.

## Folder layout
- app/app.css — add design tokens under @theme (see § Design tokens).
- app/routes/home.tsx — compose all sections for the single-page landing.
- app/components/button.tsx — shared Button (solid/outline/pill).
- app/components/container.tsx — max-width centered wrapper.
- app/components/icon.tsx — inline SVG <img> helper with color sizing utilities.
- app/components/logo.tsx — brand logo image with text fallback.
- app/components/rating-stars.tsx — 1–5 star renderer.
- app/components/stat-block.tsx — icon + number + label snippet.
- app/components/card.tsx — white rounded card for service tiles.
- app/sections/top-bar.tsx — mustard contact strip.
- app/sections/header.tsx — logo + nav + call button.
- app/sections/hero.tsx — left copy + CTAs + highlights, right animal image with blobs.
- app/sections/services-banner.tsx — crimson 4-up interactive banner.
- app/sections/why-choose.tsx — left copy list, right vet+dog image.
- app/sections/services-grid.tsx — header + 5 service cards row.
- app/sections/testimonial-stats.tsx — testimonial + 3 stats on pale surface.
- app/sections/footer-main.tsx — 4-column footer.
- app/sections/footer-legal.tsx — crimson legal bottom bar.
- app/data/contact-bar.ts — top bar items (phones, email, address).
- app/data/nav.ts — main navigation and call button.
- app/data/hero.ts — hero copy, CTAs, feature highlights.
- app/data/services-banner.ts — 4 zones for the crimson banner.
- app/data/why.ts — “Porquê escolher” copy and feature bullets.
- app/data/services-grid.ts — services header and 5 cards.
- app/data/testimonial-stats.ts — testimonial and stats.
- app/data/footer.ts — footer identity, links, locations, contact, legal.
- app/types/content.ts — shared TS types for the above data files.

## Design tokens
Add under the existing @import in app/app.css:
```css
@theme {
  /* Colors (from theme.md) */
  --color-primary: #B64A5F;
  --color-primary-hover: #9F4052;
  --color-secondary: #93B649;
  --color-accent: #F2B84B;
  --color-background: #FFFFFF;
  --color-surface: #FFF9F0;
  --color-foreground: #333333;
  --color-muted: #666666;
  --color-border: #EAEAEA;

  /* Typography (from theme.md) */
  --font-heading: "Poppins", "Montserrat", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", "Roboto", ui-sans-serif, system-ui, sans-serif;

  /* Radii and shadows (derived from design) */
  --radius-card: 1rem;
  --radius-banner: 1.5rem;
  --radius-pill: 9999px;

  --shadow-card: 0 6px 24px rgba(0,0,0,0.06);
  --shadow-soft: 0 2px 10px rgba(0,0,0,0.05);

  /* Layout */
  --container: 1200px;
}
```

## Copy and content data
All files below live under app/data/. Components import from these — do not inline strings elsewhere.

- contact-bar.ts
  - type:
    ```
    export type ContactBarItem = { icon: string; label: string; href?: string };
    export type ContactBarData = { left: ContactBarItem; center: ContactBarItem; right: ContactBarItem };
    ```
  - content:
    ```
    export const contactBar: ContactBarData = {
      left:  { icon: "/images/icons/site-wide-mixed-icons-0-phone-call.svg", label: "212075557 / 212169038", href: "tel:212075557" },
      center:{ icon: "/images/icons/site-wide-mixed-icons-1-email-envelope.svg", label: "sobichos@sapo.pt", href: "mailto:sobichos@sapo.pt" },
      right: { icon: "/images/icons/site-wide-mixed-icons-2-location-pin.svg", label: "R. Dr. António José Almeida, Nº30, 2830-341 Barreiro" }
    };
    ```

- nav.ts
  - type:
    ```
    export type NavItem = { label: string; href: string; caret?: boolean };
    export type NavData = { logo: string; items: NavItem[]; call: { icon: string; label: string; href: string } };
    ```
  - content:
    ```
    export const nav: NavData = {
      logo: "/images/sobichos-brand-logo-clean.png",
      items: [
        { label: "CLÍNICA", href: "#clinica", caret: true },
        { label: "SERVIÇOS", href: "#servicos", caret: true },
        { label: "VETERINÁRIO AO DOMICÍLIO", href: "/veterinario-ao-domicilio" },
        { label: "BANHOS E TOSQUIAS", href: "/banhos-e-tosquias" },
        { label: "SOBRE NÓS", href: "/sobre-nos" },
        { label: "CONTACTOS", href: "/contactos" }
      ],
      call: { icon: "/images/icons/site-wide-mixed-icons-3-alternative-phone.svg", label: "212075557", href: "tel:212075557" }
    };
    ```

- hero.ts
  - type:
    ```
    export type HeroSegment = { text: string; tone: "accent" | "default" };
    export type HeroFeature = { icon: string; line1: string; line2: string; tone?: "primary" | "accent" };
    export type HeroData = { headline: HeroSegment[]; sub: string; primaryCta: { label: string; href: string }; secondaryCta: { label: string; href: string; icon: string }; features: HeroFeature[]; image: string };
    ```
  - content:
    ```
    export const hero: HeroData = {
      headline: [
        { text: "CUIDAMOS", tone: "accent" },
        { text: " DE QUEM", tone: "default" },
        { text: "\nCUIDA", tone: "accent" },
        { text: " DE SI.", tone: "default" }
      ],
      sub: "Clínica veterinária completa no Barreiro com amor, competência e proximidade.",
      primaryCta: { label: "MARCAR CONSULTA", href: "#contacto" },
      secondaryCta: { label: "FALAR CONNOSCO", href: "tel:212075557", icon: "/images/icons/site-wide-mixed-icons-0-phone-call.svg" },
      features: [
        { icon: "/images/icons/site-wide-mixed-icons-4-outline-heart.svg", line1: "Atendimento", line2: "Personalizado", tone: "primary" },
        { icon: "/images/icons/site-wide-mixed-icons-8-verified-shield.svg", line1: "Profissionais", line2: "Experientes", tone: "accent" },
        { icon: "/images/icons/site-wide-mixed-icons-6-pet-house.svg", line1: "Serviços ao", line2: "Domicílio", tone: "accent" }
      ],
      image: "/images/hero-dogs-and-cat-composite.png"
    };
    ```

- services-banner.ts
  - type:
    ```
    export type BannerZone = { icon: string; title: string; desc: string; href: string; tone?: "primary" | "accent" };
    export type ServicesBannerData = { zones: BannerZone[] };
    ```
  - content:
    ```
    export const servicesBanner: ServicesBannerData = {
      zones: [
        { icon: "/images/icons/site-wide-mixed-icons-7-medical-stethoscope.svg", title: "Consultas Veterinárias", desc: "Saúde e bem-estar do seu melhor amigo", href: "/#consultas", tone: "primary" },
        { icon: "/images/icons/site-wide-mixed-icons-8-verified-shield.svg", title: "Serviços Veterinários", desc: "Diagnóstico, cirurgia e tratamentos", href: "/#servicos", tone: "accent" },
        { icon: "/images/icons/site-wide-mixed-icons-6-pet-house.svg", title: "Veterinário ao Domicílio", desc: "Conforto e segurança para o seu animal", href: "/veterinario-ao-domicilio", tone: "primary" },
        { icon: "/images/icons/site-wide-mixed-icons-19-grooming-bathtub.svg", title: "Banhos e Tosquias", desc: "Higiene com carinho e profissionalismo", href: "/banhos-e-tosquias", tone: "primary" }
      ]
    };
    ```

- why.ts
  - type:
    ```
    export type WhyFeature = { icon: string; text: string };
    export type WhyData = { kicker: string; headlineStart: string; headlineEmph: string; features: WhyFeature[]; cta: { label: string; href: string }; image: string };
    ```
  - content:
    ```
    export const why: WhyData = {
      kicker: "PORQUÊ ESCOLHER A SÓBICHOS?",
      headlineStart: "Mais do que uma clínica, somos ",
      headlineEmph: "família.",
      features: [
        { icon: "/images/icons/site-wide-mixed-icons-20-group-members.svg", text: "Cuidamos de cada animal como se fosse nosso." },
        { icon: "/images/icons/site-wide-mixed-icons-12-medical-kit.svg", text: "Equipamentos modernos e instalações seguras." },
        { icon: "/images/icons/site-wide-mixed-icons-13-heart-in-hands.svg", text: "Acompanhamento próximo em todas as fases da vida." },
        { icon: "/images/icons/site-wide-mixed-icons-21-simple-paw.svg", text: "Serviços completos para cães, gatos e outros animais." }
      ],
      cta: { label: "CONHECER A NOSSA CLÍNICA", href: "/sobre-nos" },
      image: "/images/veterinarian-and-dog.png"
    };
    ```

- services-grid.ts
  - type:
    ```
    export type ServiceCard = { icon: string; title: string; desc: string; variant: "solid" | "outline"; href: string };
    export type ServicesGridData = { kicker: string; headlineStart: string; headlineEmph: string; cta: { label: string; href: string }; cards: ServiceCard[] };
    ```
  - content:
    ```
    export const servicesGrid: ServicesGridData = {
      kicker: "OS NOSSOS SERVIÇOS",
      headlineStart: "Tudo o que o seu animal precisa, ",
      headlineEmph: "num só lugar.",
      cta: { label: "VER TODOS OS SERVIÇOS", href: "/#servicos" },
      cards: [
        { icon: "/images/icons/site-wide-mixed-icons-18-heart-beat.svg", title: "Consultas Veterinárias", desc: "Avaliação completa e prevenção", variant: "solid", href: "/#consultas" },
        { icon: "/images/icons/site-wide-mixed-icons-16-injection-syringe.svg", title: "Vacinação e Desparasitação", desc: "Proteção essencial durante todo o ano", variant: "outline", href: "/#vacinacao" },
        { icon: "/images/icons/site-wide-mixed-icons-12-medical-kit.svg", title: "Cirurgias e Internamento", desc: "Segurança e cuidados especializados", variant: "outline", href: "/#cirurgias" },
        { icon: "/images/icons/site-wide-mixed-icons-18-heart-beat.svg", title: "Exames e Diagnóstico", desc: "Tecnologia ao serviço da saúde animal", variant: "solid", href: "/#diagnostico" },
        { icon: "/images/icons/site-wide-mixed-icons-19-grooming-bathtub.svg", title: "Banhos e Tosquias", desc: "Bem-estar e higiene com todo o carinho", variant: "solid", href: "/banhos-e-tosquias" }
      ]
    };
    ```

- testimonial-stats.ts
  - type:
    ```
    export type Testimonial = { photo?: string; stars: number; quote: string; author: string };
    export type Stat = { icon: string; value: string; label: string };
    export type TestimonialStatsData = { testimonial: Testimonial; stats: Stat[] };
    ```
  - content:
    ```
    export const testimonialStats: TestimonialStatsData = {
      testimonial: {
        // TODO: add photo when sourced
        stars: 5,
        quote: "Profissionais incríveis! O Thor adora ir à Sóbichos. Atendimento atencioso e muito humano.",
        author: "- Mariana Silva"
      },
      stats: [
        { icon: "/images/icons/site-wide-mixed-icons-20-group-members.svg", value: "+20", label: "Anos de experiência" },
        { icon: "/images/icons/site-wide-mixed-icons-21-simple-paw.svg", value: "+2.500", label: "Animais felizes" },
        { icon: "/images/icons/site-wide-mixed-icons-22-simple-heart.svg", value: "100%", label: "Dedicação e carinho" }
      ]
    };
    ```

- footer.ts
  - type:
    ```
    export type FooterLink = { label: string; href: string };
    export type FooterData = {
      identity: { logo: string; title: string; blurb: string; socials: { icon: string; href: string }[] };
      quickLinks: FooterLink[];
      locations: { icon: string; lines: string[] }[];
      contact: { icon: string; lines: string[] }[];
      legal: { links: string[]; notice: string };
    };
    ```
  - content:
    ```
    export const footer: FooterData = {
      identity: {
        logo: "/images/sobichos-brand-logo-clean.png",
        title: "SÓBICHOS",
        blurb: "Cuidamos do seu melhor amigo como ele merece.",
        socials: [
          { icon: "/images/icons/site-wide-mixed-icons-26-facebook-icon.svg", href: "https://www.facebook.com/veterinariasobichos" },
          { icon: "/images/icons/site-wide-mixed-icons-27-instagram-icon.svg", href: "#" }
        ]
      },
      quickLinks: [
        { label: "Clínica Veterinária", href: "#clinica" },
        { label: "Serviços Veterinários", href: "#servicos" },
        { label: "Veterinário ao Domicílio", href: "/veterinario-ao-domicilio" },
        { label: "Banhos e Tosquias", href: "/banhos-e-tosquias" },
        { label: "Contactos", href: "/contactos" }
      ],
      locations: [
        { icon: "/images/icons/site-wide-mixed-icons-23-map-marker.svg", lines: ["Clínica – R. Dr. António José Almeida, Nº30, 2830-341 Barreiro", "Consultório – Av. Afonso Henriques, Nº29, 2830-247 Barreiro"] }
      ],
      contact: [
        { icon: "/images/icons/site-wide-mixed-icons-0-phone-call.svg", lines: ["212075557 / 212169038", "(Chamada para rede fixa nacional)"] },
        { icon: "/images/icons/site-wide-mixed-icons-24-contact-mail.svg", lines: ["sobichos@sapo.pt"] },
        { icon: "/images/icons/site-wide-mixed-icons-25-business-clock.svg", lines: ["Clínica – 10h-13h / 14h-18h30", "Consultório – 10h-13h / 14h-19h"] }
      ],
      legal: {
        links: ["Livro de Reclamações", "Política de Privacidade", "Política de Cookies"],
        notice: "O nosso website utiliza cookies para melhorar e personalizar a sua experiência de navegação. Saiba mais."
      }
    };
    ```

## Assets
asset_name | path | coverage | section | notes
--- | --- | --- | --- | ---
Hero Dogs and Cat Composite | /images/hero-dogs-and-cat-composite.png | contained | Hero right image | -
Sobichos Brand Logo | /images/sobichos-brand-logo-clean.png | contained | Header logo, Footer identity | -
Veterinarian and Dog | /images/veterinarian-and-dog.png | contained | Why Choose right image | -
Phone Call | /images/icons/site-wide-mixed-icons-0-phone-call.svg | contained | Top bar left, CTAs, Footer | -
Email Envelope | /images/icons/site-wide-mixed-icons-1-email-envelope.svg | contained | Top bar center | -
Location Pin | /images/icons/site-wide-mixed-icons-2-location-pin.svg | contained | Top bar right | -
Alternative Phone | /images/icons/site-wide-mixed-icons-3-alternative-phone.svg | contained | Header call button | -
Outline Heart | /images/icons/site-wide-mixed-icons-4-outline-heart.svg | contained | Hero feature 1 | -
Shield Security | /images/icons/site-wide-mixed-icons-5-shield-security.svg | contained | (spare) | -
Pet House | /images/icons/site-wide-mixed-icons-6-pet-house.svg | contained | Hero feature 3, Services banner 3 | -
Medical Stethoscope | /images/icons/site-wide-mixed-icons-7-medical-stethoscope.svg | contained | Services banner 1 | -
Verified Shield | /images/icons/site-wide-mixed-icons-8-verified-shield.svg | contained | Hero feature 2, Services banner 2 | -
Pet Boarding | /images/icons/site-wide-mixed-icons-9-pet-boarding.svg | contained | (spare) | -
Pet Bathtub | /images/icons/site-wide-mixed-icons-10-pet-bathtub.svg | contained | (spare) | -
User Group | /images/icons/site-wide-mixed-icons-11-user-group.svg | contained | (spare) | -
Medical Kit | /images/icons/site-wide-mixed-icons-12-medical-kit.svg | contained | Why feature 2, Services card 3 | -
Heart In Hands | /images/icons/site-wide-mixed-icons-13-heart-in-hands.svg | contained | Why feature 3 | -
Pet Paw | /images/icons/site-wide-mixed-icons-14-pet-paw.svg | contained | (spare) | -
Cardiac Stethoscope | /images/icons/site-wide-mixed-icons-15-cardiac-stethoscope.svg | contained | (spare) | -
Injection Syringe | /images/icons/site-wide-mixed-icons-16-injection-syringe.svg | contained | Services card 2 | -
Medical Clipboard | /images/icons/site-wide-mixed-icons-17-medical-clipboard.svg | contained | (spare) | -
Heart Beat | /images/icons/site-wide-mixed-icons-18-heart-beat.svg | contained | Services cards 1,4 | -
Grooming Bathtub | /images/icons/site-wide-mixed-icons-19-grooming-bathtub.svg | contained | Services banner 4, Services card 5 | -
Group Members | /images/icons/site-wide-mixed-icons-20-group-members.svg | contained | Why feature 1, Stat 1 | -
Simple Paw | /images/icons/site-wide-mixed-icons-21-simple-paw.svg | contained | Why feature 4, Stat 2 | -
Simple Heart | /images/icons/site-wide-mixed-icons-22-simple-heart.svg | contained | Stat 3 | -
Map Marker | /images/icons/site-wide-mixed-icons-23-map-marker.svg | contained | Footer location | -
Contact Mail | /images/icons/site-wide-mixed-icons-24-contact-mail.svg | contained | Footer email | -
Business Clock | /images/icons/site-wide-mixed-icons-25-business-clock.svg | contained | Footer hours | -
Facebook Icon | /images/icons/site-wide-mixed-icons-26-facebook-icon.svg | contained | Footer social | -
Instagram Icon | /images/icons/site-wide-mixed-icons-27-instagram-icon.svg | contained | Footer social | -
Testimonial Pomeranian (placeholder) | TODO: /images/testimonial-pomeranian.jpg | contained | Testimonial photo | TODO: source asset from live site or stock, circular crop

## Component breakdown
Component | Props (TS shape, inline) | Section
--- | --- | ---
Container | { children: React.ReactNode; className?: string } | Shared wrapper
Button | { variant: "solid" | "outline"; size?: "md" | "lg"; href?: string; onClick?: () => void; leftIconSrc?: string; children: React.ReactNode } | Shared
Icon | { src: string; alt: string; className?: string } | Shared
Logo | { src: string; alt?: string } | Header, Footer
TopBar | { data: ContactBarData } | Top Contact Bar
Header | { nav: NavData } | Primary Navigation Header
Hero | { data: HeroData } | Hero Section
ServicesBanner | { data: ServicesBannerData } | Interactive Services Banner
WhyChoose | { data: WhyData } | “Why Choose Us”
Card | { children: React.ReactNode; className?: string } | Services Grid
ServicesGrid | { data: ServicesGridData } | Our Services Grid
RatingStars | { count: number; colorClass?: string } | Testimonial
StatBlock | { icon: string; value: string; label: string } | Statistics
TestimonialStats | { data: TestimonialStatsData } | Testimonial & Statistics
FooterMain | { data: FooterData } | Footer (Main)
FooterLegal | { data: FooterData["legal"] } | Footer (Legal/Bottom)

## Build steps
1. Root and tokens — in app/app.css add § Design tokens. In app/root.tsx add Google Fonts for Poppins and Inter via links export; set body classes to font-body text-foreground bg-background and enable :focus-visible styles (see § Accessibility).

2. Top Contact Bar — render <TopBar data={contactBar} /> (data: app/data/contact-bar.ts). Full-width strip with bg-accent text-white, three flex items spaced L/C/R, icons white 18px.

3. Header — render <Header nav={nav} /> (data: app/data/nav.ts). White background, Container with logo left (<Logo /> using Sobichos logo per § Assets), centered nav items uppercase small text-foreground, caret where specified, right-side outline call Button with crimson stroke and phone icon.

4. Hero — render <Hero data={hero} /> (data: app/data/hero.ts, assets: Hero Dogs and Cat Composite). Two columns: left text with segmented headline (accent segments in text-accent, default in text-foreground), subcopy muted, two pill Buttons (primary bg-primary text-white; secondary outline-primary with phone icon). Feature highlights: three items in a row with icon+twin lines, tones drive icon/color (primary → text-primary, accent → text-accent). Right image large; add soft yellow blob backgrounds via absolutely positioned rounded elements behind the image; small decorative stroke shapes via ::before/::after (accent borders).

5. Interactive Services Banner — render <ServicesBanner data={servicesBanner} /> (data: app/data/services-banner.ts). Crimson rounded container (-mt overlap with hero) inside Container; four equal clickable zones separated by subtle dividers (border-white/20). Each zone: white circle with colored icon, white title+desc, small right caret (can reuse a › character styled or a tiny inline SVG).

6. Why Choose Us — render <WhyChoose data={why} /> (data: app/data/why.ts, assets: Veterinarian and Dog). Two columns with kicker (uppercase text-accent), headline with trailing word in text-primary, four bullet features with mustard-toned icons (use text-accent) and body text, outline Button in primary.

7. Our Services Grid — render <ServicesGrid data={servicesGrid} /> (data: app/data/services-grid.ts). Section wrapper with faint rounded border or subtle shadow. Header left: kicker (text-accent) + headline (foreground + primary word). Header right: outline primary Button. Cards row: five <Card />s with rounded corners, subtle border border, and shadow-card; icon inside circle — variant solid uses bg-primary text-white; outline uses ring-1 ring-primary/40 text-primary. Each card has title, small desc, and a thin caret right aligned at bottom.

8. Testimonial & Statistics — render <TestimonialStats data={testimonialStats} /> (data: app/data/testimonial-stats.ts). Highly rounded container with bg-surface. Left: circle photo (use placeholder if missing), five accent stars via <RatingStars />, italic quote text-foreground, author in text-primary. Right: three <StatBlock /> evenly spaced — icon in accent outline, number in text-primary font-heading text-3xl+, label small muted.

9. Footer (Main) — render <FooterMain data={footer} /> (data: app/data/footer.ts, assets: logo + socials + footer icons). Four columns with subtle vertical separators (border-border). Typography per design: titles small uppercase text-primary; links/text in text-foreground/muted.

10. Footer (Legal) — render <FooterLegal data={footer.legal} />. Full-width crimson bar with centered white text: top row of links separated by pipes, bottom row notice.

11. Route — in app/routes/home.tsx import and stack sections inside <main>. Wrap content sections with <Container /> where indicated (everything except full-width strips and colored background blocks).

## Interactivity
- Header: mobile menu toggle below md — collapse center nav into a hamburger button; tapping toggles a slide-down panel with the same nav items stacked.
- Buttons: hover/active states — solid: bg-primary → bg-primary-hover; outline: ring-primary text-primary with bg-primary/5 on hover.
- Services Banner zones: hover lift (translate-y-[-2px]) and bg-primary-hover/95 for subtle emphasis; cursor-pointer and focus-visible:ring-2 ring-white/60 on the zone.
- Cards: hover shadow intensifies (shadow-soft → shadow-card) and translate-y-[-2px]; caret shifts slightly right.

## Responsive behavior
- Breakpoints: sm (640), md (768), lg (1024), xl (1280).
- Top bar: stacks into two rows below md or switches to centered single-column with the three items in a vertical stack.
- Header: below md show logo left + hamburger right; hide inline nav; call button becomes an icon-only or stays inside the menu panel.
- Hero: stacks below lg — image moves below text; buttons wrap; feature highlights become a 1x3 vertical list below md, 3-up at md+.
- Services banner: becomes a vertical 4-item stack below md; 2x2 grid at md; 4-up row at lg+.
- Why Choose: stacks image under text below lg; kicker and headline keep spacing consistent.
- Services grid: at sm use horizontal scroll-snap row (cards min-w-[75%]); at md use grid with 2–3 columns; at lg show all 5 across with gaps.
- Testimonial & stats: stack blocks vertically below md; stats grid becomes 3 columns at md+.
- Footer: 1 column at sm, 2 columns at md, 4 columns at lg+.

## Accessibility
- Alt text: use the asset_name from § Assets for <img alt>. Decorative icons receive aria-hidden="true" and empty alt.
- Landmarks: <header>, <main>, <footer>; one <h1> in the Hero; subsequent sections use <h2>/<h3> in order.
- Focus: use :focus-visible with ring-2 ring-accent offset-2 for interactive elements.
- Contrast: body text ≥ 4.5:1; large headings ≥ 3:1; verify crimson/white and mustard/white meet contrast.
- Keyboard: mobile menu and banner zones must be keyboard operable; use button semantics and proper aria-expanded on the hamburger.

## Verification
- Visual: side-by-side compare against mockup; spacing, colors, radii, and iconography match.
- Assets: every /images/* and /images/icons/* referenced resolves (no 404s); placeholder testimonial photo either sourced or tracked as TODO.
- Type: npm run typecheck passes clean.
- Build: npm run build produces ./build/server/; npm run start serves without runtime errors.
- Responsive: manual pass at 375px and 768px for overflow, scroll-snap, menu behavior.
- A11y: keyboard tab order, visible focus, heading order, alt text coverage.

## Open questions
- Header dropdowns: CLÍNICA and SERVIÇOS show carets; confirm if real dropdown menus are required and provide items if so.
- Logo: a vector SVG would improve crispness; provide if available to replace the PNG.
- Testimonial photo: provide the Pomeranian headshot or approve using a stock placeholder cropped to a circle.