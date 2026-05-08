export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-[family-name:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  );
}
