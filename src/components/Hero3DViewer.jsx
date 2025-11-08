import React from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

const Hero3DViewer = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="overview">
      <div className="absolute inset-0">
        {/* Interactive 3D scene */}
        <Spline
          scene="https://prod.spline.design/NCmG9qv5m83w0w8i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability - doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Hero copy */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
          iPhone 17 Pro Max
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
          A leap in performance, battery life, and immersive experiences — now in a sleek titanium design.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => handleScrollTo('features')}
            className="rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition"
          >
            Explore Features
          </button>
          <button
            onClick={() => handleScrollTo('booking')}
            className="rounded-full bg-indigo-500 px-6 py-3 text-white hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/30"
          >
            Book Now
          </button>
        </div>

        <button
          onClick={() => handleScrollTo('features')}
          aria-label="Scroll to features"
          className="absolute bottom-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white/100 hover:border-white/40 transition"
        >
          <ChevronDown />
        </button>
      </div>
    </section>
  );
};

export default Hero3DViewer;
