import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', hover = false, onClick }: GlassCardProps) {
  const { theme } = useTheme();
  
  const baseClasses = `
    rounded-[20px] p-6
    backdrop-blur-[30px]
    border
    transition-all duration-300
    ${hover ? 'cursor-pointer' : ''}
  `;
  
  const themeClasses = theme === 'light' 
    ? `bg-white/70 border-white/30 shadow-lg
       ${hover ? 'hover:bg-white/80 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1' : ''}`
    : `bg-white/5 border-white/10 shadow-2xl shadow-black/50
       ${hover ? 'hover:bg-white/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-1' : ''}`;
  
  return (
    <div 
      className={`${baseClasses} ${themeClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}