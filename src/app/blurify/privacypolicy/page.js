export const metadata = {
  title: "Blurify Privacy Policy | Birdswims",
  description: "Privacy Policy for the Blurify iOS app by Birdswims LLP.",
};

const infoItems = [
  { label: "Last updated", value: "July 9, 2026" },
  { label: "App", value: "Blurify" },
  { label: "Developer", value: "Birdswims LLP" },
  { label: "Contact", value: "hi@birdswims.com" },
];

const useItems = [
  "Display camera preview and apply the filters or effects you choose",
  "Save photos you capture or export to your Photo Library when you allow it",
  "Keep an in-app gallery of your captures on device",
  "Respond if you contact us for support",
  "Comply with the law and Apple's App Store rules",
];

const summaryItems = [
  "Photos are processed on your device.",
  "Camera and Photos access are optional and only for app features.",
  "There is no in-app login or account.",
  "We do not sell your personal information.",
  "We do not include third-party advertising SDKs in Blurify.",
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

export default function BlurifyPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1f1f24_0%,#0c0c0f_40%,#050506_100%)] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="border-b border-white/10 px-6 py-10 sm:px-10 lg:px-14">
            <p className="font-[family-name:var(--font-jura)] text-sm uppercase tracking-[0.28em] text-violet-300">
              Blurify
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              This Privacy Policy explains how <strong>Blurify</strong>{" "}
              (&quot;the App&quot;) handles information when you use it on iOS.
              By using the App, you agree to this policy.
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
                Blurify is a photo editor for soft, dreamy blur and aesthetic
                filters. You can capture photos with the camera or choose photos
                from your library, apply effects on your device, and save
                results.
              </p>
              <p>
                <strong>Short version:</strong> Blurify processes photos on your
                device. We do not require an account, do not show ads, and do
                not sell your personal information.
              </p>
            </Section>

            <Section title="Information we use">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  Camera images
                </h3>
                <p>
                  With your permission, the App may use the camera to capture
                  photos for editing. Camera access is optional; you can use
                  Blurify with photos you already have.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  Photo Library
                </h3>
                <p>
                  With your permission, the App may read photos you choose to
                  edit and add edited photos or captures to your library. Your
                  photos stay under your control on your device and in your
                  Apple account settings (including iCloud Photos, if you use
                  it).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  In-app gallery
                </h3>
                <p>
                  Captures saved in Blurify&apos;s gallery are stored locally in
                  the App&apos;s documents on your device until you delete them
                  or remove the App.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  Support email
                </h3>
                <p>
                  If you contact us, we process your message and email address
                  only to respond to your request.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  What we do not collect
                </h3>
                <p>
                  The App does not ask you to create an account or sign in. We
                  do not intentionally collect your name, password, contacts,
                  microphone audio, or precise location for Blurify&apos;s core
                  features. We do not operate a photo-processing backend that
                  uploads your images to Birdswims servers.
                </p>
              </div>
            </Section>

            <Section title="On-device processing">
              <p>
                Filter rendering, soft-focus effects, and camera preview
                processing run on your device using Apple frameworks (including
                Camera, Photos, Core Image, and Vision where applicable).
              </p>
            </Section>

            <Section title="How we use information">
              <p>We use the information above only to:</p>
              <BulletList items={useItems} />
              <p>
                We do <strong>not</strong> sell your personal information.
              </p>
            </Section>

            <Section title="Sharing">
              <p>
                We do not share your photos with advertisers. If you use the iOS
                share sheet, content is shared only with the destination you
                choose. We may share information only when needed with Apple for
                system features you use, or with authorities if required by law.
              </p>
            </Section>

            <Section title="Retention & deletion">
              <p>
                In-app gallery captures remain on your device until you delete
                them in the App or uninstall Blurify. Photos saved to the system
                Photo Library are controlled by you in the Photos app. You can
                also clear the in-app gallery from Settings in Blurify.
              </p>
            </Section>

            <Section title="Permissions">
              <BulletList
                items={[
                  "Camera — optional; used to capture photos for editing.",
                  "Photo Library (read) — optional; used to select photos to edit.",
                  "Photo Library (add) — optional; used to save edited photos or captures.",
                ]}
              />
              <p>
                You can revoke permissions anytime in iOS Settings → Blurify.
              </p>
            </Section>

            <Section title="Children">
              <p>
                Blurify is a general-audience photography app. We do not
                knowingly collect personal information from children for
                accounts or profiles, because Blurify does not provide user
                accounts.
              </p>
            </Section>

            <Section title="Your choices">
              <BulletList
                items={[
                  "Deny or revoke camera/photo permissions in iOS Settings.",
                  "Delete captures from the in-app gallery or from Photos.",
                  "Uninstall the App to remove local app storage.",
                  "Contact us with privacy questions at hi@birdswims.com.",
                ]}
              />
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
                <strong>Developer:</strong> Birdswims LLP
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
