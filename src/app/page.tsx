import Image from "next/image";
import Reveal from "@/components/Reveal";
import StoreBadges from "@/components/StoreBadges";
import ThemeShowcase from "@/components/ThemeShowcase";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <div className="font-sans">
      <Script
        id="ld-json-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does Bloxy work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Bloxy combines task management with block-stacking gameplay. Complete your daily tasks and they become game pieces that you can drop and stack in an infinite block-stacking game.",
                },
              },
              {
                "@type": "Question",
                name: "Can I play without completing tasks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No, you need completed tasks to generate game pieces. This is the core concept of Bloxy - turning your productivity into gameplay rewards.",
                },
              },
              {
                "@type": "Question",
                name: "Is the block-stacking game infinite?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The game continues indefinitely and your state is saved between sessions.",
                },
              },
            ],
          }),
        }}
      />
      {/* Sticky Nav (global) */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-[var(--color-border)]">
        <div className="container">
          <nav className="py-3 grid grid-cols-[auto_1fr_auto] items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
              <Image src="/assets/images/icon.png" alt="Bloxy logo" width={40} height={40} className="rounded-md shadow-sm" priority />
              <span className="text-lg sm:text-xl font-semibold tracking-tight">Bloxy</span>
            </Link>
            <nav className="hidden sm:flex items-center justify-center gap-6 text-sm text-[var(--color-muted)]" aria-label="Main navigation">
              <a className="hover:text-white transition" href="#features">Features</a>
              <a className="hover:text-white transition" href="#faqs">FAQs</a>
              <Link className="hover:text-white transition" href="/contact">Contact</Link>
            </nav>
            <div className="hidden sm:flex items-center gap-2 justify-end">
              <a href="#download" className="btn-primary">Get the app</a>
            </div>
          </nav>
        </div>
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 size-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent blur-2xl" />
        </div>
        <div className="container pt-10 pb-10 sm:pt-16 sm:pb-16">

          <div className="mt-6 grid items-center gap-10 sm:grid-cols-2">
            <Reveal className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Build better habits, one block at a time.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[var(--color-muted)] max-w-xl mx-auto sm:mx-0">
                Bloxy turns your day into a satisfying game. Finish tasks to drop blocks, clear lines to earn points, and unlock beautiful block themes.
              </p>
              <StoreBadges className="mt-8 flex justify-center sm:justify-start" />
            </Reveal>
            <Reveal className="relative" delayMs={100}>
              <div className="card p-2 sm:p-3 max-w-[324px] sm:max-w-[378px] md:max-w-[432px] mx-auto">
                <Image
                  src="/assets/screens/today.png"
                  alt="Bloxy Today screenshot"
                  width={900}
                  height={1800}
                  sizes="(min-width: 1024px) 36vw, (min-width: 640px) 45vw, 90vw"
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust/Badges placeholder */}
      {/* <section className="container py-10 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="card h-16 flex items-center justify-center text-sm text-[var(--color-muted)]">
              Loved by productive people
            </div>
          ))}
        </div>
      </section> */}

      {/* Feature tiles */}
      <section id="features" className="container py-10 sm:py-20">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-4xl font-bold">A smarter, playful approach</h2>
          <p className="mt-2 text-[var(--color-muted)] max-w-2xl mx-auto sm:mx-0">
            Complete tasks to place blocks and build momentum. Bloxy rewards consistency rather than perfection.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <Reveal className="card p-5 text-center sm:text-left" delayMs={60}>
            <h3 className="text-lg sm:text-xl font-bold">Turn your day into a game</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Finish tasks, drop pieces, and clear lines to earn points.</p>
            <div className="mt-4">
              <ThemeShowcase baseSrc="/assets/screens/game.png" altSrc="/assets/screens/game-theme.png" alt="Game with different theme" sizes="(min-width: 1024px) 33vw, 100vw" />
            </div>
          </Reveal>
          <Reveal className="card p-5 text-center sm:text-left" delayMs={120}>
            <h3 className="text-lg sm:text-xl font-bold">Unlock beautiful block themes</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Earn points to shop for unique styles in the collection.</p>
            <div className="mt-4">
              <ThemeShowcase baseSrc="/assets/screens/themes.png" altSrc="/assets/screens/themes-other.png" alt="Themes switching" sizes="(min-width: 1024px) 33vw, 100vw" />
            </div>
          </Reveal>
          <Reveal className="card p-5 text-center sm:text-left" delayMs={180}>
            <h3 className="text-lg sm:text-xl font-bold">Track your progress</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">See streaks, activity, and trends that help you stay consistent.</p>
            <div className="mt-4">
              <div className="relative overflow-hidden rounded-xl border border-[var(--color-border)]">
                <Image src="/assets/screens/stats.png" alt="Stats" width={900} height={1800} sizes="(min-width: 1024px) 33vw, 100vw" className="w-full h-auto" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="container py-10 sm:py-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-center">Frequently asked questions</h3>
        <div className="mt-8 max-w-3xl mx-auto space-y-8">
          {[
            {
              title: undefined,
              items: [
                {
                  q: "How does Bloxy work?",
                  a: "Bloxy combines task management with block-stacking gameplay. Complete your daily tasks and they become game pieces that you can drop and stack in an infinite block-stacking game. The more tasks you complete, the more pieces you have to play with!",
                },
                {
                  q: "Can I play without completing tasks?",
                  a: "No, you need completed tasks to generate game pieces. This is the core concept of Bloxy - turning your productivity into gameplay rewards.",
                },
                {
                  q: "What happens to my game when I complete tasks?",
                  a: "When you complete tasks, they automatically become available as game pieces in your block-stacking game. You can then drop and place these pieces on your game board.",
                },
              ],
            },
            {
              title: "Tasks & Productivity",
              items: [
                { q: "How do I create and manage tasks?", a: "Tap the '+' button on the home screen to create new tasks. You can edit tasks by tapping on them, mark them complete by tapping the checkbox, and delete them by swiping or using the edit options." },
                { q: "Can I edit tasks after creating them?", a: "Yes! Tap on any task to edit its title, description, or other details. Changes are saved automatically." },
                { q: "What happens if I miss a day?", a: "If you don’t complete all your tasks for the day, a ‘garbage line’ is added to your game board to keep things challenging. Your streak resets, but your data and progress are preserved so you can bounce back the next day." },
              ],
            },
            {
              title: "Game & Progress",
              items: [
                { q: "Is the block-stacking game infinite?", a: "Yes! The game continues indefinitely. Your game state is saved between sessions, so you can always come back and continue playing with new pieces from completed tasks." },
                { q: "How is my score calculated?", a: "Your score increases when you clear lines in the block-stacking game. The more lines you clear at once, the higher your score multiplier. Completed tasks also contribute to your overall productivity score." },
                { q: "Can I see my productivity statistics?", a: "Yes! Check the Stats tab to see your daily task completion rates, game scores, streaks, and other productivity metrics over time." },
              ],
            },
            {
              title: "Data & Privacy",
              items: [
                { q: "Is my data backed up?", a: "Bloxy supports iCloud backup and sync on iOS. Make sure iCloud for Bloxy is enabled in your device settings to keep your data synced and safe across devices." },
                { q: "Is my data private?", a: "Absolutely! All your data is stored locally on your device. We don't collect personal information or share any data with third parties. Your tasks and game progress stay completely private." },
                { q: "What happens if I delete the app?", a: "If you delete the app, all your local data (tasks, game progress, stats) will be lost unless you've backed up your data first. Make sure to turn on iCloud sync in settings if you want to keep it." },
              ],
            },
            {
              title: "Customization",
              items: [
                { q: "Can I customize the game blocks?", a: "Yes! Go to Settings > Block Themes to customize the colors and appearance of your game pieces. Earn points from completings tasks and playing the game to unlock new themes." },
                { q: "Can I change notification settings?", a: "Yes! Visit Settings > Notifications to customize when and how you receive reminders about tasks, streaks, and other app notifications." },
                { q: "Is there a dark mode?", a: "Yes! It is recommended to use dark mode for the best experience but you can also choose between light, dark, and system default." },
              ],
            },
            {
              title: "Troubleshooting",
              items: [
                { q: "The app is running slowly or crashing", a: "Force close the app (swipe up on iOS), then reopen. If problems persist, try restarting your device. Contact us if issues continue." },
                { q: "My tasks or game progress disappeared", a: "Data is stored locally by default and only recoverable if you've enabled iCloud sync and have a recent backup. Ensure you're signed into the same Apple ID and iCloud is enabled for Bloxy. Without iCloud, it can't be recovered." },
                { q: "How do I report bugs or request features?", a: "Use the 'Contact Us' option in Settings to report bugs, suggest features, or send general feedback. We read all submissions and use them to improve Bloxy." },
              ],
            },
          ].map((section, idx) => (
            <div key={idx}>
              {section.title && (
                <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
              )}
              <div className="divide-y divide-[var(--color-border)]">
                {section.items.map((item) => (
                  <details key={item.q} className="group open:pb-4">
                    <summary className="cursor-pointer py-4 text-left list-none font-medium flex items-center justify-between">
                      {item.q}
                      <span className="text-[var(--color-muted)]">+</span>
                    </summary>
                    <p className="text-[var(--color-muted)]">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="container py-14 sm:py-20">
        <div className="card p-8 sm:p-10 text-center">
          <h4 className="text-2xl sm:text-4xl font-extrabold">Your Health. Your Journey.</h4>
          <p className="mt-2 text-[var(--color-muted)]">Track progress, celebrate wins, and build lasting habits.</p>
          <StoreBadges className="mt-6 flex justify-center" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
