import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, KeyRound, MessageSquare } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { COMPANY } from '../company'

const principles = [
  { icon: Target,        title: 'Scope before code',   desc: 'We agree what success looks like, in writing, before we start building.' },
  { icon: Eye,           title: 'Work in the open',    desc: 'Shared boards, staging links and regular demos. No surprises on invoices.' },
  { icon: KeyRound,      title: 'You own everything',  desc: 'Source code, designs, domains and accounts are yours from day one.' },
  { icon: MessageSquare, title: 'Plain English',       desc: 'We explain technical trade-offs clearly so you can make informed decisions.' },
]

const corporate = [
  ['Registered name',   COMPANY.name],
  ['Company number',    COMPANY.number],
  ['Incorporated',      COMPANY.incorporated],
  ['Company type',      'Private company limited by shares'],
  ['Registered in',     COMPANY.jurisdiction],
  ['Registered office', COMPANY.address],
  ['Email',             COMPANY.email],
  ['Telephone',         COMPANY.phone],
]

export default function About() {
  return (
    <div>
      <PageHeader eyebrow="About" title="A new studio with a simple idea: build it properly.">
        {COMPANY.brand} is a software and digital product company based in Fitzrovia, London.
      </PageHeader>

      <section className="py-20 lg:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div className="space-y-5 text-[17px] leading-relaxed text-soft">
            <h2 className="h-display text-3xl">Our story</h2>
            <p>
              {COMPANY.name} was incorporated in {COMPANY.jurisdiction} on {COMPANY.incorporated}. We set the company up
              to give smaller organisations access to the kind of careful engineering and design that is usually reserved for
              large budgets.
            </p>
            <p>
              Our work covers web platforms, cloud infrastructure, product design and ongoing support. Alongside client work
              we run a small online store of workspace accessories and digital templates, a practical way of using the same
              tools and standards we recommend to our clients.
            </p>
            <p>
              We are a young company, and we would rather earn trust through clear proposals and good work than through big
              claims. If you would like to talk about a project, we would be glad to hear from you.
            </p>
            <Link to="/contact" className="btn-primary !mt-9">Get in touch <ArrowRight size={16} /></Link>
          </div>

          <div className="card h-fit p-7 lg:p-9">
            <p className="eyebrow mb-6">Company information</p>
            <dl className="divide-y divide-line">
              {corporate.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-[150px_1fr] sm:gap-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted sm:pt-0.5">{k}</dt>
                  <dd className="text-sm text-text">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href={`https://find-and-update.company-information.service.gov.uk/company/${COMPANY.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-6"
            >
              View on Companies House <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel/50 py-20 lg:py-28">
        <div className="wrap">
          <p className="eyebrow mb-4">Principles</p>
          <h2 className="h-display text-3xl sm:text-4xl">How we choose to work</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-7">
                <Icon size={20} className="text-accent-light" />
                <h3 className="mt-5 font-display font-semibold text-text">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
