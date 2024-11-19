import React from 'react';
import { Dialog } from '@headlessui/react';
import { SparklesIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const TemplateSelector = ({ isOpen, onClose, onSelect, templateTitle }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded-xl bg-gray-900 p-6 shadow-xl">
          <Dialog.Title className="text-lg font-medium text-white mb-4">
            Choose Template Type for {templateTitle}
          </Dialog.Title>

          <div className="space-y-4">
            <button
              onClick={() => onSelect('default')}
              className="w-full flex items-center gap-3 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group"
            >
              <DocumentDuplicateIcon className="w-6 h-6 text-blue-400" />
              <div className="text-left">
                <div className="font-medium text-white">Use Default Template</div>
                <div className="text-sm text-gray-400">Start with our professionally designed template</div>
              </div>
            </button>

            <button
              onClick={() => onSelect('ai')}
              className="w-full flex items-center gap-3 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group"
            >
              <SparklesIcon className="w-6 h-6 text-[#C3F53B]" />
              <div className="text-left">
                <div className="font-medium text-white">AI-Powered Custom Template</div>
                <div className="text-sm text-gray-400">Generate a unique template based on your needs</div>
              </div>
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default TemplateSelector;