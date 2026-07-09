import BlurifyLegalShell from "../BlurifyLegalShell";

export const metadata = {
  title: "Support · Blurify",
  description: "Support and contact for the Blurify iOS app by Birdswims LLP.",
};

export default function BlurifySupportPage() {
  return (
    <BlurifyLegalShell
      title="Support"
      meta="We’re here to help with Blurify on iPhone."
      active="support"
    >
      <div className="blurify-card">
        <h2 style={{ marginTop: 0 }}>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:hi@birdswims.com?subject=Blurify%20Support">
            hi@birdswims.com
          </a>
        </p>
        <p>
          Please include your iPhone model, iOS version, and a short description
          of the issue. Screenshots help when something looks wrong in the
          editor or camera.
        </p>
        <p>
          <a
            className="blurify-btn"
            href="mailto:hi@birdswims.com?subject=Blurify%20Support"
          >
            Email support
          </a>
        </p>
      </div>

      <h2>Common questions</h2>
      <div className="blurify-card">
        <p>
          <strong>Camera won’t open</strong>
          <br />
          Open iOS Settings → Blurify → enable Camera. Unlock your phone when
          launching from Xcode/TestFlight if prompted.
        </p>
        <p>
          <strong>Can’t save photos</strong>
          <br />
          Open iOS Settings → Blurify → allow Photos access (Full Access or
          limited as needed). For saves, ensure “Add Photos” permission is
          allowed.
        </p>
        <p>
          <strong>Where are my captures?</strong>
          <br />
          In‑app Gallery shows photos saved by Blurify. Captures may also appear
          in the Photos app under the Blurify album when library save is
          enabled.
        </p>
        <p>
          <strong>Lens buttons (0.5× / 1× / 2× / 5×)</strong>
          <br />
          Available lenses depend on your iPhone model. 2× is often a
          high‑quality crop of the main camera, not a separate physical lens.
        </p>
        <p>
          <strong>Do you upload my photos?</strong>
          <br />
          No. Editing runs on your device. See the{" "}
          <a href="/blurify/privacypolicy">Privacy Policy</a>.
        </p>
        <p>
          <strong>How do I delete my data?</strong>
          <br />
          Delete items from the in‑app gallery, remove photos from the Photos
          app if saved there, or uninstall Blurify to clear local app storage.
        </p>
      </div>

      <h2>Legal</h2>
      <p>
        <a href="/blurify/privacypolicy">Privacy Policy</a>
        {" · "}
        <a href="/blurify/terms">Terms of Use</a>
      </p>
    </BlurifyLegalShell>
  );
}
