import ChatlessLegalShell, { LegalCard } from "../ChatlessLegalShell";

export const metadata = {
  title: "Terms of Use · Chatless",
  description: "Terms of Use for the Chatless messaging app by Birdswims LLP.",
};

export default function ChatlessTermsPage() {
  return (
    <ChatlessLegalShell
      title="Terms of Use"
      meta="Last updated: July 11, 2026 · Chatless for iOS & Android"
      active="terms"
    >
      <LegalCard>
        <p>
          These Terms of Use (“Terms”) govern your use of the Chatless mobile
          application (“App”) provided by Birdswims LLP (“we”, “us”). By
          downloading or using Chatless, you agree to these Terms. If you do not
          agree, do not use the App.
        </p>
      </LegalCard>

      <h2>1. The App</h2>
      <p>
        Chatless is a messaging and calling app that uses the Nostr protocol and
        public relays for delivery, and WebRTC for optional peer‑to‑peer voice
        and video. Features may change over time through app updates. Chatless
        does not provide a Birdswims‑hosted chat message store.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be able to enter a binding agreement under applicable law. If
        you use the App on behalf of an organization, you represent that you
        have authority to accept these Terms for that organization.
      </p>

      <h2>3. License</h2>
      <p>
        Subject to these Terms, we grant you a personal, limited, non‑exclusive,
        non‑transferable, revocable license to use Chatless on devices you own
        or control, as permitted by the Apple App Store / Google Play terms
        applicable to your download.
      </p>

      <h2>4. Your content &amp; conduct</h2>
      <ul>
        <li>
          You are responsible for the messages, media, and calls you send and
          for the people you add as friends.
        </li>
        <li>
          Do not use Chatless for illegal activity, harassment, spam, or
          content that infringes others’ rights.
        </li>
        <li>
          You are responsible for safeguarding your device and any keys stored
          on it. Loss of keys may mean loss of access to your Chatless identity
          on that install.
        </li>
      </ul>

      <h2>5. Network &amp; third parties</h2>
      <p>
        Connectivity depends on the internet, Nostr relays, STUN/TURN providers,
        and device permissions. We do not guarantee that every pair of devices
        can connect (especially under restrictive NATs without TURN). Third‑party
        services have their own terms and privacy practices.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Reverse engineer, redistribute, or resell the App except as allowed by
          law.
        </li>
        <li>Interfere with the App’s normal operation or security.</li>
        <li>
          Abuse public relays or use Chatless to attack networks or other users.
        </li>
      </ul>

      <h2>7. Privacy</h2>
      <p>
        Our practices are described in the{" "}
        <a href="/chatless/privacy">Privacy Policy</a>. By using Chatless, you
        also acknowledge that policy.
      </p>

      <h2>8. App stores</h2>
      <p>
        If you obtained Chatless from Apple or Google, their store terms also
        apply. Apple and Google are not responsible for maintenance or support
        for Chatless except as required by law.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        Chatless is provided “AS IS” and “AS AVAILABLE.” To the maximum extent
        permitted by law, we disclaim warranties of merchantability, fitness for
        a particular purpose, and non‑infringement. We do not guarantee
        uninterrupted messaging, perfect call quality, or delivery of every
        message via third‑party relays.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Birdswims and its contributors
        will not be liable for any indirect, incidental, special, consequential,
        or punitive damages, or any loss of data, messages, profits, or
        goodwill, arising from your use of the App. Our total liability for any
        claim relating to the App will not exceed the amount you paid us for the
        App in the 12 months before the claim (which may be zero if free).
      </p>
      <p>
        Some jurisdictions do not allow certain limitations; in those places,
        our liability is limited to the fullest extent permitted.
      </p>

      <h2>11. Updates &amp; changes</h2>
      <p>
        We may update the App or these Terms. Continued use after Terms are
        updated constitutes acceptance of the revised Terms, except where law
        requires additional consent.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using Chatless anytime by deleting the App. We may suspend
        or stop providing the App or features for legal, security, or
        operational reasons.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href="mailto:hi@birdswims.com">hi@birdswims.com</a>
        <br />
        Support: <a href="/chatless/support">Support page</a>
      </p>
    </ChatlessLegalShell>
  );
}
