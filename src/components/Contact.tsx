import { motion } from 'motion/react';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSend = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:itsnasrin01@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 relative overflow-hidden">
        {/* Glow behind form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/5 blur-[100px] z-0 rounded-full" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-display font-medium mb-4">
              Have a business? Let's turn it into a <span className="text-gradient-gold italic">premium</span> online experience.
            </h2>
            <p className="text-white/50 mb-8">
              Currently accepting new freelance projects. Send me a message and let's discuss your goals.
            </p>

            <div className="flex flex-col gap-4">
              <a href="mailto:itsnasrin01@gmail.com" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex flex-col items-center justify-center group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-gold-400" />
                </div>
                itsnasrin01@gmail.com
              </a>
              <a href="https://wa.me/918972513191" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex flex-col items-center justify-center group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-colors">
                  <MessageSquare className="w-5 h-5 group-hover:text-gold-400" />
                </div>
                +91 89725 13191
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/60 pl-1">Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                placeholder="John Doe" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all font-light"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/60 pl-1">Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                placeholder="john@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all font-light"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-sm font-medium text-white/60 pl-1">Message</label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                placeholder="Tell me about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all font-light resize-none"
              />
            </div>
            <motion.button 
              onClick={handleSend}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gold-500 text-dark-900 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gold-400 transition-colors group shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
