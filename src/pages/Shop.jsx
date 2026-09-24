import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Truck, RotateCcw, ShieldCheck, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import { products, productCategories } from '../data'
import { COMPANY } from '../company'

const assurances = [
  { icon: Truck,       title: 'UK dispatch in 1–3 working days', body: 'Digital items are emailed the same working day.', link: '/shipping-policy' },
  { icon: RotateCcw,   title: '14-day right to cancel',          body: 'For physical goods, under UK consumer law.',       link: '/refund-policy' },
  { icon: ShieldCheck, title: 'Clear terms',                     body: 'GBP pricing, VAT shown on every invoice.',          link: '/terms-of-service' },
]

export default function Shop() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <div>
      <PageHeader eyebrow="Store" title="Desk and digital essentials.">
        Workspace accessories and practical templates for people who build things. Prices include VAT where applicable.
      </PageHeader>

      <div className="border-b border-line bg-accent/[0.07]">
        <p className="wrap py-3 text-center text-sm text-soft">
          Online checkout is being set up. For now, choose <strong className="text-text">Order by enquiry</strong> and we
          will email you an invoice and secure payment link.
        </p>
      </div>

      <section className="py-14 lg:py-20">
        <div className="wrap">
          <div className="mb-10 flex flex-wrap items-center gap-2">
            {productCategories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${active === c ? 'border-accent bg-accent text-white' : 'border-line text-soft hover:border-muted hover:text-text'}`}
              >
                {c}
              </button>
            ))}
            <span className="ml-auto font-mono text-xs text-muted">{visible.length} items</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel/50 py-16">
        <div className="wrap grid gap-4 md:grid-cols-3">
          {assurances.map(({ icon: Icon, title, body, link }) => (
            <Link key={title} to={link} className="card group p-6">
              <Icon size={20} className="text-cyan" />
              <p className="mt-4 font-display font-semibold text-text">{title}</p>
              <p className="mt-1 text-sm text-muted">{body}</p>
              <span className="link-arrow mt-4 !text-xs">Read policy <ArrowRight size={13} /></span>
            </Link>
          ))}
        </div>
        <p className="wrap mt-8 text-sm text-muted">
          Questions about a product or a bulk order? Email <a href={`mailto:${COMPANY.email}`} className="text-accent-light hover:underline">{COMPANY.email}</a>.
        </p>
      </section>
    </div>
  )
}
