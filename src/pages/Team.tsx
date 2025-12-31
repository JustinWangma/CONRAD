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
  { name: 'Suri Li', role: 'Designer & Workflow Manager', initials: 'SL', note: '' },
  { name: 'Jonathan Shan', role: 'Developer & Outreach Lead', initials: 'JS', note: ' ' },
  { name: 'Justin Tang', role: 'Business Strategist & Operations', initials: 'JT', note: ' ' },
  { name: 'Justin Wang', role: 'Developer & Architect', initials: 'JW', note: ' ' },
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
            <div className="eyebrow">Page 5 ·  Team</div>
            <h1 className="h1">Who we are</h1>
            <p className="lead">
              A Voice of Love for the Elderly Powered by AI.
            </p>
            <div className="introLinks">
              <Link className="textLink" to="/impact ">
                ← Back to the Impact
              </Link>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <PlaceholderImage label="Team photo placeholder" sublabel="Warm community moment" aspect="21/9" />
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