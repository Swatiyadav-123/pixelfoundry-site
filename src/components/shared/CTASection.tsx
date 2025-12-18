import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
  primaryLink?: string;
  secondaryCTA?: string;
  secondaryLink?: string;
}

export const CTASection = ({
  title = "Ready to Transform Your Digital Presence?",
  description = "Let's collaborate to create something extraordinary. Get in touch and let's discuss how we can help your business grow.",
  primaryCTA = "Start Your Project",
  primaryLink = "/contact",
  secondaryCTA = "View Our Work",
  secondaryLink = "/case-studies",
}: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
            {title}
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            {description}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to={primaryLink}>
                {primaryCTA}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link to={secondaryLink}>{secondaryCTA}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
