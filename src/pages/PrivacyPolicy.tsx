import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Zasady ochrany osobnych udajov | Portfolio"
        description="Informacie o ochrane osobnych udajov, spracovani dat a kontaktnych moznostiach."
        path="/privacy-policy"
      />
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto max-w-4xl px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Zásady ochrany osobných údajov</h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Úvod</h2>
            <p>
              Táto stránka ("web") je prevádzkovaná MarkoTkac ("my", "nás" alebo "vy"). 
              Táto stránka ochrany osobných údajov vysvetľuje naše postupy týkajúce sa zbierania, 
              používania, zverejňovania a ochrany vašich informácií, keď využívate náš web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Aké údaje zbierame</h2>
            <p>
              Zbierame iba nasledujúce osobné údaje, ktoré dobrovoľne poskytnete prostredníctvom 
              nášho kontaktného formulára:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Vaše meno</li>
              <li>Vaša e-mailová adresa</li>
              <li>Váš odkaz na správu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Ako používame vaše údaje</h2>
            <p>
              Vaše osobné údaje používame výhradne na:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Spracovanie a odvetenie na vašu správu cez kontaktný formulár</li>
              <li>Komunikáciu s vami ohľadne vášho projektu</li>
              <li>Zlepšenie nášho webového stránky (anonymne)</li>
            </ul>
            <p className="mt-4">
              <strong>Nebudeme:</strong> Vaše údaje nikdy nepredávame, neprenajímame ani nezdieľame 
              s tretími stranami bez vášho výslovného súhlasu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Ako chráníme vaše údaje</h2>
            <p>
              Vaše osobné údaje sa posielajú na servery Web3Forms, ktorá poskytuje bezpečné 
              spracovanie formulárov. Všetky údaje sa prenášajú cez šifrované pripojenie HTTPS.
            </p>
            <p className="mt-4">
              Uchovávame vaše údaje len po dobu nevyhnutnú na spracovanie vašej správy a jej 
              zodpovedania. Po zodpovedaní vašej správy sa údaje archivujú alebo bezpečne vytriedajú.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
            <p>
              Náš web v súčasnosti nepoužíva cookies pre sledovanie alebo analytiku. 
              Cookies sa môžu používať len pre základnú funkčnosť webovej stránky (napríklad 
              uchovávanie preferencií).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Vaše práva</h2>
            <p>
              V súlade s GDPR a slovenskými zákonmi máte právo na:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Prístup:</strong> Požiadať nás o kópiu vašich osobných údajov</li>
              <li><strong>Opravu:</strong> Požiadať o opravu nepresných alebo neúplných údajov</li>
              <li><strong>Vymazanie:</strong> Požiadať o vymazanie vašich osobných údajov</li>
              <li><strong>Obmedzenie:</strong> Požiadať o obmedzenie spracovávania</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Kontakt na nás</h2>
            <p>
              Ak máte akékoľvek otázky o tejto politike ochrany osobných údajov alebo si chcete 
              uplatniť svoje práva, kontaktujte nás na:
            </p>
            <div className="mt-4 p-4 bg-secondary/30 rounded">
              <p><strong>Email:</strong> markotkac12@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Zmeny tejto politiky</h2>
            <p>
              Túto politiku ochrany osobných údajov aktualizujeme v prípade zmien v našom 
              spracovaní osobných údajov. Budeme vás informovať o všetkých zmaterializovateľných 
              zmenách.
            </p>
            <p className="mt-4 text-sm">Naposledy aktualizované: {new Date().toLocaleDateString("sk-SK")}</p>
          </section>
        </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-foreground text-background font-mono text-sm hover:bg-muted-foreground transition-colors"
            >
              ← Späť na domovskú stránku
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
