import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function GlassButton({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}: GlassButtonProps) {
  const { theme } = useTheme();
  
  const baseClasses = `
    px-8 py-4 rounded-[16px]
    backdrop-blur-[20px]
    border
    transition-all duration-300
    cursor-pointer
    font-medium
  `;
  
  const primaryClasses = theme === 'light'
    ? 'bg-blue-500/80 hover:bg-blue-600/90 border-white/30 text-white shadow-lg hover:shadow-blue-500/50 hover:scale-105'
    : 'bg-cyan-500 hover:bg-cyan-400 border-cyan-400/30 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-105';
  
  const secondaryClasses = theme === 'light'
    ? 'bg-white/70 hover:bg-white/90 border-white/40 text-gray-800 shadow-md hover:shadow-lg hover:scale-105'
    : 'bg-white/15 hover:bg-white/25 border-white/30 text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105';
  
  const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;
  
  return (
    <button 
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}