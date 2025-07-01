import React from 'react';
import { BrainIcon, PlugIcon, Wand2Icon, ArrowRightLeftIcon } from './icons';
import { IconComponent } from '../types';

interface Service {
    icon: IconComponent;
    title: string;
    description: string;
    tools: string;
    gradient: string;
}

const services: Service[] = [
    {
      icon: BrainIcon,
      title: "AI Automation Workflows",
      description: "Automate operations using GPT-based logic, AI agents, and context-aware flows.",
      tools: "OpenAI, Gemini, Make.com, Custom Prompts",
      gradient: "tech-gradient"
    },
    {
      icon: PlugIcon,
      title: "No-Code System Integration",
      description: "Connect apps and services with platforms like Zapier, Make.com, and n8n.",
      tools: "Webhooks, JSON, HTTP modules",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-500"
    },
    {
      icon: Wand2Icon,
      title: "Prompt Engineering & AI Agents",
      description: "Build task-specific AI agents and LLM-powered tools for your unique needs.",
      tools: "GPT-4, Gemini, Prompt Chains",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: ArrowRightLeftIcon,
      title: "Custom API Integration",
      description: "Connect your systems via REST APIs, handling complex data flows and authentication.",
      tools: "Postman, Custom Endpoints, JSON Parsing",
      gradient: "bg-gradient-to-br from-green-500 to-teal-500"
    }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">What I Do</h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI automation services designed to streamline your business operations and boost productivity.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {service.description}
              </p>
              <div className="text-sm text-gray-500 mt-auto">
                <strong className="text-slate-600">Tools:</strong> {service.tools}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;