export default function Icon({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <img src={src} alt={alt} className={`inline-block ${className ?? ""}`} aria-hidden="true" />;
}
