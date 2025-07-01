import React, { useState } from 'react';
import { MailIcon, CheckCircleIcon, SendIcon, LinkedinIcon } from './icons';
import { IconComponent } from '../types';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }
        setIsSubmitting(true);
        console.log("Form Submitted:", formData);
        
        setTimeout(() => {
            alert(`Thank you, ${formData.name}! Your message has been received.`);
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitting(false);
        }, 1000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Ready to Automate Your Workflows?</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I'm open to freelance projects worldwide. Let's discuss how I can help your business grow with automation.
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Start Your Project</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} placeholder="Tell me about your automation needs..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <button type="submit" className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:bg-blue-400" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : <><SendIcon className="mr-2 h-5 w-5" /> Send Message</>}
                            </button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>
                            <div className="space-y-4">
                                <InfoItem icon={MailIcon} title="Email" text="miliena.upworkspace@gmail.com" href="mailto:miliena.upworkspace@gmail.com" />
                                <InfoItem icon={LinkedinIcon} title="LinkedIn" text="linkedin.com/in/miliena-bezklynska" href="https://www.linkedin.com/in/miliena-bezklynska" />
                            </div>
                        </div>
                        <div className="tech-gradient rounded-2xl p-8 text-white shadow-lg">
                            <h4 className="text-xl font-bold mb-4">Why Choose Me?</h4>
                            <ul className="space-y-3">
                                <WhyItem text="2+ years of proven expertise" />
                                <WhyItem text="End-to-end project delivery" />
                                <WhyItem text="24/7 support and maintenance" />
                                <WhyItem text="Custom solutions tailored to your needs" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const InfoItem: React.FC<{icon: IconComponent, title: string, text: string, href: string}> = ({icon: Icon, title, text, href}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-200/50 transition-colors">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Icon className="text-blue-600 h-6 w-6" />
        </div>
        <div>
            <p className="font-medium text-slate-800">{title}</p>
            <p className="text-gray-600 hover:text-blue-600">{text}</p>
        </div>
    </a>
);

const WhyItem: React.FC<{text: string}> = ({text}) => (
    <li className="flex items-center">
        <CheckCircleIcon className="mr-3 h-5 w-5 text-cyan-200" />
        <span>{text}</span>
    </li>
);

export default ContactSection;