import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';
import { useTheme } from '../contexts/ThemeContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CaseStudy() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const project = location.state?.project;
  
  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
        <GlassCard>
          <h2 className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
            Project not found
          </h2>
          <GlassButton 
            onClick={() => navigate('/portfolio')}
            className="mt-4"
          >
            Back to Portfolio
          </GlassButton>
        </GlassCard>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-16 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/portfolio')}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-[12px]
              backdrop-blur-[20px] border transition-all duration-300
              ${theme === 'light'
                ? 'bg-white/60 border-white/40 text-gray-800 hover:bg-white/80'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/15'
              }
            `}
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>
        </motion.div>
        
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard className="mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className={`mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  {project.title}
                </h1>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                  {project.description}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'} />
                <span className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                  2024
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={18} className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'} />
                <span className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className={`
                    px-3 py-1 rounded-[8px] backdrop-blur-[20px] border
                    ${theme === 'light'
                      ? 'bg-white/60 border-white/40 text-gray-700'
                      : 'bg-white/10 border-white/20 text-gray-300'
                    }
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <GlassCard className="p-0 overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </GlassCard>
        </motion.div>
        
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <GlassCard>
            <h2 className={`mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Overview
            </h2>
            <p className={`mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              This project showcases a comprehensive approach to {project.category.toLowerCase()} 
              that combines modern design principles with user-centered methodologies. 
              The goal was to create an experience that is both aesthetically pleasing and 
              highly functional.
            </p>
            <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
              Through careful research, iterative design, and continuous refinement, 
              we achieved a solution that not only meets but exceeds user expectations 
              while maintaining brand consistency and accessibility standards.
            </p>
          </GlassCard>
        </motion.div>
        
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <GlassCard>
            <h2 className={`mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Problem Statement
            </h2>
            <p className={`mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              Users were facing challenges with existing solutions that lacked intuitive 
              navigation and modern design patterns. The interface needed to be reimagined 
              to provide a seamless experience across all touchpoints.
            </p>
            <div className={`p-4 rounded-[12px] border ${
              theme === 'light'
                ? 'bg-blue-50/50 border-blue-200/50'
                : 'bg-blue-500/10 border-blue-500/20'
            }`}>
              <p className={`italic ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                "How might we create a solution that balances simplicity with powerful 
                functionality while maintaining visual appeal?"
              </p>
            </div>
          </GlassCard>
        </motion.div>
        
        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <GlassCard>
            <h2 className={`mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Design Process
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Research & Discovery',
                  description: 'Conducted user interviews, competitive analysis, and market research to understand pain points and opportunities.'
                },
                {
                  step: '02',
                  title: 'Ideation & Sketching',
                  description: 'Explored multiple design directions through rapid sketching and low-fidelity wireframes.'
                },
                {
                  step: '03',
                  title: 'Prototyping',
                  description: 'Created interactive prototypes to test user flows and validate design decisions.'
                },
                {
                  step: '04',
                  title: 'Testing & Refinement',
                  description: 'Conducted usability testing sessions and iterated based on user feedback.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`
                    w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0
                    ${theme === 'light'
                      ? 'bg-blue-500/20 text-blue-600'
                      : 'bg-blue-500/20 text-blue-400'
                    }
                  `}>
                    <span>{item.step}</span>
                  </div>
                  <div>
                    <h4 className={`mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      {item.title}
                    </h4>
                    <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
        
        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <GlassCard>
            <h2 className={`mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Final Solution
            </h2>
            <p className={`mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              The final solution delivers a polished, intuitive experience that aligns with 
              user needs and business objectives. Key features include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Intuitive Navigation',
                'Responsive Design',
                'Accessibility First',
                'Performance Optimized',
                'Modern Aesthetics',
                'Scalable Architecture'
              ].map((feature) => (
                <div
                  key={feature}
                  className={`
                    p-4 rounded-[12px] backdrop-blur-[20px] border
                    ${theme === 'light'
                      ? 'bg-white/60 border-white/40'
                      : 'bg-white/10 border-white/20'
                    }
                  `}
                >
                  <span className={theme === 'light' ? 'text-gray-800' : 'text-gray-200'}>
                    ✓ {feature}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <GlassButton
            onClick={() => navigate('/contact')}
          >
            Discuss Your Project
          </GlassButton>
        </motion.div>
      </div>
    </div>
  );
}