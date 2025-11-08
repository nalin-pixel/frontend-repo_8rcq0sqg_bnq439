import React from 'react';
import Hero3DViewer from './components/Hero3DViewer';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Booking from './components/Booking';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <header className="sticky top-0 z-20 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#overview" className="font-bold tracking-tight">iPhone 17 Pro Max</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#overview" className="hover:text-white">Overview</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#booking" className="hover:text-white">Booking</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3DViewer />
        <Features />
        <Gallery />
        <Booking />
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} iPhone 17 Pro Max. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#overview" className="hover:text-white">Overview</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#booking" className="hover:text-white">Booking</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
