import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  rounded?: 'full' | 'lg' | 'md' | 'sm';
  onClick?: () => void;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  rounded = 'full',
  onClick
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium transition-colors';
  
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-white text-blue-700 border border-blue-200',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    outline: 'bg-transparent text-gray-700 border border-gray-300'
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };
  
  const roundedStyles = {
    full: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md',
    sm: 'rounded-sm'
  };

  const interactiveStyles = onClick ? 'cursor-pointer hover:opacity-80 active:scale-95' : '';

  return (
    <span 
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${roundedStyles[rounded]}
        ${interactiveStyles}
        ${className}
      `}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-1.5">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-1.5">{icon}</span>
      )}
    </span>
  );
}

// Version simplifiée sans icon pour un usage plus rapide
export function BadgeSimple({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}: {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <Badge variant={variant} size={size} className={className}>
      {children}
    </Badge>
  );
}