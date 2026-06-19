export default function BlackHole() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central black hole */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Event horizon glow */}
        <div className="absolute w-64 h-64 md:w-96 md:h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-transparent via-foreground/5 to-transparent animate-pulse-glow" />
        
        {/* Black hole center */}
        <div className="absolute w-20 h-20 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background shadow-[0_0_60px_30px_hsl(0_0%_0%)]" />

        {/* Orbiting rings with dots */}
        {[1, 2, 3, 4, 5].map((ring) => (
          <div
            key={ring}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/10"
            style={{
              width: `${ring * 80 + 60}px`,
              height: `${ring * 80 + 60}px`,
              animation: `spin ${15 + ring * 5}s linear infinite ${ring % 2 === 0 ? 'reverse' : ''}`,
            }}
          >
            {/* Dots on each ring */}
            {Array.from({ length: 6 + ring * 2 }).map((_, i, arr) => {
              const angle = (360 / arr.length) * i;
              const isWhite = (i + ring) % 2 === 0;
              const size = Math.random() > 0.5 ? 'w-1 h-1' : 'w-1.5 h-1.5 md:w-2 md:h-2';
              return (
                <div
                  key={i}
                  className={`absolute rounded-full ${isWhite ? 'bg-foreground' : 'bg-foreground/30'} ${size}`}
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${angle}deg) translateX(${(ring * 80 + 60) / 2}px) translateY(-50%)`,
                    opacity: 0.3 + Math.random() * 0.7,
                  }}
                />
              );
            })}
          </div>
        ))}

        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() > 0.7 ? 2 : 1;
          const distance = 50 + Math.random() * 200;
          const duration = 10 + Math.random() * 20;
          const delay = Math.random() * -20;
          
          return (
            <div
              key={`particle-${i}`}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${distance * 2}px`,
                height: `${distance * 2}px`,
                animation: `spin ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            >
              <div
                className={`absolute rounded-full ${i % 2 === 0 ? 'bg-foreground' : 'bg-foreground/40'}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
