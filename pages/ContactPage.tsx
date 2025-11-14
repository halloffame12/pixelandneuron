import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Github, Linkedin, Mail, ChevronDown, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: -50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: 50 },
};

const pageTransition = {
  // FIX: Cast 'type' to a const to satisfy Framer Motion's Transition type.
  type: 'tween' as const,
  // FIX: The 'ease' property expects a specific string literal. Cast to const to fix the type.
  ease: 'anticipate' as const,
  duration: 0.7,
};

// Custom input component with floating label
const AnimatedInput = ({ id, label, type = 'text', value, onChange, required = false }) => {
    const isTextarea = type === 'textarea';
    const InputComponent = isTextarea ? 'textarea' : 'input';

    return (
        <div className="relative">
            <InputComponent
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                type={type}
                // The `peer` class is crucial for the floating label effect
                // `placeholder=" "` is a trick to ensure the label can float even when the input is empty
                placeholder=" "
                className={`peer block w-full bg-transparent border-0 border-b-2 border-[rgb(255,255,255)]/20 focus:border-[rgb(178,212,48)] focus:ring-0 outline-none transition-colors p-2 text-white ${isTextarea ? 'pt-6 min-h-[120px]' : ''}`}
            />
            <label
                htmlFor={id}
                className="absolute left-2 -top-5 text-sm text-[rgb(255,245,245)]/70 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[rgb(178,212,48)]"
            >
                {label}
            </label>
        </div>
    );
};

const sumitSocials = [
    { icon: <Github size={20} />, href: 'https://github.com/halloffame12', name: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/sumit-chauhan-a4ba98325/', name: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:sumitchauhan10062004@gmail.com', name: 'Email' },
    { icon: <MessageSquare size={20} />, href: 'https://wa.me/917678331501', name: 'WhatsApp' },
];

const zahidSocials = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/sk-abdul-zahid-98a345344/', name: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:skzahid543@gmail.com', name: 'Email' },
    { icon: <MessageSquare size={20} />, href: 'https://wa.me/917303808457', name: 'WhatsApp' },
];

const faqs = [
    { q: "What is your typical project timeline?", a: "Timelines vary based on project complexity. A standard website may take 4-6 weeks, while a full-stack application could take 3-6 months. We provide a detailed schedule after our initial discovery phase." },
    { q: "How do you handle project pricing?", a: "We offer both fixed-price quotes for well-defined projects and hourly rates for ongoing or flexible-scope work. We'll discuss the best option for your needs during our consultation." },
    { q: "What kind of support do you offer after launch?", a: "We provide a 30-day post-launch support period to fix any bugs. We also offer ongoing maintenance and support retainers to ensure your application remains up-to-date and secure." },
];

const FaqItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-[rgb(255,255,255)]/20">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4"
            >
                <span className="font-semibold">{q}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? '0px' : '-20px' }}
                className="overflow-hidden"
            >
                <p className="pb-4 text-[rgb(255,245,245)]/70">{a}</p>
            </motion.div>
        </div>
    );
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formState, formHandleSubmit, formReset] = useForm("meovovod");

  useEffect(() => {
    if (formState.succeeded) {
      setStatus('sent');
    } else if (formState.submitting) {
      setStatus('sending');
    } else if (formState.errors?.length > 0) {
      setStatus('error');
    } else {
      setStatus('idle');
    }
  }, [formState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
        return;
    }
    await formHandleSubmit(e);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    formReset();
    setStatus('idle');
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-24 md:py-32"
    >
      <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Let's Build <span className="text-[rgb(26,139,157)]">Together</span></h1>
          <p className="text-lg text-[rgb(255,245,245)]/70 mt-4 max-w-2xl mx-auto">
            We're always excited to hear about new projects. Drop us a line and we'll get back to you soon.
          </p>
      </div>

      <motion.div 
        className="max-w-5xl mx-auto bg-[rgb(255,255,255)]/5 shadow-2xl rounded-lg overflow-hidden border border-[rgb(255,255,255)]/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="md:grid md:grid-cols-5">
            {/* Contact Info Section */}
            <div className="md:col-span-2 bg-[rgb(26,139,157)]/20 p-8 text-white">
                <h2 className="text-2xl font-bold text-[rgb(178,212,48)] mb-6">Contact Information</h2>
                <p className="mb-8 text-[rgb(255,245,245)]/80">Fill up the form and our team will get back to you within 24 hours.</p>
                
                <div className="space-y-8">
                    <div>
                        <h3 className="font-bold text-lg text-white mb-3">Sumit Chauhan</h3>
                        <div className="flex space-x-4">
                            {sumitSocials.map((link) => (
                                <motion.a 
                                    key={link.name} 
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-300 hover:text-[rgb(178,212,48)]"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-white mb-3">Zahid</h3>
                        <div className="flex space-x-4">
                            {zahidSocials.map((link) => (
                                <motion.a 
                                    key={link.name} 
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-300 hover:text-[rgb(178,212,48)]"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="pt-2">
                        <div className="flex items-center gap-4">
                            <MapPin className="text-[rgb(178,212,48)]" size={20} />
                            <span>Based in The Internet</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="md:col-span-3 p-8">
                <AnimatePresence mode="wait">
                    {status === 'sent' ? (
                        <motion.div 
                          key="success"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex flex-col items-center justify-center h-full text-center"
                        >
                            <CheckCircle className="text-green-400 w-16 h-16 mb-4" />
                            <h3 className="text-2xl font-bold text-[rgb(178,212,48)]">Message Sent!</h3>
                            <p className="text-[rgb(255,245,245)]/80 mt-2 mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
                            <button onClick={handleReset} className="px-6 py-2 border-2 border-[rgb(26,139,157)] text-white font-semibold rounded-lg hover:bg-[rgb(26,139,157)] transition-all duration-300">
                                Send Another
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form 
                          key="form"
                          onSubmit={handleSubmit} 
                          className="space-y-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                            <AnimatedInput id="name" label="Full Name" value={formData.name} onChange={handleChange} required />
                            <ValidationError prefix="Name" field="name" errors={formState.errors} />
                            <AnimatedInput id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} required />
                            <ValidationError prefix="Email" field="email" errors={formState.errors} />
                            <AnimatedInput id="message" label="Your Message" type="textarea" value={formData.message} onChange={handleChange} required />
                            <ValidationError prefix="Message" field="message" errors={formState.errors} />
                            <div className="text-right">
                               <button type="submit" disabled={status === 'sending' || formState.submitting} className="inline-flex items-center gap-2 px-8 py-3 bg-[rgb(26,139,157)] text-white font-semibold rounded-lg shadow-lg hover:bg-[rgb(178,212,48)] hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                  {status === 'sending' || formState.submitting ? 'Sending...' : 'Send Message'}
                                  <Send size={18} />
                               </button>
                               {status === 'error' && <p className="text-red-500 text-sm mt-2">Please fill out all fields.</p>}
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
      </motion.div>

       <div className="w-full mt-24">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked <span className="text-[rgb(178,212,48)]">Questions</span></h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map(faq => <FaqItem key={faq.q} {...faq} />)}
            </div>
        </div>
    </motion.div>
  );
};

export default ContactPage;