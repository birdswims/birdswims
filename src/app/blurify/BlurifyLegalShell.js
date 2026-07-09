import Link from "next/link";

const nav = [
  { href: "/blurify/privacypolicy", label: "Privacy" },
  { href: "/blurify/terms", label: "Terms" },
  { href: "/blurify/support", label: "Support" },
];

/** Minimal dark theme matching the original Blurify legal pages. */
export default function BlurifyLegalShell({
  title,
  meta,
  children,
  active,
}) {
  return (
    <main
      className="min-h-screen px-5 pb-20 pt-10 sm:px-6"
      style={{
        background: "#0a0a0a",
        color: "#f2f2f2",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        lineHeight: 1.6,
      }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: 720 }}>
        <header
          className="mb-8 flex items-center justify-between gap-4 pb-5"
          style={{ borderBottom: "1px solid #2a2a2a" }}
        >
          <Link
            href="https://birdswims.com"
            className="no-underline"
            style={{
              color: "#f2f2f2",
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: "-0.02em",
            }}
          >
            blurify
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-x-3.5 gap-y-1">
            {nav.map((item) => {
              const isActive = active === item.label.toLowerCase();
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="no-underline text-sm transition-colors"
                  style={{ color: isActive ? "#f2f2f2" : "#9a9a9a" }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>

        <h1
          className="m-0 mb-2"
          style={{
            fontSize: 34,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            fontWeight: 700,
            color: "#f2f2f2",
          }}
        >
          {title}
        </h1>
        {meta ? (
          <p className="mb-7 mt-0 text-sm" style={{ color: "#9a9a9a" }}>
            {meta}
          </p>
        ) : null}

        <div className="blurify-legal-body">{children}</div>

        <footer
          className="mt-12 pt-4 text-[13px]"
          style={{ borderTop: "1px solid #2a2a2a", color: "#9a9a9a" }}
        >
          © Birdswims LLP · Blurify ·{" "}
          <a
            href="mailto:hi@birdswims.com"
            style={{ color: "#f2f2f2", textDecoration: "none" }}
          >
            hi@birdswims.com
          </a>
        </footer>
      </div>

      <style jsx global>{`
        .blurify-legal-body h2 {
          font-size: 18px;
          font-weight: 600;
          margin: 28px 0 10px;
          color: #f2f2f2;
        }
        .blurify-legal-body p,
        .blurify-legal-body li {
          color: #d8d8d8;
          font-size: 16px;
        }
        .blurify-legal-body p {
          margin: 0 0 12px;
        }
        .blurify-legal-body ul {
          padding-left: 20px;
          margin: 0 0 12px;
        }
        .blurify-legal-body li {
          margin-bottom: 6px;
        }
        .blurify-legal-body a {
          color: #f2f2f2;
        }
        .blurify-legal-body strong {
          color: #f2f2f2;
          font-weight: 600;
        }
        .blurify-card {
          background: #141414;
          border: 1px solid #2a2a2a;
          border-radius: 18px;
          padding: 22px 20px;
          margin: 16px 0;
        }
        .blurify-card p:last-child {
          margin-bottom: 0;
        }
        .blurify-btn {
          display: inline-block;
          background: #fff;
          color: #000 !important;
          text-decoration: none;
          font-weight: 600;
          border-radius: 12px;
          padding: 12px 16px;
          margin: 6px 8px 6px 0;
          font-size: 14px;
        }
        .blurify-btn-secondary {
          display: inline-block;
          background: transparent;
          color: #fff !important;
          text-decoration: none;
          font-weight: 600;
          border-radius: 12px;
          padding: 12px 16px;
          margin: 6px 8px 6px 0;
          font-size: 14px;
          border: 1px solid #2a2a2a;
        }
        .blurify-legal-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 12px 0 16px;
        }
        .blurify-legal-body th,
        .blurify-legal-body td {
          border: 1px solid #2a2a2a;
          padding: 10px 12px;
          text-align: left;
          vertical-align: top;
          font-size: 14px;
          color: #d8d8d8;
        }
        .blurify-legal-body th {
          background: #141414;
          color: #f2f2f2;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
