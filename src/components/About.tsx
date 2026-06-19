import BlackHole from "./BlackHole";

export default function About() {
  const skills = [
    "HTML / CSS",
    "JavaScript",
    "React",
    "Python",
    "SQL",
    "Git",
  ];

  return (
    <section id="o-mne" className="section-performance py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 hidden md:block">
        <BlackHole />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="font-mono text-muted-foreground text-sm mb-4">
              [ 01 / O MNE ]
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              KTO SOM<span className="text-muted-foreground">?</span>
            </h2>
            <div className="space-y-5 sm:space-y-6 text-muted-foreground text-base sm:text-lg">
              <p>
                Som študent so záľubou vo webovom vývoji. Špecializujem sa na 
                tvorbu moderných a funkčných webových stránok, ktoré nielen 
                dobre vyzerajú, ale aj perfektne fungujú.
              </p>
              <p>
                Verím, že dobrý web je kombináciou čistého dizajnu, 
                rýchlosti a používateľskej prívetivosti. Každý projekt 
                beriem ako príležitosť naučiť sa niečo nové.
              </p>
              
            </div>
          </div>

          <div className="relative">
            {/* 3D Card effect */}
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="border border-border p-6 sm:p-8 md:p-12 bg-card relative transform transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-foreground" />
                <div className="absolute -top-px -right-px w-4 h-4 border-t border-r border-foreground" />
                <div className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-foreground" />
                <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-foreground" />
                
                <h3 className="font-mono text-sm text-muted-foreground mb-6">
                  SKILLS.exe
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 border border-border text-sm font-mono hover:border-foreground hover:bg-foreground hover:text-background transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Shadow */}
              <div className="absolute inset-0 border border-foreground/20 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
