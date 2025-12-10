import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import InteractiveBackground from './InteractiveBackground';

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.background} theme-transition animate-gradient relative overflow-hidden`}>
      <InteractiveBackground />
      <div className="relative z-10">
        <Sidebar />
        <Topbar />
        <main className="ml-64 pt-16">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;