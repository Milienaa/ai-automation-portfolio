import React from 'react';
import { BotIcon, DatabaseIcon, CloudIcon } from './icons';
//import { IconComponent } from '../types';
import workflow1 from "@/assets/workflow1.png";
import workflow2 from "@/assets/workflow2.png";
import workflow3 from "@/assets/workflow3.png";

interface Workflow {
    title: string;
    description: string;
    tags: string[];
    tagColors: string[];
    image: string;
}

const workflows: Workflow[] = [
    {
      title: "Automated Lead Management and Filtering",
      description: "Complete lead processing pipeline with multi-stage filtering and automated routing in Make.com.",
      tags: ["Make.com", "Airtable", "Lead Filtering"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"],
      image: workflow1
    },
    {
      title: "Subscription Reactivation Management",
      description: "Automated subscription management with intelligent routing and email notifications via Zapier.",
      tags: ["Zapier", "Chargebee", "ClickFunnels"],
      tagColors: ["bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800"],
      image: workflow2
    },
    {
      title: "AI Agent Email Classification System",
      description: "Advanced n8n workflow with Gmail triggers, AI text classification, and Slack notifications.",
      tags: ["n8n", "Gmail", "AI Agent", "Slack"],
      tagColors: ["bg-red-100 text-red-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"],
      image: workflow3
    }
];

const skills = [
    { icon: BotIcon, title: "AI Models", description: "GPT-4, Gemini, Claude", bgColor: "bg-blue-100", iconColor: "text-blue-600" },
    { icon: DatabaseIcon, title: "Automation", description: "Make.com, Zapier, n8n", bgColor: "bg-cyan-100", iconColor: "text-cyan-600" },
    { icon: DatabaseIcon, title: "Data & APIs", description: "REST, JSON, Webhooks", bgColor: "bg-purple-100", iconColor: "text-purple-600" },
    { icon: CloudIcon, title: "Cloud Platforms", description: "Google Cloud, AWS", bgColor: "bg-green-100", iconColor: "text-green-600" }
];

const WorkflowsSection: React.FC = () => {
    return (
        <section id="workflows" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">AI Workflows & Smart Integrations</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I design intelligent, modular workflows that handle tasks like email automation, CRM updates, AI-based responses, and business logic processing.
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {workflows.map((workflow) => (
                        <div key={workflow.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden">
                                <img src={workflow.image} alt={workflow.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-slate-800">{workflow.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{workflow.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {workflow.tags.map((tag, tagIndex) => (
                                    <span key={tag} className={`px-3 py-1 ${workflow.tagColors[tagIndex]} text-xs rounded-full font-medium`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.title} className="text-center p-6 bg-white rounded-xl border border-gray-200">
                            <div className={`w-12 h-12 ${skill.bgColor} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                                <skill.icon className={`${skill.iconColor} h-6 w-6`} />
                            </div>
                            <h4 className="font-semibold text-slate-700 mb-1">{skill.title}</h4>
                            <p className="text-sm text-gray-500">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkflowsSection;