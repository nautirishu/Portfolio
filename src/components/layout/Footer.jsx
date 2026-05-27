import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail, Heart } from 'lucide-react';
import { Container } from '../ui';
import { NAV_ITEMS, PORTFOLIO_DATA } from '../../constants/data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-12 border-t border-gray-800">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">RN</span>
              </div>
              <span className="font-bold">Rishabh Nautiyalr</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI Product Manager & UX Strategist crafting human-centered products
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Resume', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                {
                  icon: Linkedin,
                  url: PORTFOLIO_DATA.contact.social.linkedin,
                },
                {
                  icon: Github,
                  url: PORTFOLIO_DATA.contact.social.github,
                },
                {
                  icon: Twitter,
                  url: PORTFOLIO_DATA.contact.social.twitter,
                },
                {
                  icon: Mail,
                  url: `mailto:${PORTFOLIO_DATA.contact.email}`,
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Rishi Kumar. All rights reserved.
          </p>

          <motion.p
            className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and React
          </motion.p>
        </motion.div>
      </Container>
    </footer>
  );
};
