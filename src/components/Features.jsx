import React from 'react';
import { Battery, Cpu, Camera, Shield } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'A19 Pro Neural Engine',
    desc: 'Blazing-fast performance and on-device AI that powers next‑gen experiences without compromising privacy.'
  },
  {
    icon: Camera,
    title: 'Quad‑Lens Fusion Camera',
    desc: '48MP main, periscope telephoto, ultra‑wide macro — crystal‑clear photos and 8K video in any light.'
  },
  {
    icon: Battery,
    title: '2‑Day Battery',
    desc: 'Advanced silicon and adaptive refresh deliver up to 48 hours of typical use on a single charge.'
  },
  {
    icon: Shield,
    title: 'Titanium + Ceramic Shield',
    desc: 'Premium materials with IP68 water resistance for unmatched durability and lightness.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Features</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Designed for creators, gamers, and everyone in between. Experience the future of mobile computing.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <Icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
