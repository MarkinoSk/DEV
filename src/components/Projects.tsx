import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Projekt 01",
      description: "Garros.sk je moja prvá webová stránka, vytvorená pomocou HTML a CSS, ktorá slúži ako jednoduchá prezentačná stránka pre servis počítačov. Cieľom projektu bolo naučiť sa základy tvorby webu, prácu s rozložením stránky, responzivitou a vizuálnym štýlom bez použitia frameworkov. Web má prehľadnú štruktúru, jasne prezentuje ponúkané služby a kontaktné informácie a predstavuje môj prvý praktický krok do sveta web developmentu.",
      url: "https://garros.sk",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Projekt 02",
      description: "Web jaz-install.sk je responzívna prezentačná stránka vytvorená v React pre spoločnosť JaZ Install s. r. o., ktorá poskytuje profesionálne elektroinštalačné a stavebné služby so zameraním na spoľahlivé a bezpečné riešenia v oblasti elektrických a stavebných montáží v zahraničí. Stránka prezentuje služby firmy, informácie o skúsenostiach tímu a kontaktné údaje, pričom kladie dôraz na moderný dizajn, prehľadnú štruktúru a plynulú používateľskú skúsenosť danku React architektúre.",
      url: "https://jaz-install.sk",
      tags: ["React", "Tailwind CSS"],
    },
    // {
    //   title: "Projekt 03",
    //   description: "Krátky popis projektu a použité technológie.",
    //   url: "https://example.com",
    //   tags: ["Vue", "SCSS"],
    // },
    // {
    //   title: "Projekt 04",
    //   description: "Krátky popis projektu a použité technológie.",
    //   url: "https://example.com",
    //   tags: ["WordPress", "PHP"],
    // },
  ];

  return (
    <section id="projekty" className="py-24 md:py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-muted-foreground text-sm mb-4">
            [ 03 / PROJEKTY ]
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            MOJE PRÁCE<span className="text-muted-foreground">//</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ukážky webov, na ktorých som pracoval.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-border bg-card p-8 transition-all duration-300 hover:border-foreground"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-foreground/0 group-hover:border-foreground/100 transition-colors" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-foreground/0 group-hover:border-foreground/100 transition-colors" />

              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-muted-foreground text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1 border border-border text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover line animation */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono text-sm">
            A ďalšie projekty pribúdajú...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
