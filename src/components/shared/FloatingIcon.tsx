import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  delay?: 'none' | 'delayed' | 'slow';
}

export const FloatingIcon = ({
  icon: Icon,
  className,
  size = 24,
  delay = 'none',
}: FloatingIconProps) => {
  const animationClass = {
    none: 'animate-float',
    delayed: 'animate-float-delayed',
    slow: 'animate-float-slow',
  }[delay];

  return (
    <div
      className={cn(
        'absolute rounded-2xl bg-card shadow-elevated p-4 flex items-center justify-center',
        animationClass,
        className
      )}
    >
      <Icon size={size} className="text-accent" />
    </div>
  );
};
