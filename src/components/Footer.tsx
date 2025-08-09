import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="container py-10 text-sm text-[var(--color-muted)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
          <Image src="/assets/images/icon.png" alt="Bloxy" width={20} height={20} className="rounded" />
          <span className="text-[var(--color-foreground)]">Bloxy</span>
        </Link>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <p className="mt-4">© {new Date().getFullYear()} Bloxy</p>
    </footer>
  );
}


