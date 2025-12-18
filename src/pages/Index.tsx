import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { TestimonialSlider } from '@/components/shared/TestimonialSlider';
import { CTASection } from '@/components/shared/CTASection';
import { FloatingIcon } from '@/components/shared/FloatingIcon';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  ArrowRight,
  Rocket,
  Palette,
  Code2,
  Smartphone,
  BarChart3,
  Shield,
  Zap,
  Users,
  Target,
  Sparkles,
  Globe,
  Layers,
} from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description: 'Optimized performance that loads in milliseconds, keeping users engaged.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Stunning visuals that capture attention and reflect your brand identity.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guaranteed.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive designs that look perfect on every device and screen size.',
  },
  {
    icon: BarChart3,
    title: 'Data Driven',
    description: 'Analytics and insights to help you make informed decisions.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Maintainable, scalable code built with modern best practices.',
  },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Years Experience' },
  { value: '40+', label: 'Team Members' },
];

const Index = () => {
  const scrollRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
        {/* Floating Icons */}
        <FloatingIcon
          icon={Zap}
          className="top-32 left-[10%] hidden lg:flex"
          delay="none"
        />
        <FloatingIcon
          icon={Globe}
          className="top-48 right-[15%] hidden lg:flex"
          delay="delayed"
        />
        <FloatingIcon
          icon={Layers}
          className="bottom-32 left-[20%] hidden lg:flex"
          delay="slow"
        />
        <FloatingIcon
          icon={Sparkles}
          className="bottom-48 right-[10%] hidden lg:flex"
          delay="delayed"
        />

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-in">
              🚀 We Build Digital Experiences
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight animate-fade-in-up">
              Transform Your Vision Into{' '}
              <span className="text-gradient bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We craft exceptional digital experiences that inspire, engage, and deliver measurable results. Let's build something extraordinary together.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-heading font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

  {/* Features Section */}
  <section ref={scrollRef} className="py-6 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="reveal">
            <SectionHeading
              label="What We Offer"
              title="Everything You Need to Succeed Online"
              description="From concept to launch, we provide comprehensive digital solutions that drive growth and deliver exceptional user experiences."
            />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {features.map((feature) => (
              <ServiceCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

  {/* About Preview Section */}
  {/* <section className="py-4  bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="reveal-left">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
                We're a Team of Digital Craftsmen
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                With over a decade of experience, we've helped businesses of all sizes transform their digital presence. Our passion lies in creating solutions that not only look stunning but drive real business results.
              </p>
              
              <div className="mt-6 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">40+</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">150+</p>
                    <p className="text-sm text-muted-foreground">Projects Done</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8" variant="default" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="reveal-right relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-elevated w-full object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elevated">
                  <p className="text-4xl font-heading font-bold text-accent">12+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

  {/* Testimonials Section */}
  <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="reveal">
            <SectionHeading
              label="Testimonials"
              title="What Our Clients Say"
              description="Don't just take our word for it. Here's what our clients have to say about working with us."
            />
          </div>

          {/* <div className="mt-8 reveal">
            <TestimonialSlider />
          </div> */}
        </div>
      </section>
          {/* Partners & Process (fills gap between Testimonials and Case Studies) */}
          <section className="py-8 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider">Trusted by</p>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">Forward-thinking companies and startups across industries</p>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
                {['/placeholder.svg','/placeholder.svg','/placeholder.svg','/placeholder.svg'].map((src, i) => (
                  <div key={i} className="w-24 h-10 flex items-center justify-center p-1 bg-card rounded-md shadow-sm box-animate">
                    <img src={src} alt={`partner-${i}`} className="max-h-6 object-contain opacity-80" />
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[{
                    title: 'Discover',
                    desc: 'We learn your goals, constraints, and customers to shape the right plan.',
                    Icon: Target
                  },{
                    title: 'Design & Build',
                    desc: 'Design systems and build performant, accessible experiences.',
                    Icon: Palette
                  },{
                    title: 'Measure & Iterate',
                    desc: 'We ship fast, measure impact, and iterate to improve outcomes.',
                    Icon: BarChart3
                  }].map((step) => (
                    <article key={step.title} className="rounded-2xl p-6 bg-card shadow-elevated card-hover box-animate">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <step.Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="font-heading font-bold">{step.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies Preview */}
          <section className="py-6 bg-muted/50">
            <div className="container mx-auto px-4 lg:px-8 relative z-10 mt-0">
              <SectionHeading
                label="Case Studies"
                title="Recent Projects"
                description="A selection of recent work that demonstrates our approach, craftsmanship, and measurable results."
              />

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'E‑Commerce Rebuild',
                    excerpt: 'Reimagined a complex storefront to lift conversions and performance.',
                    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=60',
                    tag: 'E‑Commerce',
                    time: '8 mo',
                  },
                  {
                    title: 'SaaS Dashboard',
                    excerpt: 'Built a fast, data-driven dashboard for real-time insights and decision making.',
                    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=60',
                    tag: 'SaaS',
                    time: '4 mo',
                  },
                  {
                    title: 'Brand & Website',
                    excerpt: 'Designed an expressive brand system and high-converting marketing site.',
                    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=60',
                    tag: 'Branding',
                    time: '3 mo',
                  },
                ].map((caseItem) => (
                  <article key={caseItem.title} className="rounded-2xl overflow-hidden bg-card shadow-elevated card-hover box-animate">
                    <img
                      src={caseItem.img}
                      alt={caseItem.title}
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-bold">{caseItem.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{caseItem.excerpt}</p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="px-2 py-1 bg-accent/10 rounded-full">{caseItem.tag || 'Product'}</span>
                        <span>•</span>
                        <span>{caseItem.time || '6 mo'}</span>
                      </div>
                      <div className="mt-4">
                        <Button variant="ghost" asChild size="sm">
                          <Link to="/case-studies">
                            Read Case Study
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="link" asChild>
                  <Link to="/case-studies">View all case studies</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Blog Preview */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">From the Blog</h3>
                  <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold">Latest Insights</h2>
                  <p className="mt-3 text-sm text-muted-foreground max-w-xl">Short reads on design, performance, and product strategy — handpicked from our team.</p>
                </div>
                <div className="hidden sm:block">
                  <Button variant="ghost" asChild>
                    <Link to="/blog">View all posts</Link>
                  </Button>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{
                  title: 'Designing for Conversion: A Practical Guide',
                  excerpt: 'Improve conversion rates with small design changes that make a big impact.',
                  img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=60',
                  slug: 'designing-for-conversion'
                }, {
                  title: 'Speed Optimization Checklist for Modern Sites',
                  excerpt: 'A concise checklist to make your site load faster and feel snappier.',
                  img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=60',
                  slug: 'speed-optimization-checklist'
                }, {
                  title: 'How We Built a Data-Driven Dashboard',
                  excerpt: 'Lessons learned when building dashboards that people actually use.',
                  img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=60',
                  slug: 'data-driven-dashboard'
                }].map((post) => (
                  <article key={post.slug} className="rounded-2xl overflow-hidden bg-card shadow-elevated card-hover box-animate">
                    <img src={post.img} alt={post.title} className="w-full h-36 object-cover" />
                    <div className="p-6">
                      <p className="text-xs text-muted-foreground">Dec 12, 2025 • 5 min read</p>
                      <h4 className="mt-2 font-heading font-bold">{post.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                      <div className="mt-4">
                        <Button variant="ghost" asChild size="sm">
                          <Link to={`/blog/${post.slug}`}>
                            Read
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter / Subscribe */}
          <section className="py-16 bg-gradient-to-r from-accent/5 to-secondary/5">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="rounded-2xl p-8 md:p-10 bg-card shadow-elevated flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold">Stay in the Loop</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-lg">
                    Get monthly insights, product updates, and case studies delivered to your inbox.
                  </p>
                </div>

                <form className="w-full md:w-auto flex gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    aria-label="Email address"
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-lg border bg-transparent w-full md:w-80 placeholder:text-muted-foreground"
                  />
                  <Button type="submit" variant="default" size="lg">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <CTASection />
    </Layout>
  );
};

export default Index;
