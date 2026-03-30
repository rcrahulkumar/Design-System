import React from 'react';
import { Button, Heading, Card } from '@/src/components/ui';
import { ArrowRight, Github, BookOpen, Palette, Square, Layout, Zap, Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="space-y-8 pt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle text-primary text-[10px] font-bold uppercase tracking-widest">
          JIVI Design System v1.0.0
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-text-primary leading-[0.9]">
          Design for <br /> <span className="text-primary">Human Health</span>.
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
          A high-performance design system built for the next generation of healthcare products. 
          Speed, consistency, and accessibility at its core.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="/tokens/colors">
            <Button size="lg" className="gap-2 px-8">
              Explore Tokens <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/components/button">
            <Button variant="secondary" size="lg" className="gap-2 px-8">
              <BookOpen className="w-5 h-5" /> Documentation
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Design Tokens',
            description: 'The atomic building blocks: colors, typography, and spacing that define our visual identity.',
            icon: Palette,
            link: '/tokens/colors'
          },
          {
            title: 'Components',
            description: 'A library of reusable UI elements built with accessibility and performance in mind.',
            icon: Square,
            link: '/components/button'
          },
          {
            title: 'Patterns',
            description: 'Common layout patterns and user flows to accelerate your product development.',
            icon: Layout,
            link: '/patterns'
          }
        ].map((feature, i) => (
          <Link key={i} to={feature.link} className="group">
            <div className="p-8 rounded-[32px] border border-border bg-white shadow-sm hover:shadow-xl transition-all group-hover:-translate-y-2 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary-subtle transition-colors">
                <feature.icon className="w-7 h-7 text-text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* System Principles */}
      <section className="space-y-12">
        <Heading 
          align="center"
          title="System Principles" 
          description="The core philosophies that guide every design decision in JIVI."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 border-none bg-gray-50">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-bold mb-2">Performance First</h4>
            <p className="text-sm text-text-secondary leading-relaxed">Optimized for speed and responsiveness across all devices and network conditions.</p>
          </Card>
          <Card className="p-8 border-none bg-gray-50">
            <Shield className="w-8 h-8 text-secondary mb-4" />
            <h4 className="text-lg font-bold mb-2">Trust & Security</h4>
            <p className="text-sm text-text-secondary leading-relaxed">Built-in patterns for data privacy, permissions, and secure user interactions.</p>
          </Card>
          <Card className="p-8 border-none bg-gray-50">
            <Smartphone className="w-8 h-8 text-green-500 mb-4" />
            <h4 className="text-lg font-bold mb-2">Mobile Native</h4>
            <p className="text-sm text-text-secondary leading-relaxed">Designed with a mobile-first mindset, ensuring perfect thumb-reach and touch targets.</p>
          </Card>
        </div>
      </section>

      {/* Documentation Footer */}
      <section className="p-12 rounded-[40px] bg-gray-900 text-white text-center space-y-8">
        <h2 className="text-4xl font-bold tracking-tight">Ready to build with JIVI?</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Start exploring our component library and build your next healthcare product with confidence.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/components/button">
            <Button size="lg" className="px-10">Get Started</Button>
          </Link>
          <Button variant="tertiary" size="lg" className="text-white hover:bg-white/10">
            <Github className="w-5 h-5 mr-2" /> View on GitHub
          </Button>
        </div>
      </section>
    </div>
  );
}
