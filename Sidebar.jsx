import { NavLink } from 'react-router-dom';
import { BarChart3, Users, UserCheck, TrendingUp, GraduationCap, DollarSign, FileText, X } from 'lucide-react';
import { Label } from 'recharts';

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { path: '/', icon: BarChart3, label: 'OVERVIEW' },
    { path: '/students', icon: Users, label: 'STUDENT LIST' },
    { path: '/attendance', icon: UserCheck, label: 'ATTENDANCE' },
    { path: '/performance', icon: TrendingUp, label: 'PERFORMANCE' },
    { path: '/enrollment', icon: GraduationCap, label: 'ENROLLMENT STATS' },
    { path: '/financial', icon: DollarSign, label: 'FINANCIAL' },
    {path: '/analytics', icon: FileText,label:"ANALYTICS"},
    {path:'/schedule', icon:FileText,label:"SCHEDULE"},
    { path: '/reports', icon: FileText, label: 'REPORTS' },

    
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-[#1e293b] border-r border-gray-700 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static
      `}>
        <div className="p-6 flex items-center justify-between border-b border-gray-700">
          <h1 className="text-xl font-bold text-purple-400 tracking-wider">DASHBOARD</h1>
          <button 
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                ${isActive 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }
              `}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div> 
    </>
  );
};

export default Sidebar;


