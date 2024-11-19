import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { exportToPowerPoint, exportToPDF } from '../utils/presentationExporter';
import { XMarkIcon, ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/outline';

const GeneratedPresentation = ({ template, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [slides, setSlides] = useState(template.slides || []);

  const handleContentChange = (slideIndex, contentIndex, newValue) => {
    setSlides(prevSlides => {
      const newSlides = [...prevSlides];
      if (newSlides[slideIndex].type === 'title') return newSlides;
      
      newSlides[slideIndex] = {
        ...newSlides[slideIndex],
        content: [...newSlides[slideIndex].content]
      };
      newSlides[slideIndex].content[contentIndex] = newValue;
      return newSlides;
    });
  };

  const handleExport = async (format) => {
    try {
      setExporting(true);
      const exportData = {
        ...template,
        slides
      };
      
      const success = format === 'pdf' 
        ? await exportToPDF(exportData)
        : await exportToPowerPoint(exportData);
        
      if (success) {
        alert(`Presentation exported successfully as ${format.toUpperCase()}!`);
      } else {
        alert('Failed to export presentation. Please try again.');
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('An error occurred while exporting the presentation.');
    } finally {
      setExporting(false);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="fixed inset-0 z-50 overflow-hidden"
    >
      <Dialog.Overlay className={`fixed inset-0 ${isFullscreen ? 'bg-gray-900' : 'bg-gray-900/80'}`} />

      <div className="fixed inset-0 flex flex-col">
        {/* Header */}
        <div className="relative flex items-center justify-between px-6 py-4 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
          <h1 className="text-3xl font-bold text-blue-400">{template.title}</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleExport('pptx')}
              disabled={exporting}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              Export to PowerPoint
            </button>
            <button
              onClick={() => handleExport('pdf')}
              disabled={exporting}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              Export to PDF
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <ArrowsPointingInIcon className="w-6 h-6" />
              ) : (
                <ArrowsPointingOutIcon className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 space-y-8">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                {slide.type === 'title' ? (
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-4">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
                      <h2 className="text-4xl font-bold text-white mb-4">{slide.title}</h2>
                      <p className="text-xl text-gray-200">{slide.subtitle}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">{slide.title}</h2>
                    <div className="space-y-4">
                      {slide.content.map((content, contentIndex) => (
                        <div key={contentIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                          <input
                            type="text"
                            value={content}
                            onChange={(e) => handleContentChange(slideIndex, contentIndex, e.target.value)}
                            className="flex-1 bg-gray-700/50 px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white outline-none transition-colors"
                            placeholder="Enter content..."
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default GeneratedPresentation;