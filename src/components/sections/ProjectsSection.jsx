import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, TrendingUp } from 'lucide-react';
import { Container, SectionHeading, Badge, Tag, Button } from '../ui';
import { PORTFOLIO_DATA } from '../../constants/data';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Content */}
        <motion.div
          className="relative bg-white dark:bg-dark-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="sticky top-4 right-4 p-2 bg-white dark:bg-dark-800 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Header Image */}
          <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-500 relative overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title & Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h2 className="text-4xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">{project.category}</Badge>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                {/* Problem */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    The Problem
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.problem}
                  </p>
                </motion.div>

                {/* Research */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Research Insights
                  </h3>
                  <ul className="space-y-2">
                    {project.research.map((insight, idx) => (
                      <motion.li
                        key={idx}
                        className="flex gap-3 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + idx * 0.05 }}
                      >
                        <span className="text-purple-500 font-bold">→</span>
                        {insight}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Strategy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500" />
                    Product Strategy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.strategy}
                  </p>
                </motion.div>

                {/* PM Responsibilities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    PM Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {project.pmResponsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        className="flex gap-3 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + idx * 0.05 }}
                      >
                        <span className="text-cyan-500 font-bold">✓</span>
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Challenges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    Challenges Faced
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <motion.li
                        key={idx}
                        className="flex gap-3 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                      >
                        <span className="text-orange-500">⚡</span>
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Outcomes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Outcomes & Results
                  </h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <motion.li
                        key={idx}
                        className="flex gap-3 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + idx * 0.05 }}
                      >
                        <span className="text-green-500 font-bold">→</span>
                        {outcome}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Metrics */}
                <motion.div
                  className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    Key Metrics
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </p>
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <h4 className="font-bold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.25 + idx * 0.05 }}
                      >
                        <Tag>{tech}</Tag>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Skills Used */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-bold mb-3">Skills Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                      >
                        <Badge variant="purple">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            initial={{ scale: 1 }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <Badge variant="default">{project.category}</Badge>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              <ExternalLink className="w-4 h-4 text-blue-500" />
            </motion.div>
          </div>

          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {project.shortDescription}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Tag className="text-xs">{tech}</Tag>
              </motion.div>
            ))}
            {project.techStack.length > 3 && (
              <Tag className="text-xs">+{project.techStack.length - 3}</Tag>
            )}
          </div>

          {/* CTA */}
          <motion.button
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Case Study
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Case studies of AI products I've brought to market"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <Button variant="outline" size="lg">
            View All Projects →
          </Button>
        </motion.div>
      </Container>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
