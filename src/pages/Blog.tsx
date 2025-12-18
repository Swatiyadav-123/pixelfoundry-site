import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';

const categories = ['All', 'Design', 'Development', 'Strategy', 'Marketing', 'Technology'];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Design: Trends to Watch in 2024',
    excerpt: 'Explore the cutting-edge design trends that are shaping the digital landscape and how to implement them in your projects.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    category: 'Design',
    author: 'Sarah Chen',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Building Scalable Applications with Modern Architecture',
    excerpt: 'Learn how to architect applications that can grow with your business needs while maintaining performance and reliability.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    category: 'Development',
    author: 'Michael Ross',
    date: '2024-01-12',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Digital Transformation: A Strategic Roadmap',
    excerpt: 'A comprehensive guide to navigating digital transformation and driving meaningful change in your organization.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    category: 'Strategy',
    author: 'Emily Watson',
    date: '2024-01-10',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'The Power of AI in Marketing Automation',
    excerpt: 'Discover how artificial intelligence is revolutionizing marketing strategies and how to leverage it for your business.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    category: 'Marketing',
    author: 'Alex Morgan',
    date: '2024-01-08',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Responsive Design Best Practices for 2024',
    excerpt: 'Master the art of creating websites that look and function beautifully across all devices and screen sizes.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    category: 'Design',
    author: 'Sarah Chen',
    date: '2024-01-05',
    readTime: '4 min read',
  },
  {
    id: 6,
    title: 'Emerging Technologies Shaping the Future',
    excerpt: 'From blockchain to quantum computing, explore the technologies that will define the next decade of innovation.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    category: 'Technology',
    author: 'Michael Ross',
    date: '2024-01-03',
    readTime: '9 min read',
  },
];

const Blog = () => {
  const scrollRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-in">
              Blog & Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground animate-fade-in-up">
              Insights & Ideas
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Stay updated with the latest trends, tips, and insights from our team of digital experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section ref={scrollRef} className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="reveal flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover border border-border/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="mt-3 text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-accent font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Blog;

