export const metadata = {
  title: "Terms of Service",
  description: "Terms governing your use of the Bloxy app and website.",
  alternates: { canonical: "/terms" },
};

import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-12 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
        <p className="mt-4 text-[var(--color-muted)]">
          Welcome to Bloxy. By using the app or website, you agree to these terms.
          If you do not agree, please do not use Bloxy.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">License</h2>
          <p className="text-[var(--color-muted)]">
            We grant you a personal, limited, non‑transferable, non‑exclusive license to use Bloxy for personal purposes
            in accordance with these terms and applicable laws.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">User Content</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--color-muted)]">
            <li>You are responsible for content you add (tasks, notes, names).</li>
            <li>Do not upload unlawful, abusive, or infringing content.</li>
            <li>You retain rights to your content; we do not claim ownership.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Purchases & Subscriptions</h2>
          <p className="text-[var(--color-muted)]">
            Bloxy is offered as a freemium app. You can use Bloxy for free with a limited feature set. We also offer
            optional subscriptions that unlock additional features. Subscription options typically include monthly and
            yearly plans. Pricing and available features are shown in‑app and may vary by region.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--color-muted)]">
            <li>Subscriptions are billed to your Apple ID and managed by Apple. Manage or cancel in iOS Settings ▸ your Apple ID ▸ Subscriptions.</li>
            <li>Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period.</li>
            <li>Free usage remains available without a subscription, with fewer features.</li>
            <li>Refunds are handled by Apple per their policies and local law.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Data & Privacy</h2>
          <p className="text-[var(--color-muted)]">
            See our <a href="/privacy" className="underline">Privacy Policy</a> for details on data handling,
            iCloud sync, notifications, and your choices.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Acceptable Use</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--color-muted)]">
            <li>Do not reverse engineer, modify, or resell the app.</li>
            <li>Do not attempt to disrupt service or compromise security.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Disclaimer</h2>
          <p className="text-[var(--color-muted)]">
            Bloxy is provided “as is,” without warranties of any kind. We are not liable for damages resulting from use
            of the app to the extent permitted by law.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Termination</h2>
          <p className="text-[var(--color-muted)]">
            We may suspend or terminate access for violations of these terms. You may stop using Bloxy at any time by
            deleting the app.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Changes to These Terms</h2>
          <p className="text-[var(--color-muted)]">
            We may update these terms periodically. Continued use after updates constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mt-10 space-y-2">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-[var(--color-muted)]">Questions? Email us at bloxyapp@gmail.com.</p>
          <p className="text-sm opacity-70">Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}


