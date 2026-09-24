import PageHeader from './PageHeader'
import { POLICY_DATE } from '../company'

export default function LegalPage({ title, children }) {
  return (
    <div>
      <PageHeader eyebrow="Legal" title={title}>Last updated: {POLICY_DATE}</PageHeader>
      <section className="py-16 lg:py-20">
        <div className="wrap">
          <div className="legal mx-auto max-w-3xl">{children}</div>
        </div>
      </section>
    </div>
  )
}
