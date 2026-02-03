import React from 'react';
import { Download, Menu } from 'lucide-react';

const Header = ({ title, onMenuClick }) => {
  const handleExport = () => {
    alert('Export functionality would be implemented here');
  };

  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-indigo-500/20 sticky top-0 z-30">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 tracking-wider uppercase">
                {title}
              </h2>
              <p className="text-gray-400 text-sm mt-1 tracking-wide">
                REAL-TIME STUDENT DATA ANALYTICS
              </p>
            </div>
          </div>
          
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 
                     text-white rounded-lg transition-all duration-200 shadow-lg 
                     shadow-indigo-500/50 hover:shadow-indigo-400/50 font-medium"
          >
            <Download size={18} />
            <span className="hidden sm:inline">EXPORT DATA</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;