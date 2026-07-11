import Link from "next/link";

const nav = [
  { href: "/chatless/privacy", label: "Privacy", key: "privacy" },
  { href: "/chatless/terms", label: "Terms", key: "terms" },
  { href: "/chatless/support", label: "Support", key: "support" },
];

/** Dark legal shell for Chatless (matches other Birdswims app pages). */
export default function ChatlessLegalShell({ title, meta, children, active }) {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-5 pb-20 pt-10 text-[#f2f2f2] sm:px-6">
      <div className="mx-auto w-full max-w-[720px]">
        <header className="mb-8 flex items-center justify-between gap-4 border-b border-[#2a2a2a] pb-5">
          <Link
            href="https://birdswims.com"
            className="text-[22px] font-bold tracking-[-0.02em] text-[#f2f2f2] no-underline"
          >
            chatless
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-x-3.5 gap-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm no-underline ${
                  active === item.key ? "text-[#f2f2f2]" : "text-[#9a9a9a]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <h1 className="m-0 mb-2 text-[34px] font-bold leading-[1.15] tracking-[-0.03em] text-[#f2f2f2]">
          {title}
        </h1>
        {meta ? (
          <p className="mb-7 mt-0 text-sm text-[#9a9a9a]">{meta}</p>
        ) : null}

        <div className="text-base leading-relaxed text-[#d8d8d8] [&_a]:text-[#f2f2f2] [&_h2]:mb-2.5 [&_h2]:mt-7 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#f2f2f2] [&_li]:mb-1.5 [&_li]:text-[#d8d8d8] [&_p]:mb-3 [&_p]:text-[#d8d8d8] [&_strong]:font-semibold [&_strong]:text-[#f2f2f2] [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>

        <footer className="mt-12 border-t border-[#2a2a2a] pt-4 text-[13px] text-[#9a9a9a]">
          © Birdswims LLP · Chatless ·{" "}
          <a
            href="mailto:hi@birdswims.com"
            className="text-[#f2f2f2] no-underline"
          >
            hi@birdswims.com
          </a>
        </footer>
      </div>
    </main>
  );
}

export function LegalCard({ children }) {
  return (
    <div className="my-4 rounded-[18px] border border-[#2a2a2a] bg-[#141414] px-5 py-[22px] [&_p:last-child]:mb-0">
      {children}
    </div>
  );
}

export function LegalButton({ href, children }) {
  return (
    <a
      href={href}
      className="mr-2 mt-1.5 inline-block rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black no-underline"
    >
      {children}
    </a>
  );
}
