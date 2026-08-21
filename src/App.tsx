import { TopBar, SideRail, Ticker, ManifestFooter } from "./components/Chrome";
import { Hero, StatsBand } from "./components/Hero";
import { Profile, Zones } from "./components/ProfileZones";
import { Experience } from "./components/Experience";
import { Credentials, ContactDock } from "./components/CredentialsContact";

export default function App() {
  return (
    <div className="min-h-screen bg-coal font-body text-paper">
      {/* lapisan ambient */}
      <div className="noise-overlay no-print" aria-hidden />

      <TopBar />
      <SideRail />

      <main>
        <Hero />
        <Ticker />
        <StatsBand />
        <Profile />
        <Zones />
        <Experience />
        <Credentials />
        <ContactDock />
      </main>

      <ManifestFooter />
    </div>
  );
}
