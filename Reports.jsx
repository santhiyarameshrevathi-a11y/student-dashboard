import React from 'react';
import { FileText, Download } from 'lucide-react';

const Reports = () => {
  const reports = [
    'Academic Report',
    'Attendance Report',
    'Financial Report',
    'Enrollment Report',
    'Performance Analysis'
  ];

  return (
    <div className="bg-[#2d3748] rounded-xl p-12 text-center">
      <FileText size={80} color="#8b5cf6" className="mx-auto mb-6" />
      <h2 className="text-white text-2xl font-bold mb-4">Comprehensive Reports</h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Generate detailed reports on student performance, attendance, financial data, and more.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        {reports.map(report => (
          <button
            key={report}
            className="px-7 py-3.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg font-bold text-sm uppercase transition-colors flex items-center gap-2"
          >
            <Download size={16} />
            {report}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Reports;


