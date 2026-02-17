import { ExperienceItem, EducationItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Solutions', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Operations & Systems Coordinator / IT Manager',
    company: 'Complex Home Care Solutions',
    location: 'Colorado',
    period: 'Sep 2025 – Present',
    description: [
      'Built PAR Vault operations platform: client management, document versioning, supervisory visit scheduling, and caregiver compliance tracking.',
      'Developed digitized employee application with form validation and e-signature, reducing paperwork processing time by approximately 60%.',
      'Implemented role-based access control, MFA, and audit logging aligned with HIPAA.',
      'Created standardized onboarding documentation and training materials for organization.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Team Manager',
    company: 'Autocom Japan Inc',
    location: 'Ulaanbaatar, Mongolia',
    period: 'Sep 2020 – Mar 2022',
    description: [
      'Supervised team of 4 sales professionals, tracked individual and team KPIs against targets.',
      'Prepared weekly and monthly performance reports and dashboards for leadership review.',
      'Delivered training on sales processes and company procedures to improve team productivity.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Logistics Coordinator',
    company: 'Kaneyama LLC',
    location: 'Ulaanbaatar, Mongolia',
    period: 'Jun 2018 – Aug 2021',
    description: [
      'Coordinated end-to-end import logistics for Japanese automobiles entering Mongolia.',
      'Prepared customs documentation and regulatory filings, maintained 100% compliance record.',
      'Streamlined documentation processes to reduce clearance time and administrative delays.'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'M.S. Information Technology Management',
    school: 'Colorado State University Global',
    year: 'Expected 2027',
    status: 'In Progress'
  },
  {
    degree: 'B.S. Management Information Systems',
    school: 'Columbia College, Denver, CO',
    year: '2022 – 2025'
  },
  {
    degree: 'B.A. Linguistics',
    school: 'University of the Humanities, Mongolia',
    year: '2018'
  }
];