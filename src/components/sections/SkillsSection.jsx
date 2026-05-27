import React from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeading, Card, Tag } from '../ui';
import { PORTFOLIO_DATA } from '../../constants/data';

const SkillCategory = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-2xl hover:shadow-blue-500/20">
        <div className="mb-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <span className="text-2xl">
              {category.title === 'Product Management' && '🎯'}
              {category.title === 'UX/UI Design' && '🎨'}
              {category.title === 'AI & Technology' && '🤖'}
              {category.title === 'Frontend Basics' && '💻'}
              {category.title === 'Collaboration Tools' && '🛠️'}
            </span>
          </div>
          <h3 className="text-lg font-bold">{category.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Tag className="cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                {skill}
              </Tag>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <Container>
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Core competencies that drive my work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, idx) => (
            <SkillCategory
              key={idx}
              category={category}
              index={idx}
            />
          ))}
        </div>

        {/* Proficiency Matrix */}
        <motion.div
          className="mt-16 p-8 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8">Skill Proficiency Matrix</h3>

          <div className="space-y-6">
            {[
              { skill: 'Product Strategy & Thinking', level: 95, color: 'from-blue-500' },
              { skill: 'User Research & UX Design', level: 90, color: 'from-purple-500' },
              { skill: 'AI Product Strategy', level: 85, color: 'from-pink-500' },
              { skill: 'Figma & Design Tools', level: 88, color: 'from-cyan-500' },
              { skill: 'React Fundamentals', level: 75, color: 'from-green-500' },
              { skill: 'Prompt Engineering', level: 80, color: 'from-orange-500' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.skill}
                  </span>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${item.color} to-opacity-50`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
