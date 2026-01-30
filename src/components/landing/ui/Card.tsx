import React from 'react';

type CardVariant = 'default' | 'featured' | 'pricing';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white rounded-2xl p-6 shadow-md border border-gray-100',
  featured: 'bg-white rounded-2xl p-6 shadow-md border border-gray-100 ring-2 ring-blue-500 relative',
  pricing: 'bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center',
};

const hoverStyles = 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300';

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
}) => {
  const baseStyles = variantStyles[variant];
  const combinedStyles = [
    baseStyles,
    hover ? hoverStyles : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={combinedStyles}>{children}</div>;
};

export default Card;
