import { Link } from 'react-router-dom'

export function Mark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="0.5" y="0.5" width="63" height="63" rx="14" fill="#131926" stroke="#1E2636" />
      <path d="M14 16h9l9 22 9-22h9L37 48h-10z" fill="#8B6CFF" />
      <path d="M41 16h9l-5 12h-9z" fill="#22D3EE" />
    </svg>
  )
}

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Vexyron Qelvanta home">
      <Mark />
      <span className="font-display text-[17px] font-semibold tracking-tight text-text">
        Vexyron<span className="font-normal text-muted"> Qelvanta</span>
      </span>
    </Link>
  )
}
