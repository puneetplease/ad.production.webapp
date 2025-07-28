import React from 'react';

const CombinedGlowingBackground = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Combined Background Effect */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80"></div>

        {/* Neon Grid Layer */}
        <div className="absolute inset-0">
          {/* Primary grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(hsla(var(--foreground) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsla(var(--foreground) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Secondary larger grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(hsla(var(--primary) / 0.2) 1px, transparent 1px),
                linear-gradient(90deg, hsla(var(--primary) / 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Floating Gradient Orbs Layer */}
        <div className="absolute inset-0">
          {/* Large orb */}
          <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse" />

          {/* Medium orb */}
          <div
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-pulse"
            style={{ animationDelay: '2s' }}
          />

          {/* Small orb */}
          <div
            className="absolute bottom-0 -right-1/4 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"
            style={{ animationDelay: '4s' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CombinedGlowingBackground;
