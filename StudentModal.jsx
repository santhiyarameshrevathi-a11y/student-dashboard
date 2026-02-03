import React from 'react';
import { X, Mail, BookOpen, Calendar, TrendingUp, Users, DollarSign } from 'lucide-react';

const StudentModal = ({ student, onClose }) => {
  if (!student) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'emerald';
      case 'probation': return 'yellow';
      case 'leave': return 'red';
      default: return 'gray';
    }
  };

  const getGpaColor = (gpa) => {
    if (gpa >= 3.5) return 'text-emerald-400';
    if (gpa >= 3.0) return 'text-indigo-400';
    if (gpa >= 2.5) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 90) return 'text-emerald-400';
    if (attendance >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const statusColor = getStatusColor(student.status);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-indigo-500/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-indigo-500/30 p-6 flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">{student.name}</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${statusColor}-500/20 text-${statusColor}-400 border border-${statusColor}-500/30 uppercase`}>
                {student.status}
              </span>
              <span className="text-gray-400 text-sm">ID: #{student.id}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-700/30 rounded-lg p-4 border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-indigo-400" size={20} />
                <span className="text-gray-400 text-sm">Email</span>
              </div>
              <p className="text-white font-medium">{student.email}</p>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4 border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="text-indigo-400" size={20} />
                <span className="text-gray-400 text-sm">Major</span>
              </div>
              <p className="text-white font-medium">{student.major}</p>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4 border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-indigo-400" size={20} />
                <span className="text-gray-400 text-sm">Year</span>
              </div>
              <p className="text-white font-medium">{student.year}</p>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4 border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-indigo-400" size={20} />
                <span className="text-gray-400 text-sm">Credits</span>
              </div>
              <p className="text-white font-medium">{student.credits}</p>
            </div>
          </div>

          {/* Academic Performance */}
          <div>
            <h3 className="text-lg font-bold text-indigo-400 mb-4 flex items-center gap-2">
              <TrendingUp size={20} />
              Academic Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-lg p-5 border border-indigo-500/30">
                <div className="text-gray-400 text-sm mb-2">GPA</div>
                <div className={`text-4xl font-bold ${getGpaColor(student.gpa)}`}>
                  {student.gpa.toFixed(2)}
                </div>
                <div className="text-gray-500 text-xs mt-2">out of 4.00</div>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-lg p-5 border border-emerald-500/30">
                <div className="text-gray-400 text-sm mb-2">Attendance</div>
                <div className={`text-4xl font-bold ${getAttendanceColor(student.attendance)}`}>
                  {student.attendance.toFixed(1)}%
                </div>
                <div className="text-gray-500 text-xs mt-2">present rate</div>
              </div>
            </div>
          </div>

          {/* Financial Info */}
          {student.paymentDue && (
            <div>
              <h3 className="text-lg font-bold text-indigo-400 mb-4 flex items-center gap-2">
                <DollarSign size={20} />
                Financial Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-lg p-5 border border-yellow-500/30">
                  <div className="text-gray-400 text-sm mb-2">Payment Due</div>
                  <div className="text-3xl font-bold text-yellow-400">
                    ${student.paymentDue.toLocaleString()}
                  </div>
                  <div className={`text-xs mt-2 px-2 py-1 rounded-full inline-block ${
                    student.paymentStatus === 'pending' 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                      : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {student.paymentStatus || 'N/A'}
                  </div>
                </div>

                {student.scholarship && (
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-5 border border-purple-500/30">
                    <div className="text-gray-400 text-sm mb-2">Scholarship</div>
                    <div className="text-3xl font-bold text-purple-400">
                      ${student.scholarship.toLocaleString()}
                    </div>
                    <div className="text-gray-500 text-xs mt-2">awarded</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-indigo-500/20">
            <button className="flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all font-medium">
              Edit Student
            </button>
            <button className="flex-1 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all font-medium">
              View Full Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;