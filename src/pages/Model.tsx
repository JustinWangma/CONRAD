import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../components/PlaceholderImage'
import { Reveal } from '../components/Reveal'

function SystemDiagramImage() {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <PlaceholderImage
        label="System Diagram placeholder"
        sublabel="GrandGuardian app ecosystem"
        aspect="21/9"
      />
    )
  }

  return (
    <div className="systemDiagramWrapper">
      <img
        src="/images/system-diagram.png"
        alt="GrandGuardian app ecosystem diagram"
        className="systemDiagram"
        onError={() => setImageError(true)}
      />
    </div>
  )
}

type ModelStep = {
  title: string
  what: string
  how: string[]
  why: string
  imageLabel: string
  imageSublabel: string
  imageSrc?: string
}

const steps: ModelStep[] = [
  {
    title: 'Feature 1: Voice Cloning',
    what: 'Create a voice clone of a loved one so support sounds like love.',
    how: [
      'Create a voice clone using ElevenLabs through uploading the user’s loved one’s voice.',
      'Use the API (Voice ID) and connect to MIT App Inventor.',
      'Generate a real-time, personalized voice of a loved one based on their needs.',
    ],
    why: 'Providing reminders and sharing stories helps create long-lasting memories, reduce anxiety, and deepen family bonds.',
    imageLabel: 'Feature 1 placeholder',
    imageSublabel: 'Upload voice → Voice ID → real-time loved voice',
    imageSrc: '/images/feature1.png',
  },
  {
    title: 'Feature 2: Object Detector',
    what: 'Turn real-world obstacles into calm spoken alerts.',
    how: [
      'Connect the app to ChatGPT’s Image Classification.',
      'When the user opens the app, the phone’s camera continuously monitors the surroundings to detect obstacles in real time.',
      'Convert detections into spoken alerts in the familiar, comforting voice of a loved one using ElevenLabs voice cloning.',
    ],
    why: 'Real-time guidance in a trusted voice can reduce anxiety and improve confidence while moving through the world.',
    imageLabel: 'Feature 2 placeholder',
    imageSublabel: 'Camera → classification → loved-voice alert',
    imageSrc: '/images/feature2.png',
  },
  {
    title: 'Feature 3: Story Time',
    what: 'Read-aloud stories for emotional support, narrated in a loved one’s voice.',
    how: [
      'Users can select from 6 storytelling styles: Family, Memories, Animals, Kindness, Bedtime, and Shuffle.',
      'Stories are narrated in a loved one’s voice to provide comfort and connection.',
    ],
    why: 'Personalized storytelling brings comfort, joy, and emotional connection through familiar narration.',
    imageLabel: 'Feature 3 placeholder',
    imageSublabel: '6 styles · loved-voice narration',
    imageSrc: '/images/feature3.png',
  },
  {
    title: 'Feature 4: First Aid',
    what: 'A bystander-friendly emergency profile that can announce critical information fast.',
    how: [
      'Users set up First Aid information: name, age, gender, medical history, current medications (including medication locations), heart rate range, allergies, blood type, other notes, and emergency contacts.',
      'Bystanders press “Announce Information” to quickly announce the user’s information in case of an emergency.',
    ],
    why: 'When seconds matter, this helps people nearby respond with clarity and confidence.',
    imageLabel: 'Feature 4 placeholder',
    imageSublabel: 'Emergency profile → announce button',
    imageSrc: '/images/feature4.png',
  },
  {
    title: 'Feature 5: Reminders',
    what: 'Smart reminders for medications and events—spoken in a loved one’s voice.',
    how: [
      'Users can add, edit, and delete medication and event reminders.',
      'Text-to-speech uses a loved one’s voice to announce upcoming appointments, events, and medication intake times.',
    ],
    why: 'Turns routines into reassurance—supportive, familiar, and easy to follow.',
    imageLabel: 'Feature 5 placeholder',
    imageSublabel: 'Medication + events → loved-voice reminders',
    imageSrc: '/images/feature5.png',
  },
  {
    title: 'Feature 6: SOS - Heart Rate Monitoring',
    what: 'Automatic SOS based on heart rate monitoring via Bluetooth.',
    how: [
      'Connect a heart rate monitoring device to the app through Bluetooth communication.',
      'Users set a monitoring measurement based on health condition and recommendations from a doctor.',
      'When the user’s heart rate exceeds the pre-set range due to an unhealthy condition or sudden fall, the sensor captures it immediately and the app shows “out-of-range.”',
      'A real-time message is sent to the emergency contact. At the same time, alarms go off to alert people around, calling for help.',
    ],
    why: 'Escalates quickly when it matters most—help can arrive sooner with less guesswork.',
    imageLabel: 'Feature 6 placeholder',
    imageSublabel: 'Bluetooth HR → thresholds → SOS + alarm',
    imageSrc: '/images/feature6.png',
  },
  {
    title: 'Feature 7: Invisible Fall Detection',
    what: 'Hands-free fall detection using the phone’s motion sensors (no button or wearable needed).',
    how: [
      'Detects falls using the phone’s motion sensors — no button or wearable device needed.',
      'Triggers alert if a fall is detected and not recovered within 5 seconds.',
      'Reduces false alarms from accidental phone drops.',
    ],
    why: 'Discreet safety that stays in the background—ready when needed, quiet when not.',
    imageLabel: 'Feature 7 placeholder',
    imageSublabel: 'Motion sensors → detect → confirm → alert',
    imageSrc: '/images/feature7.png',
  },
]

