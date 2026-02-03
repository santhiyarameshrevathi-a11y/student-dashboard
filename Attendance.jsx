import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle, XCircle, Users, AlertTriangle } from 'lucide-react';
import { students } from '../data/students';

const Attendance = () => {
  const presentToday = 347;
  const absentToday = 183;
  const avgAttendance = (students.reduce((sum, s) => sum + s.attendance, 0) / students.length).toFixed(1);
  const lowAttendanceStudents = students.filter(s => s.attendance < 70);

  const attendanceDistribution = [
    { name: 'Freshman', value: 125 },
    { name: 'Sophomore', value: 112 },
    { name: 'Junior', value: 130 },
    { name: 'Senior', value: 125 }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="PRESENT TODAY"
          value={presentToday}
          icon={CheckCircle}
          iconColor="emerald"
          link="Click to filter →"
        />
        <StatCard
          title="ABSENT TODAY"
          value={absentToday}
          icon={XCircle}
          iconColor="red"
          link="Click to filter →"
        />
        <StatCard
          title="AVERAGE ATTENDANCE"
          value={`${avgAttendance}%`}
          icon={Users}
          iconColor="indigo"
          link="Click to filter →"
        />
        <StatCard
          title="LOW ATTENDANCE"
          value={lowAttendanceStudents.length}
          icon={AlertTriangle}
          iconColor="yellow"
          link="Click to filter →"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Distribution Chart */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Attendance Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceDistribution}>
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
              <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Students Requiring Attention */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Students Requiring Attention</h3>
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
            {lowAttendanceStudents.slice(0, 6).map((student) => (
              <div
                key={student.id}
                className="bg-slate-700/30 rounded-lg p-4 border border-red-500/30 hover:border-red-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold">{student.name}</h4>
                  <span className="text-red-400 font-bold text-lg">{student.attendance.toFixed(1)}%</span>
                </div>
                <p className="text-gray-400 text-sm">{student.major} • {student.year}</p>
                <p className="text-gray-500 text-xs mt-1">40 absent</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon: Icon, iconColor, link }) => {
  const colorClasses = {
    emerald: 'text-emerald-400',
    red: 'text-red-400',
    indigo: 'text-indigo-400',
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

export default Attendance;