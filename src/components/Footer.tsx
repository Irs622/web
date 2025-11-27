import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Footer() {
  const { theme } = useTheme();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/irsalshydiq', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/LmIrsalshydiq', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/irsalshydiq', label: 'Instagram' },
    { icon: <Mail size={20} />, href: 'mailto:Irsalshydiq@gmail.com', label: 'Email' }
  ];
  
  return (
    <footer className={`
      py-8 border-t backdrop-blur-[20px]
      ${theme === 'light' 
        ? 'bg-white/60 border-gray-200/50' 
        : 'bg-black/40 border-white/10'}
    `}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <span className={`text-sm ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            © 2024 Irsal Shydiq
          </span>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  transition-all duration-300
                  ${theme === 'light'
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-gray-400 hover:text-white'
                  }
                `}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}