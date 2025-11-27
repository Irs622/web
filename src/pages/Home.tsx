import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GlassButton } from '../components/GlassButton';
import { useTheme } from '../contexts/ThemeContext';

export function Home() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden -mt-32 pt-32">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-[100px] ${
          theme === 'light' 
            ? 'bg-blue-400/30' 
            : 'bg-cyan-500/30'
        }`}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-[100px] ${
          theme === 'light' 
            ? 'bg-purple-400/30' 
            : 'bg-purple-500/30'
        }`}
      />
      
      {/* Hero Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-[20px] border mb-8 ${
            theme === 'light'
              ? 'bg-white/60 border-white/40 text-blue-600'
              : 'bg-white/10 border-white/20 text-blue-400'
          }`}>
            <Sparkles size={16} />
            <span>Open for opportunities</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`mb-6 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}
        >
          Irsal Shydiq
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`mb-4 ${
            theme === 'light' ? 'text-gray-800' : 'text-gray-200'
          }`}
        >
          Multidisciplinary Designer & React Developer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`mb-12 max-w-2xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}
        >
          UI/UX • React • Photography • Video Editing • Content Writing
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <GlassButton
            variant="primary"
            onClick={() => navigate('/portfolio')}
          >
            <span className="flex items-center gap-2">
              View Portfolio
              <ArrowRight size={18} />
            </span>
          </GlassButton>
          
          <GlassButton
            variant="secondary"
            onClick={() => navigate('/contact')}
          >
            Get in Touch
          </GlassButton>
        </motion.div>
        
        {/* Floating Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-20 max-w-5xl mx-auto"
        >
          {[
            { title: 'UI/UX Design', count: '10+ Projects' },
            { title: 'React Dev', count: '10+ Apps' },
            { title: 'Photography', count: '500+ Shots' },
            { title: 'Writing', count: '50+ Articles' },
            { title: 'Video Editing', count: '80+ Videos' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className={`
                p-6 rounded-[16px] backdrop-blur-[30px] border
                transition-all duration-300 hover:-translate-y-1
                ${theme === 'light'
                  ? 'bg-white/70 border-white/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/20'
                  : 'bg-white/10 border-white/15 shadow-2xl hover:shadow-[0_0_30px_rgba(10,132,255,0.3)]'
                }
              `}
            >
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                {item.count}
              </p>
              <h4 className={`mt-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {item.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}