import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          Shemesh Restaurant
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#hero"
            className="text-foreground hover:text-primary transition"
          >
            Startseite
          </a>
          <Link
            href="/ueber-uns"
            className="text-foreground hover:text-primary transition"
          >
            Über uns
          </Link>
          <Link
            href="/menu"
            className="text-foreground hover:text-primary transition"
          >
            Speisekarte
          </Link>
          <a
            href="#pricing"
            className="text-foreground hover:text-primary transition"
          >
            Menüs
          </a>
          <a
            href="#process"
            className="text-foreground hover:text-primary transition"
          >
            Ablauf
          </a>
          <a
            href="#footer"
            className="text-foreground hover:text-primary transition"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
