import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { COMPANY } from '../company'
import { services, process, stack, products } from '../data'
import ProductCard from '../components/ProductCard'

const facts = [
  { k: 'Company No.',   v: COMPANY.number },
  { k: 'Incorporated',  v: COMPANY.incorporated },
  { k: 'Registered in', v: COMPANY.jurisdiction },
  { k: 'Office',        v: 'Fitzrovia, London W1T' },
]

function DeployWindow() {
  const lines = [
    ['$', 'git push origin main', 'text-soft'],
    ['›', 'Installing dependencies', 'text-muted'],
    ['✓', 'Lint and type checks passed', 'text-cyan'],
    ['✓', 'Unit tests passed', 'text-cyan'],
    ['✓', 'Lighthouse: performance 98 · a11y 100', 'text-cyan'],
    ['›', 'Deploying to production', 'text-muted'],
    ['●', 'Live at https://your-product.co.uk', 'text-accent-light'],
  ]
  return (
    <div className="rise card overflow-hidden !bg-panel shadow-[0_40px_120px_-40px_rgba(139,108,255,0.45)]" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-muted">pipeline — release</span>
      </div>
      <div className="space-y-2.5 p-5 font-mono text-[12.5px] leading-relaxed sm:p-6">
        {lines.map(([sym, text, color], i) => (
          <p key={i} className={`flex gap-3 ${color}`}>
            <span className="w-3 shrink-0 text-center">{sym}</span>
            <span className="break-all">{text}</span>
          </p>
        ))}
        <p className="flex gap-3 text-muted"><span className="w-3" /><span className="inline-block h-4 w-2 animate-pulse bg-accent-light/80" /></p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent/25 blur-[140px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan/10 blur-[120px]" />

        <div className="wrap relative grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-32">
          <div>
            <p className="rise chip mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Software studio · Fitzrovia, London
            </p>
            <h1 className="rise h-display text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.2rem]" style={{ animationDelay: '60ms' }}>
              Dependable software for{' '}
              <span className="bg-gradient-to-r from-accent-light via-accent to-cyan bg-clip-text text-transparent">growing businesses.</span>
            </h1>
            <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-soft" style={{ animationDelay: '120ms' }}>
              {COMPANY.brand} designs, builds and maintains web platforms, cloud infrastructure and digital products,
              with clear scopes, fixed milestones and code you own.
            </p>
            <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '180ms' }}>
              <Link to="/contact" className="btn-primary">Book a discovery call <ArrowRight size={16} /></Link>
              <Link to="/services" className="btn-ghost">Explore services</Link>
            </div>
          </div>
          <DeployWindow />
        </div>
      </section>

      {/* Company facts */}
      <section className="border-y border-line bg-panel/60">
        <div className="wrap grid grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.k} className={`py-7 lg:py-8 ${i % 2 === 0 ? 'pr-4' : 'pl-4 lg:pl-8'} ${i > 1 ? 'border-t border-line lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l lg:border-line lg:pl-8' : ''}`}>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{f.k}</p>
              <p className="mt-2 font-display text-lg font-medium text-text">{f.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow mb-4">What we do</p>
              <h2 className="h-display max-w-xl text-3xl sm:text-4xl">Four disciplines, one accountable team.</h2>
            </div>
            <Link to="/services" className="link-arrow">All services <ArrowRight size={15} /></Link>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {services.map(({ id, icon: Icon, title, summary, points }) => (
              <Link key={id} to={`/services#${id}`} className="card group p-7 lg:p-9">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-raised text-accent-light">
                    <Icon size={20} />
                  </span>
                  <ArrowUpRight size={18} className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-text">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-soft">{summary}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {points.map(p => (
                    <li key={p} className="flex gap-2 text-[13px] text-muted">
                      <Check size={14} className="mt-0.5 shrink-0 text-cyan" />{p}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-panel/50 py-24 lg:py-32">
        <div className="wrap">
          <p className="eyebrow mb-4">How we work</p>
          <h2 className="h-display max-w-2xl text-3xl sm:text-4xl">A predictable process, from first call to launch day.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {process.map(s => (
              <div key={s.step} className="bg-panel p-7">
                <p className="font-mono text-sm text-accent-light">{s.step}</p>
                <h3 className="mt-8 font-display text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Technologies we work with</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Store preview */}
      <section className="py-24 lg:py-32">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow mb-4">The store</p>
              <h2 className="h-display text-3xl sm:text-4xl">Desk and digital essentials.</h2>
              <p className="mt-4 max-w-lg text-soft">A small, considered range of workspace accessories and the templates we rely on ourselves.</p>
            </div>
            <Link to="/shop" className="link-arrow">Browse the store <ArrowRight size={15} /></Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[products[0], products[4], products[6], products[9]].map(p => <ProductCard key={p.id} product={p} showDesc={false} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-[#1B1640] via-panel to-panel p-10 text-center lg:p-16">
            <div className="grid-bg absolute inset-0 opacity-50" />
            <div className="relative">
              <h2 className="h-display mx-auto max-w-2xl text-3xl sm:text-4xl">Have a project in mind?</h2>
              <p className="mx-auto mt-4 max-w-lg text-soft">
                Tell us what you are planning. We reply to every enquiry within one working day.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">Start a conversation <ArrowRight size={16} /></Link>
                <a href={`mailto:${COMPANY.email}`} className="btn-ghost">{COMPANY.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
