import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { HelpCircle, Mail, MessageCircle, Book } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const HelpPage = () => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const helpOptions = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Browse our comprehensive guides and tutorials',
      action: 'View Docs',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      action: 'Start Chat',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll get back to you',
      action: 'Send Email',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div
        className={`transform transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h1 className={`text-5xl font-bold ${theme.text} mb-3 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>
          Help & Support
        </h1>
        <p className={`text-xl ${theme.textMuted}`}>We're here to help you get the most out of StuDENt</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {helpOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <div
              key={option.title}
              className={`transform transition-all duration-700 delay-${(index + 1) * 100} ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Card
                className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover:shadow-2xl hover:${theme.glowHover} transition-all duration-300 text-center`}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${theme.accent} mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${theme.text} mb-2`}>{option.title}</h3>
                <p className={`${theme.textMuted} mb-4 text-sm`}>{option.description}</p>
                <Button
                  className={`w-full bg-gradient-to-r ${theme.accent} text-white hover:shadow-lg hover:${theme.glowHover} transition-all duration-300`}
                >
                  {option.action}
                </Button>
              </Card>
            </div>
          );
        })}
      </div>

      <div
        className={`transform transition-all duration-700 delay-400 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <Card className={`p-8 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.accent}`}>
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className={`text-2xl font-bold ${theme.text}`}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            <div className="py-4 border-b border-gray-700">
              <h4 className={`${theme.text} font-medium mb-2`}>How do I use the tools?</h4>
              <p className={`text-sm ${theme.textMuted}`}>
                Simply click on any tool card to access its interface. Most tools are self-explanatory and include
                helpful tooltips.
              </p>
            </div>
            <div className="py-4 border-b border-gray-700">
              <h4 className={`${theme.text} font-medium mb-2`}>Are my files secure?</h4>
              <p className={`text-sm ${theme.textMuted}`}>
                Yes, all file processing happens locally in your browser when possible. We never store your personal
                files.
              </p>
            </div>
            <div className="py-4">
              <h4 className={`${theme.text} font-medium mb-2`}>Can I use these tools offline?</h4>
              <p className={`text-sm ${theme.textMuted}`}>
                Some tools work offline, while others require internet connection for AI features and conversions.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HelpPage;