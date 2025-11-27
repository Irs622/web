import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface GlassInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  name?: string;
}

export function GlassInput({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange,
  multiline = false,
  rows = 4,
  required = false,
  name
}: GlassInputProps) {
  const { theme } = useTheme();
  
  const baseClasses = `
    w-full px-6 py-4 rounded-[16px]
    backdrop-blur-[20px]
    border
    transition-all duration-300
    outline-none
    resize-none
  `;
  
  const themeClasses = theme === 'light'
    ? 'bg-white/60 border-white/40 text-gray-800 placeholder:text-gray-500 focus:bg-white/70 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/20'
    : 'bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-blue-400 focus:shadow-[0_0_20px_rgba(10,132,255,0.3)]';
  
  if (multiline) {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        name={name}
        className={`${baseClasses} ${themeClasses}`}
      />
    );
  }
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      name={name}
      className={`${baseClasses} ${themeClasses}`}
    />
  );
}
