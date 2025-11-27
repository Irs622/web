import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      {/* Main Navigation */}
      <nav className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${theme === 'light'
          ? 'bg-white/70 backdrop-blur-[40px] shadow-sm border-b border-gray-200/50'
          : 'bg-black/40 backdrop-blur-[40px] shadow-lg border-b border-white/10'
        }
      `}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Main Nav Items */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    text-sm transition-all duration-300 relative pb-1
                    ${isActive(item.path)
                      ? theme === 'light'
                        ? 'text-gray-900 font-medium'
                        : 'text-white font-medium'
                      : theme === 'light'
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-gray-400 hover:text-white'
                    }
                  `}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className={`
                      absolute -bottom-1 left-0 right-0 h-0.5 rounded-full
                      ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}
                    `} />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`
                w-9 h-9 rounded-full flex items-center justify-center
                transition-all duration-300
                ${theme === 'light'
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  : 'bg-white/10 hover:bg-white/20 text-white'
                }
              `}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from hiding under sticky header */}
      <div className="h-20" />
    </>
  );
}