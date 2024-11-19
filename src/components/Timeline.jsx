import React from 'react';
import {
  DocumentTextIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  ShieldExclamationIcon,
  FlagIcon
} from '@heroicons/react/24/outline';

const Timeline = ({ onTemplateSelect }) => {
  const templates = [
    {
      id: 'project-initiation',
      title: 'Project Initiation',
      icon: DocumentTextIcon,
      color: 'bg-blue-500',
      description: 'Start your project right with a comprehensive initiation template'
    },
    {
      id: 'planning-phase',
      title: 'Planning Phase',
      icon: ClipboardDocumentListIcon,
      color: 'bg-green-500',
      description: 'Plan every detail of your project execution'
    },
    {
      id: 'monitoring-control',
      title: 'Monitoring and Control',
      icon: ChartBarIcon,
      color: 'bg-purple-500',
      description: 'Track and manage project progress effectively'
    },
    {
      id: 'budget',
      title: 'Budget',
      icon: CurrencyDollarIcon,
      color: 'bg-yellow-500',
      description: 'Manage project finances and resources'
    },
    {
      id: 'risk-management',
      title: 'Risk Management',
      icon: ShieldExclamationIcon,
      color: 'bg-red-500',
      description: 'Identify and mitigate project risks'
    },
    {
      id: 'closure',
      title: 'Project Closure',
      icon: FlagIcon,
      color: 'bg-gray-500',
      description: 'Successfully close and review your project'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {templates.map((template, index) => {
            const Icon = template.icon;
            return (
              <div
                key={template.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-4 h-4 rounded-full ${template.color}`}></div>
                </div>

                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'pr-8' : 'pl-8'
                  }`}
                >
                  <div
                    className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => onTemplateSelect(template)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`h-6 w-6 ${template.color.replace('bg-', 'text-')}`} />
                      <h3 className="text-lg font-semibold">{template.title}</h3>
                    </div>
                    <p className="text-gray-600">{template.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;