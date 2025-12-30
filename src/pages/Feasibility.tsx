import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../components/PlaceholderImage'
import { Reveal } from '../components/Reveal'

export function FeasibilityPage() {
  return (
    <>
      <Reveal as="section" className="pageIntro" delayMs={0}>
        <div className="container introGrid">
          <Reveal delayMs={40}>
            <div className="eyebrow">Page 3 · Feasibility</div>
            <h1 className="h1">Building the GrandGuardian app: can it work?</h1>
            <p className="lead">
              Yes—because we’re building an app, not a fantasy: a senior-facing companion experience, a family space for
              reassurance, and a privacy-first AI layer that uses consented voice to deliver warmth, support, and safety.
            </p>
            <div className="introLinks">
              <Link className="textLink" to="/impact">
                Next: Impact + Team →
              </Link>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <PlaceholderImage
              label="App architecture placeholder"
              sublabel="Senior app · Family app · Voice library · AI care logic"
              aspect="21/9"
            />
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delayMs={0}>
        <div className="container grid2">
          <Reveal className="card" delayMs={40}>
            <h2 className="h2">What exists today (the app enablers)</h2>
            <p className="p">The core app ingredients already exist and can be assembled responsibly.</p>
            <ul className="list">
              <li>
                <strong>Mobile platforms:</strong> iOS/Android notifications, permissions, on-device capabilities
              </li>
              <li>
                <strong>Voice and audio:</strong> recording, playback, and high-quality speech pipelines
              </li>
              <li>
                <strong>AI tooling:</strong> modern inference + safety layers + evaluation practices
              </li>
              <li>
                <strong>Secure backends:</strong> authentication, encrypted storage, audit logs, access controls
              </li>
            </ul>
          </Reveal>

          <Reveal className="card" delayMs={120}>
            <h2 className="h2">What we build first (MVP app)</h2>
            <p className="p">
              Not everything. A focused first release that proves the hardest requirement: the app feels supportive,
              safe, and non-intrusive in daily life.
            </p>
            <div className="callout">
              <div className="calloutTitle">MVP goal</div>
              <div className="calloutBody">
                Prove that a loved voice + AI timing can reduce worry and increase confidence—without making seniors
                feel monitored.
              </div>
            </div>
            <ul className="list">
              <li>
                <strong>Senior app experience:</strong> simple, large-type, calm prompts with an easy “pause” control
              </li>
              <li>
                <strong>Family voice library:</strong> record short supportive messages (with consent + review)
              </li>
              <li>
                <strong>Care logic MVP:</strong> a small set of moments (routine drift, uncertainty, outside safety)
              </li>
              <li>
                <strong>Family reassurance space:</strong> simple check-in signals and escalation preferences
              </li>
            </ul>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section sectionTint" delayMs={0}>
        <div className="container grid2">
          <Reveal className="card" delayMs={40}>
            <h2 className="h2">How we validate the app</h2>
            <p className="p">
              We validate with real people, measuring whether the app feels like love—not noise.
            </p>
            <ul className="list">
              <li>
                <strong>Pilot plan:</strong> opt-in cohort; clear consent; simple “off” switch; support line for issues
              </li>
              <li>
                <strong>Primary outcomes:</strong> dignity (“felt respected”), confidence, caregiver reassurance
              </li>
              <li>
                <strong>Product metrics:</strong> retention, message helpfulness ratings, intervention acceptance rate
              </li>
              <li>
                <strong>Safety metrics:</strong> false escalation rate, missed-need reports, response time when escalated
              </li>
            </ul>
          </Reveal>

          <Reveal className="card" delayMs={120}>
            <h2 className="h2">App constraints + mitigations</h2>
            <div className="stackList">
              <div className="stackItem">
                <div className="stackTitle">Privacy + consent</div>
                <div className="stackBody">
                  Clear opt-in, visible indicators, easy pause, minimal retention, and role-based access for family.
                </div>
              </div>
              <div className="stackItem">
                <div className="stackTitle">False prompts / wrong timing</div>
                <div className="stackBody">
                  Human-in-the-loop tuning, “helpful / not helpful” feedback, and a bias toward quiet confirmation.
                </div>
              </div>
              <div className="stackItem">
                <div className="stackTitle">Adoption</div>
                <div className="stackBody">
                  Large type, low-friction onboarding, family-assisted setup, and predictable app behavior.
                </div>
              </div>
              <div className="stackItem">
                <div className="stackTitle">Security</div>
                <div className="stackBody">Encryption in transit/at rest, secure auth, and audit logs for access.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delayMs={0}>
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Roadmap to a real app</h2>
            <p className="muted">Four phases that move from prototype → pilot → launch.</p>
          </div>

          <div className="timeline" aria-label="Roadmap timeline">
            <Reveal as="div" className="timelineStep" delayMs={40}>
              <div className="timelineDot" />
              <div className="timelineCard">
                <div className="timelineTitle">Phase 1 · Prototype the voice experience</div>
                <div className="timelineBody">Record flows, tone tests, and a simple senior companion prototype.</div>
              </div>
            </Reveal>
            <Reveal as="div" className="timelineStep" delayMs={90}>
              <div className="timelineDot" />
              <div className="timelineCard">
                <div className="timelineTitle">Phase 2 · MVP app (senior + family)</div>
                <div className="timelineBody">Core app flows, consent controls, and the first care-logic moments.</div>
              </div>
            </Reveal>
            <Reveal as="div" className="timelineStep" delayMs={140}>
              <div className="timelineDot" />
              <div className="timelineCard">
                <div className="timelineTitle">Phase 3 · Pilot + safety evaluation</div>
                <div className="timelineBody">Cohort pilot, measure trust, tune timing, and harden privacy/security.</div>
              </div>
            </Reveal>
            <Reveal as="div" className="timelineStep" delayMs={190}>
              <div className="timelineDot" />
              <div className="timelineCard">
                <div className="timelineTitle">Phase 4 · Launch + partnerships</div>
                <div className="timelineBody">Community partners, broader rollout, and expansion of care moments.</div>
              </div>
            </Reveal>
          </div>

          <Reveal className="ctaRow" delayMs={220}>
            <Link to="/impact" className="button buttonPrimary">
              Impact + Team
            </Link>
            <Link to="/model" className="button buttonGhost">
              Back to the App
            </Link>
          </Reveal>
        </div>
      </Reveal>
    </>
  )
}


