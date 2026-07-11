import ChatlessLegalShell, { LegalCard } from "../ChatlessLegalShell";

export const metadata = {
  title: "Privacy Policy · Chatless",
  description:
    "Privacy Policy for the Chatless messaging app (iOS & Android) by Birdswims LLP.",
};

export default function ChatlessPrivacyPage() {
  return (
    <ChatlessLegalShell
      title="Privacy Policy"
      meta="Last updated: July 11, 2026 · Chatless for iOS & Android"
      active="privacy"
    >
      <LegalCard>
        <p>
          <strong>Short version:</strong> Chatless is a serverless chat and
          calling app. Message content is end‑to‑end encrypted over the Nostr
          protocol. We do not run a Chatless message server, do not require an
          account with Birdswims, and do not sell your personal information.
        </p>
      </LegalCard>

      <h2>1. Who we are</h2>
      <p>
        Chatless is developed by Birdswims LLP (“we”, “us”). Contact:{" "}
        <a href="mailto:hi@birdswims.com">hi@birdswims.com</a>.
      </p>

      <h2>2. How Chatless works</h2>
      <p>
        Chatless uses the open <strong>Nostr</strong> protocol and public
        relays you (or the app defaults) connect to. Private messages use
        NIP‑44 encryption inside NIP‑17/NIP‑59 gift wraps. Voice and video calls
        use <strong>WebRTC</strong> peer‑to‑peer media; call setup signals are
        carried as encrypted Nostr events. Relays are third‑party
        infrastructure—not Birdswims message storage.
      </p>

      <h2>3. Information processed on your device</h2>
      <ul>
        <li>
          <strong>Cryptographic keys</strong> — a Nostr keypair generated and
          stored on your device (used as your identity / friend code).
        </li>
        <li>
          <strong>Display name</strong> — a local nickname you set; shared with
          friends via contact cards / presence.
        </li>
        <li>
          <strong>Contacts / friends list</strong> — public keys and names of
          people you add, stored on device.
        </li>
        <li>
          <strong>Chat history (optional)</strong> — if you keep history for a
          chat, message bodies may be stored on device; you can clear or disable
          history.
        </li>
        <li>
          <strong>Camera / microphone</strong> — used for QR scanning and
          optional voice/video calls (with your permission).
        </li>
        <li>
          <strong>Network / STUN (and optional TURN)</strong> — public STUN
          servers help establish calls; if you configure TURN credentials, media
          may be relayed by that provider while encrypted.
        </li>
      </ul>

      <h2>4. What we do <em>not</em> collect</h2>
      <ul>
        <li>No Birdswims account, phone number, or email required to use Chatless.</li>
        <li>No Chatless chat backend that stores your message contents for us.</li>
        <li>No ads SDK and no sale of personal information.</li>
        <li>
          We do not operate our own third‑party analytics of message content.
        </li>
      </ul>

      <h2>5. Third‑party infrastructure</h2>
      <p>
        When you use Chatless online, your device connects to Nostr relays and
        (for calls) STUN/TURN services. Those operators may process connection
        metadata (IP address, timing, encrypted payloads) under their own
        policies. Default relays and STUN hosts are not Birdswims servers.
        Choose relays and TURN carefully if privacy requirements are strict.
      </p>

      <h2>6. Permissions</h2>
      <ul>
        <li>
          <strong>Camera</strong> — QR codes and optional video calls.
        </li>
        <li>
          <strong>Microphone</strong> — voice and video calls.
        </li>
        <li>
          <strong>Network / notifications</strong> — as needed for connectivity
          and ongoing‑call notifications on some platforms.
        </li>
      </ul>
      <p>
        You can revoke permissions in system Settings for Chatless.
      </p>

      <h2>7. Data retention &amp; deletion</h2>
      <p>
        Local contacts and optional chat history remain on your device until you
        delete them or uninstall the app. Encrypted events on public relays may
        persist according to each relay’s retention—Birdswims cannot remotely
        wipe third‑party relays. Deleting the app removes on‑device keys and
        local storage.
      </p>

      <h2>8. Children</h2>
      <p>
        Chatless is a general‑audience app. We do not knowingly collect personal
        information from children for Birdswims accounts, because Chatless does
        not provide Birdswims user accounts.
      </p>

      <h2>9. Your choices &amp; rights</h2>
      <ul>
        <li>Clear chat history or remove friends in the app.</li>
        <li>Revoke camera/microphone permissions.</li>
        <li>Uninstall the app to remove local data.</li>
        <li>
          Contact us with privacy questions:{" "}
          <a href="mailto:hi@birdswims.com">hi@birdswims.com</a>.
        </li>
      </ul>

      <h2>10. Changes</h2>
      <p>
        We may update this Privacy Policy. The “Last updated” date will change
        when we do. Continued use after an update means you acknowledge the
        revised policy.
      </p>

      <h2>11. Contact</h2>
      <p>
        Birdswims LLP · Chatless privacy questions
        <br />
        Email: <a href="mailto:hi@birdswims.com">hi@birdswims.com</a>
        <br />
        Support: <a href="/chatless/support">Support page</a>
      </p>
    </ChatlessLegalShell>
  );
}
