import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Store',    path: '/shop' },
  { label: 'About',    path: '/about' },
  { label: 'Contact',  path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const solid = scrolled || open

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${solid ? 'border-line bg-ink/85 backdrop-blur-xl' : 'border-transparent bg-transparent'}`}>
      <nav className="wrap flex h-16 items-center justify-between lg:h-[72px]">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(l => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/'}
              className={({ isActive }) =>
                `rounded-md px-3.5 py-2 text-sm transition-colors ${isActive ? 'bg-white/[0.06] text-text' : 'text-soft hover:text-text'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="btn-primary hidden !px-4 !py-2.5 lg:inline-flex">
          Start a project <ArrowUpRight size={15} />
        </Link>

        <button
          className="rounded-md p-2 text-soft hover:text-text lg:hidden"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="h-[calc(100vh-64px)] border-t border-line bg-ink lg:hidden">
          <div className="wrap flex flex-col gap-1 py-6">
            {navLinks.map(l => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.path === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3.5 font-display text-2xl ${isActive ? 'bg-white/[0.06] text-text' : 'text-soft'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-6">Start a project <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      )}
    </header>
  )
}
