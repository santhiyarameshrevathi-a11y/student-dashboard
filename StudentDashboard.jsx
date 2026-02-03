import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import Overview from '../sections/Overview';
import StudentList from '../sections/StudentList';
import Attendance from '../sections/Attendance';
import Performance from '../sections/Performance';
import Enrollment from '../sections/Enrollment';
import Financial from '../sections/Financial';
import Analytics from '../sections/Analytics';
import Schedule from '../sections/Schedule';
import Reports from '../sections/Reports';

const StudentDashboard = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="students" element={<StudentList />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="performance" element={<Performance />} />
          <Route path="enrollment" element={<Enrollment />} />
          <Route path="financial" element={<Financial />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default StudentDashboard;
