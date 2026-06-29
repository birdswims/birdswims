import Link from "next/link";

export const metadata = {
  title: "Live Wallpaper Support | Birdswims",
  description:
    "Support information and troubleshooting for the Live Wallpaper app.",
};

const infoItems = [
  { label: "App", value: "Live Wallpaper" },
  { label: "Support email", value: "hi@birdswims.com" },
];

const appFeatures = [
  "Create: Choose a video from Photos, trim it, and save a Live Photo to your library.",
  "Store: Browse wallpapers, play a preview when available, download free items, or unlock paid ones with In-App Purchase. Unlocked items are saved as Live Photos.",
];

const wallpaperSteps = [
  "Create or download a wallpaper in the app (it saves to Photos).",
  "Open Settings -> Wallpaper -> Add New Wallpaper.",
  "Choose Photos and select the Live Photo (look for the LIVE badge).",
  "Turn on Live Photo / motion on the Lock Screen options.",
  "Set as Lock Screen (and Home Screen if you want).",
];

const storeItems = [
  "Play on a card plays a preview when the catalog includes one (no purchase required for preview).",
  "Download on free items saves a Live Photo.",
  "Unlock on paid items uses Apple In-App Purchase, then saves a Live Photo.",
];

const purchaseItems = [
  "Paid wallpapers are one-time unlocks via In-App Purchase (consumable-style unlock per item, as offered in the app).",
  "For billing or refunds, use Apple: Settings -> your name -> Media & Purchases -> View Account -> Purchase History, or reportaproblem.apple.com.",
];

const contactItems = [
  "Device model and iOS version",
  "What you were doing (Create or Store)",
  "Screenshots if useful",
];

const troubleshootingRows = [
  {
    problem: "Can't pick a video",
    solution: "Enable Photos permission.",
  },
  {
    problem: "Convert / download fails",
    solution:
      "Check internet for Store items, confirm you have free storage, and try another video.",
  },
  {
    problem: "No LIVE badge",
    solution:
      "Try converting or downloading again, then confirm the saved item in Photos.",
  },
  {
    problem: "Motion not available as wallpaper",
    solution:
      "Use a new Live Photo from the app and set it again from Settings or Photos.",
  },
  {
    problem: "Unlock / purchase error",
    solution:
      "Check your network, ensure you're signed into the App Store, and try again later.",
  },
  {
    problem: "Preview won't play",
    solution:
      "Preview may be unavailable for that item; Unlock or Download can still work.",
  },
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

function NumberedList({ items }) {
  return (
    <ol className="space-y-3 pl-6">
      {items.map((item) => (
        <li key={item} className="list-decimal">
          {item}
        </li>
      ))}
    </ol>
  );
}

export default function LiveWallpaperSupportPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#17304d_0%,#08111d_34%,#04070d_100%)] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="border-b border-white/10 px-6 py-10 sm:px-10 lg:px-14">
            <p className="font-[family-name:var(--font-jura)] text-sm uppercase tracking-[0.28em] text-cyan-300">
              Live Wallpaper
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Support
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Thanks for using <strong>Live Wallpaper</strong>. This page covers
              common questions and troubleshooting steps.
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
            <Section title="What the app does">
              <BulletList items={appFeatures} />
              <p>
                The app cannot set your Lock Screen automatically (Apple
                restriction). After saving, you set the wallpaper in{" "}
                <strong>Settings</strong>.
              </p>
            </Section>

            <Section title="How to set as Lock Screen wallpaper">
              <NumberedList items={wallpaperSteps} />
              <p>
                You can also open the Live Photo in <strong>Photos</strong>{" "}
                -&gt;<strong> Share</strong> -&gt;{" "}
                <strong>Use as Wallpaper</strong>.
              </p>
            </Section>

            <Section title="Create tab">
              <p>
                <strong>Choose from Photos</strong> selects a video, then you
                trim and convert.
              </p>
              <BulletList
                items={[
                  "Use a short, clear clip (about 1-3 seconds works well; the app also optimizes length).",
                  "Allow Photos access when asked, or enable it in Settings -> Live Wallpaper -> Photos.",
                  "After convert, check Photos for a LIVE badge and long-press to preview motion.",
                ]}
              />
            </Section>

            <Section title="Store tab">
              <BulletList items={storeItems} />
              <p>
                Purchases go through <strong>Apple</strong>. We do not see your
                full card number.
              </p>
              <p>
                If Unlock says the product isn&apos;t available, check your
                network and try again later. Sandbox or testing builds may
                behave differently from the App Store version.
              </p>
            </Section>

            <Section title="Photos permission">
              <p>Required to pick videos and save Live Photos.</p>
              <p>
                <strong>Settings -&gt; [Your Name] -&gt; Live Wallpaper</strong>{" "}
                (or <strong>Settings -&gt; Live Wallpaper</strong>) -&gt; enable{" "}
                <strong>Photos</strong>.
              </p>
              <p>Without access, Create and save features won&apos;t work.</p>
            </Section>

            <Section title="Purchases & refunds">
              <BulletList items={purchaseItems} />
              <p>
                We can help with delivery (file not saving, unlock not applying)
                if you email us with your Apple ID email (optional), approximate
                purchase time, and wallpaper name.
              </p>
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
                We use Photos only for picking videos and saving Live Photos.
                The Store uses the internet to show and download wallpapers.
                Payments are handled by Apple. There is no in-app account.
              </p>
              <p>
                <Link
                  href="https://birdswims.com/livewallpaper/privacypolicy"
                  className="font-medium text-cyan-300 underline decoration-cyan-500/50 underline-offset-4"
                >
                  Privacy Policy
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
                Live Wallpaper is developed by <strong>Birdswims</strong>.
              </p>
              <p>&copy; Birdswims. All rights reserved.</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
