import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { students } from '../data/students';

const Enrollment = () => {
  const freshmen = students.filter(s => s.year === 'Freshman').length;
  const sophomores = students.filter(s => s.year === 'Sophomore').length;
  const juniors = students.filter(s => s.year === 'Junior').length;
  const seniors = students.filter(s => s.year === 'Senior').length;
  const total = students.length;

  const yearWiseData = [
    { name: 'Freshman', value: freshmen },
    { name: 'Sophomore', value: sophomores },
    { name: 'Junior', value: juniors },
    { name: 'Senior', value: seniors }
  ];

  const enrollmentByYear = [
    { year: '2020', students: 110 },
    { year: '2021', students: 118 },
    { year: '2022', students: 122 },
    { year: '2023', students: 125 },
    { year: '2024', students: 129 }
  ];

  return (
    <div className="space-y-6">
      {/* Year Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <YearCard
          title="FRESHMAN"
          value={freshmen}
          percentage={(freshmen / total * 100).toFixed(1)}
          color="indigo"
        />
        <YearCard
          title="SOPHOMORE"
          value={sophomores}
          percentage={(sophomores / total * 100).toFixed(1)}
          color="purple"
        />
        <YearCard
          title="JUNIOR"
          value={juniors}
          percentage={(juniors / total * 100).toFixed(1)}
          color="pink"
        />
        <YearCard
          title="SENIOR"
          value={seniors}
          percentage={(seniors / total * 100).toFixed(1)}
          color="red"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Year-wise Distribution Line Chart */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Year-wise Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={yearWiseData}>
              <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
              <YAxis tick={{ fill: '#9ca3af' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #4f46e5',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#a855f7"
                strokeWidth={3}
                dot={{ fill: '#a855f7', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Enrollment by Year Area Chart */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Enrollment by Year</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={enrollmentByYear}>
              <defs>
                <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" tick={{ fill: '#9ca3af' }} />
              <YAxis tick={{ fill: '#9ca3af' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #4f46e5',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area
                type="monotone"
                dataKey="students"
                stroke="#6366f1"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorStudents)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const YearCard = ({ title, value, percentage, color }) => {
  const colorClasses = {
    indigo: 'text-indigo-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    red: 'text-red-400'
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
      <p className="text-gray-400 text-sm font-medium tracking-wide mb-2">{title}</p>
      <h3 className={`text-5xl font-bold ${colorClasses[color]}`}>{value}</h3>
      <p className="text-gray-400 text-sm mt-2">{percentage}% of total</p>
    </div>
  );
};

export default Enrollment;

