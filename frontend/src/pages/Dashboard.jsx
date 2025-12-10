import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
  Files,
  Archive,
  Calculator,
  Sparkles,
  Image,
  GraduationCap,
  TrendingUp,
  Clock,
  FolderOpen,
  ChevronRight,
} from 'lucide-react';
import { Card } from '../components/ui/card';

const categories = [
  {
    icon: Files,
    title: 'Files',
    description: 'PDF tools, image converters, document management',
    path: '/files',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Archive,
    title: 'Compress',
    description: 'Compress images, PDFs, videos, and create archives',
    path: '/compress',
    color: 'from-cyan-500 to-blue-400',
  },
  {
    icon: Calculator,
    title: 'Calculators',
    description: 'Scientific, percentage, GPA, and unit converters',
    path: '/calculators',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    icon: Sparkles,
    title: 'AI Tools',
    description: 'Essay writer, summarizer, paraphraser, and more',
    path: '/ai-tools',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Image,
    title: 'Media',
    description: 'Image editing, video conversion, audio tools',
    path: '/media',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: GraduationCap,
    title: 'Student Tools',
    description: 'Timetable, notes manager, study planner, pomodoro',
    path: '/student-tools',
    color: 'from-cyan-500 to-blue-600',
  },
];

const Dashboard = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div
        className={`transform transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div
          className={`p-8 rounded-2xl ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} shadow-2xl ${theme.glow}`}
        >
          <h1
            className={`text-5xl font-bold ${theme.text} mb-3 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}
          >
            Explore our tools
          </h1>
          <p className={`text-xl ${theme.textMuted}`}>
            Choose a category to boost your learning & productivity
          </p>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 transform transition-all duration-700 delay-100 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <Card
          className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover:shadow-xl hover:${theme.glowHover} transition-all duration-300`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${theme.accent}`}>
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-2xl font-bold ${theme.text}`}>49</p>
              <p className={`text-sm ${theme.textMuted}`}>Tools Available</p>
            </div>
          </div>
        </Card>

        <Card
          className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover:shadow-xl hover:${theme.glowHover} transition-all duration-300`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${theme.accent}`}>
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-2xl font-bold ${theme.text}`}>120h</p>
              <p className={`text-sm ${theme.textMuted}`}>Time Saved</p>
            </div>
          </div>
        </Card>

        <Card
          className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover:shadow-xl hover:${theme.glowHover} transition-all duration-300`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${theme.accent}`}>
              <FolderOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-2xl font-bold ${theme.text}`}>1.2k</p>
              <p className={`text-sm ${theme.textMuted}`}>Files Processed</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={category.path}
              className={`transform transition-all duration-700 delay-${(index + 2) * 100} ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Card
                onClick={() => navigate(category.path)}
                className={`group p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover:shadow-2xl hover:${theme.glowHover} transition-all duration-300 cursor-pointer hover:-translate-y-2`}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>{category.title}</h3>
                <p className={`${theme.textMuted} mb-4`}>{category.description}</p>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${theme.accent} text-white font-medium group-hover:shadow-lg group-hover:${theme.glowHover} transition-all duration-300`}
                >
                  Open
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;