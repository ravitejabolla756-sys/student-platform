import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/card';

const studentTools = [
  { id: 'timetable-generator', name: 'Timetable Generator', description: 'Create and manage your class schedule' },
  { id: 'notes-manager', name: 'Notes Manager', description: 'Organize and manage your study notes' },
  { id: 'homework-tracker', name: 'Homework Tracker', description: 'Track assignments and deadlines' },
  { id: 'study-planner', name: 'Study Planner', description: 'Plan your study sessions effectively' },
  { id: 'pomodoro-timer', name: 'Pomodoro Timer', description: 'Focus timer for productive studying' },
  { id: 'student-todo', name: 'To-Do List for Students', description: 'Manage tasks and priorities' },
];

const StudentToolsPage = () => {
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
        <h1 className={`text-5xl font-bold ${theme.text} mb-3 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>
          Student Tools
        </h1>
        <p className={`text-xl ${theme.textMuted}`}>Essential tools designed specifically for student productivity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentTools.map((tool, index) => (
          <div
            key={tool.id}
            className={`transform transition-all duration-500 delay-${index * 100} ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Card
              onClick={() => navigate(`/tool/${tool.id}`)}
              className={`group p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover:shadow-2xl hover:${theme.glowHover} transition-all duration-300 cursor-pointer hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${theme.accent}`}>
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className={`text-lg font-bold ${theme.text} mb-2 group-hover:bg-gradient-to-r group-hover:${theme.accent} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                {tool.name}
              </h3>
              <p className={`text-sm ${theme.textMuted} mb-4`}>{tool.description}</p>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${theme.accent} text-white text-sm font-medium group-hover:shadow-lg transition-all duration-300`}
              >
                Open Tool
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentToolsPage;