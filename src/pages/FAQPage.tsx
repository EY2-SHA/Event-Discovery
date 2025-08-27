import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is Eventide and how does it work?",
          answer: "Eventide is a curated event discovery platform that connects people with meaningful experiences. We carefully select events that prioritize authentic connection, personal growth, and community building. You can browse events, register securely, and connect with like-minded attendees."
        },
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple and free. Click the 'Sign Up' button, enter your email and create a password. You can also sign up during the event registration process. Once registered, you'll have access to personalized recommendations, saved events, and community features."
        },
        {
          question: "Is Eventide free to use?",
          answer: "Yes, browsing events and creating an account is completely free. Event pricing varies by organizer - some events are free while others have ticket costs. We only charge a small processing fee on paid events to maintain our platform and ensure quality experiences."
        }
      ]
    },
    {
      title: "Finding & Booking Events",
      faqs: [
        {
          question: "How do I find events that match my interests?",
          answer: "Use our smart search filters to find events by category, location, date, and price. Our AI-powered recommendation system learns from your preferences to suggest personalized events. You can also browse by trending events or follow specific organizers."
        },
        {
          question: "Can I cancel my registration?",
          answer: "Most events offer free cancellation up to a certain time before the event (usually 2-24 hours, depending on the organizer's policy). Check the specific event's cancellation policy on the event details page. Refunds are processed automatically to your original payment method."
        },
        {
          question: "What if an event is cancelled by the organizer?",
          answer: "If an organizer cancels an event, you'll receive an immediate email notification and full refund. We'll also suggest similar alternative events you might enjoy. Our team monitors event quality to minimize cancellations."
        },
        {
          question: "How do I know if an event is legitimate?",
          answer: "We thoroughly vet all event organizers and review event details before they go live. Look for the verification badge next to organizer names, read reviews from past attendees, and check the organizer's event history and follower count."
        }
      ]
    },
    {
      title: "Event Experience",
      faqs: [
        {
          question: "What should I expect at an Eventide event?",
          answer: "Eventide events prioritize meaningful connection and authentic experiences. Expect well-organized gatherings with like-minded people, opportunities for genuine interaction, and activities designed for personal growth or learning. Each event description includes specific details about what to bring and expect."
        },
        {
          question: "How do I connect with other attendees?",
          answer: "Many events have dedicated chat rooms where you can introduce yourself before attending. You can also view attendee profiles (if they've opted in) and send connection requests. Our goal is to help you build lasting relationships beyond just the event itself."
        },
        {
          question: "What if I'm shy or attending alone?",
          answer: "Many of our community members attend events solo! Eventide events are designed to be welcoming and inclusive. Look for 'first-time friendly' events, arrive early to ease into conversations, and remember that most attendees are open to meeting new people."
        }
      ]
    },
    {
      title: "For Event Organizers",
      faqs: [
        {
          question: "How do I create and list an event?",
          answer: "Click 'Create Event' in the navigation menu and follow our step-by-step process. You'll add event details, upload images, set pricing, and configure registration. Our team reviews all events to ensure they align with Eventide's quality standards before going live."
        },
        {
          question: "What are your fees for organizers?",
          answer: "We charge a small percentage fee on paid events to maintain our platform and provide marketing support. Free events have no fees. Detailed fee information is provided during the event creation process, and you'll always know exactly what you'll receive after fees."
        },
        {
          question: "How do you help promote my event?",
          answer: "Listed events appear in our search results, recommendations, and relevant category pages. High-quality events may be featured in our newsletter, social media, or homepage highlights. We also provide analytics and tools to help you understand your audience and improve future events."
        },
        {
          question: "What support do you provide for organizers?",
          answer: "We offer dedicated organizer support via email, event management tools, real-time analytics, and best practices guides. Our team is available to help with technical issues, promotional strategies, and ensuring your event's success."
        }
      ]
    },
    {
      title: "Account & Technical",
      faqs: [
        {
          question: "How do I update my profile and preferences?",
          answer: "Go to your profile page where you can update your personal information, location, interests, and notification preferences. This helps us provide better event recommendations and allows other community members to connect with you."
        },
        {
          question: "I'm having trouble with payments. What should I do?",
          answer: "First, check that your payment information is correct and your card isn't expired. If you're still having issues, contact our support team with your order details. We accept all major credit cards and use secure, encrypted payment processing."
        },
        {
          question: "How do I delete my account?",
          answer: "You can delete your account from your profile settings. Keep in mind that this will cancel any upcoming event registrations and remove your access to past event memories and connections. Contact support if you need assistance with account deletion."
        },
        {
          question: "Is my personal information safe?",
          answer: "Yes, we take privacy seriously. We use industry-standard encryption, never sell your personal data, and only share information necessary for event coordination with organizers. You can control your privacy settings and what information is visible to other users."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-light-secondary/20 dark:bg-dark-secondary/20 rounded-handcrafted text-sm font-syne text-light-foreground dark:text-dark-foreground border border-light-secondary/30 dark:border-dark-secondary/30 shadow-handcrafted dark:shadow-handcrafted-dark">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </span>
          </div>
          
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-light-foreground dark:text-dark-foreground mb-8">
            We're Here to{' '}
            <span className="text-light-secondary dark:text-dark-secondary">
              Help
            </span>
          </h1>
          
          <p className="font-syne text-base text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Find quick answers to common questions about Eventide. 
            Can't find what you're looking for? We're always here to help.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-foreground/50 dark:text-dark-foreground/50" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground placeholder-light-foreground/50 dark:placeholder-dark-foreground/50 focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-syne shadow-handcrafted dark:shadow-handcrafted-dark text-sm"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
              <h3 className="font-syne font-semibold text-xl text-foreground mb-2">
                No results found
              </h3>
              <p className="font-inter text-foreground/70">
                Try searching with different keywords or browse our categories below.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-light-card dark:bg-dark-card rounded-handcrafted border border-light-border dark:border-dark-border p-6 shadow-handcrafted dark:shadow-handcrafted-dark">
                  <h2 className="font-syne font-bold text-xl text-light-foreground dark:text-dark-foreground mb-4">
                    {category.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <div
                          key={faqIndex}
                          className="bg-light-muted/30 dark:bg-dark-muted/30 rounded-handcrafted border border-light-border/50 dark:border-dark-border/50 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-light-muted/50 dark:hover:bg-dark-muted/50 transition-all duration-300"
                          >
                            <span className="font-syne font-medium text-light-foreground dark:text-dark-foreground pr-4 text-sm">
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-4 h-4 text-light-foreground/70 dark:text-dark-foreground/70 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-light-foreground/70 dark:text-dark-foreground/70 flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-4 pb-3">
                              <p className="font-syne text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed text-sm">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-secondary rounded-3xl p-12 text-center border border-white/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-background" />
              </div>
              
              <h2 className="font-syne font-bold text-3xl text-foreground mb-4">
                Still Need{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Help?
                </span>
              </h2>
              
              <p className="font-inter text-foreground/70 mb-8 leading-relaxed">
                Our friendly support team is here to help you with any questions or issues. 
                We typically respond within 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-primary text-background font-inter font-semibold rounded-full hover:scale-105 transition-all duration-300"
                >
                  Contact Support
                </a>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-full hover:bg-white/20 transition-all duration-300">
                  Live Chat
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

export default FAQPage;