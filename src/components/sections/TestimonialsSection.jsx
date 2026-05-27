import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { PORTFOLIO_DATA } from '../../constants/data';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all"
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.1)' }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            viewport={{ once: true }}
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <motion.img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
          whileHover={{ scale: 1.1 }}
        />
        <div>
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <Container>
        <SectionHeading
          title="What People Say"
          subtitle="Feedback from colleagues and managers I've worked with"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              index={idx}
            />
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          className="mt-16 p-8 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Happy Colleagues', value: '50+', icon: '👥' },
              { label: 'Projects Shipped', value: '4', icon: '🚀' },
              { label: 'User Satisfaction', value: '4.8/5', icon: '⭐' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-4xl mb-2 block">{stat.icon}</span>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
