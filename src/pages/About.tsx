import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Code, Palette, Camera, PenTool, Award, Briefcase, Video } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SkillTag } from '../components/SkillTag';
import { useTheme } from '../contexts/ThemeContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import profileImage from 'figma:asset/10be68f43185b69174f9ad5cc031832d9e118087.png';

export function About() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  const skills = [
    { category: 'Design', items: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'] },
    { category: 'Development', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'] },
    { category: 'Photography', items: ['Sony A7III', 'Lightroom', 'Capture One', 'Portrait', 'Landscape'] },
    { category: 'Video Editing', items: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Motion Graphics'] },
    { category: 'Writing', items: ['UX Writing', 'Technical Writing', 'Content Strategy', 'SEO', 'Blogging'] }
  ];
  
  const experience = [
    {
      id: 'tech-innovators',
      icon: <Briefcase size={24} />,
      title: 'Freelance UI/UX Designer',
      company: 'Independent',
      period: '2024 - Present',
      description: 'Designing user interfaces and experiences for various clients'
    },
    {
      id: 'digital-solutions',
      icon: <Code size={24} />,
      title: 'Freelance React Developer',
      company: 'Independent',
      period: '2024 - Present',
      description: 'Building responsive web applications for startups and businesses'
    },
    {
      id: 'freelance-creative',
      icon: <Award size={24} />,
      title: 'Freelance Creative',
      company: 'Independent',
      period: '2022 - Present',
      description: 'Photography and content creation for various brands'
    }
  ];
  
  return (
    <div className="min-h-screen pt-16 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className={`mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            About Me
          </h1>
          <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
            Multidisciplinary creative passionate about crafting exceptional experiences
          </p>
        </motion.div>
        
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <GlassCard>
            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
              {/* Profile Image */}
              <div className="relative">
                <div className={`
                  w-full aspect-square rounded-[20px] overflow-hidden
                  border-4 shadow-xl
                  ${theme === 'light'
                    ? 'border-white/50 shadow-blue-500/20'
                    : 'border-white/20 shadow-blue-500/30'
                  }
                `}>
                  <ImageWithFallback
                    src={profileImage}
                    alt="Irsal Shydiq"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Status Badge */}
                <div className={`
                  absolute -bottom-4 left-1/2 -translate-x-1/2
                  px-4 py-2 rounded-full backdrop-blur-[20px] border
                  flex items-center gap-2
                  ${theme === 'light'
                    ? 'bg-white/80 border-white/40'
                    : 'bg-white/20 border-white/20'
                  }
                `}>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className={theme === 'light' ? 'text-gray-800' : 'text-white'}>
                    Available for work
                  </span>
                </div>
              </div>
              
              {/* Bio */}
              <div className="pt-4">
                <h2 className={`mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Irsal Shydiq
                </h2>
                <p className={`mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  I'm a multidisciplinary creative with a passion for crafting beautiful and 
                  functional digital experiences. With 1 year of experience in UI/UX design 
                  and React development, I bring a unique perspective that connects design 
                  and code.
                </p>
                <p className={`mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  Beyond digital work, I've spent the past 2 years exploring creativity 
                  through photography and content writing. This combination allows me to 
                  approach problems from different angles and deliver more holistic solutions.
                </p>
                <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                  When I'm not designing or coding, you'll find me capturing urban landscapes 
                  through my camera, writing about design and technology, or experimenting 
                  with new creative tools.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
        
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className={`text-center mb-8 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Skills & Tools
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center gap-3 mb-4">
                    {skillGroup.category === 'Design' && <Palette className={theme === 'light' ? 'text-blue-600' : 'text-blue-400'} />}
                    {skillGroup.category === 'Development' && <Code className={theme === 'light' ? 'text-blue-600' : 'text-blue-400'} />}
                    {skillGroup.category === 'Photography' && <Camera className={theme === 'light' ? 'text-blue-600' : 'text-blue-400'} />}
                    {skillGroup.category === 'Video Editing' && <Video className={theme === 'light' ? 'text-blue-600' : 'text-blue-400'} />}
                    {skillGroup.category === 'Writing' && <PenTool className={theme === 'light' ? 'text-blue-600' : 'text-blue-400'} />}
                    <h3 className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className={`text-center mb-8 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Experience
          </h2>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <GlassCard hover onClick={() => navigate(`/experience/${exp.id}`)}>
                  <div className="flex gap-4">
                    <div className={`
                      w-14 h-14 rounded-[12px] flex items-center justify-center flex-shrink-0
                      ${theme === 'light'
                        ? 'bg-blue-500/20 text-blue-600'
                        : 'bg-blue-500/20 text-blue-400'
                      }
                    `}>
                      {exp.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className={`mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            {exp.title}
                          </h4>
                          <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                            {exp.company}
                          </p>
                        </div>
                        <span className={`
                          px-3 py-1 rounded-[8px] backdrop-blur-[20px] border
                          ${theme === 'light'
                            ? 'bg-white/60 border-white/40 text-gray-700'
                            : 'bg-white/10 border-white/20 text-gray-300'
                          }
                        `}>
                          {exp.period}
                        </span>
                      </div>
                      <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}