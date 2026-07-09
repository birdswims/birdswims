import Link from "next/link";

export const metadata = {
  title: "Blurify Terms of Use | Birdswims",
  description: "Terms of Use for the Blurify iOS app by Birdswims LLP.",
};

const infoItems = [
  { label: "Last updated", value: "July 9, 2026" },
  { label: "App", value: "Blurify" },
  { label: "Developer", value: "Birdswims LLP" },
  { label: "Contact", value: "hi@birdswims.com" },
];

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-7 text-slate-300">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3 pl-6">
      {items.map((item) => (
        <li key={item} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BlurifyTermsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1f1f24_0%,#0c0c0f_40%,#050506_100%)] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="border-b border-white/10 px-6 py-10 sm:px-10 lg:px-14">
            <p className="font-[family-name:var(--font-jura)] text-sm uppercase tracking-[0.28em] text-violet-300">
              Blurify
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Terms of Use
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              These Terms of Use (&quot;Terms&quot;) govern your use of the
              Blurify mobile application (&quot;App&quot;) provided by Birdswims
              LLP (&quot;we&quot;, &quot;us&quot;). By downloading or using
              Blurify, you agree to these Terms.
            </p>
          </div>

          <div className="grid gap-4 border-b border-white/10 bg-white/5 px-6 py-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-14">
            {infoItems.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
                <p className="text-sm text-slate-200">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-10 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
            <Section title="The App">
              <p>
                Blurify is a photo editing app that lets you capture or import
                photos and apply blur, soft-focus, and aesthetic filters.
                Features may change over time through app updates.
              </p>
            </Section>

            <Section title="License">
              <p>
                Subject to these Terms, we grant you a personal, limited,
                non-exclusive, non-transferable, revocable license to use
                Blurify on Apple devices you own or control, as permitted by the
                App Store Terms of Use / Apple Media Services Terms.
              </p>
            </Section>

            <Section title="Your content">
              <BulletList
                items={[
                  "You retain rights to photos you capture, import, edit, or export with Blurify.",
                  "You are responsible for having the rights needed to use and edit those photos.",
                  "Do not use Blurify to create or share content that is illegal, infringing, or harmful.",
                ]}
              />
            </Section>

            <Section title="Acceptable use">
              <p>You agree not to:</p>
              <BulletList
                items={[
                  "Reverse engineer, redistribute, or resell the App except as allowed by law.",
                  "Interfere with the App's normal operation or security.",
                  "Use the App in any way that violates applicable laws or third-party rights.",
                ]}
              />
            </Section>

            <Section title="Privacy">
              <p>
                Our collection and use of information is described in the{" "}
                <Link
                  href="https://birdswims.com/blurify/privacypolicy"
                  className="font-medium text-violet-300 underline decoration-violet-500/50 underline-offset-4"
                >
                  Privacy Policy
                </Link>
                . By using Blurify, you also acknowledge that policy.
              </p>
            </Section>

            <Section title="App Store / Apple terms">
              <p>
                If you obtained Blurify from the Apple App Store, Apple&apos;s
                standard Licensed Application End User License Agreement (or any
                custom EULA Apple displays for this app) also applies. Apple is
                not responsible for providing maintenance or support for
                Blurify, except as required by applicable law.
              </p>
            </Section>

            <Section title="Disclaimers">
              <p>
                Blurify is provided &quot;AS IS&quot; and &quot;AS
                AVAILABLE.&quot; To the maximum extent permitted by law, we
                disclaim warranties of merchantability, fitness for a particular
                purpose, and non-infringement. We do not guarantee that edits
                will meet your expectations or that every device will support
                every lens or filter feature.
              </p>
            </Section>

            <Section title="Limitation of liability">
              <p>
                To the maximum extent permitted by law, Birdswims LLP and its
                contributors will not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of
                photos, data, profits, or goodwill, arising from your use of the
                App. Our total liability for any claim relating to the App will
                not exceed the amount you paid us for the App in the 12 months
                before the claim (which may be zero if the App is free).
              </p>
              <p>
                Some jurisdictions do not allow certain limitations; in those
                places, our liability is limited to the fullest extent
                permitted.
              </p>
            </Section>

            <Section title="Updates & changes">
              <p>
                We may update the App or these Terms. Continued use after Terms
                are updated constitutes acceptance of the revised Terms, except
                where applicable law requires additional consent.
              </p>
            </Section>

            <Section title="Termination">
              <p>
                You may stop using Blurify at any time by deleting the App. We
                may suspend or stop providing the App or features if needed for
                legal, security, or operational reasons.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about these Terms:{" "}
                <strong>hi@birdswims.com</strong>
              </p>
              <p>
                Support:{" "}
                <Link
                  href="https://birdswims.com/blurify/support"
                  className="font-medium text-violet-300 underline decoration-violet-500/50 underline-offset-4"
                >
                  Support page
                </Link>
              </p>
              <p>&copy; Birdswims. All rights reserved.</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
