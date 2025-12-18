import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

const categories = ['All', 'Web App', 'Mobile App', 'E-commerce', 'Branding', 'Marketing'];

const caseStudies = [
  {
    id: 1,
    title: 'TechFlow Platform',
    category: 'Web App',
    description: 'A comprehensive SaaS platform that streamlined operations for 500+ enterprises.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'AWS'],
    results: ['150% increase in user engagement', '40% reduction in operational costs'],
  },
  {
    id: 2,
    title: 'Greenpath Mobile App',
    category: 'Mobile App',
    description: 'An eco-friendly lifestyle app helping users reduce their carbon footprint.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'AI'],
    results: ['2M+ downloads', '4.8 star rating'],
  },
  {
    id: 3,
    title: 'Luxe Fashion Store',
    category: 'E-commerce',
    description: 'A premium e-commerce experience for a luxury fashion brand.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Shopify', 'Custom Theme', 'Analytics'],
    results: ['200% increase in online sales', '45% higher conversion rate'],
  },
  {
    id: 4,
    title: 'Innovate Labs Rebrand',
    category: 'Branding',
    description: 'Complete brand transformation for a leading innovation consultancy.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop',
    tags: ['Brand Strategy', 'Visual Identity', 'Guidelines'],
    results: ['85% brand recognition increase', '60% more qualified leads'],
  },
  {
    id: 5,
    title: 'HealthFirst Campaign',
    category: 'Marketing',
    description: 'Multi-channel marketing campaign for a healthcare technology startup.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    tags: ['Digital Marketing', 'SEO', 'Content'],
    results: ['300% traffic increase', '5x ROI on ad spend'],
  },
  {
    id: 6,
    title: 'EduConnect Platform',
    category: 'Web App',
    description: 'An interactive learning platform connecting students with expert tutors.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'WebRTC', 'PostgreSQL'],
    results: ['50K+ active users', '95% satisfaction rate'],
  },
];

const CaseStudies = () => {
  const scrollRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCaseStudies = caseStudies.filter(
    (study) => activeCategory === 'All' || study.category === activeCategory
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-in">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground animate-fade-in-up">
              Our Work Speaks for Itself
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={scrollRef} className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <div
                key={study.id}
                className="reveal group bg-card rounded-2xl overflow-hidden shadow-soft card-hover border border-border/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="hero" size="sm" asChild>
                      <Link to={`/case-studies/${study.id}`}>
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold rounded-full">
                    {study.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground line-clamp-2">
                    {study.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Results */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-2">Key Results:</p>
                    <ul className="space-y-1">
                      {study.results.map((result) => (
                        <li key={result} className="text-sm text-accent flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No case studies found in this category.</p>
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => setActiveCategory('All')}
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="reveal">
              <p className="text-4xl md:text-5xl font-heading font-bold text-accent">150+</p>
              <p className="mt-2 text-muted-foreground">Projects Completed</p>
            </div>
            <div className="reveal">
              <p className="text-4xl md:text-5xl font-heading font-bold text-accent">98%</p>
              <p className="mt-2 text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="reveal">
              <p className="text-4xl md:text-5xl font-heading font-bold text-accent">45+</p>
              <p className="mt-2 text-muted-foreground">Industry Awards</p>
            </div>
            <div className="reveal">
              <p className="text-4xl md:text-5xl font-heading font-bold text-accent">12</p>
              <p className="mt-2 text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Trusted By
            </span>
            <h2 className="mt-3 text-2xl font-heading font-bold text-foreground">
              Industry Leaders Worldwide
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Netflix'].map((company) => (
              <div
                key={company}
                className="text-2xl font-heading font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have a Project in Mind?"
        description="Let's discuss how we can help bring your vision to life and create something extraordinary together."
      />
    </Layout>
  );
};

export default CaseStudies;
