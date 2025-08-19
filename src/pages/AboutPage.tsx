import React from 'react';
import { Heart, Users, Sparkles, Globe, Award, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Elena Rodriguez",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
      bio: "Former event planner turned tech entrepreneur with a passion for meaningful connections."
    },
    {
      name: "Marcus Chen",
      role: "Head of Product",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
      bio: "Product designer and community builder focused on creating intuitive experiences."
    },
    {
      name: "Sophia Kim",
      role: "Head of Community",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg",
      bio: "Community organizer dedicated to fostering authentic relationships through events."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Connection",
      description: "We believe in the power of genuine human connections and experiences that touch the soul."
    },
    {
      icon: Sparkles,
      title: "Mindful Curation",
      description: "Every event on our platform is carefully selected to ensure quality and meaningful engagement."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "We celebrate diversity and create spaces where everyone feels welcome and valued."
    },
    {
      icon: Target,
      title: "Purposeful Experiences",
      description: "We prioritize events that inspire personal growth, learning, and positive impact."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Community Members" },
    { number: "10,000+", label: "Events Hosted" },
    { number: "25", label: "Cities Worldwide" },
    { number: "95%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-glass rounded-full text-sm font-inter text-foreground/80 border border-white/20">
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </span>
          </div>
          
          <h1 className="font-syne font-bold text-5xl md:text-6xl text-foreground mb-8">
            Building Bridges Through{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Shared Experiences
            </span>
          </h1>
          
          <p className="font-inter text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Eventide was born from a simple belief: that our most meaningful moments happen when we come together 
            with intention, curiosity, and open hearts. We're more than an event platform—we're a movement toward 
            deeper human connection.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-syne font-bold text-4xl text-foreground mb-6">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="font-inter text-lg text-foreground/70 leading-relaxed">
                  In a world that often feels disconnected, we create spaces for authentic human connection. 
                  Every event on Eventide is chosen with care—experiences that inspire, educate, and bring 
                  people together around shared values and interests.
                </p>
                <p className="font-inter text-lg text-foreground/70 leading-relaxed">
                  We believe that the right experience at the right moment can change everything: spark a 
                  new friendship, inspire a career change, or simply remind us of what makes us human.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="People connecting"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl text-foreground mb-6">
              What We{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>
            <p className="font-inter text-xl text-foreground/70 max-w-2xl mx-auto">
              Our values guide every decision we make and every experience we curate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="font-syne font-semibold text-xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-inter text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl text-foreground mb-6">
              Growing{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="font-inter text-xl text-foreground/70 max-w-2xl mx-auto">
              Our community continues to grow, creating meaningful connections worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-syne font-bold text-4xl md:text-5xl text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl text-foreground mb-6">
              Meet Our{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="font-inter text-xl text-foreground/70 max-w-2xl mx-auto">
              Passionate individuals united by a shared vision of meaningful connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6 text-center hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-white/20"
                />
                <h3 className="font-syne font-semibold text-xl text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="font-inter text-cyan mb-4">
                  {member.role}
                </p>
                <p className="font-inter text-sm text-foreground/70 leading-relaxed">
                  {member.bio}
                </p>
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
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-background" />
                </div>
              </div>
              
              <h2 className="font-syne font-bold text-4xl text-foreground mb-6">
                Join Our{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Community
                </span>
              </h2>
              
              <p className="font-inter text-xl text-foreground/70 mb-8 leading-relaxed">
                Be part of a movement that values authentic connection, mindful experiences, 
                and the magic that happens when we come together with intention.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-primary text-background font-inter font-semibold rounded-full hover:scale-105 transition-all duration-300">
                  Start Exploring
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-full hover:bg-white/20 transition-all duration-300">
                  Create Your Event
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

export default AboutPage;