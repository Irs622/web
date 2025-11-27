import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SkillTag } from '../components/SkillTag';
import { useTheme } from '../contexts/ThemeContext';

const experienceData: Record<string, any> = {
  'tech-innovators': {
    title: 'Freelance UI/UX Designer',
    company: 'Independent',
    period: '2024 - Present',
    location: 'Remote',
    type: 'Freelance',
    description: 'Providing UI/UX design services for various clients including startups and small businesses, creating user-centered digital experiences from concept to final design.',
    responsibilities: [
      'Collaborated with clients to understand business goals and user needs',
      'Designed user interfaces and wireframes for web and mobile applications',
      'Created interactive prototypes in Figma for client presentations',
      'Conducted user research and usability testing for project validation',
      'Delivered design systems and component libraries for client projects'
    ],
    achievements: [
      'Successfully completed 8+ client projects with positive feedback',
      'Designed and delivered 2 complete mobile app interfaces',
      'Created reusable design components that reduced client revision time by 30%'
    ],
    skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems', 'Client Communication'],
    tools: ['Figma', 'Adobe XD', 'Miro', 'Notion', 'Slack', 'Zoom']
  },
  'digital-solutions': {
    title: 'Freelance React Developer',
    company: 'Independent',
    period: '2024 - Present',
    location: 'Remote',
    type: 'Freelance',
    description: 'Building modern, responsive web applications for clients using React and modern JavaScript technologies, focusing on clean code and optimal performance.',
    responsibilities: [
      'Developed custom web applications based on client requirements',
      'Implemented responsive designs using React and Tailwind CSS',
      'Integrated third-party APIs and services for enhanced functionality',
      'Optimized application performance and load times',
      'Provided ongoing maintenance and support for delivered projects'
    ],
    achievements: [
      'Built and deployed 5+ production-ready web applications',
      'Achieved average PageSpeed score of 90+ for all client projects',
      'Reduced development time by 40% using reusable component patterns'
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'API Integration', 'Performance Optimization'],
    tools: ['VS Code', 'Git', 'GitHub', 'Vercel', 'Netlify', 'Postman']
  },
  'freelance-creative': {
    title: 'Freelance Creative',
    company: 'Independent',
    period: '2022 - Present',
    location: 'Global',
    type: 'Freelance',
    description: 'Photography and content creation for various brands, specializing in urban landscape photography, product photography, and creative content writing for digital platforms.',
    responsibilities: [
      'Captured high-quality photos for commercial clients and personal projects',
      'Created engaging content for blogs, social media, and marketing materials',
      'Edited photos and videos using professional tools and techniques',
      'Managed client relationships and delivered projects on time',
      'Built personal brand and portfolio showcasing diverse creative work'
    ],
    achievements: [
      'Completed 50+ successful projects with 5-star client ratings',
      'Featured in local photography exhibitions and online publications',
      'Grew Instagram following to 10K+ with consistent quality content'
    ],
    skills: ['Photography', 'Lightroom', 'Content Writing', 'Video Editing', 'Social Media'],
    tools: ['Sony A7III', 'Lightroom', 'Photoshop', 'Premiere Pro', 'Notion']
  }
};

export function ExperienceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const experience = id ? experienceData[id] : null;
  
  if (!experience) {
    return (
      <div className="min-h-screen pt-16 pb-16 px-6 flex items-center justify-center">
        <GlassCard>
          <div className="text-center py-12">
            <h2 className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
              Experience not found
            </h2>
            <button
              onClick={() => navigate('/about')}
              className={`
                mt-6 px-6 py-3 rounded-[12px] backdrop-blur-[20px] border
                transition-all duration-300
                ${theme === 'light'
                  ? 'bg-blue-500/20 border-blue-500/40 text-blue-600 hover:bg-blue-500/30'
                  : 'bg-blue-500/20 border-blue-500/40 text-blue-400 hover:bg-blue-500/30'
                }
              `}
            >
              Back to About
            </button>
          </div>
        </GlassCard>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-16 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate('/about')}
          className={`
            mb-8 flex items-center gap-2 px-4 py-2 rounded-[12px]
            backdrop-blur-[20px] border transition-all duration-300
            ${theme === 'light'
              ? 'bg-white/60 border-white/40 text-gray-700 hover:bg-white/80'
              : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
            }
          `}
        >
          <ArrowLeft size={20} />
          Back to About
        </motion.button>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <GlassCard>
            <div className="space-y-4">
              <div>
                <h1 className={`mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  {experience.title}
                </h1>
                <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  {experience.company}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className={`flex items-center gap-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  <Calendar size={18} />
                  <span>{experience.period}</span>
                </div>
                <div className={`flex items-center gap-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  <MapPin size={18} />
                  <span>{experience.location}</span>
                </div>
                <div className={`flex items-center gap-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  <Briefcase size={18} />
                  <span>{experience.type}</span>
                </div>
              </div>
              
              <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                {experience.description}
              </p>
            </div>
          </GlassCard>
        </motion.div>
        
        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <GlassCard>
            <h2 className={`mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Key Responsibilities
            </h2>
            <ul className="space-y-3">
              {experience.responsibilities.map((item: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className={`flex gap-3 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
                >
                  <CheckCircle2 
                    size={20} 
                    className={`flex-shrink-0 mt-0.5 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
        
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <GlassCard>
            <h2 className={`mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Key Achievements
            </h2>
            <div className="grid gap-4">
              {experience.achievements.map((item: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className={`
                    p-4 rounded-[16px] backdrop-blur-[20px] border
                    ${theme === 'light'
                      ? 'bg-blue-500/10 border-blue-500/20'
                      : 'bg-blue-500/10 border-blue-500/30'
                    }
                  `}
                >
                  <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
        
        {/* Skills & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <GlassCard>
            <h3 className={`mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill: string) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </GlassCard>
          
          <GlassCard>
            <h3 className={`mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.tools.map((tool: string) => (
                <SkillTag key={tool}>{tool}</SkillTag>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}