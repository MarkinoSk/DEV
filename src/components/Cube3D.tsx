export default function Cube3D() {
  return (
    <div className="perspective-1000 w-40 h-40 md:w-56 md:h-56">
      <div className="relative w-full h-full preserve-3d animate-rotate-cube">
        {/* Front */}
        <div 
          className="absolute w-full h-full border border-foreground/30 bg-background/50 backdrop-blur-sm"
          style={{ transform: "translateZ(80px)" }}
        />
        {/* Back */}
        <div 
          className="absolute w-full h-full border border-foreground/30 bg-background/50 backdrop-blur-sm"
          style={{ transform: "rotateY(180deg) translateZ(80px)" }}
        />
        {/* Right */}
        <div 
          className="absolute w-full h-full border border-foreground/30 bg-background/50 backdrop-blur-sm"
          style={{ transform: "rotateY(90deg) translateZ(80px)" }}
        />
        {/* Left */}
        <div 
          className="absolute w-full h-full border border-foreground/30 bg-background/50 backdrop-blur-sm"
          style={{ transform: "rotateY(-90deg) translateZ(80px)" }}
        />
        {/* Top */}
        <div 
          className="absolute w-full h-full border border-foreground/30 bg-background/50 backdrop-blur-sm"
          style={{ transform: "rotateX(90deg) translateZ(80px)" }}
        />
        {/* Bottom */}
        <div 
          className="absolute w-full h-full border border-foreground/30 bg-background/50 backdrop-blur-sm"
          style={{ transform: "rotateX(-90deg) translateZ(80px)" }}
        />
      </div>
    </div>
  );
}
