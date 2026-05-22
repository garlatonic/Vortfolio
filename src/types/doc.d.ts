type DocIconComponent = React.ComponentType<{ className?: string }>;

// Resume 관련 타입 정의
interface ResumeMetaCommonItem {
  label: string;
  value: string;
}

interface ResumeMetaLinkItem {
  label: string;
  value: string;
  icon?: DocIconComponent;
}

interface ResumeEducationItem {
  title: string;
  subtitle: string;
  period: string;
}

interface ResumeCertificationItem {
  title: string;
  issuer: string;
  date: string;
}

interface ResumePortfolioItem {
  title: string;
  description: string;
  link: string;
  icon?: DocIconComponent;
  isLink: boolean;
}

interface ResumeCareerPosition {
  team: string;
  grade: string;
  term: string;
}

interface ResumeResponsibilityItem {
  label: string;
  details: string[];
}

interface ResumeCareerItem {
  company: string;
  position: ResumeCareerPosition;
  period: string;
  responsibilities: ResumeResponsibilityItem[];
}

interface ResumeProjectItem {
  title: string;
  affiliation: string;
  period: string;
  description: string;
  role: string[];
}

interface ResumeData {
  name: string;
  slogan: string;
  jobTitle: string;
  meta: {
    common: ResumeMetaCommonItem[];
    links: ResumeMetaLinkItem[];
  };
  introduction: string[];
  techStack: string[];
  coreCompetencies: string[];
  education: ResumeEducationItem[];
  certifications: ResumeCertificationItem[];
  portfolio: ResumePortfolioItem[];
  career: ResumeCareerItem[];
  projects: ResumeProjectItem[];
}

// Career 관련 타입 정의
interface CareerPosition {
  team: string;
  grade?: string;
  term?: string;
}

interface CareerKeyAchievement {
  title: string;
  details: string[];
  techStack?: string[];
}

interface CareerAchievement {
  title: string;
  problems: string[];
  solutions: string[];
  results: string[];
  techStack?: string[];
}

interface CareerProject {
  title: string;
  period: string;
  description: string;
  responsibilities: {
    title: string;
    details: string[];
  }[];
  achievements: Array<string | CareerAchievement>;
  techStack: string[];
}

interface Career {
  company: string;
  period: string;
  position: CareerPosition;
  summary: string;
  responsibilities: string[];
  keyAchievements: CareerKeyAchievement[];
  projects: CareerProject[];
  isEducation?: boolean;
}

interface CareerData {
  career: Career[];
}
