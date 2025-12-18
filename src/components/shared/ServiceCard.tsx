import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'group bg-card rounded-2xl p-8 shadow-soft card-hover border border-border/50 box-animate',
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
      </div>
      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
