import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, X, Send, MessageSquare, Mail } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    id: "starter",
    name: "Starter Website",
    desc: "Perfect for personal brands or small businesses",
    price: "₹2,000 – ₹5,000",
    features: [
      "Modern landing page design",
      "Responsive on all devices",
      "Smooth animations",
      "Contact section",
      "1–3 sections"
    ],
    buttonText: "Get Started",
    popular: false,
    style: "hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] border-white/5",
  },
  {
    id: "business",
    name: "Business Website",
    desc: "Best for restaurants, cafés, and service businesses",
    price: "₹5,000 – ₹12,000",
    features: [
      "Multi-section website (5–7 pages)",
      "Menu / services section",
      "Booking or contact system",
      "SEO-friendly structure",
      "Mobile optimized",
      "Premium UI design"
    ],
    buttonText: "Work With Me",
    popular: true,
    style: "border-gold-500/30 md:-mt-4 md:mb-4 bg-gradient-to-b from-gold-500/5 to-transparent",
  },
  {
    id: "custom",
    name: "Custom Web Experience",
    desc: "For advanced websites and unique business needs",
    price: "Custom Quote",
    features: [
      "Fully custom UI/UX design",
      "Advanced animations",
      "Dashboard / backend integration",
      "E-commerce or booking systems",
      "Unlimited sections"
    ],
    buttonText: "Discuss Project",
    popular: false,
    style: "hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent",
  }
];

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', projectType: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleOpenModal = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setStatus('idle');
    setFormState({ 
      name: '', 
      email: '', 
      projectType: plan.id === 'starter' ? 'Landing Page' : plan.name, 
      budget: '', 
      message: '' 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const sendWhatsApp = () => {
    const text = `Hi Nasrin,\n\nI just filled out the form for the ${selectedPlan?.name}.\nName: ${formState.name}\nEmail: ${formState.email}\n${selectedPlan?.id === 'custom' ? `Budget: ${formState.budget}\n` : ''}Message: ${formState.message}`;
    window.open(`https://wa.me/918972513191?text=${encodeURIComponent(text)}`, '_blank');
  };

  const sendEmail = () => {
    const subject = `Inquiry for ${selectedPlan?.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.projectType}\n${selectedPlan?.id === 'custom' ? `Budget: ${formState.budget}\n` : ''}\nMessage:\n${formState.message}`;
    window.location.href = `mailto:itsnasrin01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="pricing" className="py-32 px-6 relative w-full overflow-hidden z-10">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-dark-800 rounded-full blur-[120px] -z-10 opacity-50" />
      <motion.div 
        animate={{ 
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-medium mb-4"
          >
            Simple Pricing. <span className="text-gradient-gold italic">Premium Results.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Every business is different — choose a starting package or request a custom quote.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start relative z-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={`glass-panel p-8 relative flex flex-col h-full transition-all duration-500 group ${plan.style}`}
            >
              {/* Optional animated glow on hover for popular card */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 group-hover:shadow-[0_8px_40px_0_rgba(234,179,8,0.15)] transition-all duration-500 rounded-2xl md:rounded-3xl pointer-events-none" />
              )}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-500 text-dark-900 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-medium mb-2 group-hover:text-gold-400 transition-colors">{plan.name}</h3>
                <p className="text-white/50 text-sm h-10">{plan.desc}</p>
              </div>

              <div className="mb-8 relative z-10">
                <div className="text-3xl font-display font-medium text-white mb-1">{plan.price}</div>
              </div>

              <div className="space-y-4 mb-10 flex-grow relative z-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-gold-500/20 text-gold-400' : 'bg-white/10 text-white/70'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-white/70 font-light text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={() => handleOpenModal(plan)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-medium transition-all text-center block relative z-10 ${
                  plan.popular 
                    ? 'bg-gold-500 text-dark-900 hover:bg-gold-400 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Under Pricing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center max-w-2xl mx-auto relative z-10 glass-panel p-10 rounded-3xl border-gold-500/20 bg-gradient-to-b from-gold-500/5 to-transparent shadow-[0_0_50px_rgba(234,179,8,0.05)]"
        >
          <h4 className="text-2xl font-display font-medium mb-3">Not sure which plan fits your business?</h4>
          <p className="text-white/60 mb-8 font-light text-lg">Let’s talk and I’ll suggest the best option for you.</p>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark-900 rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-white/10"
          >
            Get Free Consultation
          </motion.a>
        </motion.div>

        {/* Extra Premium Touch */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.8 }}
           className="mt-12 text-center text-sm text-white/30 font-mono tracking-widest uppercase flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
        >
           <span>Fast delivery</span>
           <span className="hidden md:inline text-gold-500/50">•</span>
           <span>Clean design</span>
           <span className="hidden md:inline text-gold-500/50">•</span>
           <span>Mobile-first</span>
           <span className="hidden md:inline text-gold-500/50">•</span>
           <span>Business focused</span>
        </motion.div>
      </div>

      {/* PRICING MODAL */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }} 
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-dark-900/60"
              onClick={() => setSelectedPlan(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
              className="glass-panel w-full max-w-lg p-6 sm:p-8 relative z-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] my-auto"
            >
              {/* Abstract element inside modal */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold-500/10 rounded-full blur-[60px] pointer-events-none" />

              <button 
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-display font-medium mb-3">Request Received!</h3>
                  <p className="text-white/60 mb-8 font-light text-lg">
                    I’ll review your details and get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={sendWhatsApp}
                      className="w-full py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Chat on WhatsApp (Faster)
                    </button>
                    <button 
                      onClick={sendEmail}
                      className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      Send via Email Setup
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8 pr-12">
                    <h3 className="text-sm font-mono text-gold-400 mb-2 uppercase tracking-wider">{selectedPlan.name}</h3>
                    <h2 className="text-3xl font-display font-medium leading-tight">
                      {selectedPlan.id === 'custom' 
                        ? 'Let’s discuss your unique requirements.'
                        : 'Great choice! Let’s get you started.'}
                    </h2>
                    {selectedPlan.id === 'business' && (
                      <p className="mt-3 text-white/50 text-sm">Estimated Range: <span className="text-white font-medium">{selectedPlan.price}</span></p>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-white/60 pl-1">Name</label>
                        <input 
                          required
                          type="text" 
                          value={formState.name}
                          onChange={(e) => setFormState(p => ({ ...p, name: e.target.value }))}
                          placeholder="John Doe" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all font-light"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-white/60 pl-1">Email</label>
                        <input 
                          required
                          type="email" 
                          value={formState.email}
                          onChange={(e) => setFormState(p => ({ ...p, email: e.target.value }))}
                          placeholder="john@example.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all font-light"
                        />
                      </div>
                    </div>

                    {selectedPlan.id === 'starter' && (
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-white/60 pl-1">Project Type</label>
                        <select 
                          value={formState.projectType}
                          onChange={(e) => setFormState(p => ({ ...p, projectType: e.target.value }))}
                          className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all font-light appearance-none"
                        >
                          <option>Landing Page</option>
                          <option>Portfolio</option>
                          <option>Small Business Site</option>
                          <option>Other</option>
                        </select>
                      </div>
                    )}

                    {selectedPlan.id === 'custom' && (
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-white/60 pl-1">Estimated Budget</label>
                        <input 
                          type="text" 
                          value={formState.budget}
                          onChange={(e) => setFormState(p => ({ ...p, budget: e.target.value }))}
                          placeholder="e.g. ₹20,000+" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all font-light"
                        />
                      </div>
                    )}

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-white/60 pl-1">Project Details</label>
                      <textarea 
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState(p => ({ ...p, message: e.target.value }))}
                        placeholder={selectedPlan.id === 'business' ? "Tell me a bit about your business and goals..." : "Tell me about your project..."} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all font-light resize-none"
                      />
                    </div>

                    <motion.button 
                      type="submit"
                      disabled={status === 'submitting'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-2 py-4 bg-gold-500 text-dark-900 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gold-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Inquiry
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

