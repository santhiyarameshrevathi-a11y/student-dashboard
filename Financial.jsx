import React from 'react';
import { DollarSign, CheckCircle, Clock, Award } from 'lucide-react';
import { students } from '../data/students';

const Financial = () => {
  const totalRevenue = 20.07; // in millions
  const tuitionPaid = 345;
  const pendingPayments = 155;
  const scholarships = 2.40; // in millions

  const pendingStudents = students.filter(s => s.paymentStatus === 'pending');

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="TOTAL REVENUE"
          value={`$${totalRevenue}M`}
          subtitle="From 500 students"
          icon={DollarSign}
          iconColor="emerald"
        />
        <StatCard
          title="TUITION PAID"
          value={tuitionPaid}
          subtitle="69.0% paid"
          icon={CheckCircle}
          iconColor="indigo"
          link="Click to filter →"
        />
        <StatCard
          title="PENDING PAYMENTS"
          value={pendingPayments}
          subtitle="31.0% pending"
          icon={Clock}
          iconColor="yellow"
          link="Click to filter →"
        />
        <StatCard
          title="SCHOLARSHIPS"
          value={`$${scholarships}M`}
          subtitle="Total awarded"
          icon={Award}
          iconColor="purple"
        />
      </div>

      {/* Pending Payments List */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Pending Tuition Payments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pendingStudents.slice(0, 9).map((student) => (
            <div
              key={student.id}
              className="bg-slate-700/30 rounded-lg p-5 border border-yellow-500/30 hover:border-yellow-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{student.name}</h4>
                  <p className="text-gray-400 text-sm">{student.major} • {student.year}</p>
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 uppercase">
                  PENDING
                </span>
              </div>

              <div className="space-y-2 pt-3 border-t border-indigo-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Amount Due:</span>
                  <span className="text-yellow-400 font-bold text-lg">
                    ${student.paymentDue?.toLocaleString() || '0'}
                  </span>
                </div>
                {student.scholarship && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Scholarship:</span>
                    <span className="text-purple-400 text-sm">
                      ${student.scholarship.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle, icon: Icon, iconColor, link }) => {
  const colorClasses = {
    emerald: 'text-emerald-400',
    indigo: 'text-indigo-400',
    yellow: 'text-yellow-400',
    purple: 'text-purple-400'
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
      {link && <p className="text-indigo-400 text-xs mt-2 cursor-pointer hover:text-indigo-300">{link}</p>}
    </div>
  );
};

export default Financial;
