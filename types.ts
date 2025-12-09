export interface Job {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  project?: string;
  projectDesc?: string;
  imageUrls?: string[];
  keywords: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  year: string;
}

export interface ResumeData {
  name: string;
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: Job[];
  education: Education[];
}
