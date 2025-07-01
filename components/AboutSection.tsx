
import React from 'react';
import { CalendarIcon, GlobeIcon, CodeIcon, StarIcon } from './icons';

const TestimonialCard: React.FC<{
    initials: string;
    name: string;
    role: string;
    text: string;
    color: string;
}> = ({ initials, name, role, text, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="font-bold text-white">{initials}</span>
            </div>
            <div>
                <div className="flex items-center mb-1">
                    <h4 className="font-semibold text-gray-800">{name}</h4>
                    <div className="ml-2 flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">{role}</p>
                <p className="text-gray-700 text-sm leading-relaxed">"{text}"</p>
            </div>
        </div>
    </div>
);

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Trusted Expert in AI Automation</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            With deep expertise in AI integration, automation platforms, and API connectivity, I specialize in building efficient, scalable solutions for international teams. My approach combines no-code tools like Make.com and Zapier with advanced AI capabilities from OpenAI, Gemini, and Google AI Studio.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <InfoCard icon={CalendarIcon} title="2+ Years Experience" text="In automation & AI integration" color="bg-blue-100 text-blue-600" />
                            <InfoCard icon={GlobeIcon} title="Global Client Base" text="Freelance & corporate projects" color="bg-cyan-100 text-cyan-600" />
                            <InfoCard icon={CodeIcon} title="API-First Mindset" text="Custom integrations & solutions" color="bg-purple-100 text-purple-600" />
                            <InfoCard icon={StarIcon} title="Upwork Verified" text="Top Rated Professional" color="bg-green-100 text-green-600" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <TestimonialCard 
                            initials="MK" name="Mark Thompson" role="CEO, TechFlow Solutions" 
                            text="Outstanding automation work! Reduced our lead processing time by 75%. Professional and delivers exactly what was promised."
                            color="bg-blue-500"
                        />
                         <TestimonialCard 
                            initials="SL" name="Sarah Lopez" role="Ops Manager, E-commerce Plus" 
                            text="Amazing Zapier integrations! Automated our entire subscription workflow. Saves us 20+ hours weekly. Highly recommended!"
                            color="bg-green-500"
                        />
                         <TestimonialCard 
                            initials="JR" name="James Rodriguez" role="Founder, DataFlow Analytics" 
                            text="Excellent AI document processing setup. Transformed our PDF workflow completely. Professional, fast, and reliable service."
                            color="bg-purple-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const InfoCard: React.FC<{icon: React.ElementType, title: string, text: string, color: string}> = ({icon: Icon, title, text, color}) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
            <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{text}</p>
    </div>
);

export default AboutSection;
