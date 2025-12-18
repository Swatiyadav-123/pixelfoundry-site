import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    quote:
      "Working with PixelFoundry transformed our digital presence completely. Their strategic approach and attention to detail exceeded our expectations.",
    author: 'Sarah Chen',
    role: 'CEO, TechFlow Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    quote:
      "The team delivered a stunning product that not only looks amazing but performs exceptionally. Our conversion rates increased by 150%.",
    author: 'Michael Rodriguez',
    role: 'Marketing Director, Innovate Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    quote:
      "PixelFoundry understood our vision from day one. They brought creativity and technical excellence that made our project a huge success.",
    author: 'Emily Watson',
    role: 'Founder, GreenPath Solutions',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Quote Icon */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-glow">
        <Quote className="w-6 h-6 text-accent-foreground" />
      </div>

      {/* Testimonial Content */}
      <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated overflow-hidden">
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                'transition-all duration-500 ease-out',
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 absolute top-0 left-0 right-0 translate-x-8'
              )}
            >
              <blockquote className="text-xl md:text-2xl text-foreground text-center leading-relaxed font-medium">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mt-8 flex flex-col items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-accent/20"
                />
                <div className="mt-4 text-center">
                  <p className="font-heading font-bold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'w-8 bg-accent'
                    : 'bg-border hover:bg-muted-foreground'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
