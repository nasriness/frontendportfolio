import { motion } from 'motion/react';
import { Target, Zap, Smartphone, DollarSign, Layout, Heart } from 'lucide-react';

export function WhyMe() {
  return (
    <section className="py-32 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-medium mb-6 leading-tight"
          >
            Why partner with me?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-xl max-w-2xl mx-auto"
          >
            I treat every project like my own. My focus isn't just delivering code, but delivering a scalable, premium business asset.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[250px]">
          
          {/* Card 1: Fast Delivery (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 md:col-span-2 relative overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 p-8 text-gold-500/20 group-hover:text-gold-400 group-hover:scale-110 transition-all duration-500">
              <Zap className="w-24 h-24" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/5 group-hover:from-gold-500/10 group-hover:to-transparent transition-all duration-500" />
            <h3 className="text-2xl font-medium mb-2 relative z-10">Lightning Fast</h3>
            <p className="text-white/50 relative z-10 max-w-md">Iterative builds and transparent communication. No long periods of darkness. You see progress every step of the way.</p>
          </motion.div>

          {/* Card 2: Mobile First */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-8 relative overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-gold-500/10 transition-colors duration-500" />
            <Smartphone className="w-10 h-10 text-white/40 mb-auto group-hover:text-gold-400 transition-colors" />
            <h3 className="text-xl font-medium mb-2">Mobile Native</h3>
            <p className="text-white/50 text-sm">Flawless experience on every device size.</p>
          </motion.div>

          {/* Card 3: Design Detail */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 relative overflow-hidden group flex justify-center items-center cursor-pointer"
          >
            <div className="absolute inset-0 bg-dark-800/80 group-hover:bg-transparent transition-colors duration-500 z-10 flex flex-col items-center justify-center">
              <Layout className="w-8 h-8 text-white/50 mb-3" />
              <h3 className="text-xl font-medium">Pixel Perfect UX</h3>
            </div>
            {/* Cool wireframe background revealed on hover */}
            <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4 opacity-20 filter blur-[1px]">
              <div className="col-span-4 h-4 bg-gold-400 rounded-sm" />
              <div className="col-span-1 h-12 bg-white/50 rounded-sm" />
              <div className="col-span-3 h-12 bg-white/50 rounded-sm" />
              <div className="col-span-2 h-8 bg-white/30 rounded-sm" />
              <div className="col-span-2 h-8 bg-white/30 rounded-sm" />
            </div>
          </motion.div>

          {/* Card 4: Conversion Focused (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-8 md:col-span-2 relative overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-colors duration-700" />
            <div className="relative z-10 flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8 text-gold-400" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2">Designed for Conversion</h3>
                <p className="text-white/50 max-w-sm">Every single pixel is placed with intentionality to guide your users towards the action you want them to take. Beauty meets business strategy.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
