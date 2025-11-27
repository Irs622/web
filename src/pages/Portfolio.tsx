import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { useTheme } from '../contexts/ThemeContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import liveEventImage from 'figma:asset/5879bf3215834319cdadf80da5a00755d2ab9eb0.png';

type Category = 'All' | 'UI/UX' | 'React' | 'Photography' | 'Writing' | 'Video Editing';

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    category: 'UI/UX',
    description: 'Modern analytics dashboard with real-time data visualization',
    image: 'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQwOTEyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Figma', 'Design System', 'Dashboard']
  },
  {
    id: 2,
    title: 'Portfolio Web App',
    category: 'React',
    description: 'Interactive React portfolio with smooth animations',
    image: 'https://images.unsplash.com/photo-1591267990439-bc68529677c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjQwOTEyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: 3,
    title: 'Live Event Visuals',
    category: 'Photography',
    description: 'Dynamic live concert and event photography with dramatic lighting',
    image: liveEventImage,
    tags: ['Sony A7III', 'Event Photography', 'Live Concert']
  },
  {
    id: 4,
    title: 'Design Thinking Blog',
    category: 'Writing',
    description: 'In-depth articles on UX design methodology and practices',
    image: 'https://images.unsplash.com/photo-1669139660221-19454e55751e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwbm90ZWJvb2slMjBkZXNrfGVufDF8fHx8MTc2NDA5MDY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['UX Writing', 'Medium', 'Tutorial']
  },
  {
    id: 5,
    title: 'Task Management App',
    category: 'UI/UX',
    description: 'Simple and intuitive to-do list app with drag & drop functionality',
    image: 'https://images.unsplash.com/photo-1657032633395-1cb34612f86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2RvJTIwbGlzdCUyMGFwcCUyMGRlc2lnbnxlbnwxfHx8fDE3NjQxNDg0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Mobile', 'Figma', 'Productivity']
  },
  {
    id: 6,
    title: 'React Component Library',
    category: 'React',
    description: 'Reusable component library with Storybook documentation',
    image: 'https://images.unsplash.com/photo-1591267990439-bc68529677c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjQwOTEyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Components', 'Storybook']
  },
  {
    id: 7,
    title: 'Brand Promo Video',
    category: 'Video Editing',
    description: 'Dynamic promotional video with motion graphics and color grading',
    image: 'https://images.unsplash.com/photo-1695218716405-5b813000e994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBzb2Z0d2FyZSUyMHRpbWVsaW5lfGVufDF8fHx8MTc2NDA5ODQxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Premiere Pro', 'After Effects', 'Motion Graphics']
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  const categories: Category[] = ['All', 'UI/UX', 'React', 'Photography', 'Writing', 'Video Editing'];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);
  
  return (
    <div className="min-h-screen pt-16 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className={`mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Portfolio
          </h1>
          <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
            Explore my work across design, development, photography, video editing, and writing
          </p>
        </motion.div>
        
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 rounded-[16px] backdrop-blur-[20px] border
                transition-all duration-300
                ${activeCategory === category
                  ? theme === 'light'
                    ? 'bg-blue-500/80 border-white/30 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-cyan-500 border-cyan-400/30 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                  : theme === 'light'
                    ? 'bg-white/60 border-white/40 text-gray-800 hover:bg-white/80'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/15'
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard 
                hover 
                onClick={() => navigate('/case-study', { state: { project } })}
              >
                <div className="relative overflow-hidden rounded-[12px] mb-4 h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-[20px] ${
                    theme === 'light'
                      ? 'bg-white/70'
                      : 'bg-white/20'
                  }`}>
                    <ExternalLink size={16} className={theme === 'light' ? 'text-gray-800' : 'text-white'} />
                  </div>
                </div>
                
                <h3 className={`mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
          ))}
        </motion.div>
      </div>
    </div>
  );
}