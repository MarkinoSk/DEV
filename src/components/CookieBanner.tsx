import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Skontroluj či sú cookies už akceptované
    const cookiesAccepted = localStorage.getItem("cookies_accepted");
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies_accepted", "true");
    localStorage.setItem("cookies_accepted_date", new Date().toISOString());
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookies_accepted", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm border-t border-border p-4 md:p-6 z-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="font-mono text-sm text-muted-foreground mb-2">🍪 COOKIES</p>
            <p className="text-sm md:text-base text-foreground">
              Táto stránka používa cookies na zlepšenie vašej skúsenosti. 
              Používame len základné cookies nevyhnutné pre funkčnosť webu. 
              Pre viac informácií, prečítajte si{" "}
              <Link to="/privacy-policy" className="underline hover:text-muted-foreground">
                zásady ochrany osobných údajov
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={handleDecline}
              className="px-4 py-2 font-mono text-sm border border-border hover:bg-secondary transition-colors whitespace-nowrap"
            >
              Odmietnuť
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 font-mono text-sm bg-foreground text-background hover:bg-muted-foreground transition-colors whitespace-nowrap"
            >
              Súhlasím
            </button>
            <button
              onClick={handleDecline}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Zatvoriť"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
