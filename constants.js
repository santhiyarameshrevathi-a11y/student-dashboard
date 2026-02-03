export const ROUTES = {
  OVERVIEW: '/',
  STUDENT_LIST: '/students',
  ATTENDANCE: '/attendance',
  PERFORMANCE: '/performance',
  ENROLLMENT: '/enrollment',
  FINANCIAL: '/financial',
  ANALYTICS: '/analytics',
  SCHEDULE: '/schedule',
  REPORTS: '/reports'
};

export const NAVIGATION_ITEMS = [
  { id: 'overview', label: 'OVERVIEW', path: ROUTES.OVERVIEW, icon: 'BarChart3' },
  { id: 'students', label: 'STUDENT LIST', path: ROUTES.STUDENT_LIST, icon: 'Users' },
  { id: 'attendance', label: 'ATTENDANCE', path: ROUTES.ATTENDANCE, icon: 'UserCheck' },
  { id: 'performance', label: 'PERFORMANCE', path: ROUTES.PERFORMANCE, icon: 'TrendingUp' },
  { id: 'enrollment', label: 'ENROLLMENT STATS', path: ROUTES.ENROLLMENT, icon: 'GraduationCap' },
  { id: 'financial', label: 'FINANCIAL', path: ROUTES.FINANCIAL, icon: 'DollarSign' },
  { id: 'analytics', label: 'ANALYTICS', path: ROUTES.ANALYTICS, icon: 'Activity' },
  { id: 'schedule', label: 'SCHEDULE', path: ROUTES.SCHEDULE, icon: 'Calendar' },
  { id: 'reports', label: 'REPORTS', path: ROUTES.REPORTS, icon: 'FileText' }
];

export const STATUS_COLORS = {
  active: 'emerald',
  probation: 'yellow',
  leave: 'red'
};

export const MAJORS = [
  "Computer Science", "Engineering", "Psychology", "Biology", 
  "Mathematics", "Chemistry", "Political Science", "History", 
  "Nursing", "Business", "Economics", "Art", "Education"
];