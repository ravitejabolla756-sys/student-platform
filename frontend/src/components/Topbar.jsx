import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Search, Bell, User, Moon, Sun, Palette } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';

const Topbar = () => {
  const { theme, changeTheme, themes, currentTheme } = useTheme();
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <div
      className={`h-16 ${theme.topbarBg} backdrop-blur-xl border-b ${theme.cardBorder} fixed top-0 left-64 right-0 z-30 flex items-center px-6 gap-4 theme-transition`}
    >
      <div className="flex-1 max-w-2xl">
        <div
          className={`relative transition-all duration-300 ${
            searchFocus ? `shadow-lg ${theme.glowHover}` : ''
          }`}
        >
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textMuted}`} />
          <input
            type="text"
            placeholder="Search tools, files, notes…"
            className={`w-full pl-12 pr-4 py-3 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.text} placeholder:${theme.textMuted} focus:outline-none focus:border-cyan-500/50 transition-all duration-300`}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`p-3 rounded-xl ${theme.cardBg} border ${theme.cardBorder} hover:shadow-lg hover:${theme.glowHover} transition-all duration-300 ${theme.text}`}
            >
              <Palette className="w-5 h-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={`${theme.cardBg} border ${theme.cardBorder} backdrop-blur-xl`}>
            <DropdownMenuLabel className={theme.text}>Choose Theme</DropdownMenuLabel>
            <DropdownMenuSeparator className={theme.cardBorder} />
            {Object.keys(themes).map((key) => (
              <DropdownMenuItem
                key={key}
                onClick={() => changeTheme(key)}
                className={`${theme.text} cursor-pointer hover:bg-white/5 ${
                  currentTheme === key ? 'bg-white/10' : ''
                }`}
              >
                <Moon className="w-4 h-4 mr-2" />
                {themes[key].name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          className={`relative p-3 rounded-xl ${theme.cardBg} border ${theme.cardBorder} hover:shadow-lg hover:${theme.glowHover} transition-all duration-300 ${theme.text}`}
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="focus:outline-none">
              <Avatar className={`w-10 h-10 border-2 ${theme.cardBorder} hover:shadow-lg hover:${theme.glowHover} transition-all duration-300`}>
                <AvatarFallback className={`bg-gradient-to-r ${theme.accent} ${theme.text}`}>
                  <User className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={`${theme.cardBg} border ${theme.cardBorder} backdrop-blur-xl`}>
            <DropdownMenuLabel className={theme.text}>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className={theme.cardBorder} />
            <DropdownMenuItem className={`${theme.text} cursor-pointer hover:bg-white/5`}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className={`${theme.text} cursor-pointer hover:bg-white/5`}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Topbar;