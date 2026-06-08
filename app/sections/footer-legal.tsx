export default function FooterLegal({
  data,
}: {
  data: { links: string[]; notice: string };
}) {
  return (
    <div className="bg-primary text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-white/90">
          {data.links.map((link, i) => (
            <span key={i} className="flex items-center gap-2">
              <a href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2">
                {link}
              </a>
              {i < data.links.length - 1 && (
                <span className="text-white/40" aria-hidden="true">|</span>
              )}
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs text-white/70">{data.notice}</p>
      </div>
    </div>
  );
}
