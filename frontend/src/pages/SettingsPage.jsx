import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { User, Bell, Palette, Shield, Sun, Moon, Zap } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';

const SettingsPage = () => {
  const { theme, changeTheme, themes, currentTheme, animationEnabled, toggleAnimation, animationIntensity, setIntensity } = useTheme();
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    autoSave: true,
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const intensityValue = {
    low: 0,
    medium: 50,
    high: 100,
  }[animationIntensity] || 50;

  const handleIntensityChange = (value) => {
    const intensity = value[0] <= 33 ? 'low' : value[0] <= 66 ? 'medium' : 'high';
    setIntensity(intensity);
  };

  // Group themes
  const dayNightThemes = ['day', 'night'];
  const colorThemes = ['yellow', 'red', 'green', 'purple'];

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
        {/* Appearance Section */}
        <div
          className={`transform transition-all duration-700 delay-100 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover-lift`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.accent}`}>
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h2 className={`text-2xl font-bold ${theme.text}`}>Appearance</h2>
            </div>
            
            {/* Day/Night Themes */}
            <div className="mb-6">
              <Label className={`${theme.text} mb-3 block flex items-center gap-2`}>
                <Sun className="w-4 h-4" />
                Day / Night Mode
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {dayNightThemes.map((key) => (
                  <button
                    key={key}
                    onClick={() => changeTheme(key)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover-lift ${
                      currentTheme === key
                        ? `border-current ${theme.cardBg} shadow-lg ${theme.glowHover}`
                        : `${theme.cardBorder} ${theme.cardBg} hover:border-current opacity-70 hover:opacity-100`
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {key === 'day' ? (
                        <Sun className={`w-6 h-6 ${currentTheme === key ? theme.text : theme.textMuted}`} />
                      ) : (
                        <Moon className={`w-6 h-6 ${currentTheme === key ? theme.text : theme.textMuted}`} />
                      )}
                      <div className="flex-1 text-left">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${themes[key].accent} mb-2`}></div>
                        <span className={`font-medium ${currentTheme === key ? theme.text : theme.textMuted}`}>
                          {themes[key].name}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Themes */}
            <div>
              <Label className={`${theme.text} mb-3 block flex items-center gap-2`}>
                <Palette className="w-4 h-4" />
                Color Themes
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {colorThemes.map((key) => (
                  <button
                    key={key}
                    onClick={() => changeTheme(key)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover-lift ${
                      currentTheme === key
                        ? `border-current ${theme.cardBg} shadow-lg ${theme.glowHover}`
                        : `${theme.cardBorder} ${theme.cardBg} hover:border-current opacity-70 hover:opacity-100`
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${themes[key].accent}`}></div>
                      <span className={`text-sm font-medium ${currentTheme === key ? theme.text : theme.textMuted}`}>
                        {themes[key].name.replace(' Theme', '')}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Animation Controls */}
        <div
          className={`transform transition-all duration-700 delay-150 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover-lift`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.accent}`}>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h2 className={`text-2xl font-bold ${theme.text}`}>Background Animation</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between py-3">
                <div>
                  <Label className={theme.text}>Enable Background Animation</Label>
                  <p className={`text-sm ${theme.textMuted}`}>Interactive particles that react to your mouse</p>
                </div>
                <Switch checked={animationEnabled} onCheckedChange={toggleAnimation} />
              </div>

              {animationEnabled && (
                <div className="py-3">
                  <Label className={`${theme.text} mb-4 block`}>Animation Intensity</Label>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm ${theme.textMuted}`}>Low</span>
                    <Slider
                      value={[intensityValue]}
                      onValueChange={handleIntensityChange}
                      max={100}
                      step={1}
                      className="flex-1"
                    />
                    <span className={`text-sm ${theme.textMuted}`}>High</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className={`text-xs ${theme.textMuted}`}>30 particles</span>
                    <span className={`text-xs ${theme.textMuted}`}>50 particles</span>
                    <span className={`text-xs ${theme.textMuted}`}>80 particles</span>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Account Settings */}
        <div
          className={`transform transition-all duration-700 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover-lift`}>
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
                <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${theme.accent} text-white text-sm font-medium button-glow`}>
                  Change
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-700">
                <div>
                  <Label className={theme.text}>Password</Label>
                  <p className={`text-sm ${theme.textMuted}`}>••••••••</p>
                </div>
                <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${theme.accent} text-white text-sm font-medium button-glow`}>
                  Change
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Notifications */}
        <div
          className={`transform transition-all duration-700 delay-300 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover-lift`}>
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

        {/* Preferences */}
        <div
          className={`transform transition-all duration-700 delay-400 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Card className={`p-6 ${theme.cardBg} backdrop-blur-xl border ${theme.cardBorder} hover-lift`}>
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
