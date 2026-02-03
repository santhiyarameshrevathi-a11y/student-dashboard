import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('week'); // 'day', 'week', 'month'
  const [filterDepartment, setFilterDepartment] = useState('all');

  // Mock schedule data
  const scheduleData = [
    {
      id: 1,
      course: 'Advanced Computer Science',
      instructor: 'Dr. Sarah Johnson',
      time: '09:00 - 10:30',
      room: 'Room 301',
      department: 'Computer Science',
      students: 45,
      day: 'Monday',
      color: 'indigo'
    },
    {
      id: 2,
      course: 'Organic Chemistry Lab',
      instructor: 'Prof. Michael Chen',
      time: '10:45 - 12:15',
      room: 'Lab 204',
      department: 'Chemistry',
      students: 32,
      day: 'Monday',
      color: 'emerald'
    },
    {
      id: 3,
      course: 'World History Seminar',
      instructor: 'Dr. Emily Rodriguez',
      time: '13:00 - 14:30',
      room: 'Room 105',
      department: 'History',
      students: 38,
      day: 'Monday',
      color: 'purple'
    },
    {
      id: 4,
      course: 'Calculus II',
      instructor: 'Prof. David Williams',
      time: '14:45 - 16:15',
      room: 'Room 202',
      department: 'Mathematics',
      students: 52,
      day: 'Monday',
      color: 'yellow'
    },
    {
      id: 5,
      course: 'Introduction to Psychology',
      instructor: 'Dr. Amanda Taylor',
      time: '09:00 - 10:30',
      room: 'Room 401',
      department: 'Psychology',
      students: 65,
      day: 'Tuesday',
      color: 'pink'
    },
    {
      id: 6,
      course: 'Business Analytics',
      instructor: 'Prof. James Anderson',
      time: '10:45 - 12:15',
      room: 'Room 501',
      department: 'Business',
      students: 48,
      day: 'Tuesday',
      color: 'indigo'
    },
    {
      id: 7,
      course: 'Molecular Biology',
      instructor: 'Dr. Lisa Martinez',
      time: '13:00 - 14:30',
      room: 'Lab 301',
      department: 'Biology',
      students: 35,
      day: 'Wednesday',
      color: 'emerald'
    },
    {
      id: 8,
      course: 'Engineering Design',
      instructor: 'Prof. Robert Lee',
      time: '09:00 - 10:30',
      room: 'Workshop A',
      department: 'Engineering',
      students: 42,
      day: 'Thursday',
      color: 'purple'
    },
    {
      id: 9,
      course: 'Modern Literature',
      instructor: 'Dr. Patricia Brown',
      time: '14:45 - 16:15',
      room: 'Room 103',
      department: 'English',
      students: 28,
      day: 'Friday',
      color: 'yellow'
    }
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const departments = ['all', 'Computer Science', 'Chemistry', 'History', 'Mathematics', 'Psychology', 'Business', 'Biology', 'Engineering'];

  const filteredSchedule = filterDepartment === 'all' 
    ? scheduleData 
    : scheduleData.filter(item => item.department === filterDepartment);

  const stats = {
    totalClasses: scheduleData.length,
    activeNow: 3,
    upcomingToday: 5,
    totalStudents: scheduleData.reduce((sum, item) => sum + item.students, 0)
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="TOTAL CLASSES"
          value={stats.totalClasses}
          subtitle="This week"
          icon={Calendar}
          iconColor="indigo"
        />
        <StatCard
          title="ACTIVE NOW"
          value={stats.activeNow}
          subtitle="Classes in session"
          icon={Clock}
          iconColor="emerald"
        />
        <StatCard
          title="UPCOMING TODAY"
          value={stats.upcomingToday}
          subtitle="Scheduled classes"
          icon={Calendar}
          iconColor="yellow"
        />
        <StatCard
          title="TOTAL STUDENTS"
          value={stats.totalStudents}
          subtitle="Enrolled this week"
          icon={Users}
          iconColor="purple"
        />
      </div>

      {/* Controls */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-indigo-500/20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all">
              <ChevronLeft size={20} className="text-white" />
            </button>
            <div className="text-white font-semibold">
              Week of Feb 02, 2026
            </div>
            <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all">
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-400" />
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-4 py-2 bg-slate-700 border border-indigo-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('day')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'day' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setViewMode('week')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'week' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                Week
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 gap-6">
        {daysOfWeek.map(day => {
          const dayClasses = filteredSchedule.filter(item => item.day === day);
          
          if (dayClasses.length === 0) return null;

          return (
            <div key={day} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide flex items-center gap-2">
                <Calendar size={20} className="text-indigo-400" />
                {day}
              </h3>
              <div className="space-y-3">
                {dayClasses.map(classItem => (
                  <ClassCard key={classItem.id} classData={classItem} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Room Utilization */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-indigo-500/20">
        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Room Utilization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <RoomCard room="Room 301" utilization={85} available="2:00 PM" />
          <RoomCard room="Lab 204" utilization={72} available="3:30 PM" />
          <RoomCard room="Room 401" utilization={91} available="5:00 PM" />
          <RoomCard room="Workshop A" utilization={68} available="1:00 PM" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle, icon: Icon, iconColor }) => {
  const colorClasses = {
    indigo: 'text-indigo-400',
    emerald: 'text-emerald-400',
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
    </div>
  );
};

const ClassCard = ({ classData }) => {
  const colorClasses = {
    indigo: 'border-indigo-500/30 bg-indigo-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
    purple: 'border-purple-500/30 bg-purple-500/5',
    yellow: 'border-yellow-500/30 bg-yellow-500/5',
    pink: 'border-pink-500/30 bg-pink-500/5'
  };

  const textColorClasses = {
    indigo: 'text-indigo-400',
    emerald: 'text-emerald-400',
    purple: 'text-purple-400',
    yellow: 'text-yellow-400',
    pink: 'text-pink-400'
  };

  return (
    <div className={`p-4 rounded-lg border ${colorClasses[classData.color]} hover:border-opacity-60 transition-all cursor-pointer`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className={`text-lg font-bold ${textColorClasses[classData.color]} mb-1`}>
            {classData.course}
          </h4>
          <p className="text-gray-300 text-sm">{classData.instructor}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${classData.color}-500/20 ${textColorClasses[classData.color]} border border-${classData.color}-500/30`}>
          {classData.department}
        </span>
      </div>
      
      <div className="grid grid-cols-3 gap-3 text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <Clock size={16} />
          <span>{classData.time}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <MapPin size={16} />
          <span>{classData.room}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Users size={16} />
          <span>{classData.students} students</span>
        </div>
      </div>
    </div>
  );
};

const RoomCard = ({ room, utilization, available }) => {
  const getUtilizationColor = (util) => {
    if (util >= 85) return 'text-red-400';
    if (util >= 70) return 'text-yellow-400';
    return 'text-emerald-400';
  };

  return (
    <div className="bg-slate-700/30 rounded-lg p-4 border border-indigo-500/20">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="text-indigo-400" size={18} />
        <h4 className="text-white font-semibold">{room}</h4>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Utilization</span>
          <span className={`font-bold ${getUtilizationColor(utilization)}`}>{utilization}%</span>
        </div>
        <div className="w-full bg-slate-600 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${utilization >= 85 ? 'bg-red-500' : utilization >= 70 ? 'bg-yellow-500' : 'bg-emerald-500'}`}
            style={{ width: `${utilization}%` }}
          />
        </div>
        <p className="text-gray-500 text-xs">Next available: {available}</p>
      </div>
    </div>
  );
};

export default Schedule;