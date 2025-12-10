import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
  LayoutDashboard,
  Files,
  Archive,
  Calculator,
  Sparkles,
  Image,
  GraduationCap,
  Settings,
  HelpCircle,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Files, label: 'Files', path: '/files' },
  { icon: Archive, label: 'Compress', path: '/compress' },
  { icon: Calculator, label: 'Calculators', path: '/calculators' },
  { icon: Sparkles, label: 'AI Tools', path: '/ai-tools' },
  { icon: Image, label: 'Media', path: '/media' },
  { icon: GraduationCap, label: 'Student Tools', path: '/student-tools' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Help & Support', path: '/help' },
];

const Sidebar = () => {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div
      className={`w-64 min-h-screen ${theme.sidebarBg} backdrop-blur-xl border-r ${theme.cardBorder} flex flex-col p-4 fixed left-0 top-0 z-40 theme-transition`}
    >
      <div className="mb-8 px-2">
        <h1 className={`text-3xl font-bold bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>
          StuDENt
        </h1>
        <p className={`text-xs ${theme.textMuted} mt-1`}>Student Tools Platform</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? `bg-gradient-to-r ${theme.accent} ${theme.text} shadow-lg ${theme.glowHover}`
                  : `${theme.textMuted} hover:${theme.text} hover:bg-white/5`
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-transform duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`}
              />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className={`mt-auto p-4 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
        <p className={`text-xs ${theme.textMuted} text-center`}>Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Sidebar;