import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Code } from 'lucide-react';
import { Container, SectionHeading, Badge, Tag } from '../ui';
import { PORTFOLIO_DATA } from '../../constants/data';

const ExperienceCard = ({ experience, isExpanded, onToggle }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-8 top-16 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

      {/* Timeline Dot */}
      <div className="hidden md:block absolute left-0 top-8 w-16 h-16 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white dark:bg-dark-800 border-4 border-blue-500 flex items-center justify-center">
          {experience.type === 'PM' ? (
            <Briefcase className="w-6 h-6 text-blue-500" />
          ) : (
            <Code className="w-6 h-6 text-purple-500" />
          )}
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        onClick={onToggle}
        className="md:ml-32 cursor-pointer p-6 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all"
        whileHover={{ boxShadow: '0 20px 40px rgba(14, 165, 233, 0.1)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">{experience.role}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {experience.company}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {experience.duration}
            </p>
          </div>
          <Badge variant={experience.type === 'PM' ? 'default' : 'purple'}>
            {experience.type}
          </Badge>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {experience.description}
        </p>

        {/* Expand Button */}
        <motion.button
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
          whileHover={{ x: 5 }}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-2 text-gray-600 dark:text-gray-400 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-2 text-gray-600 dark:text-gray-400 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-green-500 mt-1">✓</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Tools & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.tools.map((tool, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Tag>{tool}</Tag>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  const { experience } = PORTFOLIO_DATA;
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey in UX design and product management"
        />

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              experience={exp}
              isExpanded={expandedIdx === idx}
              onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
