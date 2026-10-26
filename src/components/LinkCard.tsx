type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-glass-border bg-glass px-6 py-4 text-center font-medium shadow-[0_4px_20px_-8px_var(--shadow-tint)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-glass-hover hover:shadow-[0_8px_24px_-8px_var(--shadow-tint)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
    </a>
  );
}
