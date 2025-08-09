export const metadata = {
  title: "Privacy Policy — Bloxy",
  description: "How Bloxy handles your data: local-first storage, optional iCloud sync, no selling of personal data.",
};

import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-12 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-[var(--color-muted)]">
          This Privacy Policy explains how Bloxy ("we", "our", or "us") handles your information when you use the Bloxy
          mobile app and this website. We designed Bloxy to be private by default and to minimize data collection.
        </p>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Summary</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--color-muted)]">
            <li>We do not sell your personal data.</li>
            <li>Your data is stored on your device; iCloud sync is optional and off unless enabled in iOS Settings.</li>
            <li>No third‑party trackers are embedded in the app.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Data We Process</h2>
          <p className="text-[var(--color-muted)]">We process only what is necessary to run Bloxy:</p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--color-muted)]">
            <li>Tasks and metadata (title, schedule, completion state)</li>
            <li>Gameplay state (board, pieces earned, scores, themes)</li>
            <li>App preferences (theme, notifications, settings)</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Where Your Data Lives</h2>
          <p className="text-[var(--color-muted)]">
            By default, data is stored locally on your device. If you enable iCloud for Bloxy in your device settings,
            your data is synced via Apple’s iCloud to keep it available across devices signed into your Apple ID.
            We do not run servers that store user content.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Notifications</h2>
          <p className="text-[var(--color-muted)]">If you allow notifications, Bloxy stores schedules locally to deliver reminders.</p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Analytics</h2>
          <p className="text-[var(--color-muted)]">
            We currently do not collect analytics. If we introduce privacy‑respecting, opt‑in analytics in the future,
            we will update this policy and provide in‑app controls.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Third‑Party Services</h2>
          <p className="text-[var(--color-muted)]">
            iCloud is provided by Apple and governed by Apple’s terms and privacy policy. If you use Tally forms on our
            website (e.g., waitlists), submissions are processed by Tally per their terms.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Data Retention & Deletion</h2>
          <p className="text-[var(--color-muted)]">
            Delete the app to remove local data. If iCloud sync is enabled, data may persist in iCloud backups managed by
            Apple. You can manage iCloud storage in iOS settings. We do not keep server copies.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Children’s Privacy</h2>
          <p className="text-[var(--color-muted)]">Bloxy is not directed to children under 13, and we do not knowingly collect data from children.</p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Your Choices</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--color-muted)]">
            <li>Enable/disable iCloud sync in iOS Settings ▸ Your Apple ID ▸ iCloud ▸ Apps Using iCloud.</li>
            <li>Control notifications in iOS Settings ▸ Notifications ▸ Bloxy.</li>
            <li>Delete local data by removing the app.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Changes to This Policy</h2>
          <p className="text-[var(--color-muted)]">We may update this policy. We will post updates here and adjust the effective date below.</p>
        </section>

        <section className="mt-10 space-y-2">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-[var(--color-muted)]">Questions? Email us at support@bloxy.app.</p>
          <p className="text-sm opacity-70">Effective date: {new Date().toLocaleDateString()}</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}


