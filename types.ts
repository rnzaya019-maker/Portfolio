export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  status?: string;
}

export interface NavLink {
  name: string;
  href: string;
}