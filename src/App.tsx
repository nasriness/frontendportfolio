/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CustomCursor } from './components/CustomCursor';
import { Marquee } from './components/Marquee';
import { BackgroundElements } from './components/BackgroundElements';
import { Hero } from './components/Hero';
import { StoryIntro } from './components/StoryIntro';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { WhatIBuild } from './components/WhatIBuild';
import { WhyMe } from './components/WhyMe';
import { Pricing } from './components/Pricing';
import { SocialProof } from './components/SocialProof';
import { Contact } from './components/Contact';
import { FloatingCTA } from './components/FloatingCTA';
import { AnimatedStickers } from './components/AnimatedStickers';

export default function App() {
  return (
    <main className="relative min-h-screen bg-dark-900 text-white font-sans w-full md:cursor-none">
      <CustomCursor />
      <BackgroundElements />
      <AnimatedStickers />
      
      <Hero />
      <Marquee />
      <StoryIntro />
      <AboutMe />
      <Projects />
      <WhatIBuild />
      <Pricing />
      <WhyMe />
      <SocialProof />
      <Contact />
      
      <FloatingCTA />
      
      <footer className="py-8 text-center text-white/30 text-sm border-t border-white/5 relative z-10">
        <p>© {new Date().getFullYear()} Premium Web Dev. Crafted with code and motion.</p>
      </footer>
    </main>
  );
}

