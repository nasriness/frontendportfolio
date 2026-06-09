import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "S. Pritam",
    role: "BCA Graduate",
    text: "Nasrin helped me build out my college project and the results were crazy good. The animations, the dark theme, everything just clicks. She took my rough ideas and made them look super professional for my submission.",
  },
  {
    name: "Rahul",
    role: "Freelancer",
    text: "I really needed a standout portfolio website to showcase my freelance work, and Nasrin absolutely delivered. The site is fast, highly interactive, and the premium feel is already helping me secure better clients.",
  },
  {
    name: "Anjali S.",
    role: "Startup Founder",
    text: "Honestly, the execution blew us away. The little interactive details she added without us even asking made the site feel so much more premium. Worth every single penny.",
  }
];

export function SocialProof() {
  return (
    <section className="py-32 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-medium mb-4"
          >
            Built for Real World Business Outcomes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50"
          >
            Sample work created for demonstration purposes. Designed with real-world needs in mind.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="glass-panel p-8"
            >
              <div className="flex gap-1 mb-6 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-white/80 text-lg mb-6 line-clamp-4 leading-relaxed font-light">"{review.text}"</p>
              <div>
                <h4 className="font-medium text-white/90">{review.name}</h4>
                <p className="text-sm text-white/40">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
