import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../company'

const KEY = COMPANY.consentKey

function readConsent() {
  try { return localStorage.getItem(KEY) } catch { return 'unavailable' }
}

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!readConsent()) {
      const t = setTimeout(() => setShow(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const choose = value => {
    try { localStorage.setItem(KEY, value) } catch { /* storage blocked */ }
    setShow(false)
  }

  if (!show) return null

  return (
    <div role="dialog" aria-label="Cookie preferences" className="rise fixed bottom-4 left-4 right-4 z-[100] sm:left-auto sm:max-w-sm">
      <div className="rounded-2xl border border-line bg-raised p-5 shadow-2xl shadow-black/50">
        <p className="text-sm leading-relaxed text-soft">
          This site only uses storage that is essential for it to work. See our{' '}
          <Link to="/cookie-policy" className="text-accent-light hover:underline">Cookie Policy</Link>.
        </p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => choose('essential_only')} className="btn-ghost flex-1 !py-2">Essential only</button>
          <button onClick={() => choose('accepted')} className="btn-primary flex-1 !py-2">Accept</button>
        </div>
      </div>
    </div>
  )
}
