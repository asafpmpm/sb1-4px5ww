import React, { useState } from 'react';
import GeneratedPresentation from './GeneratedPresentation';
import TemplateSelector from './TemplateSelector';
import AIPromptDialog from './AIPromptDialog';
import { generateTemplateContent } from '../utils/openai';
import { templates } from '../data/templates';

const ShowcaseGrid = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);
  const [showAIPrompt, setShowAIPrompt] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const showcaseTemplates = [
    {
      id: 'initiation',
      author: 'Project Planning Pro',
      postedAgo: '1W ago',
      title: 'Project Initiation',
      thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
      views: '10M',
      likes: '726K',
      comments: '10K',
      shares: '50K',
      viralScore: 99,
      color: 'bg-blue-500'
    },
    {
      id: 'planning',
      author: 'Timeline Master',
      postedAgo: '1W ago',
      title: 'Planning Phase',
      thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      views: '5M',
      likes: '200K',
      comments: '5K',
      shares: '40K',
      viralScore: 92,
      color: 'bg-green-500'
    },
    {
      id: 'monitoring',
      author: 'Control Expert',
      postedAgo: '1W ago',
      title: 'Monitoring and Control',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      views: '6.4M',
      likes: '150K',
      comments: '65K',
      shares: '40K',
      viralScore: 99,
      color: 'bg-purple-500'
    },
    {
      id: 'budget',
      author: 'Budget Pro',
      postedAgo: '1W ago',
      title: 'Budget Management',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      views: '1.4M',
      likes: '300K',
      comments: '20K',
      shares: '50K',
      viralScore: 79,
      color: 'bg-yellow-500'
    },
    {
      id: 'risk',
      author: 'Risk Manager',
      postedAgo: '1W ago',
      title: 'Risk Management',
      thumbnail: 'https://images.unsplash.com/photo-1507208773393-40d9fc670acf?auto=format&fit=crop&w=800&q=80',
      views: '0.5M',
      likes: '10K',
      comments: '2K',
      shares: '5K',
      viralScore: 65,
      color: 'bg-red-500'
    }
  ];

  const handleTemplateSelect = (showcaseTemplate) => {
    setCurrentTemplate(showcaseTemplate);
    setShowTemplateSelector(true);
  };

  const handleTemplateTypeSelect = async (type) => {
    setShowTemplateSelector(false);
    
    if (type === 'default') {
      const fullTemplate = templates.find(t => t.id === currentTemplate.id);
      if (fullTemplate) {
        setSelectedTemplate({
          ...fullTemplate,
          color: currentTemplate.color,
          isAIGenerated: false
        });
      }
    } else if (type === 'ai') {
      setShowAIPrompt(true);
    }
  };

  const handleAIGenerate = async (prompt) => {
    setIsGenerating(true);
    try {
      const generatedContent = await generateTemplateContent(currentTemplate.title, prompt);
      setSelectedTemplate({
        ...currentTemplate,
        slides: generatedContent,
        isAIGenerated: true,
        prompt: prompt
      });
    } catch (error) {
      console.error('Failed to generate template:', error);
      alert(error.message || 'Failed to generate template. Please try again.');
    } finally {
      setIsGenerating(false);
      setShowAIPrompt(false);
    }
  };

  const handleClose = () => {
    setSelectedTemplate(null);
    setCurrentTemplate(null);
    setShowTemplateSelector(false);
    setShowAIPrompt(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {showcaseTemplates.map((template) => (
        <div key={template.id} className="bg-[#1E1E1E] rounded-xl overflow-hidden flex flex-col h-full">
          <div className="px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#C3F53B] flex items-center justify-center text-black font-bold">
                {template.author[0]}
              </div>
              <div>
                <div className="text-white font-medium">{template.author}</div>
                <div className="text-gray-400 text-sm">{template.postedAgo}</div>
              </div>
            </div>
          </div>

          <div className="relative w-full" style={{ paddingTop: '73.25%' }}>
            <div className="absolute inset-0">
              <img
                src={template.thumbnail}
                alt={template.title}
                className="w-full h-full object-cover rounded-lg mx-auto"
                loading="lazy"
                style={{ 
                  objectPosition: '50% 50%',
                  maxHeight: '300px',
                  width: '100%'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {template.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 space-y-2 flex-grow">
            <div className="flex justify-between text-gray-400 text-sm">
              <span>Views: {template.views}</span>
              <span>Likes: {template.likes}</span>
            </div>
            <div className="flex justify-between text-gray-400 text-sm">
              <span>Comments: {template.comments}</span>
              <span>Shares: {template.shares}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    template.viralScore >= 90 ? 'bg-green-500' : 
                    template.viralScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${template.viralScore}%` }}
                />
              </div>
              <span className="text-sm text-gray-400">
                Score: {template.viralScore}/100
              </span>
            </div>
          </div>

          <div className="px-4 pb-4 mt-auto">
            <button 
              onClick={() => handleTemplateSelect(template)}
              className="w-full py-2 bg-[#C3F53B] text-black rounded-lg font-medium hover:bg-[#d4ff4d] transition-colors"
            >
              Use Template
            </button>
          </div>
        </div>
      ))}

      <TemplateSelector
        isOpen={showTemplateSelector}
        onClose={handleClose}
        onSelect={handleTemplateTypeSelect}
        templateTitle={currentTemplate?.title}
      />

      <AIPromptDialog
        isOpen={showAIPrompt}
        onClose={handleClose}
        onGenerate={handleAIGenerate}
        templateTitle={currentTemplate?.title}
        isGenerating={isGenerating}
      />

      {selectedTemplate && (
        <GeneratedPresentation
          template={selectedTemplate}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default ShowcaseGrid;