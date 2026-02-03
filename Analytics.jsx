import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Activity, Target, Zap } from 'lucide-react';
import { students } from '../data/students';

const Analytics = () => {
  const totalStudents = students.length;
  const avgGpa = (students.reduce((sum, s) => sum + s.gpa, 0) / totalStudents).toFixed(2);
  const avgAttendance = (students.reduce((sum, s) => sum + s.attendance, 0) / totalStudents).toFixed(1);
  const retentionRate = 94.5;
  const graduationRate = 87.3;

  // Performance trends over months
  const performanceTrends = [
    { month: 'Jan', gpa: 3.02, attendance: 78.5 },
    { month: 'Feb', gpa: 3.05, attendance: 79.2 },
    { month: 'Mar', gpa: 3.08, attendance: 80.1 },
    { month: 'Apr', gpa: 3.01, attendance: 81.3 },
    { month: 'May', gpa: 3.03, attendance: 80.9 },
    { month: 'Jun', gpa: 3.07, attendance: 80.2 }
  ];

  // Department comparison
  const departmentData = [
    { department: 'Engineering', avgGpa: 3.45, enrollment: 85 },
    { department: 'Sciences', avgGpa: 3.32, enrollment: 92 },
    { department: 'Arts', avgGpa: 3.18, enrollment: 78 },
    { department: 'Business', avgGpa: 3.28, enrollment: 88 },
    { department: 'Medicine', avgGpa: 3.52, enrollment: 67 }
  ];

  // Skill assessment radar
  const skillData = [
    { skill: 'Academic', value: 85 },
    { skill: 'Attendance', value: 80 },
    { skill: 'Participation', value: 75 },
    { skill: 'Projects', value: 88 },
    { skill: 'Extracurricular', value: 70 },
    { skill: 'Leadership', value: 65 }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="RETENTION RATE"
          value={`${retentionRate}%`}
          subtitle="Year over year"
          icon={Target}
          iconColor="emerald"
          trend="+2.3%"
        />
        <StatCard
          title="GRADUATION RATE"
          value={`${graduationRate}%`}
          subtitle="4-year average"
          icon={TrendingUp}
          iconColor="indigo"
          trend="+1.8%"
        />
        <StatCard
          title="ENGAGEMENT SCORE"
          value="8.4"
          subtitle="Out of 10"
          icon={Activity}
          iconColor="purple"
          trend="+0.5"
        />
        <StatCard
          title="SUCCESS RATE"
          value="91.2%"
          subtitle="Pass rate"
          icon={Zap}
          iconColor="yellow"
          trend="+3.1%"
        />
      </div>

      {/* Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceTrends}>
              <XAxis dataKey="month" tick={{ fill: '#9ca3af' }} />
              <YAxis tick={{ fill: '#9ca3af' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #4f46e5',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Line type="monotone" dataKey="gpa" stroke="#6366f1" strokeWidth={3} name="GPA" dot={{ fill: '#6366f1', r: 5 }} />
              <Line type="monotone" dataKey="attendance" stroke="#10b981" strokeWidth={3} name="Attendance %" dot={{ fill: '#10b981', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Department Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentData}>
              <XAxis dataKey="department" tick={{ fill: '#9ca3af', fontSize: 11 }} angle={-15} textAnchor="end" height={70} />
              <YAxis tick={{ fill: '#9ca3af' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #4f46e5',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="avgGpa" fill="#a855f7" radius={[8, 8, 0, 0]} name="Avg GPA" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Skill Assessment & Key Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Overall Skill Assessment</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillData}>
              <PolarGrid stroke="#4f46e5" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9ca3af' }} />
              <Radar name="Score" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #4f46e5',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Key Metrics</h3>
          <div className="space-y-4">
            <MetricRow label="Course Completion Rate" value="96.5%" color="emerald" />
            <MetricRow label="Student Satisfaction" value="8.7/10" color="indigo" />
            <MetricRow label="Average Class Size" value="28 students" color="purple" />
            <MetricRow label="Faculty-Student Ratio" value="1:15" color="yellow" />
            <MetricRow label="Research Participation" value="42%" color="pink" />
            <MetricRow label="Internship Placement" value="78%" color="emerald" />
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InsightCard
            title="Top Performing Department"
            value="Medicine"
            description="Average GPA of 3.52 with 67 students enrolled"
            color="emerald"
          />
          <InsightCard
            title="Improvement Needed"
            value="Leadership Skills"
            description="Scoring 65/100, requires focused programs"
            color="yellow"
          />
          <InsightCard
            title="Highest Engagement"
            value="Project Work"
            description="88/100 score in project-based learning"
            color="indigo"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle, icon: Icon, iconColor, trend }) => {
  const colorClasses = {
    emerald: 'text-emerald-400',
    indigo: 'text-indigo-400',
    purple: 'text-purple-400',
    yellow: 'text-yellow-400'
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium tracking-wide">{title}</p>
          <h3 className={`text-4xl font-bold mt-2 ${colorClasses[iconColor]}`}>{value}</h3>
        </div>
        <div className={`p-3 rounded-lg bg-${iconColor}-500/10`}>
          <Icon className={colorClasses[iconColor]} size={28} />
        </div>
      </div>
      <p className="text-gray-400 text-sm">{subtitle}</p>
      {trend && <p className="text-emerald-400 text-xs mt-2">↑ {trend} from last period</p>}
    </div>
  );
};

const MetricRow = ({ label, value, color }) => {
  const colorClasses = {
    emerald: 'text-emerald-400',
    indigo: 'text-indigo-400',
    purple: 'text-purple-400',
    yellow: 'text-yellow-400',
    pink: 'text-pink-400'
  };

  return (
    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-indigo-500/20">
      <span className="text-gray-300 font-medium">{label}</span>
      <span className={`font-bold text-lg ${colorClasses[color]}`}>{value}</span>
    </div>
  );
};

const InsightCard = ({ title, value, description, color }) => {
  const colorClasses = {
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
    yellow: 'border-yellow-500/30 bg-yellow-500/5',
    indigo: 'border-indigo-500/30 bg-indigo-500/5'
  };

  const textColorClasses = {
    emerald: 'text-emerald-400',
    yellow: 'text-yellow-400',
    indigo: 'text-indigo-400'
  };

  return (
    <div className={`p-4 rounded-lg border ${colorClasses[color]}`}>
      <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">{title}</p>
      <h4 className={`text-xl font-bold mb-2 ${textColorClasses[color]}`}>{value}</h4>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default Analytics;
