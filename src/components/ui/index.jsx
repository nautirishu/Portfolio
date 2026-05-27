import React from 'react';
import clsx from 'clsx';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl focus:ring-blue-500',
    secondary: 'bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:ring-gray-500',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 focus:ring-blue-500',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 focus:ring-gray-500'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({
  children,
  className = '',
  hover = true,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-dark-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6',
        hover && 'hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const Badge = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300',
  };

  return (
    <span className={clsx('px-3 py-1 rounded-full text-sm font-medium', variants[variant], className)}>
      {children}
    </span>
  );
};

export const Container = ({ children, className = '' }) => {
  return (
    <div className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
};

export const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={clsx('mb-12', centered && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export const GradientText = ({ children, className = '' }) => {
  return (
    <span className={clsx('bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent', className)}>
      {children}
    </span>
  );
};

export const AnimatedDivider = ({ className = '' }) => {
  return (
    <div className={clsx('h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full', className)} />
  );
};

export const Tag = ({ children, className = '' }) => {
  return (
    <span className={clsx(
      'inline-block px-3 py-1 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium',
      className
    )}>
      {children}
    </span>
  );
};
