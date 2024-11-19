import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { SparklesIcon } from '@heroicons/react/24/outline';

const AIPromptDialog = ({ isOpen, onClose, onGenerate, templateTitle, isGenerating }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    await onGenerate(prompt);
    setPrompt('');
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md rounded-xl bg-gray-900 p-6 shadow-xl">
          <Dialog.Title className="text-lg font-medium text-white mb-2">
            Generate AI Template for {templateTitle}
          </Dialog.Title>
          
          <p className="text-gray-400 text-sm mb-4">
            Describe your specific requirements and our AI will create a customized template for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., Create a project initiation template for a software development project focusing on agile methodologies and stakeholder communication..."
              className="w-full h-32 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-[#C3F53B] focus:ring-1 focus:ring-[#C3F53B] outline-none resize-none"
              required
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isGenerating || !prompt.trim()}
                className="px-4 py-2 rounded-lg bg-[#C3F53B] text-black font-medium hover:bg-[#d4ff4d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <SparklesIcon className="w-5 h-5 animate-pulse" />
                    Generating...
                  </>
                ) : (
                  <>
                    <SparklesIcon className="w-5 h-5" />
                    Generate Template
                  </>
                )}
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AIPromptDialog;