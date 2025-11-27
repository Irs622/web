import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SkillTagProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function SkillTag({ children, icon }: SkillTagProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`
      inline-flex items-center gap-2
      px-4 py-2 rounded-[12px]
      backdrop-blur-[20px]
      border
      transition-all duration-300
      ${theme === 'light'
        ? 'bg-white/60 border-white/40 text-gray-800'
        : 'bg-white/10 border-white/20 text-white'
      }
    `}>
      {icon && <span className="opacity-70">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
