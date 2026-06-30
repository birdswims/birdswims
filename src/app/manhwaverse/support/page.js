export const metadata = {
  title: "Manhwaverse Support | Birdswims",
  description:
    "Support information and frequently asked questions for Manhwaverse.",
};

const infoItems = [
  { label: "App", value: "Manhwaverse" },
  { label: "Support Email", value: "hi@birdswims.com" },
];

const contactItems = [
  "Your device model",
  "Your OS version",
  "Your app version",
  "A short description of the issue",
  "Screenshots, if relevant",
];

const faqItems = [
  {
    question: "Where is my data stored?",
    answer:
      "Your library, notes, chapter progress, and preferences are stored locally on your device. Manhwaverse does not require an account to use the app.",
  },
  {
    question: "Does Manhwaverse sync my library across devices?",
    answer:
      "At this time, library data is stored on-device and is not automatically synced across devices.",
  },
  {
    question: "Why is Discover not loading or search not working?",
    answer:
      "Discover and search rely on external catalog data. If results are unavailable, check your internet connection and try again later. You can still use the custom entry feature to track titles manually.",
  },
  {
    question: "Can I add a title that is not in the catalog?",
    answer:
      "Yes. You can use the Add Custom feature to create and track your own title manually.",
  },
  {
    question: "How do I update my reading progress?",
    answer:
      "Open a title from your library to change its status, update the current chapter, or remove it from your list.",
  },
  {
    question: "What does the NSFW setting do?",
    answer:
      "The NSFW setting allows adult titles to appear in Discover results. Only enable it if it is appropriate for your age and local laws.",
  },
  {
    question: "How do I delete my data?",
    answer:
      "You can remove entries individually inside the app. Deleting the app from your device will also remove locally stored app data.",
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

export default function ManhwaverseSupportPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#47220f_0%,#1b0d08_34%,#070404_100%)] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="border-b border-white/10 px-6 py-10 sm:px-10 lg:px-14">
            <p className="font-[family-name:var(--font-jura)] text-sm uppercase tracking-[0.28em] text-amber-300">
              Manhwaverse
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Support
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Need help with <strong>Manhwaverse</strong>? We&apos;re here to
              help.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Manhwaverse is a personal manhwa tracking app that helps you
              discover titles, organize your library, track reading status, and
              update chapter progress. If you have questions, found a bug, or
              need help using the app, contact us anytime.
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
            <Section title="Contact">
              <p>
                Support Email: <strong>hi@birdswims.com</strong>
              </p>
              <p>When contacting support, please include:</p>
              <BulletList items={contactItems} />
            </Section>

            <Section title="Frequently Asked Questions">
              <div className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question} className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-100">
                      {item.question}
                    </h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Privacy">
              <p>
                Manhwaverse stores your library data locally on your device.
                When you use Discover or search, the app may request catalog
                data from external services. For more information, please review
                our Privacy Policy.
              </p>
            </Section>

            <Section title="Still Need Help?">
              <p>
                If you couldn&apos;t find your answer here, email us at{" "}
                <strong>hi@birdswims.com</strong> and we&apos;ll do our best to
                help.
              </p>
              <p>&copy; Birdswims. All rights reserved.</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
