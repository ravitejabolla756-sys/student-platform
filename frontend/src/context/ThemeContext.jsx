import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const themes = {
  // Day Theme
  day: {
    name: 'Day Theme',
    type: 'light',
    background: 'from-blue-50 via-white to-cyan-50',
    cardBg: 'bg-white/80',
    cardBorder: 'border-blue-200',
    text: 'text-slate-900',
    textMuted: 'text-slate-600',
    accent: 'from-blue-500 to-cyan-500',
    accentHover: 'from-blue-600 to-cyan-600',
    glow: 'shadow-blue-200/40',
    glowHover: 'shadow-blue-300/60',
    sidebarBg: 'bg-white/90',
    topbarBg: 'bg-white/90',
    particleColor: '#3b82f6',
  },
  // Night Theme (Default)
  night: {
    name: 'Night Theme',
    type: 'dark',
    background: 'from-slate-950 via-blue-950 to-slate-950',
    cardBg: 'bg-slate-900/40',
    cardBorder: 'border-slate-700/50',
    text: 'text-slate-100',
    textMuted: 'text-slate-400',
    accent: 'from-blue-500 to-cyan-500',
    accentHover: 'from-blue-600 to-cyan-600',
    glow: 'shadow-blue-500/20',
    glowHover: 'shadow-blue-500/40',
    sidebarBg: 'bg-slate-900/40',
    topbarBg: 'bg-slate-900/40',
    particleColor: '#06b6d4',
  },
  // Color Themes
  yellow: {
    name: 'Yellow Theme',
    type: 'dark',
    background: 'from-amber-950 via-slate-900 to-yellow-950',
    cardBg: 'bg-amber-950/30',
    cardBorder: 'border-amber-500/30',
    text: 'text-amber-50',
    textMuted: 'text-amber-300',
    accent: 'from-yellow-400 to-amber-500',
    accentHover: 'from-yellow-500 to-amber-600',
    glow: 'shadow-yellow-500/30',
    glowHover: 'shadow-yellow-500/50',
    sidebarBg: 'bg-amber-950/30',
    topbarBg: 'bg-amber-950/30',
    particleColor: '#fbbf24',
  },
  red: {
    name: 'Red Theme',
    type: 'dark',
    background: 'from-rose-950 via-slate-900 to-red-950',
    cardBg: 'bg-rose-950/30',
    cardBorder: 'border-rose-500/30',
    text: 'text-rose-50',
    textMuted: 'text-rose-300',
    accent: 'from-rose-400 to-red-500',
    accentHover: 'from-rose-500 to-red-600',
    glow: 'shadow-rose-500/30',
    glowHover: 'shadow-rose-500/50',
    sidebarBg: 'bg-rose-950/30',
    topbarBg: 'bg-rose-950/30',
    particleColor: '#f43f5e',
  },
  green: {
    name: 'Green Theme',
    type: 'dark',
    background: 'from-emerald-950 via-slate-900 to-green-950',
    cardBg: 'bg-emerald-950/30',
    cardBorder: 'border-emerald-500/30',
    text: 'text-emerald-50',
    textMuted: 'text-emerald-300',
    accent: 'from-emerald-400 to-green-500',
    accentHover: 'from-emerald-500 to-green-600',
    glow: 'shadow-emerald-500/30',
    glowHover: 'shadow-emerald-500/50',
    sidebarBg: 'bg-emerald-950/30',
    topbarBg: 'bg-emerald-950/30',
    particleColor: '#10b981',
  },
  purple: {
    name: 'Purple Theme',
    type: 'dark',
    background: 'from-purple-950 via-slate-900 to-violet-950',
    cardBg: 'bg-purple-950/30',
    cardBorder: 'border-purple-500/30',
    text: 'text-purple-50',
    textMuted: 'text-purple-300',
    accent: 'from-purple-400 to-violet-500',
    accentHover: 'from-purple-500 to-violet-600',
    glow: 'shadow-purple-500/30',
    glowHover: 'shadow-purple-500/50',
    sidebarBg: 'bg-purple-950/30',
    topbarBg: 'bg-purple-950/30',
    particleColor: '#a855f7',
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('night');
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [animationIntensity, setAnimationIntensity] = useState('medium');

  useEffect(() => {
    const savedTheme = localStorage.getItem('student-theme');
    const savedAnimation = localStorage.getItem('student-animation-enabled');
    const savedIntensity = localStorage.getItem('student-animation-intensity');
    
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
    if (savedAnimation !== null) {
      setAnimationEnabled(savedAnimation === 'true');
    }
    if (savedIntensity) {
      setAnimationIntensity(savedIntensity);
    }
  }, []);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('student-theme', themeName);
    }
  };

  const toggleAnimation = () => {
    const newValue = !animationEnabled;
    setAnimationEnabled(newValue);
    localStorage.setItem('student-animation-enabled', String(newValue));
  };

  const setIntensity = (intensity) => {
    setAnimationIntensity(intensity);
    localStorage.setItem('student-animation-intensity', intensity);
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        theme: themes[currentTheme], 
        currentTheme, 
        changeTheme, 
        themes,
        animationEnabled,
        toggleAnimation,
        animationIntensity,
        setIntensity,
      }}
    >
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