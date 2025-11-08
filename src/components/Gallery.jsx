import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gradient-to-b from-black to-gray-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Gallery</h2>
        <p className="mt-3 text-white/70 max-w-2xl">A glimpse of the craftsmanship and materials that make it iconic.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={src}
                alt={`iPhone 17 Pro Max gallery ${idx + 1}`}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
