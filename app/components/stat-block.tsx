import Icon from "~/components/icon";

export default function StatBlock({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent">
        <Icon src={icon} alt="" className="h-6 w-6 text-accent" />
      </div>
      <div className="font-heading text-3xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}
