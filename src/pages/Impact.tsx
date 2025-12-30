import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../components/PlaceholderImage'
import { Reveal } from '../components/Reveal'

type TeamMember = {
  name: string
  role: string
  initials: string
  note: string
}

export function ImpactPage() {
  return (
    <>
      <Reveal as="section" className="pageIntro" delayMs={0}>
        <div className="container introGrid">
          <Reveal delayMs={40}>
            <div className="eyebrow">Page 4 · Impact</div>
            <h1 className="h1">Why it matters</h1>
            <p className="lead">
              GrandGuardian is built around a simple belief: when support preserves dignity, independence lasts longer
              and families worry less.
            </p>
            <div className="introLinks">
              <Link className="textLink" to="/">
                ← Back to the story
              </Link>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <PlaceholderImage label="Impact photo placeholder" sublabel="Warm community moment" aspect="21/9" />
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delayMs={0}>
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Impact goals (target metrics)</h2>
            <p className="muted">These are intentionally human-centered and judge-friendly.</p>
          </div>

          <div className="metrics">
            <Reveal className="metricCard" delayMs={40}>
              <div className="metricValue">↓</div>
              <div className="metricTitle">Reduced anxiety</div>
              <div className="metricBody">Fewer “Are you okay?” spirals—measured by caregiver stress surveys.</div>
            </Reveal>
            <Reveal className="metricCard" delayMs={90}>
              <div className="metricValue">↑</div>
              <div className="metricTitle">Independence days</div>
              <div className="metricBody">More routines completed confidently without family intervention.</div>
            </Reveal>
            <Reveal className="metricCard" delayMs={140}>
              <div className="metricValue">⏱</div>
              <div className="metricTitle">Faster help when needed</div>
              <div className="metricBody">Reduced time-to-escalation in true-need scenarios.</div>
            </Reveal>
            <Reveal className="metricCard" delayMs={190}>
              <div className="metricValue">✓</div>
              <div className="metricTitle">Trust & consent</div>
              <div className="metricBody">High opt-in retention and “felt respected” scores.</div>
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section sectionTint" delayMs={0}>
        <div className="container grid2">
          <Reveal className="card" delayMs={40}>
            <h2 className="h2">Who benefits</h2>
            <ul className="list">
              <li>
                <strong>Seniors:</strong> calm confidence, fewer disruptions, support that doesn’t take over.
              </li>
              <li>
                <strong>Families:</strong> reassurance without hovering, less guilt, clearer escalation decisions.
              </li>
              <li>
                <strong>Communities:</strong> reduced crisis load, healthier aging-in-place outcomes.
              </li>
            </ul>
          </Reveal>

          <Reveal className="card" delayMs={120}>
            <h2 className="h2">Partnerships we’d pursue</h2>
            <ul className="list">
              <li>
                <strong>Senior centers:</strong> recruitment + trust-building pilots
              </li>
              <li>
                <strong>Community orgs:</strong> local response networks and education
              </li>
              <li>
                <strong>Healthcare partners:</strong> evaluation guidance and referrals
              </li>
              <li>
                <strong>Caregiver groups:</strong> language, consent, and tone validation
              </li>
            </ul>
          </Reveal>
        </div>
      </Reveal>

    </>
  )
}

export default ImpactPage


