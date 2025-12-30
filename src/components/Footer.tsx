import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="footerBrand">
            <span className="footerBrandName">GrandGuardian</span>
            <span className="footerDot" aria-hidden="true">
              ·
            </span>
            <span className="footerBrandLine">A concept for dignified, calm senior support</span>
          </div>
          <div className="footerNote">© {new Date().getFullYear()} GrandGuardian. Concept website.</div>
        </div>
        <div className="footerRight" aria-label="Footer links">
          <Link className="footerLink" to="/model">
            Model
          </Link>
          <Link className="footerLink" to="/feasibility">
            Feasibility
          </Link>
          <Link className="footerLink" to="/impact">
            Impact
          </Link>
          <Link className="footerLink" to="/team">
            Team
          </Link>
        </div>
      </div>
    </footer>
  )
}


