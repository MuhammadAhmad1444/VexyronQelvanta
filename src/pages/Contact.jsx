import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { COMPANY } from '../company'

const subjects = ['New project', 'Maintenance & support', 'Order enquiry', 'Existing order', 'Partnership', 'General enquiry']

export default function Contact() {
  const [params] = useSearchParams()
  const item = params.get('item')
  const [form, setForm] = useState({
    name: '', email: '', company: '',
    subject: subjects.includes(params.get('subject')) ? params.get('subject') : '',
    message: item ? `I would like to order: ${item}\nQuantity: 1\nDelivery postcode: ` : '',
  })
  const [opened, setOpened] = useState(false)

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  // No backend: compose the enquiry in the visitor's own email app.
  const handleSubmit = e => {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company && `Company: ${form.company}`,
      '',
      form.message,
    ].filter(v => v !== false && v !== '').join('\n')
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`${form.subject} — ${form.name}`)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  const details = [
    { icon: MapPin, title: 'Office',    body: COMPANY.addressLines.map(l => <span key={l} className="block">{l}</span>) },
    { icon: Mail,   title: 'Email',     body: <a href={`mailto:${COMPANY.email}`} className="text-accent-light hover:underline">{COMPANY.email}</a> },
    { icon: Phone,  title: 'Telephone', body: <a href={COMPANY.phoneHref} className="hover:text-text">{COMPANY.phone}</a> },
    { icon: Clock,  title: 'Hours',     body: COMPANY.hours.map(l => <span key={l} className="block">{l}</span>) },
  ]

  return (
    <div>
      <PageHeader eyebrow="Contact" title="Let's talk about your project.">
        Send us a short description of what you need. We reply to every enquiry within one working day.
      </PageHeader>

      <section className="py-20 lg:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-4">
            {details.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card flex gap-4 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-raised text-accent-light">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{title}</p>
                  <div className="mt-1.5 text-sm leading-relaxed text-soft">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="card space-y-6 p-7 lg:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="field-label">Full name *</label>
                <input id="name" required value={form.name} onChange={set('name')} className="field" placeholder="Jane Smith" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="email" className="field-label">Email *</label>
                <input id="email" type="email" required value={form.email} onChange={set('email')} className="field" placeholder="jane@company.co.uk" autoComplete="email" />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="field-label">Company</label>
                <input id="company" value={form.company} onChange={set('company')} className="field" placeholder="Optional" autoComplete="organization" />
              </div>
              <div>
                <label htmlFor="subject" className="field-label">Subject *</label>
                <select id="subject" required value={form.subject} onChange={set('subject')} className="field">
                  <option value="">Select a subject</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="field-label">Message *</label>
              <textarea id="message" required rows={6} value={form.message} onChange={set('message')} className="field resize-y" placeholder="What are you looking to build, and by when?" />
            </div>
            <p className="text-xs leading-relaxed text-muted">
              Submitting opens your email app with this message addressed to {COMPANY.email}. See our{' '}
              <Link to="/privacy-policy" className="text-accent-light hover:underline">Privacy Policy</Link>.
            </p>
            <button type="submit" className="btn-primary w-full">Send enquiry <Send size={15} /></button>
            {opened && (
              <p role="status" className="rounded-lg border border-cyan/30 bg-cyan/[0.06] p-4 text-sm text-soft">
                Your email app should now be open with the message ready to send. If nothing happened, email us
                directly at <a href={`mailto:${COMPANY.email}`} className="text-accent-light hover:underline">{COMPANY.email}</a>.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
