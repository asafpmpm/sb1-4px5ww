import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const HowToUse = () => {
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            From Zero to <span className="text-[#C3F53B]">Presentation</span> in Seconds
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Learn step-by-step how to use PitchPro and create professional presentations that save you hours of work.
          </p>
        </div>

        {/* Step 1 */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="mb-6">
                <span className="text-[#C3F53B] text-xl font-bold">#1.</span>
                <h3 className="text-4xl font-bold mt-2">Choose Template</h3>
              </div>
              <p className="text-gray-400 text-lg mb-8">
                Spending hours searching for the right template? Try this instead:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Template Library: Professional templates for every project phase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Smart Selection: AI recommends the best template for your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Project Context: Templates adapt to your project type</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Choose Template" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="mb-6">
                <span className="text-[#C3F53B] text-xl font-bold">#2.</span>
                <h3 className="text-4xl font-bold mt-2">Customize</h3>
              </div>
              <p className="text-gray-400 text-lg mb-8">
                Create presentations that captivate and educate your stakeholders:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">AI Content: Generate content based on your project details</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Smart Editor: Refine content with intelligent suggestions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Professional Polish: Ensure consistent, engaging content</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" 
                alt="Customize Content" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="mb-6">
                <span className="text-[#C3F53B] text-xl font-bold">#3.</span>
                <h3 className="text-4xl font-bold mt-2">Analyze & Export</h3>
              </div>
              <p className="text-gray-400 text-lg mb-8">
                Get insights and share your presentation with confidence:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Quality Score: Evaluate presentation effectiveness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Export Options: Download as PowerPoint or PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Share & Collaborate: Easy sharing with stakeholders</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80" 
                alt="Analyze and Export" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;