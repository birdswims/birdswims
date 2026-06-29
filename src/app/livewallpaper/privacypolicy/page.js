export const metadata = {
  title: "Live Wallpaper Privacy Policy | Birdswims",
  description: "Privacy Policy for the Live Wallpaper app by Birdswims.",
};

const infoItems = [
  { label: "Last updated", value: "June 30, 2026" },
  { label: "App", value: "Live Wallpaper" },
  { label: "Developer", value: "Birdswims" },
  { label: "Contact", value: "hi@birdswims.com" },
];

const useItems = [
  "Provide the App's features",
  "Deliver free or purchased wallpapers",
  "Process and confirm purchases",
  "Keep the service secure and working",
  "Comply with the law and Apple's rules",
];

const sharingItems = [
  "Apple, for the App Store, payments, and system features you use",
  "Companies that help us run the App (for example hosting), only to provide the service",
  "Authorities, if required by law",
];

const summaryItems = [
  "We use Photos so you can pick videos and save Live Photos.",
  "The Store uses the internet to show and download wallpapers.",
  "Payments are handled by Apple.",
  "There is no in-app login.",
  "We do not sell your personal information.",
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

export default function LiveWallpaperPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#17304d_0%,#08111d_34%,#04070d_100%)] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="border-b border-white/10 px-6 py-10 sm:px-10 lg:px-14">
            <p className="font-[family-name:var(--font-jura)] text-sm uppercase tracking-[0.28em] text-cyan-300">
              Live Wallpaper
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              This page explains how Live Wallpaper handles information when you
              use the app on iOS.
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
            <Section title="Introduction">
              <p>
                Live Wallpaper lets you create Live Photos from your videos and
                browse or download live wallpapers from our Store, including
                free items and paid unlocks through Apple.
              </p>
            </Section>

            <Section title="Information We Use">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  Photos on your device
                </h3>
                <p>
                  With your permission, Live Wallpaper may access your Photo
                  Library so you can choose a video and save Live Photos you
                  create or download. We use this only to provide those
                  features. Your photos and videos stay under your control on
                  your device and in your Apple account settings (including
                  iCloud Photos, if you use it).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  Store and internet features
                </h3>
                <p>
                  When you use the Store, the Live Wallpaper needs an internet
                  connection to show available wallpapers and to download the
                  ones you choose (free or after purchase).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  Purchases
                </h3>
                <p>
                  Paid wallpapers use <strong>Apple In-App Purchase</strong>.
                  Apple processes your payment. We may receive purchase
                  confirmation details (such as that a purchase happened and
                  which item was unlocked) so we can deliver the wallpaper and
                  prevent misuse. We do <strong>not</strong> receive your full
                  card number.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  What we do not collect in the current App
                </h3>
                <p>
                  Live Wallpaper does not ask you to create an account or sign
                  in. We do not intentionally collect your name, email, or
                  password through the App, and we do not use your location,
                  contacts, microphone, or camera for the core features
                  described above.
                </p>
              </div>
            </Section>

            <Section title="How We Use Information">
              <p>We use the information above only to:</p>
              <BulletList items={useItems} />
              <p>
                We do <strong>not</strong> sell your personal information.
              </p>
            </Section>

            <Section title="Sharing">
              <p>We may share information only when needed with:</p>
              <BulletList items={sharingItems} />
              <p>We do not share your Photo Library with advertisers.</p>
            </Section>

            <Section title="Retention">
              <p>
                Photos saved on your device are managed by you and Apple.
                Purchase-related records we keep on our side are retained only
                as long as needed to provide the service, prevent fraud, and
                meet legal obligations.
              </p>
            </Section>

            <Section title="Security">
              <p>
                We take reasonable steps to protect information. No system is
                completely secure.
              </p>
            </Section>

            <Section title="Children">
              <p>
                Live Wallpaper is not directed at children under 13 (or the
                minimum age required where you live). We do not knowingly
                collect information from children.
              </p>
            </Section>

            <Section title="Your choices">
              <p>
                You can turn off Photo access in iOS Settings, choose not to use
                the Store or make purchases, and contact us with questions about
                this policy.
              </p>
              <p>
                Depending on where you live, you may have additional privacy
                rights. Contact us to exercise them where applicable.
              </p>
            </Section>

            <Section title="Changes">
              <p>
                We may update this policy from time to time. We will change the
                &quot;Last updated&quot; date above. Continued use of the App
                after an update means you accept the revised policy, except
                where the law says otherwise.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                <strong>Email:</strong> hi@birdswims.com
              </p>
              <p>
                <strong>Developer:</strong> Birdswims
              </p>
            </Section>

            <Section title="Summary">
              <BulletList items={summaryItems} />
              <p>&copy; Birdswims. All rights reserved.</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
