import { Link } from 'react-router-dom'

export default function ProductCard({ product, showDesc = true }) {
  const { name, category, price, desc, icon: Icon, tone } = product
  return (
    <article className="card group flex flex-col overflow-hidden">
      <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${tone}`}>
        <div className="grid-bg absolute inset-0 opacity-60" />
        <Icon size={52} strokeWidth={1.2} className="relative text-accent-light transition-transform duration-500 group-hover:scale-110" />
        <span className="chip absolute left-3 top-3 !bg-ink/70">{category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[15px] font-semibold leading-snug text-text">{name}</h3>
        {showDesc && <p className="mt-2 text-[13px] leading-relaxed text-muted">{desc}</p>}
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="font-mono text-sm text-text">{price}</span>
          <Link
            to={`/contact?subject=${encodeURIComponent('Order enquiry')}&item=${encodeURIComponent(name)}`}
            className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-soft transition-colors hover:border-accent hover:text-text"
          >
            Order by enquiry
          </Link>
        </div>
      </div>
    </article>
  )
}
