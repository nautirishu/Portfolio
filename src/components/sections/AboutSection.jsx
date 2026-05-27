import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Brain, Target, Users } from 'lucide-react';
import { Container, SectionHeading, GradientText } from '../ui';
import { PORTFOLIO_DATA } from '../../constants/data';

const StatCard = ({ icon: Icon, label, value }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-3 p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <p className="text-3xl font-bold mb-1">{value}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
};

export const AboutSection = () => {
  const { about } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Understanding my journey from design to product"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                {about.intro}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {about.story}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-4">
              {about.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-3 items-start"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-base">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Stats & Image */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <StatCard icon={Brain} label="UX Design Years" value="2" />
              <StatCard icon={Target} label="PM Months" value="4" />
              <StatCard icon={Users} label="Users Impacted" value="50K+" />
              <StatCard icon={Target} label="Projects Shipped" value="4" />
            </div>

            {/* Tech Stack Preview */}
            <motion.div
              className="p-6 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-gray-700"
              whileHover={{ borderColor: '#0ea5e9' }}
            >
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                Key Expertise
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Product Thinking</span>
                    <span className="text-xs text-blue-600 dark:text-blue-400">Expert</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      transition={{ delay: 0.3, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">UX Research</span>
                    <span className="text-xs text-blue-600 dark:text-blue-400">Expert</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      transition={{ delay: 0.4, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">AI Product Strategy</span>
                    <span className="text-xs text-blue-600 dark:text-blue-400">Advanced</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ delay: 0.5, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
