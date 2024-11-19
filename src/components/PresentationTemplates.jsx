import {
  DocumentTextIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  BanknotesIcon,
  ShieldExclamationIcon,
  FlagIcon
} from '@heroicons/react/24/outline';

const templates = {
  project_initiation: {
    slides: [
      {
        title: "Project Overview",
        content: [
          "Project objectives and goals",
          "Key stakeholders",
          "Project scope",
          "Success criteria"
        ]
      },
      {
        title: "Business Case",
        content: [
          "Problem statement",
          "Proposed solution",
          "Expected benefits",
          "ROI analysis"
        ]
      }
    ]
  },
  planning_phase: {
    slides: [
      {
        title: "Project Schedule",
        content: [
          "Major milestones",
          "Timeline breakdown",
          "Resource allocation",
          "Dependencies"
        ]
      },
      {
        title: "Deliverables",
        content: [
          "Key deliverables",
          "Quality requirements",
          "Acceptance criteria",
          "Review process"
        ]
      }
    ]
  },
  budget: {
    slides: [
      {
        title: "Cost Breakdown",
        content: [
          "Resource costs",
          "Equipment and materials",
          "External services",
          "Contingency funds"
        ]
      },
      {
        title: "Financial Planning",
        content: [
          "Budget allocation",
          "Cost tracking methods",
          "Variance analysis",
          "Financial risks"
        ]
      }
    ]
  },
  risk_management: {
    slides: [
      {
        title: "Risk Assessment",
        content: [
          "Risk identification",
          "Impact analysis",
          "Probability assessment",
          "Risk prioritization"
        ]
      },
      {
        title: "Mitigation Strategies",
        content: [
          "Risk response plans",
          "Preventive measures",
          "Contingency plans",
          "Risk monitoring"
        ]
      }
    ]
  },
  monitoring_and_control: {
    slides: [
      {
        title: "Progress Tracking",
        content: [
          "KPIs and metrics",
          "Status reporting",
          "Performance analysis",
          "Issue management"
        ]
      },
      {
        title: "Quality Control",
        content: [
          "Quality metrics",
          "Testing procedures",
          "Review process",
          "Improvement actions"
        ]
      }
    ]
  },
  closure: {
    slides: [
      {
        title: "Project Completion",
        content: [
          "Deliverables status",
          "Final acceptance",
          "Documentation handover",
          "Resource release"
        ]
      },
      {
        title: "Lessons Learned",
        content: [
          "Success factors",
          "Challenges faced",
          "Best practices",
          "Recommendations"
        ]
      }
    ]
  }
};

export const generatePresentation = (template) => {
  if (!template || !templates[template.id]) {
    return null;
  }

  return {
    ...template,
    ...templates[template.id]
  };
};