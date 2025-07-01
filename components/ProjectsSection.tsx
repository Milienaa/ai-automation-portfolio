import React from 'react';
import { BrainIcon, RefreshCwIcon, FileTextIcon, MessageSquareIcon, TrendingUpIcon, ShieldIcon, ClockIcon, PercentIcon } from './icons';
import { IconComponent } from '../types';

interface Project {
    icon: IconComponent;
    title: string;
    description: string;
    tools: string[];
    toolColors: string[];
    metric: string;
    metricIcon: IconComponent;
    bgColor: string;
}

const projects: Project[] = [
    {
      icon: BrainIcon,
      title: "AI-Powered CRM Workflow",
      description: "Designed a lead triage and auto-response system using AI-generated email drafts, improving response times by 75%.",
      tools: ["Make.com", "OpenAI", "Gmail", "Airtable"],
      toolColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800", "bg-purple-100 text-purple-800"],
      metric: "75% faster response times",
      metricIcon: TrendingUpIcon,
      bgColor: "bg-blue-500"
    },
    {
      icon: RefreshCwIcon,
      title: "Multi-Platform Data Sync",
      description: "Built a real-time data synchronization between CRM platforms with automated notifications and error handling.",
      tools: ["Zapier", "Salesforce", "HubSpot", "Slack"],
      toolColors: ["bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-teal-100 text-teal-800", "bg-yellow-100 text-yellow-800"],
      metric: "99.9% data consistency",
      metricIcon: ShieldIcon,
      bgColor: "bg-purple-500"
    },
    {
      icon: FileTextIcon,
      title: "Intelligent Document Processing",
      description: "Created an AI pipeline that extracts, categorizes, and summarizes content from various file formats.",
      tools: ["n8n", "GPT-4", "Google Drive", "MongoDB"],
      toolColors: ["bg-red-100 text-red-800", "bg-gray-100 text-gray-800", "bg-yellow-100 text-yellow-800", "bg-green-100 text-green-800"],
      metric: "40+ hours saved per week",
      metricIcon: ClockIcon,
      bgColor: "bg-green-500"
    },
    {
      icon: MessageSquareIcon,
      title: "Customer Support AI Assistant",
      description: "Developed a multilingual AI assistant that handles customer inquiries with human-like conversation quality.",
      tools: ["Make.com", "OpenAI", "Zendesk", "WhatsApp"],
      toolColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-stone-100 text-stone-800", "bg-teal-100 text-teal-800"],
      metric: "80% inquiry automation rate",
      metricIcon: PercentIcon,
      bgColor: "bg-cyan-500"
    }
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Solutions I've Delivered</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real-world implementations that have transformed business operations and increased efficiency.
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.title} className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            <div className="flex items-start space-x-6 mb-6">
                                <div className={`w-14 h-14 ${project.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                    <project.icon className="text-white h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map((tool, toolIndex) => (
                                            <span key={tool} className={`px-3 py-1 ${project.toolColors[toolIndex]} text-xs rounded-full font-medium`}>
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                {project.description}
                            </p>
                            <div className="flex items-center text-sm font-semibold text-green-600 mt-auto pt-4 border-t border-gray-200">
                                <project.metricIcon className="mr-2 h-4 w-4" />
                                <span>{project.metric}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;