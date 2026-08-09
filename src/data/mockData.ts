export type Track = {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  accent: string;
};

export type DayTask = {
  day: number;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  minutes: string;
  summary: string;
  build: string[];
  definitionOfDone: string[];
  resources: { title: string; source: string; url: string }[];
};

export type Badge = {
  id: string;
  label: string;
  icon: string;
  tone: 'streak' | 'accent' | 'electric';
};

export type Student = {
  name: string;
  track: string;
  currentDay: number;
  streak: number;
  completedDays: number;
  totalDays: number;
  aheadPercent: number;
  rank: number;
  badges: Badge[];
  tonightPlan: { label: string; minutes: string; done: boolean }[];
  missedYesterday?: boolean;
};

export const tracks: Track[] = [
  {
    id: 'web',
    name: 'Web Development',
    tagline: 'React, APIs, full-stack apps',
    icon: 'Globe',
    accent: '#3b82f6',
  },
  {
    id: 'aiml',
    name: 'AI / ML',
    tagline: 'Models, datasets, predictions',
    icon: 'BrainCircuit',
    accent: '#22e0a1',
  },
  {
    id: 'data',
    name: 'Data Science',
    tagline: 'Pandas, viz, storytelling',
    icon: 'BarChart3',
    accent: '#f59e0b',
  },
  {
    id: 'app',
    name: 'App Development',
    tagline: 'Flutter, React Native, mobile',
    icon: 'Smartphone',
    accent: '#a855f7',
  },
  {
    id: 'sec',
    name: 'Cybersecurity',
    tagline: 'CTFs, recon, hardening',
    icon: 'ShieldCheck',
    accent: '#ef4444',
  },
];

export const stats = {
  students: '12,480+',
  projects: '38,000+',
  streak: '60-day public streak',
};

export const howItWorks = [
  { step: '01', title: 'Pick your track', desc: 'Choose what you want to build for 60 days.' },
  { step: '02', title: 'Build every day', desc: 'Ship one small project daily, no matter how small.' },
  { step: '03', title: 'Prove your progress', desc: 'Push to GitHub and post on LinkedIn.' },
];

export const transformation = [
  { day: 'Day 1', state: 'Starting', desc: 'Show up. Push something tiny.' },
  { day: 'Day 15', state: 'Building consistency', desc: 'The habit is real now.' },
  { day: 'Day 30', state: 'Shipping confidently', desc: 'Projects come naturally.' },
  { day: 'Day 60', state: 'Portfolio + public proof', desc: 'Recruiters can find you.' },
];

export const student: Student = {
  name: '',
  track: 'AI / ML',
  currentDay: 12,
  streak: 11,
  completedDays: 11,
  totalDays: 60,
  aheadPercent: 68,
  rank: 428,
  badges: [
    { id: 'b1', label: '7 Day Streak', icon: 'Flame', tone: 'streak' },
    { id: 'b2', label: 'First Project Shipped', icon: 'Rocket', tone: 'accent' },
    { id: 'b3', label: '10 Commits', icon: 'Github', tone: 'electric' },
  ],
  tonightPlan: [
    { label: 'Read the task', minutes: '5 min', done: true },
    { label: 'Build', minutes: '45 min', done: false },
    { label: 'Push to GitHub', minutes: '5 min', done: false },
    { label: 'Share on LinkedIn', minutes: '3 min', done: false },
  ],
};

export const dayTask: DayTask = {
  day: 12,
  title: 'Build a Sentiment Classifier',
  difficulty: 'Intermediate',
  minutes: '45–60 min',
  summary:
    'Build a small sentiment-analysis application that classifies text as positive, negative, or neutral.',
  build: [
    'Accept a text input',
    'Process the text',
    'Predict sentiment',
    'Display the result',
    'Add at least 3 test examples',
  ],
  definitionOfDone: [
    'Application accepts text',
    'Sentiment prediction works',
    'Positive/negative/neutral cases tested',
    'README updated',
    'Code pushed to GitHub',
  ],
  resources: [
    { title: 'Python sentiment analysis guide', source: 'Real Python', url: 'https://realpython.com/sentiment-analysis-python/' },
    { title: 'Scikit-learn documentation', source: 'scikit-learn.org', url: 'https://scikit-learn.org/stable/' },
    { title: 'Starter repository', source: 'github.com/abtalks', url: 'https://github.com' },
  ],
};
