export default function Logo({
  src,
  alt = "Sóbichos",
}: {
  src: string;
  alt?: string;
}) {
  return (
    <a href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
      <img src={src} alt={alt} className="h-10 w-auto md:h-12" />
    </a>
  );
}
