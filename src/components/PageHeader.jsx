export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-80 w-[640px] max-w-full -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="wrap relative py-20 lg:py-28">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="h-display max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-base leading-relaxed text-soft lg:text-lg">{children}</p>}
      </div>
    </section>
  )
}
