import { motion } from 'motion/react';
import { MapPin, Sparkles, Code2, Globe } from 'lucide-react';

export function AboutMe() {
  return (
    <section id="about" className="py-32 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[auto]">
          
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-12 lg:col-span-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-gold-500/10 transition-colors duration-700" />
            
            <h2 className="text-sm font-mono text-gold-400 mb-4 tracking-wider uppercase">The human behind the pixels</h2>
            <h3 className="text-3xl md:text-5xl font-display font-medium mb-6 leading-tight relative z-10">
              I bridge the gap between <span className="text-white/50 italic">beautiful design</span> and <span className="text-white/50 italic">robust engineering</span>.
            </h3>
            
            <div className="space-y-4 text-white/60 text-lg max-w-2xl font-light relative z-10">
              <p>
                Hi, I'm Nasrin. I'm a freelance frontend developer and UX enthusiast deeply obsessed with the details. I don't just write code; I craft digital experiences that feel intuitive, look expensive, and perform flawlessly.
              </p>
              <p>
                Having worked with various startups, agencies, and founders, I understand that a website isn't just a digital brochure—it's your hardest working salesperson. My goal is to make sure it leaves a lasting impression.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 relative z-10">
              {['React.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Figma', 'Next.js'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full glass-panel text-sm text-white/80 border-white/5 group-hover:border-gold-500/20 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual / Abstract Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel lg:col-span-4 min-h-[400px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-dark-900/40 z-10 group-hover:bg-dark-900/20 transition-colors duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop" 
              alt="Abstract dark glass texture" 
              className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-dark-900/90 to-transparent">
              <div className="flex items-center gap-3 text-white/90 mb-2">
                <Sparkles className="w-5 h-5 text-gold-400" />
                <span className="font-medium">Design Obsessed</span>
              </div>
              <p className="text-sm text-white/50">Every micro-interaction is carefully considered.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-12 gap-6 mt-6">
            {/* Status Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-8 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white/40 text-sm mb-1 uppercase tracking-wider font-mono">Location</h4>
                  <p className="font-medium text-lg">Working Globally</p>
                </div>
              </div>
              <MapPin className="w-6 h-6 text-white/10" />
            </motion.div>

            {/* Availability Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel p-8 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center relative">
                  <span className="absolute inset-0 rounded-full animate-ping bg-green-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div>
                  <h4 className="text-white/40 text-sm mb-1 uppercase tracking-wider font-mono">Status</h4>
                  <p className="font-medium text-lg">Accepting New Projects</p>
                </div>
              </div>
              <Code2 className="w-6 h-6 text-white/10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
