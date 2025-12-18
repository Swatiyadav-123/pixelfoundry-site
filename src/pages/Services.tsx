import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { CTASection } from '@/components/shared/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Code2,
  Palette,
  Smartphone,
  BarChart3,
  Search,
  Megaphone,
  ShoppingCart,
  Server,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered design that combines aesthetics with functionality to delight your users.',
  },
  {
    icon: BarChart3,
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align your digital presence with your business objectives.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search visibility and drive organic traffic with proven SEO techniques.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive marketing solutions to grow your brand and reach your target audience.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce development that drives sales and enhances customer experience.',
  },
  {
    icon: Server,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and DevOps solutions for reliable application deployment.',
  },
];

const Services = () => {
  const scrollRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-in">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground animate-fade-in-up">
              What We Build
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              From product design to full-stack engineering, we deliver services that help businesses grow and succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={scrollRef} className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="reveal">
            <SectionHeading
              label="Our Services"
              title="End-to-end solutions for modern teams"
              description="We offer a range of services to help companies design, build, and scale products users love."
            />
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {services.map((s) => (
              <div key={s.title} className="reveal-up">
                <ServiceCard icon={s.icon} title={s.title} description={s.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to start?"
        description="Tell us about your project and we'll build a custom solution together."
        primaryCTA="Contact Us"
        secondaryCTA="View Case Studies"
      />
    </Layout>
  );
};

export default Services;
