import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import Logo from './Logo';

const sumitSocials = [
    { name: 'GitHub', icon: <Github />, href: 'https://github.com/halloffame12' },
    { name: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/sumit-chauhan-a4ba98325/' },
    { name: 'Email', icon: <Mail />, href: 'mailto:sumitchauhan10062004@gmail.com' },
    { name: 'WhatsApp', icon: <MessageSquare />, href: 'https://wa.me/917678331501' },
];

const zahidSocials = [
    { name: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/sk-abdul-zahid-98a345344/' },
    { name: 'Email', icon: <Mail />, href: 'mailto:skzahid543@gmail.com' },
    { name: 'WhatsApp', icon: <MessageSquare />, href: 'https://wa.me/917303808457' },
];

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[rgb(10,10,10)] border-t border-[rgb(255,255,255)]/10 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <Link to="/" className="inline-block mb-4">
                           <div className="flex items-center gap-3 justify-center md:justify-start">
                              <Logo />
                              <span className="text-xl font-bold hover:text-[rgb(178,212,48)] transition-colors">Pixel & Neuron</span>
                           </div>
                        </Link>
                        <p className="text-[rgb(255,245,245)]/60">Architects of the Digital Frontier.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-[rgb(255,245,245)]/80 hover:text-[rgb(178,212,48)] transition-colors">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-[rgb(255,245,245)]/80 mb-2">Sumit Chauhan</p>
                                <div className="flex justify-center md:justify-start space-x-4">
                                    {sumitSocials.map((link) => (
                                        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[rgb(178,212,48)] transition-colors" aria-label={link.name}>
                                            {React.cloneElement(link.icon, { size: 24 })}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[rgb(255,245,245)]/80 mb-2">Zahid</p>
                                <div className="flex justify-center md:justify-start space-x-4">
                                    {zahidSocials.map((link) => (
                                        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[rgb(178,212,48)] transition-colors" aria-label={link.name}>
                                            {React.cloneElement(link.icon, { size: 24 })}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-[rgb(255,255,255)]/10 text-center text-[rgb(255,245,245)]/50">
                    <p>&copy; {new Date().getFullYear()} Pixel & Neuron. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;