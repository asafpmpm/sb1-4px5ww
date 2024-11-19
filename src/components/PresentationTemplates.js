import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  RocketLaunchIcon, 
  BanknotesIcon, 
  ShieldExclamationIcon, 
  FlagIcon 
} from '@heroicons/react/24/outline';

export const generatePresentation = (template) => {
  const slides = presentationTemplates[template.title.toLowerCase().replace(' ', '_')];
  return {
    title: template.title,
    slides,
    theme: template.color.replace('bg-', ''),
    icon: template.icon
  };
};

const presentationTemplates = {
  project_initiation: [
    {
      title: 'Project Overview',
      content: [
        'Project Name and Description',
        'Project Goals and Objectives',
        'Key Stakeholders',
        'Project Scope'
      ]
    },
    {
      title: 'Business Case',
      content: [
        'Problem Statement',
        'Proposed Solution',
        'Expected Benefits',
        'Success Criteria'
      ]
    },
    {
      title: 'Project Organization',
      content: [
        'Project Team Structure',
        'Roles and Responsibilities',
        'Communication Channels',
        'Governance Framework'
      ]
    }
  ],
  planning_phase: [
    {
      title: 'Project Schedule',
      content: [
        'Major Milestones',
        'Timeline Overview',
        'Dependencies',
        'Critical Path'
      ]
    },
    {
      title: 'Resource Planning',
      content: [
        'Team Allocation',
        'Equipment and Materials',
        'External Resources',
        'Resource Calendar'
      ]
    },
    {
      title: 'Quality Management',
      content: [
        'Quality Objectives',
        'Quality Metrics',
        'Review Process',
        'Quality Control Measures'
      ]
    }
  ],
  budget: [
    {
      title: 'Budget Overview',
      content: [
        'Total Budget',
        'Cost Breakdown',
        'Funding Sources',
        'Budget Constraints'
      ]
    },
    {
      title: 'Cost Management',
      content: [
        'Cost Tracking Methods',
        'Expense Categories',
        'Budget Controls',
        'Financial Reporting'
      ]
    },
    {
      title: 'Financial Forecasting',
      content: [
        'Cost Projections',
        'ROI Analysis',
        'Cash Flow Planning',
        'Contingency Reserve'
      ]
    }
  ],
  risk_management: [
    {
      title: 'Risk Assessment',
      content: [
        'Risk Identification',
        'Risk Analysis',
        'Risk Priority Matrix',
        'Risk Categories'
      ]
    },
    {
      title: 'Risk Response',
      content: [
        'Mitigation Strategies',
        'Contingency Plans',
        'Risk Owners',
        'Response Timeline'
      ]
    },
    {
      title: 'Risk Monitoring',
      content: [
        'Tracking Methods',
        'Review Schedule',
        'Risk Indicators',
        'Reporting Process'
      ]
    }
  ],
  monitoring_and_control: [
    {
      title: 'Performance Metrics',
      content: [
        'KPI Dashboard',
        'Progress Tracking',
        'Variance Analysis',
        'Performance Trends'
      ]
    },
    {
      title: 'Change Control',
      content: [
        'Change Request Process',
        'Impact Assessment',
        'Approval Workflow',
        'Change Log'
      ]
    },
    {
      title: 'Status Reporting',
      content: [
        'Report Types',
        'Reporting Frequency',
        'Distribution List',
        'Action Items'
      ]
    }
  ],
  closure: [
    {
      title: 'Project Completion',
      content: [
        'Deliverables Status',
        'Acceptance Criteria',
        'Sign-off Process',
        'Handover Plan'
      ]
    },
    {
      title: 'Lessons Learned',
      content: [
        'Success Stories',
        'Challenges Faced',
        'Best Practices',
        'Recommendations'
      ]
    },
    {
      title: 'Project Archive',
      content: [
        'Documentation',
        'Asset Management',
        'Knowledge Transfer',
        'Contact Information'
      ]
    }
  ]
};