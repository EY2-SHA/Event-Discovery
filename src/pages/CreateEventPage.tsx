import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, Users, Image, Clock, Type, FileText } from 'lucide-react';

const CreateEventPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const categories = [
    'Music & Concerts', 'Art & Culture', 'Technology', 'Health & Wellness',
    'Food & Drink', 'Sports & Fitness', 'Business', 'Education', 'Other'
  ];

  const stepTitles = [
    'Event Basics',
    'Details & Description',
    'Ticketing & Pricing',
    'Review & Publish'
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-foreground mb-6">
            Create Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Event
            </span>
          </h1>
          <p className="font-inter text-xl text-foreground/70 max-w-2xl mx-auto">
            Bring your vision to life and connect with your community through meaningful experiences.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-inter font-semibold text-sm transition-all duration-300 ${
                    i + 1 <= currentStep
                      ? 'bg-gradient-primary text-background'
                      : 'bg-white/10 text-foreground/50'
                  }`}
                >
                  {i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`w-16 h-1 mx-4 rounded-full transition-all duration-300 ${
                      i + 1 < currentStep ? 'bg-gradient-primary' : 'bg-white/20'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <span className="font-inter text-foreground/70">
              Step {currentStep} of {totalSteps}: {stepTitles[currentStep - 1]}
            </span>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white/10 backdrop-blur-glass rounded-3xl border border-white/20 p-8 mb-8">
          {/* Step 1: Event Basics */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div>
                <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                  <Type className="w-5 h-5" />
                  <span>Event Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Give your event a compelling title..."
                  className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan transition-all duration-300 font-inter text-lg"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                  <FileText className="w-5 h-5" />
                  <span>Category</span>
                </label>
                <select className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter">
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                    <Calendar className="w-5 h-5" />
                    <span>Start Date & Time</span>
                  </label>
                  <div className="space-y-3">
                    <input
                      type="date"
                      className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                    />
                    <input
                      type="time"
                      className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                    <Clock className="w-5 h-5" />
                    <span>End Date & Time</span>
                  </label>
                  <div className="space-y-3">
                    <input
                      type="date"
                      className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                    />
                    <input
                      type="time"
                      className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                  <MapPin className="w-5 h-5" />
                  <span>Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter venue name or address..."
                  className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                />
                <div className="mt-3">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="font-inter text-sm text-foreground/70">This is an online event</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Details & Description */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                  <Image className="w-5 h-5" />
                  <span>Event Image</span>
                </label>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-white/40 transition-all duration-300">
                  <Image className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
                  <p className="font-inter text-foreground/70 mb-2">Upload your event image</p>
                  <p className="font-inter text-sm text-foreground/50">JPG, PNG or GIF (max 10MB)</p>
                  <button className="mt-4 px-6 py-2 bg-gradient-primary text-background font-inter font-medium rounded-lg hover:scale-105 transition-all duration-300">
                    Choose File
                  </button>
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                  <FileText className="w-5 h-5" />
                  <span>Event Description</span>
                </label>
                <textarea
                  rows={8}
                  placeholder="Tell people what your event is about. What will they experience? What should they expect? What makes it special?"
                  className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan transition-all duration-300 font-inter resize-none"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-foreground font-inter font-medium mb-3">
                  <Users className="w-5 h-5" />
                  <span>Event Capacity</span>
                </label>
                <input
                  type="number"
                  placeholder="Maximum number of attendees"
                  className="w-full p-4 bg-background/50 border border-white/20 rounded-xl text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                />
              </div>
            </div>
          )}

          {/* Step 3: Ticketing & Pricing */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div>
                <h3 className="font-syne font-semibold text-xl text-foreground mb-4">
                  Ticket Types
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-background/30 rounded-xl border border-white/10 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-inter font-semibold text-foreground">General Admission</h4>
                      <button className="text-red-400 hover:text-red-300 font-inter text-sm">
                        Remove
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-inter text-sm text-foreground/70 mb-2">
                          Price
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/50" />
                          <input
                            type="number"
                            placeholder="0.00"
                            className="w-full pl-10 pr-4 py-3 bg-background/50 border border-white/20 rounded-lg text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block font-inter text-sm text-foreground/70 mb-2">
                          Quantity Available
                        </label>
                        <input
                          type="number"
                          placeholder="100"
                          className="w-full p-3 bg-background/50 border border-white/20 rounded-lg text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-inter text-sm text-foreground/70 mb-2">
                          Sales End
                        </label>
                        <input
                          type="datetime-local"
                          className="w-full p-3 bg-background/50 border border-white/20 rounded-lg text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-xl hover:bg-white/20 transition-all duration-300 mt-4">
                  + Add Another Ticket Type
                </button>
              </div>

              <div>
                <h3 className="font-syne font-semibold text-xl text-foreground mb-4">
                  Registration Settings
                </h3>
                
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span className="font-inter text-foreground/70">Require approval for registrations</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span className="font-inter text-foreground/70">Allow waitlist when sold out</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded" />
                    <span className="font-inter text-foreground/70">Send confirmation emails</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Publish */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="font-syne font-semibold text-2xl text-foreground mb-4">
                  Ready to Publish?
                </h3>
                <p className="font-inter text-foreground/70 max-w-2xl mx-auto">
                  Review your event details below. Once published, your event will be visible to the community and available for registration.
                </p>
              </div>

              {/* Event Preview */}
              <div className="bg-background/30 rounded-2xl border border-white/10 p-6">
                <div className="aspect-video bg-white/5 rounded-xl mb-6 flex items-center justify-center">
                  <Image className="w-16 h-16 text-foreground/30" />
                </div>
                
                <h3 className="font-syne font-semibold text-2xl text-foreground mb-4">
                  Your Event Title Here
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3 text-foreground/70">
                    <Calendar className="w-5 h-5" />
                    <span className="font-inter">March 15, 2025 at 8:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-3 text-foreground/70">
                    <MapPin className="w-5 h-5" />
                    <span className="font-inter">Your Location</span>
                  </div>
                  <div className="flex items-center space-x-3 text-foreground/70">
                    <DollarSign className="w-5 h-5" />
                    <span className="font-inter">Free</span>
                  </div>
                  <div className="flex items-center space-x-3 text-foreground/70">
                    <Users className="w-5 h-5" />
                    <span className="font-inter">50 spots available</span>
                  </div>
                </div>
                
                <p className="font-inter text-foreground/70 leading-relaxed">
                  Your event description will appear here, telling potential attendees what to expect and why they should join your event.
                </p>
              </div>

              <div className="bg-gradient-secondary rounded-2xl border border-white/20 p-6 text-center">
                <h4 className="font-syne font-semibold text-lg text-foreground mb-2">
                  Publishing Checklist
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-inter text-sm">Event details completed</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-inter text-sm">Ticketing configured</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-yellow-400">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="font-inter text-sm">Event image recommended</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pb-12">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className={`px-8 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
              currentStep === 1
                ? 'bg-white/5 text-foreground/30 cursor-not-allowed'
                : 'bg-white/10 backdrop-blur-glass border border-white/20 text-foreground hover:bg-white/20'
            }`}
          >
            Previous
          </button>

          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-full hover:bg-white/20 transition-all duration-300">
              Save Draft
            </button>
            
            {currentStep === totalSteps ? (
              <button className="px-8 py-3 bg-gradient-primary text-background font-inter font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Publish Event
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                className="px-8 py-3 bg-gradient-primary text-background font-inter font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;