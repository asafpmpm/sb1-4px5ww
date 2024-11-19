import React, { useState, useRef } from 'react';
import Timeline from './Timeline';
import ShowcaseGrid from './ShowcaseGrid';
import GoogleIcon from './GoogleIcon';
import HowToUse from './HowToUse';
import { 
  ClockIcon, 
  DocumentDuplicateIcon, 
  PresentationChartLineIcon, 
  ArrowPathIcon,
  XMarkIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const templatesRef = useRef(null);

  const handleJoinBeta = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Firebase authentication will be added soon!');
    }, 1000);
  };

  const scrollToTemplates = () => {
    templatesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">PitchPro</span>
        </div>
        <button className="px-6 py-2 rounded-full bg-[#C3F53B] text-black font-semibold hover:bg-[#d4ff4d] transition-colors">
          Join Beta
        </button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            onClick={scrollToTemplates}
            className="inline-block px-6 py-2 rounded-full bg-[#1E1E1E] text-[#C3F53B] mb-8 cursor-pointer hover:bg-[#2a2a2a] transition-colors"
          >
            + Get access to professional presentations tailored for you →
          </div>

          <h1 className="text-5xl font-bold mb-6">
            <span className="text-[#C3F53B]">Effortlessly Explain Projects</span>
            <br />
            <span className="text-white">to Stakeholders with PitchPro AI-Powered Decks</span>
          </h1>

          <p className="text-xl text-gray-400 mb-12">
            Use AI to generate beautiful, professional presentations for every phase of your project in SECONDS
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleJoinBeta} className="flex gap-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="flex-1 px-4 py-3 rounded-lg bg-[#1E1E1E] text-white border border-gray-800 focus:border-[#C3F53B] focus:ring-1 focus:ring-[#C3F53B] outline-none"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 rounded-lg bg-[#C3F53B] text-black font-semibold hover:bg-[#d4ff4d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Joining...' : 'Join Beta'}
              </button>
            </form>

            <button
              onClick={() => alert('Google Sign-in will be added soon!')}
              className="w-full px-4 py-3 rounded-lg bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <div className="flex items-center gap-4 justify-center mt-6 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-[#C3F53B]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-[#C3F53B]" />
                <span>7 days free trial</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <HowToUse />

      {/* Templates Section */}
      <div ref={templatesRef} className="bg-[#1E1E1E] py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Presentation Templates
          </h2>
          <ShowcaseGrid />
        </div>
      </div>

      {/* Before vs After Section */}
      <div className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="px-4 py-1 rounded-full bg-[#C3F53B]/10 text-[#C3F53B] text-sm font-medium">
              Before vs After
            </span>
          </div>
          <h2 className="text-5xl font-bold text-center mb-16">
            Save Yourself The <span className="text-[#C3F53B]">Trouble</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Traditional Method */}
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-500 font-semibold mb-8">Do It Yourself</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <XMarkIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-400 text-lg">
                    Hours wasted searching for templates and formatting slides, only to end up with mediocre results.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <XMarkIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-400 text-lg">
                    Struggle with consistency across different project phases and documentation.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <XMarkIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-400 text-lg">
                    Risk missing critical project components and professional best practices.
                  </p>
                </div>
              </div>
            </div>

            {/* With Our Tool */}
            <div className="space-y-6">
              <h3 className="text-2xl text-[#C3F53B] font-semibold mb-8">PitchPro</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <p className="text-gray-400 text-lg">
                    Generate complete, professional presentations in minutes with AI-powered templates.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <p className="text-gray-400 text-lg">
                    Maintain perfect consistency with smart templates that adapt to your project needs.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckIcon className="w-6 h-6 text-[#C3F53B] flex-shrink-0 mt-1" />
                  <p className="text-gray-400 text-lg">
                    Stay ahead with built-in best practices and comprehensive project management frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#1E1E1E] py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Not Your <span className="text-[#C3F53B]">Typical PM Tool</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            We understand the challenges project managers face. Here's how our AI-powered solution makes your life easier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#C3F53B]/10 rounded-lg flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-[#C3F53B]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Time-Saving Templates</h3>
              <p className="text-gray-400">
                Stop spending hours creating presentations from scratch. Our AI generates professional slides in seconds.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#C3F53B]/10 rounded-lg flex items-center justify-center mb-4">
                <DocumentDuplicateIcon className="w-6 h-6 text-[#C3F53B]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Consistent Quality</h3>
              <p className="text-gray-400">
                Maintain professional standards across all project documentation with our expertly designed templates.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#C3F53B]/10 rounded-lg flex items-center justify-center mb-4">
                <PresentationChartLineIcon className="w-6 h-6 text-[#C3F53B]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Stakeholder Ready</h3>
              <p className="text-gray-400">
                Impress stakeholders with clear, professional presentations that effectively communicate project status and goals.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#C3F53B]/10 rounded-lg flex items-center justify-center mb-4">
                <ArrowPathIcon className="w-6 h-6 text-[#C3F53B]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Always Up-to-Date</h3>
              <p className="text-gray-400">
                Our templates stay current with the latest project management methodologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-black py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Simple, <span className="text-[#C3F53B]">Transparent</span> Pricing
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include access to our core features.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Content Creator */}
            <div className="bg-[#1E1E1E] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Content Creator</h3>
              <p className="text-gray-400 mb-6">Perfect for individual project managers and small teams.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$5</span>
                <span className="text-gray-400">/per month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[#C3F53B]" />
                  <span className="text-gray-300">AI-powered presentation generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[#C3F53B]" />
                  <span className="text-gray-300">Basic template library</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[#C3F53B]" />
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-[#C3F53B] text-[#C3F53B] hover:bg-[#C3F53B] hover:text-black transition-colors">
                Join Beta
              </button>
            </div>

            {/* Business Owner */}
            <div className="bg-[#1E1E1E] rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C3F53B] text-black rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Business Owner</h3>
              <p className="text-gray-400 mb-6">Ideal for growing businesses and medium-sized teams.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$15</span>
                <span className="text-gray-400">/per month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[#C3F53B]" />
                  <span className="text-gray-300">Everything in Content Creator</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[#C3F53B]" />
                  <span className="text-gray-300">Advanced template customization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[#C3F53B]" />
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-[#C3F53B] text-black hover:bg-[#d4ff4d] transition-colors">
                Join Beta
              </button>
            </div>

            {/* Creative Agency */}
            <div className="bg-[#1E1E1E] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Creative Agency</h3>
              <p className="text-gray-400 mb-6">For large teams managing multiple projects.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$30</span>
                <span className="text-gray-400">/per month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[#C3F53B]" />
                  <span className="text-gray-300">Everything in Business Owner</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[#C3F53B]" />
                  <span className="text-gray-300">Custom branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[#C3F53B]" />
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-[#C3F53B] text-[#C3F53B] hover:bg-[#C3F53B] hover:text-black transition-colors">
                Join Beta
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#1E1E1E] py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Frequently Asked <span className="text-[#C3F53B]">Questions</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to know about PitchPro and our AI-powered presentation generator.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-black/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">How does PitchPro work?</h3>
              <p className="text-gray-400">
                PitchPro uses advanced AI to generate professional project management presentations. Simply choose a template type, customize it to your needs, and export it in your preferred format.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Can I customize the templates?</h3>
              <p className="text-gray-400">
                Yes! All templates are fully customizable. You can edit text, add or remove slides, and adjust the content to match your specific project needs.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">What formats can I export to?</h3>
              <p className="text-gray-400">
                You can export your presentations to PowerPoint (PPTX) or PDF formats. Both formats maintain the professional design and layout of your presentation.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Is there a free trial?</h3>
              <p className="text-gray-400">
                Yes! We offer a 7-day free trial with full access to all features. No credit card required to start.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Go Section */}
      <div className="bg-black py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Ready to Create Professional Presentations?</h2>
          <p className="text-gray-400 text-xl mb-8">
            Sign up for PitchPro and start creating stunning presentations—no strings attached.
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleJoinBeta} className="flex gap-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="flex-1 px-4 py-3 rounded-lg bg-[#1E1E1E] text-white border border-gray-800 focus:border-[#C3F53B] focus:ring-1 focus:ring-[#C3F53B] outline-none"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 rounded-lg bg-[#C3F53B] text-black font-semibold hover:bg-[#d4ff4d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Join Beta
              </button>
            </form>

            <button
              onClick={() => alert('Google Sign-in will be added soon!')}
              className="w-full px-4 py-3 rounded-lg bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <div className="flex items-center gap-4 justify-center mt-6 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-[#C3F53B]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-[#C3F53B]" />
                <span>7 days free trial</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">PitchPro</h3>
              <p className="text-gray-400">By Project Managers, For Project Managers</p>
            </div>
            <div className="text-right">
              <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
              <a href="mailto:hello@pitchpro.ai" className="text-gray-400 hover:text-[#C3F53B]">
                hello@pitchpro.ai
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 PitchPro AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#C3F53B]">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#C3F53B]">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-[#C3F53B]">Cookies Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;