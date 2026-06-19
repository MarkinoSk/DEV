import { Check } from "lucide-react";

export default function Services() {
  return (
    <section id="sluzby" className="section-performance py-20 md:py-32 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-muted-foreground text-sm mb-4">
            [ 02 / SLUŽBY ]
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6">
            SLUŽBY<span className="text-muted-foreground">_</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Vytvorím ti modernú webovú stránku na mieru.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative group">
            <div className="h-full border border-foreground bg-card p-6 sm:p-8 flex flex-col transition-all duration-300">
              <h3 className="font-mono text-xl mb-2">WEB</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Moderná webová stránka ideálna pre osobné portfólio alebo malé firmy.
              </p>

              <div className="mb-8">
                <span className="text-muted-foreground line-through text-2xl mr-3">
                  399€
                </span>
                <span className="text-4xl md:text-5xl font-bold">
                  250€
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">Responzívny dizajn</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">Podstránky</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">Kontaktný formulár</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">Indexovanie stránky</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">HTML / CSS / JS</span>
                </li>
                {/* <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">React</span>
                </li> */}
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">SEO optimalizácia</span>
                </li>
              </ul>

              <a
                href="#kontakt"
                className="w-full py-4 text-center font-mono text-sm transition-colors bg-foreground text-background hover:bg-muted-foreground"
              >
                KONTAKTOVAŤ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
