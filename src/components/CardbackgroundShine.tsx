export function CardBackgroundShine({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex w-full max-w-[350px] animate-shine items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(110deg,#060d16,45%,#1e2631,55%,#060d16)] bg-[length:200%_100%] px-4 py-5 text-sm transition-colors">
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