export function ModelPage() {
  return (
    <>
      <Reveal as="section" className="pageIntro" delayMs={0}>
        <div className="container introGrid">
          <Reveal delayMs={40}>
            <div className="eyebrow">Page 2 · The App</div>
            <h1 className="h1">The App</h1>
            <p className="lead">
              GrandGuardian is designed as a single companion experience made of seven building blocks—each one focused
              on safety, comfort, and connection through a loved one’s voice.
            </p>
            <div className="introLinks">
              <Link className="textLink" to="/feasibility">
                Next: Feasibility →
              </Link>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <PlaceholderImage
              label="App overview placeholder"
              sublabel="7 steps · one companion experience"
              aspect="21/9"
            />
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delayMs={0}>
        <div className="container featuresFast">
          <div className="sectionHeader">
            <h2 className="h2">Seven features (inside the app)</h2>
            <p className="muted">Each feature includes a placeholder image you can replace later.</p>
          </div>

          <div className="grid3">
            {steps.map((step, idx) => (
              <Reveal className="card" key={step.title} delayMs={10 + idx * 20}>
                <h3 className="h3">{step.title}</h3>
                {step.imageSrc ? (
                  <img
                    src={step.imageSrc}
                    alt={step.title}
                    className="featureImage"
                    loading='lazy'
                    decoding='async'
                  />
                ) : (
                <PlaceholderImage label={step.imageLabel} sublabel={step.imageSublabel} aspect="16/9" />
                )}
                <div className="appStep">
                  <div className="appStepSection">
                    <div className="appStepLabel">What it is</div>
                    <div className="appStepText">{step.what}</div>
                  </div>
                  <div className="appStepSection">
                    <div className="appStepLabel">How it works</div>
                    <ul className="appStepList">
                      {step.how.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="appStepSection">
                    <div className="appStepLabel">Why it matters</div>
                    <div className="appStepText">{step.why}</div>
                  </div>
                </div>

                </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section sectionTint" delayMs={0}>
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Three pillars (the design principles)</h2>
          </div>
          <div className="pillars">
            <Reveal className="pillar pillarFamiliarity" delayMs={40}>
              <div className="pillarCap">
                <div className="pillarMedallion" aria-hidden="true">
                  ♡
                </div>
              </div>
              <div className="pillarBody">
                <div className="pillarTitle">Familiarity</div>
                <div className="pillarLine" aria-hidden="true" />
                <div className="pillarText">
                  The comfort of a loved voice: memory, warmth, and “I’m here” — delivered in a way that feels personal.
                </div>
              </div>
              <div className="pillarBase" aria-hidden="true" />
            </Reveal>

            <Reveal className="pillar pillarRestraint" delayMs={110}>
              <div className="pillarCap">
                <div className="pillarMedallion" aria-hidden="true">
                  ∿
                </div>
              </div>
              <div className="pillarBody">
                <div className="pillarTitle">Restraint</div>
                <div className="pillarLine" aria-hidden="true" />
                <div className="pillarText">
                  Care is often what you don’t do: fewer interruptions, softer moments, and silence that respects daily
                  life.
                </div>
              </div>
              <div className="pillarBase" aria-hidden="true" />
            </Reveal>

            <Reveal className="pillar pillarDignity" delayMs={180}>
              <div className="pillarCap">
                <div className="pillarMedallion" aria-hidden="true">
                  ◇
                </div>
              </div>
              <div className="pillarBody">
                <div className="pillarTitle">Dignity</div>
                <div className="pillarLine" aria-hidden="true" />
                <div className="pillarText">
                  Support that asks, not takes. Consent, clarity, and control—so help never feels like being watched.
                </div>
              </div>
              <div className="pillarBase" aria-hidden="true" />
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delayMs={0}>
        <div className="container">
          <Reveal className="card" delayMs={60}>
            <h2 className="h2">System Diagram</h2>
            <p className="p">
              A visual overview of the GrandGuardian app ecosystem: senior app, family app, voice library, and care logic.
            </p>
            <SystemDiagramImage />
          </Reveal>
        </div>
      </Reveal>
    </>
  )
}


