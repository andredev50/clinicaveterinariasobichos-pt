import Container from "~/components/container";
import Icon from "~/components/icon";
import type { ContactBarData } from "~/data/contact-bar";

export default function TopBar({ data }: { data: ContactBarData }) {
  const items = [data.left, data.center, data.right];
  return (
    <div className="bg-accent text-white">
      <Container className="flex flex-col items-center gap-2 py-2 md:flex-row md:justify-between md:gap-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <Icon src={item.icon} alt="" className="h-4.5 w-4.5" />
            {item.href ? (
              <a href={item.href} className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2">
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
        ))}
      </Container>
    </div>
  );
}
