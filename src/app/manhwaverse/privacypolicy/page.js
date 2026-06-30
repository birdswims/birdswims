export const metadata = {
  title: "Manhwaverse Privacy Policy | Birdswims",
  description: "Privacy Policy for the Manhwaverse app by Birdswims.",
};

const infoItems = [
  { label: "Last updated", value: "July 1, 2026" },
  { label: "App", value: "Manhwaverse" },
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

export default function ManhwaversePrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#47220f_0%,#1b0d08_34%,#070404_100%)] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="border-b border-white/10 px-6 py-10 sm:px-10 lg:px-14">
            <p className="font-[family-name:var(--font-jura)] text-sm uppercase tracking-[0.28em] text-amber-300">
              Manhwaverse
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              This Privacy Policy explains how <strong>Manhwaverse</strong>{" "}
              handles information when you use the app.
            </p>
          </div>

          <div className="grid gap-4 border-b border-white/10 bg-white/5 px-6 py-6 sm:grid-cols-3 sm:px-10 lg:px-14">
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
            <Section title="Information we store">
              <p>
                Your library entries (titles, reading status, chapter progress,
                notes, and related preferences such as NSFW filters) are saved
                locally on your device using on-device storage. We do not
                operate an account system that uploads your library to our
                servers.
              </p>
            </Section>

            <Section title="Network requests">
              <p>
                When you use Discover or search, the app may request catalog
                data from remote APIs. Those requests may include search terms
                and filter preferences you choose. We do not intentionally
                attach your personal identity to those requests beyond what is
                needed to fetch results.
              </p>
            </Section>

            <Section title="Analytics and tracking">
              <p>
                Manhwaverse does not include third-party advertising SDKs for
                tracking you across apps. Platform analytics provided by Apple
                or Google may apply according to your device and OS settings.
              </p>
            </Section>

            <Section title="Children">
              <p>
                The app is not directed at children under 16. Do not use the app
                if you are under the minimum age required in your region.
              </p>
            </Section>

            <Section title="Your choices">
              <p>
                You can clear app data by removing entries in the app or by
                deleting the app from your device, which removes locally stored
                library data.
              </p>
            </Section>

            <Section title="Changes">
              <p>
                We may update this policy periodically. Continued use of the app
                after updates constitutes acceptance of the revised policy.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Privacy questions can be sent via Support in Settings (
                <strong>hi@birdswims.com</strong>).
              </p>
              <p>&copy; Birdswims. All rights reserved.</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
