import ChatlessLegalShell, { LegalCard, LegalButton } from "../ChatlessLegalShell";

export const metadata = {
  title: "Support · Chatless",
  description: "Support and contact for the Chatless messaging app by Birdswims LLP.",
};

export default function ChatlessSupportPage() {
  return (
    <ChatlessLegalShell
      title="Support"
      meta="We’re here to help with Chatless on iOS and Android."
      active="support"
    >
      <LegalCard>
        <h2 className="!mt-0">Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:hi@birdswims.com?subject=Chatless%20Support">
            hi@birdswims.com
          </a>
        </p>
        <p>
          Please include your device model, OS version (iOS or Android), app
          version (Settings → About), and a short description of the issue.
          Screenshots help for UI problems.
        </p>
        <p>
          <LegalButton href="mailto:hi@birdswims.com?subject=Chatless%20Support">
            Email support
          </LegalButton>
        </p>
      </LegalCard>

      <h2>Common questions</h2>
      <LegalCard>
        <p>
          <strong>How do I add a friend?</strong>
          <br />
          Open My QR on one device and scan or paste the contact link / code on
          the other. Friend identity is a Nostr public key exchanged out of
          band—not a Birdswims account.
        </p>
        <p>
          <strong>Messages aren’t arriving</strong>
          <br />
          Keep Chatless open (or recently open) on both devices so they stay
          connected to relays. Check that both are online in the chat header.
          Default relays are public and can occasionally be slow or full.
        </p>
        <p>
          <strong>Calls fail or never connect</strong>
          <br />
          Voice/video use WebRTC. Restrictive mobile networks may need a TURN
          server. Both apps should stay open during setup. Pure STUN cannot
          reach every NAT pair.
        </p>
        <p>
          <strong>Is my chat stored on Birdswims servers?</strong>
          <br />
          No. There is no Chatless message database run by Birdswims. Optional
          history is stored on your device only. See the{" "}
          <a href="/chatless/privacy">Privacy Policy</a>.
        </p>
        <p>
          <strong>How do I delete my data?</strong>
          <br />
          Delete friends and clear chat history in the app, or uninstall
          Chatless to remove local keys and storage. Public relays may still
          hold encrypted events they already received.
        </p>
        <p>
          <strong>I lost my device / reinstalled</strong>
          <br />
          A new install generates a new identity key unless you restore a
          backup. Friends will need your new contact QR.
        </p>
      </LegalCard>

      <h2>Legal</h2>
      <p>
        <a href="/chatless/privacy">Privacy Policy</a>
        {" · "}
        <a href="/chatless/terms">Terms of Use</a>
      </p>
    </ChatlessLegalShell>
  );
}
