import React from 'react';
import { Award, TrendingUp, Briefcase, Star } from 'lucide-react';
import { students } from '../data/students';

const Performance = () => {
  const highPerformers = students.filter(s => s.gpa >= 3.5).length;
  const avgGpa = (students.reduce((sum, s) => sum + s.gpa, 0) / students.length).toFixed(2);
  const withInternships = 210;
  const inExtracurriculars = 246;

  const topPerformers = students
    .sort((a, b) => b.gpa - a.gpa)
    .slice(0, 20);

  const getNumberColor = (index) => {
    if (index === 0) return 'bg-yellow-500 text-yellow-900';
    if (index === 1) return 'bg-gray-300 text-gray-800';
    if (index === 2) return 'bg-orange-400 text-orange-900';
    return 'bg-indigo-600 text-white';
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="HIGH PERFORMERS (GPA ≥ 3.5)"
          value={highPerformers}
          icon={Award}
          iconColor="emerald"
          link="Click to filter →"
        />
        <StatCard
          title="AVERAGE GPA"
          value={avgGpa}
          icon={TrendingUp}
          iconColor="indigo"
          link="Click to filter →"
        />
        <StatCard
          title="WITH INTERNSHIPS"
          value={withInternships}
          icon={Briefcase}
          iconColor="purple"
          link="Click to filter →"
        />
        <StatCard
          title="IN EXTRACURRICULARS"
          value={inExtracurriculars}
          icon={Star}
          iconColor="yellow"
          link="Click to filter →"
        />
      </div>

      {/* Top Performers List */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Top 20 Performers by GPA</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topPerformers.map((student, index) => (
            <div
              key={student.id}
              className="bg-slate-700/30 rounded-lg p-4 border border-emerald-500/30 hover:border-emerald-500/50 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-full ${getNumberColor(index)} flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold truncate">{student.name}</h4>
                  <p className="text-gray-400 text-sm">{student.major}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-emerald-400 font-bold text-xl">{student.gpa.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon: Icon, iconColor, link }) => {
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
      <p className="text-indigo-400 text-xs mt-2 cursor-pointer hover:text-indigo-300">{link}</p>
    </div>
  );
};

export default Performance;