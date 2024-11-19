import { 
  DocumentTextIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  BanknotesIcon,
  ShieldExclamationIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

const BASE_URL = 'https://images.unsplash.com/';

export const templates = [
  {
    id: 'initiation',
    title: 'Project Initiation',
    phase: 1,
    icon: RocketLaunchIcon,
    color: 'bg-blue-500',
    slides: [
      {
        title: "Project Initiation",
        type: "title",
        image: `${BASE_URL}photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80`,
        subtitle: "Setting the Foundation for Project Success"
      },
      {
        title: "Project Overview",
        content: [
          "Project Name and Description",
          "Project Goals and Objectives",
          "Key Stakeholders",
          "Project Scope",
          "Expected Outcomes"
        ]
      },
      {
        title: "Business Case",
        content: [
          "Problem Statement",
          "Proposed Solution",
          "Expected Benefits",
          "Success Criteria"
        ]
      },
      {
        title: "Project Organization",
        content: [
          "Project Team Structure",
          "Roles and Responsibilities",
          "Communication Channels",
          "Governance Framework"
        ]
      }
    ]
  },
  {
    id: 'planning',
    title: 'Planning Phase',
    phase: 2,
    icon: DocumentTextIcon,
    color: 'bg-green-500',
    slides: [
      {
        title: "Planning Phase",
        type: "title",
        image: `${BASE_URL}photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80`,
        subtitle: "Charting the Course to Project Success"
      },
      {
        title: "Project Schedule",
        content: [
          "Major Milestones",
          "Timeline Overview",
          "Dependencies",
          "Critical Path"
        ]
      },
      {
        title: "Resource Planning",
        content: [
          "Team Allocation",
          "Equipment and Materials",
          "External Resources",
          "Resource Calendar"
        ]
      },
      {
        title: "Quality Management",
        content: [
          "Quality Objectives",
          "Quality Metrics",
          "Review Process",
          "Quality Control Measures"
        ]
      }
    ]
  },
  {
    id: 'monitoring',
    title: 'Monitoring and Control',
    phase: 3,
    icon: ChartBarIcon,
    color: 'bg-purple-500',
    slides: [
      {
        title: "Monitoring and Control",
        type: "title",
        image: `${BASE_URL}photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80`,
        subtitle: "Keeping Your Project on Track"
      },
      {
        title: "Performance Metrics",
        content: [
          "KPI Dashboard",
          "Progress Tracking",
          "Variance Analysis",
          "Performance Trends"
        ]
      },
      {
        title: "Status Reporting",
        content: [
          "Project Health",
          "Key Achievements",
          "Current Challenges",
          "Next Steps"
        ]
      },
      {
        title: "Change Control",
        content: [
          "Change Request Process",
          "Impact Assessment",
          "Approval Workflow",
          "Change Log"
        ]
      }
    ]
  },
  {
    id: 'budget',
    title: 'Budget Management',
    phase: 4,
    icon: BanknotesIcon,
    color: 'bg-yellow-500',
    slides: [
      {
        title: "Budget Management",
        type: "title",
        image: `${BASE_URL}photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80`,
        subtitle: "Optimizing Project Financial Resources"
      },
      {
        title: "Budget Overview",
        content: [
          "Total Budget",
          "Cost Breakdown",
          "Funding Sources",
          "Budget Timeline"
        ]
      },
      {
        title: "Financial Tracking",
        content: [
          "Actual vs Planned",
          "Cost Forecasting",
          "Budget Risks",
          "Mitigation Plans"
        ]
      },
      {
        title: "Cost Management",
        content: [
          "Cost Control Measures",
          "Expense Categories",
          "Financial Reporting",
          "Budget Updates"
        ]
      }
    ]
  },
  {
    id: 'risk',
    title: 'Risk Management',
    phase: 5,
    icon: ShieldExclamationIcon,
    color: 'bg-red-500',
    slides: [
      {
        title: "Risk Management",
        type: "title",
        image: `${BASE_URL}photo-1507208773393-40d9fc670acf?auto=format&fit=crop&w=1920&q=80`,
        subtitle: "Proactively Managing Project Uncertainties"
      },
      {
        title: "Risk Assessment",
        content: [
          "Risk Identification",
          "Impact Analysis",
          "Probability Assessment",
          "Risk Matrix"
        ]
      },
      {
        title: "Risk Response",
        content: [
          "Mitigation Strategies",
          "Contingency Plans",
          "Risk Owners",
          "Monitoring Plan"
        ]
      },
      {
        title: "Risk Monitoring",
        content: [
          "Risk Status Updates",
          "New Risk Identification",
          "Response Effectiveness",
          "Risk Trends"
        ]
      }
    ]
  }
];