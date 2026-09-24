import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import Logo from './Logo'
import { COMPANY } from '../company'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About',    path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Store',    path: '/shop' },
      { label: 'Contact',  path: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy',   path: '/privacy-policy' },
      { label: 'Terms of Service', path: '/terms-of-service' },
      { label: 'Refund Policy',    path: '/refund-policy' },
      { label: 'Shipping Policy',  path: '/shipping-policy' },
      { label: 'Cookie Policy',    path: '/cookie-policy' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-panel">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            A London software and digital product studio. We design, build and look after web platforms.
          </p>
        </div>

        {columns.map(col => (
          <div key={col.title}>
            <h4 className="eyebrow mb-5 !text-muted">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-soft transition-colors hover:text-text">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="eyebrow mb-5 !text-muted">Get in touch</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-3 text-soft">
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent-light" />{COMPANY.address}
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="flex gap-3 text-soft hover:text-text">
                <Mail size={15} className="mt-0.5 shrink-0 text-accent-light" />{COMPANY.email}
              </a>
            </li>
            <li>
              <a href={COMPANY.phoneHref} className="flex gap-3 text-soft hover:text-text">
                <Phone size={15} className="mt-0.5 shrink-0 text-accent-light" />{COMPANY.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-6 font-mono text-[11px] leading-relaxed text-muted md:flex-row md:justify-between">
          <p>
            {COMPANY.name} · Registered in {COMPANY.jurisdiction} · Company No. {COMPANY.number}<br />
            Registered office: {COMPANY.address}
          </p>
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
