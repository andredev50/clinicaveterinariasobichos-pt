import Container from "~/components/container";
import RatingStars from "~/components/rating-stars";
import StatBlock from "~/components/stat-block";
import type { TestimonialStatsData } from "~/data/testimonial-stats";

export default function TestimonialStats({ data }: { data: TestimonialStatsData }) {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 rounded-[1.5rem] bg-surface p-6 md:grid-cols-2 md:gap-10 md:p-10 lg:p-12">
          {/* Testimonial */}
          <div className="flex flex-col gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-heading text-2xl font-bold">
              MS
            </div>
            <RatingStars count={data.testimonial.stars} />
            <blockquote className="text-base italic text-foreground md:text-lg">
              "{data.testimonial.quote}"
            </blockquote>
            <div className="text-sm font-semibold text-primary">
              {data.testimonial.author}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
            {data.stats.map((stat, i) => (
              <StatBlock key={i} icon={stat.icon} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
