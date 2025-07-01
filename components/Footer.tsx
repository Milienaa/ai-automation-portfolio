
import React from 'react';
import { LinkedinIcon, UpworkIcon } from './icons';

const Footer: React.FC = () => {
    const quickLinks = [
        { href: "#about", label: "About Me" },
        { href: "#workflows", label: "Portfolio" },
        { href: "#projects", label: "Case Studies" },
        { href: "#contact", label: "Contact" },
    ];

    const servicesLinks = [
        { href: "#services", label: "AI Automation" },
        { href: "#services", label: "System Integration" },
        { href: "#services", label: "Prompt Engineering" },
        { href: "#services", label: "API Development" },
    ];

    return (
        <footer className="bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">AI Engineer & Automation Expert</h3>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Transforming businesses through intelligent automation and AI-powered workflows. Ready to scale your operations with cutting-edge technology.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="https://www.linkedin.com/in/miliena-bezklynska" icon={LinkedinIcon} />
                            <SocialLink href="https://www.upwork.com/freelancers/~014c2a6ff5f6ca39d9" icon={UpworkIcon} />
                        </div>
                    </div>
                    
                    <FooterLinkList title="Services" links={servicesLinks} />
                    <FooterLinkList title="Quick Links" links={quickLinks} />
                </div>
                
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} AI Engineer Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink: React.FC<{href: string, icon: React.FC<{className: string}>}> = ({ href, icon: Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
        <Icon className="text-white h-5 w-5" />
    </a>
);

const FooterLinkList: React.FC<{title: string, links: {href: string, label: string}[]}> = ({title, links}) => (
    <div>
        <h4 className="font-semibold text-lg mb-4">{title}</h4>
        <ul className="space-y-2 text-gray-300">
            {links.map(link => (
                <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;
