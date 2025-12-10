import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { User, Bell, Palette, Shield, HelpCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';

const SettingsPage = () => {
  const { theme, changeTheme, themes, currentTheme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    autoSave: true,
    darkMode: true,
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div
        className={`transform transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h1 className={`text-5xl font-bold ${theme.text} mb-3 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>
          Settings
        </h1>
        <p className={`text-xl ${theme.textMuted}`}>Customize your experience and preferences</p>
      </div>

      <div className="space-y-6">
        <div
          className={`transform transition-all duration-700 delay-100 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.accent}`}>
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h2 className={`text-2xl font-bold ${theme.text}`}>Appearance</h2>
            </div>
            <div className="space-y-4">
              <div>
                <Label className={`${theme.text} mb-3 block`}>Theme Variant</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.keys(themes).map((key) => (
                    <button
                      key={key}
                      onClick={() => changeTheme(key)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        currentTheme === key
                          ? `border-cyan-500 ${theme.cardBg} shadow-lg ${theme.glowHover}`
                          : `${theme.cardBorder} ${theme.cardBg} hover:border-cyan-500/50`
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${themes[key].accent}`}></div>
                        <span className={theme.text}>{themes[key].name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div
          className={`transform transition-all duration-700 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.accent}`}>
                <User className="w-5 h-5 text-white" />
              </div>
              <h2 className={`text-2xl font-bold ${theme.text}`}>Account Settings</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-700">
                <div>
                  <Label className={theme.text}>Email</Label>
                  <p className={`text-sm ${theme.textMuted}`}>student@example.com</p>
                </div>
                <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${theme.accent} text-white text-sm font-medium`}>
                  Change
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-700">
                <div>
                  <Label className={theme.text}>Password</Label>
                  <p className={`text-sm ${theme.textMuted}`}>••••••••</p>
                </div>
                <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${theme.accent} text-white text-sm font-medium`}>
                  Change
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div
          className={`transform transition-all duration-700 delay-300 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.accent}`}>
                <Bell className="w-5 h-5 text-white" />
              </div>
              <h2 className={`text-2xl font-bold ${theme.text}`}>Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <Label className={theme.text}>Email Notifications</Label>
                  <p className={`text-sm ${theme.textMuted}`}>Receive updates via email</p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={() => toggleSetting('emailNotifications')}
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <Label className={theme.text}>Push Notifications</Label>
                  <p className={`text-sm ${theme.textMuted}`}>Receive browser notifications</p>
                </div>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={() => toggleSetting('pushNotifications')}
                />
              </div>
            </div>
          </Card>
        </div>

        <div
          className={`transform transition-all duration-700 delay-400 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.accent}`}>
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className={`text-2xl font-bold ${theme.text}`}>Preferences</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <Label className={theme.text}>Auto-Save</Label>
                  <p className={`text-sm ${theme.textMuted}`}>Automatically save your work</p>
                </div>
                <Switch checked={settings.autoSave} onCheckedChange={() => toggleSetting('autoSave')} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;