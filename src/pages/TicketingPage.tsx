import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CreditCard, Lock, User, Mail, Phone, MapPin, Calendar, Clock, Users, Shield, Check } from 'lucide-react';

const TicketingPage: React.FC = () => {
  const { id } = useParams();
  const [selectedTickets, setSelectedTickets] = useState({ general: 1, vip: 0 });
  const [currentStep, setCurrentStep] = useState(1);

  const event = {
    id: 1,
    title: "Mindful Mornings: Meditation & Movement",
    date: "March 15, 2025",
    time: "8:00 AM - 10:00 AM",
    location: "Golden Gate Park, San Francisco",
    image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg",
    organizer: "Mindful Spaces Collective"
  };

  const ticketTypes = [
    {
      id: 'general',
      name: 'General Admission',
      price: 0,
      description: 'Access to all activities including meditation, movement, and refreshments',
      available: 15,
      total: 50
    },
    {
      id: 'vip',
      name: 'VIP Experience',
      price: 25,
      description: 'Priority seating, personal consultation, exclusive materials, and gift bag',
      available: 8,
      total: 10
    }
  ];

  const subtotal = ticketTypes.reduce((sum, ticket) => 
    sum + (selectedTickets[ticket.id] * ticket.price), 0
  );
  const fees = subtotal * 0.05;
  const total = subtotal + fees;

  const updateTicketCount = (ticketId: string, count: number) => {
    setSelectedTickets(prev => ({
      ...prev,
      [ticketId]: Math.max(0, count)
    }));
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Header */}
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6 mb-8">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full md:w-32 h-32 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h1 className="font-syne font-bold text-2xl text-foreground mb-3">
                    {event.title}
                  </h1>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-foreground/70">
                      <Calendar className="w-4 h-4" />
                      <span className="font-inter text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-foreground/70">
                      <Clock className="w-4 h-4" />
                      <span className="font-inter text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-foreground/70">
                      <MapPin className="w-4 h-4" />
                      <span className="font-inter text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Select Tickets */}
            {currentStep === 1 && (
              <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6 mb-8">
                <h2 className="font-syne font-semibold text-2xl text-foreground mb-6">
                  Select Your Tickets
                </h2>
                
                <div className="space-y-6">
                  {ticketTypes.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="bg-background/30 rounded-xl border border-white/10 p-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-syne font-semibold text-lg text-foreground">
                              {ticket.name}
                            </h3>
                            <span className="font-inter font-bold text-xl text-foreground">
                              {ticket.price === 0 ? 'Free' : `$${ticket.price}`}
                            </span>
                          </div>
                          <p className="font-inter text-sm text-foreground/70 mb-3">
                            {ticket.description}
                          </p>
                          <div className="flex items-center space-x-2 text-foreground/60">
                            <Users className="w-4 h-4" />
                            <span className="font-inter text-sm">
                              {ticket.available} of {ticket.total} available
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => updateTicketCount(ticket.id, selectedTickets[ticket.id] - 1)}
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-foreground transition-all duration-300"
                          >
                            -
                          </button>
                          <span className="font-inter font-semibold text-foreground min-w-8 text-center">
                            {selectedTickets[ticket.id]}
                          </span>
                          <button
                            onClick={() => updateTicketCount(ticket.id, selectedTickets[ticket.id] + 1)}
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-foreground transition-all duration-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Registration Details */}
            {currentStep === 2 && (
              <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6 mb-8">
                <h2 className="font-syne font-semibold text-2xl text-foreground mb-6">
                  Registration Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                      <User className="w-4 h-4" />
                      <span>First Name</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                      <User className="w-4 h-4" />
                      <span>Last Name</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                      placeholder="Enter your last name"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                      <Phone className="w-4 h-4" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="mt-6">
                  <label className="block text-foreground font-inter font-medium mb-3">
                    Special Requirements or Dietary Restrictions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter resize-none"
                    placeholder="Please let us know about any special accommodations you may need..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && total > 0 && (
              <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6 mb-8">
                <h2 className="font-syne font-semibold text-2xl text-foreground mb-6">
                  Payment Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                      <CreditCard className="w-4 h-4" />
                      <span>Card Number</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-foreground font-inter font-medium mb-3">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                        placeholder="MM/YY"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-foreground font-inter font-medium mb-3">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-foreground font-inter font-medium mb-3">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                      placeholder="Enter name as it appears on card"
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-background/20 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-2 text-green-400 mb-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-inter font-medium">Secure Payment</span>
                  </div>
                  <p className="font-inter text-xs text-foreground/70">
                    Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-white/5 text-foreground/30 cursor-not-allowed'
                    : 'bg-white/10 backdrop-blur-glass border border-white/20 text-foreground hover:bg-white/20'
                }`}
              >
                Back
              </button>
              
              <button
                onClick={() => {
                  if (currentStep === (total > 0 ? 3 : 2)) {
                    // Complete registration
                    alert('Registration completed successfully!');
                  } else {
                    setCurrentStep(currentStep + 1);
                  }
                }}
                className="px-8 py-3 bg-gradient-primary text-background font-inter font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                {currentStep === (total > 0 ? 3 : 2) ? 'Complete Registration' : 'Continue'}
              </button>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6 sticky top-24">
              <h3 className="font-syne font-semibold text-xl text-foreground mb-6">
                Order Summary
              </h3>
              
              <div className="space-y-4 mb-6">
                {ticketTypes.map((ticket) => (
                  selectedTickets[ticket.id] > 0 && (
                    <div key={ticket.id} className="flex justify-between items-center py-3 border-b border-white/10">
                      <div>
                        <p className="font-inter font-medium text-foreground">
                          {ticket.name}
                        </p>
                        <p className="font-inter text-sm text-foreground/70">
                          Qty: {selectedTickets[ticket.id]}
                        </p>
                      </div>
                      <p className="font-inter font-semibold text-foreground">
                        ${(selectedTickets[ticket.id] * ticket.price).toFixed(2)}
                      </p>
                    </div>
                  )
                ))}
              </div>
              
              <div className="space-y-3 mb-6 pt-4 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="font-inter text-foreground/70">Subtotal</span>
                  <span className="font-inter text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                {fees > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-foreground/70">Processing Fee</span>
                    <span className="font-inter text-foreground">${fees.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-3 border-t border-white/20">
                  <span className="font-inter font-semibold text-foreground">Total</span>
                  <span className="font-inter font-bold text-xl text-foreground">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Security Features */}
              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <Lock className="w-4 h-4" />
                  <span className="font-inter text-sm">SSL Encrypted</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <Shield className="w-4 h-4" />
                  <span className="font-inter text-sm">Secure Payment</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <Check className="w-4 h-4" />
                  <span className="font-inter text-sm">Instant Confirmation</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-secondary rounded-xl border border-white/10 text-center">
                <p className="font-inter text-xs text-foreground/70">
                  Free cancellation up to 2 hours before the event starts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketingPage;