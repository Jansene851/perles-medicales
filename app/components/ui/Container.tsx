import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export default function Container({
  children,
  className = '',
  size = 'lg'
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full'
  };
  
  return (
    <div className={`container mx-auto px-4 ${maxWidths[size]} ${className}`}>
      {children}
    </div>
  );
}