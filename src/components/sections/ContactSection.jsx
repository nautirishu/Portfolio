import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';
import { PORTFOLIO_DATA } from '../../constants/data';

export const ContactSection = () => {
  const { contact } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: contact.social.linkedin,
      color: 'hover:text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      url: contact.social.github,
      color: 'hover:text-gray-800 dark:hover:text-gray-300',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: contact.social.twitter,
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading
          title="Let's Connect"
          subtitle="Reach out for collaborations or just a friendly hello"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

            {/* Email */}
            <motion.a
              href={`mailto:${contact.email}`}
              className="flex gap-4 items-start group"
              whileHover={{ x: 10 }}
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {contact.email}
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${contact.phone}`}
              className="flex gap-4 items-start group"
              whileHover={{ x: 10 }}
            >
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  {contact.phone}
                </p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div className="flex gap-4 items-start">
              <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                <MapPin className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <p className="font-semibold mb-1">Location</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {contact.location}
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="font-semibold mb-4">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 dark:bg-dark-800 rounded-lg text-gray-700 dark:text-gray-300 ${social.color} transition-colors`}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none dark:focus:border-blue-400 transition-colors"
                  whileFocus={{ borderColor: '#0ea5e9' }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none dark:focus:border-blue-400 transition-colors"
                  whileFocus={{ borderColor: '#0ea5e9' }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none dark:focus:border-blue-400 transition-colors resize-none"
                  whileFocus={{ borderColor: '#0ea5e9' }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={submitted}
                >
                  {submitted ? (
                    'Message Sent! ✓'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.p
                  className="text-center text-green-600 dark:text-green-400 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
