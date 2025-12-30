import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../components/PlaceholderImage'
import { Reveal } from '../components/Reveal'

type TeamMember = {
  name: string
  role: string
  initials: string
  note: string
}

const team: TeamMember[] = [
  { name: 'Your Name', role: 'Product + Story', initials: 'YN', note: 'Narrative, ethics, pilot design.' },
  { name: 'Teammate A', role: 'Care Model', initials: 'CA', note: 'Reasoning layer + evaluation metrics.' },
  { name: 'Teammate B', role: 'Engineering', initials: 'EB', note: 'Prototype build + integrations.' },
  { name: 'Teammate C', role: 'Partnerships', initials: 'PC', note: 'Community orgs + rollout planning.' },
]

const buildLog = [
  "We interviewed families about what “support” feels like vs “surveillance.”",
  'We designed an adoption flow focused on consent and dignity.',
  'We tested our concept model with peer feedback and refined language.',
  'We mapped constraints (privacy, false alarms, adoption, cost) into mitigations.',
  'We drafted a pilot plan oriented around trust, not just detection.',
]

export function TeamPage() {
  return (
    <>
      <Reveal as="section" className="pageIntro" delayMs={0}>
        <div className="container introGrid">
          <Reveal delayMs={40}>
            <div className="eyebrow">Page 4 · Impact + Team</div>
            <h1 className="h1">Why it matters, and why us</h1>
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

      <Reveal as="section" className="section" delayMs={0}>
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Team</h2>
            <p className="muted">Swap names, roles, and photos anytime. Placeholders are intentional.</p>
          </div>

          <div className="teamGrid">
            {team.map((m, idx) => (
              <Reveal className="teamCard" key={m.role} delayMs={40 + idx * 55}>
                <div className="avatar" aria-hidden="true">
                  {m.initials}
                </div>
                <div>
                  <div className="teamName">{m.name}</div>
                  <div className="teamRole">{m.role}</div>
                  <div className="teamNote">{m.note}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="spacer" />

          <div className="grid2">
            <Reveal className="card" delayMs={60}>
              <h2 className="h2">Build Log</h2>
              <p className="muted">
                Transparency without app mechanics—this “broadcasts what we’re working on” in a judge-friendly way.
              </p>
              <ul className="list">
                {buildLog.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="card" delayMs={120}>
              <h2 className="h2">Contact + updates</h2>
              <p className="p">
                Add a real email and an updates link when you’re ready. For now, these are safe placeholders.
              </p>
              <div className="contactBox">
                <div className="contactRow">
                  <div className="contactLabel">Email</div>
                  <div className="contactValue">
                    <a className="textLink" href="mailto:hello@grandguardian.example">
                      hello@grandguardian.example
                    </a>
                  </div>
                </div>
                <div className="contactRow">
                  <div className="contactLabel">Updates</div>
                  <div className="contactValue">
                    <a className="textLink" href="#" onClick={(e) => e.preventDefault()}>
                      Placeholder updates link
                    </a>
                  </div>
                </div>
              </div>

              <div className="ctaRow">
                <Link to="/model" className="button buttonSecondary">
                  Revisit the Model
                </Link>
                <Link to="/feasibility" className="button buttonGhost">
                  Feasibility
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="spacer" />

          <Reveal delayMs={140}>
            <PlaceholderImage
              label="Optional: team photo placeholder"
              sublabel="Warm, natural lighting · simple backgrounds"
              aspect="21/9"
            />
          </Reveal>
        </div>
      </Reveal>
    </>
  )
}


export default TeamPage