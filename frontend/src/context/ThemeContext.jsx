import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const themes = {
  dark: {
    name: 'Default Dark',
    background: 'from-slate-950 via-slate-900 to-slate-950',
    cardBg: 'bg-slate-900/40',
    cardBorder: 'border-slate-700/50',
    text: 'text-slate-100',
    textMuted: 'text-slate-400',
    accent: 'from-blue-500 to-cyan-500',
    accentHover: 'from-blue-600 to-cyan-600',
    glow: 'shadow-blue-500/20',
    glowHover: 'shadow-blue-500/40',
  },
  cyberpunk: {
    name: 'Cyberpunk Blue',
    background: 'from-blue-950 via-slate-900 to-cyan-950',
    cardBg: 'bg-blue-950/30',
    cardBorder: 'border-blue-500/30',
    text: 'text-blue-50',
    textMuted: 'text-blue-300',
    accent: 'from-blue-400 to-cyan-400',
    accentHover: 'from-blue-500 to-cyan-500',
    glow: 'shadow-cyan-500/30',
    glowHover: 'shadow-cyan-500/50',
  },
  neon: {
    name: 'Neon Cyan',
    background: 'from-cyan-950 via-slate-900 to-blue-950',
    cardBg: 'bg-cyan-950/30',
    cardBorder: 'border-cyan-500/30',
    text: 'text-cyan-50',
    textMuted: 'text-cyan-300',
    accent: 'from-cyan-400 to-blue-400',
    accentHover: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-400/30',
    glowHover: 'shadow-cyan-400/50',
  },
  purple: {
    name: 'Deep Purple',
    background: 'from-purple-950 via-slate-900 to-blue-950',
    cardBg: 'bg-purple-950/30',
    cardBorder: 'border-purple-500/30',
    text: 'text-purple-50',
    textMuted: 'text-purple-300',
    accent: 'from-purple-400 to-blue-400',
    accentHover: 'from-purple-500 to-blue-500',
    glow: 'shadow-purple-500/30',
    glowHover: 'shadow-purple-500/50',
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('student-theme');
    if (saved && themes[saved]) {
      setCurrentTheme(saved);
    }
  }, []);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('student-theme', themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};