import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Rate limiting - max 1 správa za 60 sekúnd
    const now = Date.now();
    if (now - lastSubmitTime < 60000) {
      toast.error("Počkaj prosím 60 sekúnd pred ďalšou správou.");
      return;
    }

    if (!web3FormsAccessKey) {
      toast.error("Kontaktný formulár nie je nakonfigurovaný.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Kontakt",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success("Správa bola odoslaná! Ozvem sa čo najskôr.");
        setFormData({ name: "", email: "", message: "" });
        setLastSubmitTime(now);
      } else {
        toast.error("Chyba pri odosielaní správy. Skúste prosím neskôr.");
      }
    } catch (error) {
      toast.error("Chyba pri odosielaní správy. Skúste prosím neskôr.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="kontakt" className="section-performance py-20 md:py-32 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-muted-foreground text-sm mb-4">
            [ 04 / KONTAKT ]
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6">
            NAPÍŠ MI<span className="text-muted-foreground">_</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Máš projekt na mysli? Neváhaj ma kontaktovať.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="font-mono text-sm text-muted-foreground">
                MENO
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border px-4 py-4 font-mono text-sm focus:outline-none focus:border-foreground transition-colors"
                placeholder="Tvoje meno"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-mono text-sm text-muted-foreground">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border px-4 py-4 font-mono text-sm focus:outline-none focus:border-foreground transition-colors"
                placeholder="tvoj@email.sk"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="font-mono text-sm text-muted-foreground">
              SPRÁVA
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-background border border-border px-4 py-4 font-mono text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
              placeholder="Opíš svoj projekt alebo otázku..."
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className="mt-1 w-4 h-4 cursor-pointer"
            />
            <label htmlFor="consent" className="font-mono text-sm text-muted-foreground cursor-pointer">
              Súhlasím so spracovaním mojich osobných údajov podľa{" "}
              <a href="/privacy-policy" className="text-foreground hover:text-muted-foreground underline">
                zásad ochrany osobných údajov
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !consent}
            className="w-full md:w-auto px-12 py-4 bg-foreground text-background font-mono text-sm hover:bg-muted-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
          >
            {isSubmitting ? (
              "ODOSIELAM..."
            ) : (
              <>
                ODOSLAŤ
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-16 pt-16 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            {/* <div>
              <p className="font-mono text-sm text-muted-foreground mb-1">EMAIL</p>
              <a href="mailto:tvoj@email.sk" className="text-lg hover:text-muted-foreground transition-colors">
                tvoj@email.sk
              </a>
            </div> */}
            <div>
              <p className="font-mono text-sm text-muted-foreground mb-1">SOCIÁLNE SIETE</p>
              <div className="flex gap-6">
                {/* <a href="#" className="hover:text-muted-foreground transition-colors">
                  LinkedIn
                </a> */}
                <a href="https://github.com/MarkinoSk" className="hover:text-muted-foreground transition-colors">
                  GitHub
                </a>
                {/* <a href="#" className="hover:text-muted-foreground transition-colors">
                  Instagram
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
