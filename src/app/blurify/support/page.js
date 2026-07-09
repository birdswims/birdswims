import Link from "next/link";

export const metadata = {
  title: "Blurify Support | Birdswims",
  description: "Support information and troubleshooting for the Blurify iOS app.",
};

const infoItems = [
  { label: "App", value: "Blurify" },
  { label: "Support email", value: "hi@birdswims.com" },
];

const troubleshootingRows = [
  {
    problem: "Camera won't open",
    solution:
      "Open iOS Settings → Blurify → enable Camera. Unlock your phone if installing from TestFlight or Xcode.",
  },
  {
    problem: "Can't save photos",
    solution:
      "Open iOS Settings → Blurify → allow Photos access. Ensure add/save permission is allowed.",
  },
  {
    problem: "Where are my captures?",
    solution:
      "In-app Gallery shows photos saved by Blurify. Captures may also appear in the Photos app under the Blurify album when library save is enabled.",
  },
  {
    problem: "Lens buttons (0.5× / 1× / 2× / 5×)",
    solution:
      "Available lenses depend on your iPhone model. 2× is often a high-quality crop of the main camera, not a separate physical lens.",
  },
  {
    problem: "Do you upload my photos?",
    solution:
      "No. Editing runs on your device. See the Privacy Policy for details.",
  },
];

const contactItems = [
  "iPhone model and iOS version",
  "A short description of the issue",
  "Screenshots if something looks wrong in the editor or camera",
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

export default function BlurifySupportPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1f1f24_0%,#0c0c0f_40%,#050506_100%)] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="border-b border-white/10 px-6 py-10 sm:px-10 lg:px-14">
            <p className="font-[family-name:var(--font-jura)] text-sm uppercase tracking-[0.28em] text-violet-300">
              Blurify
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Support
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              We&apos;re here to help with Blurify on iPhone — camera, filters,
              gallery, and saves.
            </p>
          </div>

          <div className="grid gap-4 border-b border-white/10 bg-white/5 px-6 py-6 sm:grid-cols-2 sm:px-10 lg:px-14">
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
            <Section title="What Blurify does">
              <BulletList
                items={[
                  "Capture photos with multi-lens camera controls and live filter previews.",
                  "Import a photo from your library and apply dreamy blur aesthetics.",
                  "Save to an in-app gallery and optionally to your Photo Library.",
                ]}
              />
            </Section>

            <Section title="Troubleshooting">
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="min-w-full divide-y divide-white/10 text-left">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-sm font-semibold text-slate-100">
                        Problem
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-slate-100">
                        Try this
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-slate-950/40">
                    {troubleshootingRows.map((row) => (
                      <tr key={row.problem} className="align-top">
                        <td className="px-4 py-3 text-sm font-medium text-slate-100">
                          {row.problem}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-300">
                          {row.solution}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="Privacy">
              <p>
                Photos are processed on your device. There is no in-app account.
                We do not sell your personal information.
              </p>
              <p>
                <Link
                  href="https://birdswims.com/blurify/privacypolicy"
                  className="font-medium text-violet-300 underline decoration-violet-500/50 underline-offset-4"
                >
                  Privacy Policy
                </Link>
                {" · "}
                <Link
                  href="https://birdswims.com/blurify/terms"
                  className="font-medium text-violet-300 underline decoration-violet-500/50 underline-offset-4"
                >
                  Terms of Use
                </Link>
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Email: <strong>hi@birdswims.com</strong>
              </p>
              <p>Please include:</p>
              <BulletList items={contactItems} />
              <p>We aim to reply within a few business days.</p>
            </Section>

            <Section title="About">
              <p>
                Blurify is developed by <strong>Birdswims LLP</strong>.
              </p>
              <p>&copy; Birdswims. All rights reserved.</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
