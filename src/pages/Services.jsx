import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { services, process } from '../data'

const engagements = [
  { title: 'Fixed-scope project', desc: 'A defined deliverable with an agreed price and milestone payments. Best for new sites, apps and rebuilds.' },
  { title: 'Monthly retainer',    desc: 'A set number of days each month for ongoing development, maintenance and support.' },
  { title: 'Time & materials',    desc: 'Flexible, day-rate engagements for discovery, audits or work where the scope is still evolving.' },
]

export default function Services() {
  return (
    <div>
      <PageHeader eyebrow="Services" title="Design, engineering and support under one roof.">
        We work with start-ups, small businesses and in-house teams who need a reliable technical partner,
        whether for a single build or for the long term.
      </PageHeader>

      <section className="py-20 lg:py-28">
        <div className="wrap space-y-4">
          {services.map(({ id, icon: Icon, title, summary, points }, i) => (
            <div key={id} id={id} className="card scroll-mt-28 grid gap-8 p-7 lg:grid-cols-[auto_1fr_1fr] lg:gap-12 lg:p-10">
              <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-raised text-accent-light">
                  <Icon size={22} />
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-text">{title}</h2>
                <p className="mt-3 leading-relaxed text-soft">{summary}</p>
              </div>
              <ul className="space-y-3">
                {points.map(p => (
                  <li key={p} className="flex gap-3 text-sm text-soft">
                    <Check size={16} className="mt-0.5 shrink-0 text-cyan" />{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel/50 py-20 lg:py-28">
        <div className="wrap">
          <p className="eyebrow mb-4">Ways to work together</p>
          <h2 className="h-display max-w-2xl text-3xl sm:text-4xl">Engagement models</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {engagements.map(e => (
              <div key={e.title} className="card p-7">
                <h3 className="font-display text-lg font-semibold text-text">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{e.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Every engagement starts with a written proposal and a statement of work. Prices are quoted in GBP.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Process</p>
            <h2 className="h-display text-3xl sm:text-4xl">What happens after you get in touch</h2>
            <p className="mt-5 max-w-md leading-relaxed text-soft">
              We keep things simple and transparent. You always know what is being worked on, what it costs and what comes next.
            </p>
            <Link to="/contact" className="btn-primary mt-9">Request a proposal <ArrowRight size={16} /></Link>
          </div>
          <ol className="space-y-4">
            {process.map(s => (
              <li key={s.step} className="card flex gap-5 p-6">
                <span className="font-mono text-sm text-accent-light">{s.step}</span>
                <div>
                  <h3 className="font-display font-semibold text-text">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
