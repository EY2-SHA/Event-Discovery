import React from 'react';
import { Search, Calendar, Users, Heart, ArrowRight, CheckCircle, Star } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      description: "Browse curated events or let our AI recommend perfect matches based on your interests and location.",
      features: ["Smart search filters", "Personalized recommendations", "Category browsing"]
    },
    {
      number: "02",
      icon: Calendar,
      title: "Register",
      description: "Secure your spot with our seamless registration process. Digital tickets are delivered instantly.",
      features: ["One-click registration", "Secure payments", "Instant confirmation"]
    },
    {
      number: "03",
      icon: Users,
      title: "Connect",
      description: "Meet like-minded individuals and engage with the community before, during, and after events.",
      features: ["Event chat rooms", "Attendee profiles", "Social features"]
    },
    {
      number: "04",
      icon: Heart,
      title: "Experience",
      description: "Enjoy meaningful experiences and build lasting connections that extend beyond the event itself.",
      features: ["Quality experiences", "Lasting connections", "Community building"]
    }
  ];

  const organizerSteps = [
    {
      title: "Create Your Event",
      description: "Use our intuitive event creation tools to bring your vision to life.",
      icon: Calendar
    },
    {
      title: "Reach Your Audience",
      description: "Leverage our platform's reach and marketing tools to connect with the right attendees.",
      icon: Users
    },
    {
      title: "Manage Seamlessly",
      description: "Track registrations, manage attendees, and access real-time analytics.",
      icon: Star
    }
  ];

  const benefits = [
    {
      title: "Curated Quality",
      description: "Every event is carefully reviewed to ensure meaningful experiences.",
      icon: CheckCircle
    },
    {
      title: "Secure Platform",
      description: "Your data and payments are protected with industry-standard security.",
      icon: CheckCircle
    },
    {
      title: "Community-Driven",
      description: "Join a community that values authentic connections and personal growth.",
      icon: CheckCircle
    },
    {
      title: "Global Reach",
      description: "Discover events worldwide or find intimate local gatherings in your neighborhood.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-glass rounded-full text-sm font-inter text-foreground/80 border border-white/20">
              <Star className="w-4 h-4 mr-2" />
              How It Works
            </span>
          </div>
          
          <h1 className="font-syne font-bold text-5xl md:text-6xl text-foreground mb-8">
            Your Journey to{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Meaningful Connection
            </span>
          </h1>
          
          <p className="font-inter text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            From discovery to connection, we've designed every step to help you find and create 
            experiences that matter. Here's how Eventide brings people together.
          </p>
        </div>
      </section>

      {/* How It Works - Attendees */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl text-foreground mb-6">
              For Event{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Seekers
              </span>
            </h2>
            <p className="font-inter text-xl text-foreground/70 max-w-2xl mx-auto">
              Four simple steps to transform how you discover and experience events.
            </p>
          </div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white/10 backdrop-blur-glass rounded-3xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-6xl font-syne font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-background" />
                      </div>
                    </div>
                    
                    <h3 className="font-syne font-bold text-2xl text-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="font-inter text-lg text-foreground/70 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                          <span className="font-inter text-foreground/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="aspect-square bg-gradient-secondary rounded-3xl border border-white/20 flex items-center justify-center relative overflow-hidden">
                    <step.icon className="w-32 h-32 text-foreground/20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Organizers */}
      <section className="py-20 bg-gradient-to-br from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl text-foreground mb-6">
              For Event{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Organizers
              </span>
            </h2>
            <p className="font-inter text-xl text-foreground/70 max-w-2xl mx-auto">
              Create, promote, and manage events that bring your community together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizerSteps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-background" />
                  </div>
                  
                  <h3 className="font-syne font-semibold text-xl text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="font-inter text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < organizerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-primary text-background font-inter font-semibold rounded-full hover:scale-105 transition-all duration-300">
              Start Creating Events
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl text-foreground mb-6">
              Why Choose{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Eventide?
              </span>
            </h2>
            <p className="font-inter text-xl text-foreground/70 max-w-2xl mx-auto">
              We're more than just an event platform—we're your gateway to meaningful experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-syne font-semibold text-lg text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="font-inter text-foreground/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-secondary rounded-3xl p-12 text-center border border-white/20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-syne font-bold text-4xl text-foreground mb-6">
                Ready to{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              
              <p className="font-inter text-xl text-foreground/70 mb-8 leading-relaxed">
                Join thousands of people who are already discovering and creating 
                meaningful experiences on Eventide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-primary text-background font-inter font-semibold rounded-full hover:scale-105 transition-all duration-300">
                  Explore Events
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-full hover:bg-white/20 transition-all duration-300">
                  Create an Event
                </button>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;