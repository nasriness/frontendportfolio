import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Pritam's Portfolio",
    category: "Developer Portfolio",
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2800&auto=format&fit=crop",
    year: "2024",
    link: "https://my-portfolio-7xuq.onrender.com/"
  },
  {
    title: "Nayaab E-Commerce",
    category: "Storefront UI",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2864&auto=format&fit=crop",
    year: "2024",
    link: "https://nayaabvscode.vercel.app/"
  },
  {
    title: "Creative Developer Portfolio",
    category: "Agency Portfolio",
    image: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=2874&auto=format&fit=crop",
    year: "2024",
    link: "https://rahul-portfolio-67if.onrender.com/#"
  }
];

export function Projects() {
  return (
    <section id="work" className="py-32 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">Selected Work</h2>
            <p className="text-white/50 max-w-md">Premium digital experiences built for forward-thinking brands.</p>
          </div>
          <button className="text-gold-400 font-medium flex items-center gap-2 hover:text-gold-300 transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.8 } }
              }}
              className={`group relative cursor-pointer block ${idx === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 ${idx === 2 ? 'aspect-[21/9]' : 'aspect-square md:aspect-[4/5]'}`}>
                <motion.div
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full relative"
                >
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, backgroundColor: "rgba(5,5,5,0.2)" },
                      hover: { opacity: 1, backgroundColor: "rgba(5,5,5,0.4)" }
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 z-10" 
                  />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]" />
                </motion.div>
                
                {/* Overlay content */}
                <div className="absolute p-8 bottom-0 left-0 w-full z-20 flex justify-between items-end bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent">
                  <div className="overflow-hidden">
                    <motion.p 
                      variants={{
                        initial: { y: 20, opacity: 0 },
                        hover: { y: 0, opacity: 1 }
                      }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-gold-400 mb-2 font-mono text-sm uppercase tracking-wider"
                    >
                      {project.category}
                    </motion.p>
                    <motion.h3 
                      variants={{
                        initial: { y: "15%", opacity: 0.9 },
                        hover: { y: 0, opacity: 1 }
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-3xl md:text-4xl font-display font-medium"
                    >
                      {project.title}
                    </motion.h3>
                  </div>
                  
                  <motion.div 
                    variants={{
                      initial: { scale: 0.8, opacity: 0, rotate: -45 },
                      hover: { scale: 1, opacity: 1, rotate: 0 }
                    }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    className="w-14 h-14 rounded-full bg-gold-500 text-dark-900 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
