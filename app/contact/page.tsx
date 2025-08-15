import Footer from "../components/Footer";
import TallyEmbed from "../components/TallyEmbed";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Bloxy team. Send a message via the form or email bloxyapp@gmail.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-12 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-[var(--color-muted)]">
          Have a bug to report, a feature request, or general feedback? Use the form below or email us at
          {" "}
          <a className="underline" href="mailto:bloxyapp@gmail.com">bloxyapp@gmail.com</a>.
        </p>

        <div className="mt-8 card p-6">
          <TallyEmbed
            formUrl="https://tally.so/embed/wQlOq8"
            title="Contact form"
          />
          <p className="mt-3 text-xs text-[var(--color-muted)]">
            Having trouble with the embedded form? Open it directly
            {" "}
            <a className="underline" href="https://tally.so/r/wQlOq8" target="_blank" rel="noreferrer">here</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}


