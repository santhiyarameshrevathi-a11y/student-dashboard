import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { students } from '../data/students';
import StudentModal from '../components/StudentModal';

const StudentList = () => {
  const [filters, setFilters] = useState({
    search: '',
    major: 'Majors',
    year: 'All Years',
    status: 'All Statuses',
    attendance: 'All Attendance',
    gpa: 'All GPA',
    payment: 'All Payments'
  });
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 12;

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesMajor = filters.major === 'Majors' || student.major === filters.major;
    const matchesYear = filters.year === 'All Years' || student.year === filters.year;
    const matchesStatus = filters.status === 'All Statuses' || student.status === filters.status;
    return matchesSearch && matchesMajor && matchesYear && matchesStatus;
  });

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

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

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search students..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-indigo-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <select
          value={filters.major}
          onChange={(e) => setFilters({ ...filters, major: e.target.value })}
          className="px-4 py-3 bg-slate-800 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-500"
        >
          <option>Majors</option>
          <option>Computer Science</option>
          <option>Engineering</option>
          <option>Psychology</option>
          <option>Biology</option>
        </select>

        <select
          value={filters.year}
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          className="px-4 py-3 bg-slate-800 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-500"
        >
          <option>All Years</option>
          <option>Freshman</option>
          <option>Sophomore</option>
          <option>Junior</option>
          <option>Senior</option>
        </select>

        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="px-4 py-3 bg-slate-800 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-500"
        >
          <option>All Statuses</option>
          <option value="active">Active</option>
          <option value="probation">Probation</option>
          <option value="leave">Leave</option>
        </select>

        <select
          value={filters.attendance}
          onChange={(e) => setFilters({ ...filters, attendance: e.target.value })}
          className="px-4 py-3 bg-slate-800 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-500"
        >
          <option>All Attendance</option>
          <option>High (90%+)</option>
          <option>Medium (70-90%)</option>
          <option>Low (&lt;70%)</option>
        </select>

        <select
          value={filters.gpa}
          onChange={(e) => setFilters({ ...filters, gpa: e.target.value })}
          className="px-4 py-3 bg-slate-800 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-500"
        >
          <option>All GPA</option>
          <option>High (3.5+)</option>
          <option>Medium (2.5-3.5)</option>
          <option>Low (&lt;2.5)</option>
        </select>
      </div>

      <p className="text-gray-400 text-sm">Showing {filteredStudents.length} of {students.length} students</p>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentStudents.map((student) => {
          const statusColor = getStatusColor(student.status);
          return (
            <div
              key={student.id}
              onClick={() => setSelectedStudent(student)}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 border border-indigo-500/20 hover:border-indigo-500/50 transition-all cursor-pointer hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">{student.name}</h3>
                  <p className="text-gray-400 text-sm">ID: #{student.id}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${statusColor}-500/20 text-${statusColor}-400 border border-${statusColor}-500/30 uppercase`}>
                  {student.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-indigo-400 text-sm">{student.major} • {student.year}</p>
                <p className="text-gray-400 text-sm">{student.email}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-indigo-500/20">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">GPA</p>
                  <p className={`font-bold text-lg ${getGpaColor(student.gpa)}`}>{student.gpa.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Attendance</p>
                  <p className={`font-bold text-lg ${getAttendanceColor(student.attendance)}`}>{student.attendance.toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Credits</p>
                  <p className="text-indigo-400 font-bold text-lg">{student.credits}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-4">
        <p className="text-gray-400 text-sm">Page {currentPage} of {totalPages}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all font-medium"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all font-medium"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedStudent && (
        <StudentModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
      )}
    </div>
  );
};

export default StudentList;

