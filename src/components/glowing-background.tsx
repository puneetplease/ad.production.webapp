import React from 'react';

const CombinedGlowingBackground = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Combined Background Effect */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-slate-900"></div>

        {/* Neon Grid Layer */}
        <div className="absolute inset-0">
          {/* Primary grid */}
          <div
            className="absolute inset-0 opacity-40 animate-grid-pulse"
            style={{
              backgroundImage: `
                linear-gradient(hsla(var(--primary-foreground) / 0.4) 1px, transparent 1px),
                linear-gradient(90deg, hsla(var(--primary-foreground) / 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Secondary larger grid */}
          <div
            className="absolute inset-0 opacity-40 animate-grid-pulse-reverse"
            style={{
              backgroundImage: `
                linear-gradient(hsla(var(--primary) / 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsla(var(--primary) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Glowing accent lines */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 animate-pulse" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Gradient Orbs Layer */}
        <div className="absolute inset-0">
          {/* Large orb */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-80 md:w-96 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />

          {/* Medium orb */}
          <div
            className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-72 md:w-80 bg-gradient-to-r from-secondary/50 to-primary/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: '2s' }}
          />

          {/* Small orb */}
          <div
            className="absolute bottom-1/4 left-1/3 w-56 h-56 sm:w-64 md:w-72 bg-gradient-to-r from-accent/50 to-secondary/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: '4s' }}
          />

          {/* Extra Small orb */}
          <div
            className="absolute top-2/3 right-1/3 w-48 h-48 sm:w-56 md:w-64 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: '1s' }}
          />

          {/* Tiny orb */}
          <div
            className="absolute top-1/6 right-1/6 w-40 h-40 sm:w-48 bg-gradient-to-r from-accent/40 to-primary/40 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"
            style={{ animationDelay: '3s' }}
          />

          {/* Additional small orbs for depth */}
          <div
            className="absolute bottom-1/6 right-2/3 w-32 h-32 sm:w-40 bg-gradient-to-r from-secondary/40 to-accent/40 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"
            style={{ animationDelay: '2.5s' }}
          />
        </div>

        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-black opacity-40" />

        {/* Additional atmospheric effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      </div>
    </div>
  );
};

export default CombinedGlowingBackground;
