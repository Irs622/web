import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Instagram, Send, MapPin, Phone } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { GlassButton } from '../components/GlassButton';
import { GlassInput } from '../components/GlassInput';
import { useTheme } from '../contexts/ThemeContext';

export function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const socialLinks = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'Irsalshydiq@gmail.com',
      link: 'mailto:Irsalshydiq@gmail.com'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'LmIrsalshydiq',
      link: 'https://linkedin.com/in/LmIrsalshydiq'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: '@irsalshydiq',
      link: 'https://github.com/irsalshydiq'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      value: '@irsalshydiq',
      link: 'https://instagram.com/irsalshydiq'
    }
  ];
  
  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Bandung, Indonesia'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+62 821-8727-0634'
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
            Get in Touch
          </h1>
          <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard>
              <h2 className={`mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                Send a Message
              </h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`
                    p-6 rounded-[16px] border text-center
                    ${theme === 'light'
                      ? 'bg-green-50/50 border-green-200/50 text-green-800'
                      : 'bg-green-500/10 border-green-500/20 text-green-400'
                    }
                  `}
                >
                  <Send size={48} className="mx-auto mb-4" />
                  <h3 className="mb-2">Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <GlassInput
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <GlassInput
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <GlassInput
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  
                  <GlassInput
                    multiline
                    rows={6}
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  
                  <GlassButton type="submit" className="w-full">
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send size={18} />
                    </span>
                  </GlassButton>
                </form>
              )}
            </GlassCard>
          </motion.div>
          
          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard>
                <h3 className={`mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-3">
                      <div className={`
                        w-10 h-10 rounded-[10px] flex items-center justify-center
                        ${theme === 'light'
                          ? 'bg-blue-500/20 text-blue-600'
                          : 'bg-blue-500/20 text-blue-400'
                        }
                      `}>
                        {info.icon}
                      </div>
                      <div>
                        <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                          {info.label}
                        </p>
                        <p className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlassCard>
                <h3 className={`mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Social Links
                </h3>
                
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center gap-3 p-3 rounded-[12px]
                        backdrop-blur-[20px] border
                        transition-all duration-300
                        ${theme === 'light'
                          ? 'bg-white/60 border-white/40 hover:bg-white/80 hover:shadow-lg'
                          : 'bg-white/10 border-white/20 hover:bg-white/15 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                        }
                      `}
                    >
                      <div className={`
                        w-10 h-10 rounded-[10px] flex items-center justify-center
                        ${theme === 'light'
                          ? 'bg-blue-500/20 text-blue-600'
                          : 'bg-blue-500/20 text-blue-400'
                        }
                      `}>
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                          {social.label}
                        </p>
                        <p className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
                          {social.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
            
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GlassCard>
                <div className="text-center">
                  <div className={`
                    w-16 h-16 rounded-full mx-auto mb-4
                    flex items-center justify-center
                    ${theme === 'light'
                      ? 'bg-green-500/20'
                      : 'bg-green-500/20'
                    }
                  `}>
                    <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <h4 className={`mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Currently Available
                  </h4>
                  <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                    Open for new projects and collaborations
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}