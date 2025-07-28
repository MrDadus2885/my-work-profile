export interface PersonalInfo {
  id?: number;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  profilePicture?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  gpa: string;
  relevantCourses: string[];
}

export interface Skills {
  id?: number;
  programming: { name: string; rating: number }[];
  frameworks: { name: string; rating: number }[];
  databases: { name: string; rating: number }[];
  tools: { name: string; rating: number }[];
  softSkills: { name: string; rating: number }[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
}

export interface ProfileData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
} 