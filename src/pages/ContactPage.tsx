import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HeadphonesIcon, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message anytime",
      contact: "hello@eventide.com",
      action: "mailto:hello@eventide.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available 9 AM - 6 PM PST",
      action: "#"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      contact: "123 Innovation Street, San Francisco, CA 94105",
      action: "#"
    }
  ];

  const supportTopics = [
    {
      icon: Users,
      title: "Event Organizers",
      description: "Get help creating and managing your events",
      email: "organizers@eventide.com"
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "General questions and technical support",
      email: "support@eventide.com"
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Collaborate with us or join our partner network",
      email: "partnerships@eventide.com"
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-glass rounded-full text-sm font-inter text-foreground/80 border border-white/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </span>
          </div>
          
          <h1 className="font-syne font-bold text-5xl md:text-6xl text-foreground mb-8">
            We're Here to{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Help
            </span>
          </h1>
          
          <p className="font-inter text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Have a question, need support, or want to share feedback? 
            We'd love to hear from you. Our team is here to help make your Eventide experience exceptional.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="font-syne font-semibold text-lg text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="font-inter text-sm text-foreground/70 mb-3">
                  {method.description}
                </p>
                <p className="font-inter text-sm text-cyan">
                  {method.contact}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-glass rounded-3xl border border-white/20 p-8">
            <h2 className="font-syne font-bold text-3xl text-foreground mb-6">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-inter font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block font-inter font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-inter font-medium text-foreground mb-2">
                  Inquiry Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="organizer">Event Organizer Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div>
                <label className="block font-inter font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block font-inter font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan transition-all duration-300 font-inter resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-primary text-background font-inter font-semibold rounded-xl hover:scale-105 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Support Topics & Info */}
          <div className="space-y-8">
            {/* Support Topics */}
            <div className="bg-white/10 backdrop-blur-glass rounded-3xl border border-white/20 p-8">
              <h2 className="font-syne font-bold text-2xl text-foreground mb-6">
                Specialized Support
              </h2>
              
              <div className="space-y-6">
                {supportTopics.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-background/20 rounded-xl border border-white/10">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <topic.icon className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-foreground mb-2">
                        {topic.title}
                      </h3>
                      <p className="font-inter text-sm text-foreground/70 mb-2">
                        {topic.description}
                      </p>
                      <a
                        href={`mailto:${topic.email}`}
                        className="font-inter text-sm text-cyan hover:underline"
                      >
                        {topic.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours & Response Times */}
            <div className="bg-white/10 backdrop-blur-glass rounded-3xl border border-white/20 p-8">
              <h2 className="font-syne font-bold text-2xl text-foreground mb-6">
                Response Times
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-cyan" />
                  <div>
                    <p className="font-inter font-medium text-foreground">Live Chat</p>
                    <p className="font-inter text-sm text-foreground/70">Immediate response during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan" />
                  <div>
                    <p className="font-inter font-medium text-foreground">Email Support</p>
                    <p className="font-inter text-sm text-foreground/70">Within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan" />
                  <div>
                    <p className="font-inter font-medium text-foreground">Phone Support</p>
                    <p className="font-inter text-sm text-foreground/70">Monday - Friday, 9 AM - 6 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-secondary rounded-3xl border border-white/20 p-8 text-center">
              <h3 className="font-syne font-bold text-xl text-foreground mb-4">
                Quick Answers
              </h3>
              <p className="font-inter text-foreground/70 mb-6">
                Find instant answers to common questions in our FAQ section.
              </p>
              <a
                href="/faq"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-primary text-background font-inter font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                <span>Visit FAQ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;