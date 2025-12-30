import { NavLink, Link } from 'react-router-dom'
import { BrandLogo } from './BrandLogo'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/model', label: 'The App' },
  { to: '/feasibility', label: 'Feasibility' },
  { to: '/impact', label: 'Impact' },
  { to: '/team', label: 'Team' },
] as const

export function BrandStrip() {
  return (
    <header className="brandStrip" role="banner">
      <div className="container brandStripInner">
        <Link to="/" className="brandLockup" aria-label="GrandGuardian: Home">
          <BrandLogo className="logoMark" />
          <div className="brandText">
            <div className="brandName">GrandGuardian</div>
            <div className="brandTagline">A Voice of Love for the Elderly Powered by AI.</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'navLink navLinkActive' : 'navLink')}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="brandActions">
          <Link to="/model" className="button buttonPrimary">
            See the App
          </Link>
        </div>
      </div>
      <div className="brandRim" aria-hidden="true" />
    </header>
  )
}


