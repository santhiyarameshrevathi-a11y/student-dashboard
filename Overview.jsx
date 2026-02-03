import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, BookOpen, UserCheck, AlertTriangle } from 'lucide-react';
import { students } from '../data/students';

const Overview = () => {
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === 'active').length;
  const avgGpa = (students.reduce((sum, s) => sum + s.gpa, 0) / totalStudents).toFixed(2);
  const avgAttendance = (students.reduce((sum, s) => sum + s.attendance, 0) / totalStudents).toFixed(1);
  const highPerformers = students.filter(s => s.gpa >= 3.5).length;
  const onProbation = students.filter(s => s.status === 'probation').length;
  const onLeave = students.filter(s => s.status === 'leave').length;

  const majorData = [
    { name: 'Chemistry', value: students.filter(s => s.major === 'Chemistry').length },
    { name: 'Engineering', value: students.filter(s => s.major === 'Engineering').length },
    { name: 'Psychology', value: students.filter(s => s.major === 'Psychology').length },
    { name: 'Political Science', value: students.filter(s => s.major === 'Political Science').length },
    { name: 'History', value: students.filter(s => s.major === 'History').length },
    { name: 'Nursing', value: students.filter(s => s.major === 'Nursing').length },
    { name: 'Computer Science', value: students.filter(s => s.major === 'Computer Science').length },
    { name: 'Physics', value: students.filter(s => s.major === 'Physics').length }
  ].sort((a, b) => b.value - a.value).slice(0, 8);

  const gpaData = [
    { name: '3.5-4.0', value: students.filter(s => s.gpa >= 3.5).length, color: '#10b981' },
    { name: '3.0-3.5', value: students.filter(s => s.gpa >= 3.0 && s.gpa < 3.5).length, color: '#8b5cf6' },
    { name: '2.5-3.0', value: students.filter(s => s.gpa >= 2.5 && s.gpa < 3.0).length, color: '#ec4899' },
    { name: '2.0-2.5', value: students.filter(s => s.gpa >= 2.0 && s.gpa < 2.5).length, color: '#ef4444' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="TOTAL STUDENTS"
          value={totalStudents}
          subtitle={`${activeStudents} Active`}
          icon={Users}
          iconColor="indigo"
          link="Click to filter →"
        />
        <StatCard
          title="AVERAGE GPA"
          value={avgGpa}
          subtitle={`${highPerformers} High Performers`}
          icon={BookOpen}
          iconColor="emerald"
          link="Click to filter →"
        />
        <StatCard
          title="AVG ATTENDANCE"
          value={`${avgAttendance}%`}
          subtitle="322 Present Today"
          icon={UserCheck}
          iconColor="yellow"
          link="Click to filter →"
        />
        <StatCard
          title="ON PROBATION"
          value={onProbation}
          subtitle={`${onLeave} On Leave`}
          icon={AlertTriangle}
          iconColor="red"
          link="Click to filter →"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Students by Major</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={majorData}>
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={100}
                tick={{ fill: '#9ca3af', fontSize: 11 }}
              />
              <YAxis tick={{ fill: '#9ca3af' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #4f46e5',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">GPA Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={gpaData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
                labelLine={{ stroke: '#6366f1' }}
              >
                {gpaData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #4f46e5',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle, icon: Icon, iconColor, link }) => {
  const colorClasses = {
    indigo: 'text-indigo-400',
    emerald: 'text-emerald-400',
    yellow: 'text-yellow-400',
    red: 'text-red-400'
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm font-medium tracking-wide">{title}</p>
          <h3 className={`text-4xl font-bold mt-2 ${colorClasses[iconColor]}`}>{value}</h3>
        </div>
        <div className={`p-3 rounded-lg bg-${iconColor}-500/10`}>
          <Icon className={colorClasses[iconColor]} size={28} />
        </div>
      </div>
      <p className="text-gray-400 text-sm">{subtitle}</p>
      <p className="text-indigo-400 text-xs mt-2 cursor-pointer hover:text-indigo-300">{link}</p>
    </div>
  );
};

export default Overview;
