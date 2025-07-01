import React from 'react';
import { SendIcon, PlayIcon, BotIcon, Link2Icon, SettingsIcon } from './icons';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              AI Engineer & <span className="text-cyan-300">Automation Expert</span> for Scalable Business Solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-gray-200 leading-relaxed">
              I help companies automate operations, integrate systems, and deploy smart AI workflows using tools like Make.com, Zapier, OpenAI, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-200 transition-all font-bold px-8 py-3 text-lg rounded-lg shadow-lg transform hover:-translate-y-1"
              >
                <SendIcon className="mr-2 h-5 w-5" />
                Start Your Project
              </a>
              <a
                href="#workflows"
                className="inline-flex items-center justify-center bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all font-bold px-8 py-3 text-lg rounded-lg"
              >
                <PlayIcon className="mr-2 h-5 w-5" />
                View My Work
              </a>
            </div>
          </div>
          
          <div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-400/80 rounded-lg flex items-center justify-center">
                    <BotIcon className="text-white h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">AI-Powered Workflows</h3>
                    <p className="text-gray-300">Intelligent automation solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-400/80 rounded-lg flex items-center justify-center">
                    <Link2Icon className="text-white h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">System Integration</h3>
                    <p className="text-gray-300">Seamless app connectivity</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-400/80 rounded-lg flex items-center justify-center">
                    <SettingsIcon className="text-white h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Custom Solutions</h3>
                    <p className="text-gray-300">Tailored to your business needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;