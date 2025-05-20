
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-all";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-hac-blue to-hac-lightblue text-white hover:opacity-90",
    secondary: "bg-white dark:bg-gray-800 text-hac-blue dark:text-hac-lightblue hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700",
    outline: "bg-transparent border border-hac-blue dark:border-hac-lightblue text-hac-blue dark:text-hac-lightblue hover:bg-hac-blue/10 dark:hover:bg-hac-lightblue/10"
  };
  
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default CTAButton;
