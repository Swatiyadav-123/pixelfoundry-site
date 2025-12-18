import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Users, Target, Award, Heart, Lightbulb, Rocket } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to stay ahead of the curve.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and it shows in every project we deliver.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We never settle for good enough. We strive for exceptional in everything.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients, treating their goals as our own.',
  },
];

const timeline = [
  {
    year: '2012',
    title: 'The Beginning',
    description: 'Founded with a vision to transform how businesses connect with their audiences.',
  },
  {
    year: '2015',
    title: 'First Major Client',
    description: 'Partnered with Fortune 500 companies, establishing our reputation for excellence.',
  },
  {
    year: '2018',
    title: 'Global Expansion',
    description: 'Opened offices in 3 continents, serving clients worldwide.',
  },
  {
    year: '2021',
    title: 'Innovation Hub',
    description: 'Launched our R&D division focused on emerging technologies.',
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'Recognized as a top digital agency with 150+ successful projects.',
  },
];

const team = [
  {
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Michael Ross',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Strategy',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
  },
];

const About = () => {
  const scrollRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-hero relative overflow-hidden"> 
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-in">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground animate-fade-in-up">
              Building the Future of Digital Experiences
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We're a passionate team of designers, developers, and strategists dedicated to creating exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={scrollRef} className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal-left bg-card rounded-2xl p-8 md:p-10 shadow-elevated border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We believe in the transformative power of technology to solve real-world problems.
              </p>
            </div>

            <div className="reveal-right bg-card rounded-2xl p-8 md:p-10 shadow-elevated border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Our Vision</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To become the global leader in digital transformation, setting new standards for creativity, innovation, and excellence. We envision a world where every business can harness the full potential of digital.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <CTASection
        title="Want to Join Our Team?"
        description="We're always looking for talented individuals who share our passion for digital excellence."
        primaryCTA="View Open Positions"
        secondaryCTA="Contact Us"
      />
    </Layout>
  );
};

export default About;
