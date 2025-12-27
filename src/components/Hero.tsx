import Cube3D from "./Cube3D";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_0%_15%)_0%,_transparent_70%)] opacity-50" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(hsl(0 0% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px"
        }} />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="font-mono text-muted-foreground text-sm md:text-base mb-4 opacity-0 animate-slide-up">
            [ ŠTUDENT / WEB DEVELOPER ]
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-slide-up delay-100">
            TVORÍM
            <br />
            <span className="text-muted-foreground">DIGITÁLNE</span>
            <br />
            ZÁŽITKY
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-slide-up delay-200">
            Vyvíjam moderné, rýchle a responzívne webové stránky
            s dôrazom na detail a používateľský zážitok.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-slide-up delay-300">
            <a 
              href="#projekty" 
              className="px-8 py-4 bg-foreground text-background font-mono text-sm hover:bg-muted-foreground transition-colors"
            >
              ZOBRAZIŤ PROJEKTY
            </a>
            <a 
              href="#kontakt" 
              className="px-8 py-4 border border-foreground font-mono text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              KONTAKTOVAŤ
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end opacity-0 animate-fade-in delay-400">
          <div className="animate-float">
            <Cube3D />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-500">
        <span className="font-mono text-xs text-muted-foreground">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
