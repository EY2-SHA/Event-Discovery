import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, Users, Image, Clock, Type, FileText, CheckCircle } from 'lucide-react';

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
    <div className="pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 bg-light-card dark:bg-dark-card rounded-handcrafted text-lg font-sans text-light-foreground/80 dark:text-dark-foreground/80 border border-light-border dark:border-dark-border shadow-handcrafted">
              <Type className="w-5 h-5 mr-3" />
              Create Event
            </span>
          </div>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-light-foreground dark:text-dark-foreground mb-6">
            Create Your{' '}
            <span className="text-light-secondary dark:text-dark-secondary">
              Event
            </span>
          </h1>
          <p className="font-syne text-base text-light-foreground/70 dark:text-dark-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Bring your vision to life and connect with your community through meaningful experiences.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 bg-light-card dark:bg-dark-card rounded-handcrafted p-8 border border-light-border dark:border-dark-border shadow-handcrafted">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className="flex items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-handcrafted flex items-center justify-center font-sans font-semibold text-base transition-all duration-300 shadow-sketch ${
                    i + 1 <= currentStep
                      ? 'bg-light-secondary dark:bg-dark-secondary text-white shadow-handcrafted dark:shadow-handcrafted-dark'
                      : 'bg-light-muted dark:bg-dark-muted text-light-foreground/50 dark:text-dark-foreground/50 border border-light-border dark:border-dark-border shadow-handcrafted dark:shadow-handcrafted-dark'
                  }`}
                >
                  {i + 1 <= currentStep ? <CheckCircle className="w-6 h-6" /> : i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div className="flex-1 mx-4">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                      i + 1 < currentStep ? 'bg-light-secondary dark:bg-dark-secondary shadow-handcrafted dark:shadow-handcrafted-dark' : 'bg-light-border dark:bg-dark-border'
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <span className="font-syne text-base text-light-foreground/70 dark:text-dark-foreground/70 font-medium">
              Step {currentStep} of {totalSteps}: {stepTitles[currentStep - 1]}
            </span>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted p-12 mb-12 shadow-handcrafted">
          {/* Step 1: Event Basics */}
          {currentStep === 1 && (
            <div className="space-y-10">
              <div>
                <label className="flex items-center space-x-3 text-light-foreground dark:text-dark-foreground font-sans font-medium mb-4 text-lg">
                  <Type className="w-6 h-6" />
                  <span>Event Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Give your event a compelling title..."
                  className="w-full p-5 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground placeholder-light-foreground/50 dark:placeholder-dark-foreground/50 focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans text-lg shadow-sketch"
                />
              </div>

              <div>
                <label className="flex items-center space-x-3 text-light-foreground dark:text-dark-foreground font-sans font-medium mb-4 text-lg">
                  <FileText className="w-6 h-6" />
                  <span>Category</span>
                </label>
                <select className="w-full p-5 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans shadow-sketch">
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="flex items-center space-x-3 text-light-foreground dark:text-dark-foreground font-sans font-medium mb-4 text-lg">
                    <Calendar className="w-6 h-6" />
                    <span>Start Date & Time</span>
                  </label>
                  <div className="space-y-4">
                    <input
                      type="date"
                      className="w-full p-5 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans shadow-sketch"
                    />
                    <input
                      type="time"
                      className="w-full p-5 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans shadow-sketch"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center space-x-3 text-light-foreground dark:text-dark-foreground font-sans font-medium mb-4 text-lg">
                    <Clock className="w-6 h-6" />
                    <span>End Date & Time</span>
                  </label>
                  <div className="space-y-4">
                    <input
                      type="date"
                      className="w-full p-5 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans shadow-sketch"
                    />
                    <input
                      type="time"
                      className="w-full p-5 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans shadow-sketch"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-3 text-light-foreground dark:text-dark-foreground font-sans font-medium mb-4 text-lg">
                  <MapPin className="w-6 h-6" />
                  <span>Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter venue name or address..."
                  className="w-full p-5 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground placeholder-light-foreground/50 dark:placeholder-dark-foreground/50 focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans shadow-sketch"
                />
                <div className="mt-4">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded-sketch w-5 h-5" />
                    <span className="font-sans text-base text-light-foreground/70 dark:text-dark-foreground/70">This is an online event</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Details & Description */}
          {currentStep === 2 && (
            <div className="space-y-10">
              <div>
                <label className="flex items-center space-x-3 text-light-foreground dark:text-dark-foreground font-sans font-medium mb-4 text-lg">
                  <Image className="w-6 h-6" />
                  <span>Event Image</span>
                </label>
                <div className="border-2 border-dashed border-light-border dark:border-dark-border rounded-handcrafted p-12 text-center hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300">
                  <Image className="w-16 h-16 text-light-foreground/30 dark:text-dark-foreground/30 mx-auto mb-6" />
                  <p className="font-sans text-lg text-light-foreground/70 dark:text-dark-foreground/70 mb-3">Upload your event image</p>
                  <p className="font-sans text-base text-light-foreground/50 dark:text-dark-foreground/50 mb-6">JPG, PNG or GIF (max 10MB)</p>
                  <button className="px-8 py-3 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-medium hover:opacity-90 transition-all duration-300 rounded-handcrafted shadow-handcrafted">
                    Choose File
                  </button>
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-3 text-light-foreground dark:text-dark-foreground font-sans font-medium mb-4 text-lg">
                  <FileText className="w-6 h-6" />
                  <span>Event Description</span>
                </label>
                <textarea
                  rows={10}
                  placeholder="Tell people what your event is about. What will they experience? What should they expect? What makes it special?"
                  className="w-full p-5 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground placeholder-light-foreground/50 dark:placeholder-dark-foreground/50 focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans resize-none shadow-sketch"
                />
              </div>

              <div>
                <label className="flex items-center space-x-3 text-light-foreground dark:text-dark-foreground font-sans font-medium mb-4 text-lg">
                  <Users className="w-6 h-6" />
                  <span>Event Capacity</span>
                </label>
                <input
                  type="number"
                  placeholder="Maximum number of attendees"
                  className="w-full p-5 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground placeholder-light-foreground/50 dark:placeholder-dark-foreground/50 focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans shadow-sketch"
                />
              </div>
            </div>
          )}

          {/* Step 3: Ticketing & Pricing */}
          {currentStep === 3 && (
            <div className="space-y-10">
              <div>
                <h3 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground mb-6">
                  Ticket Types
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-light-muted dark:bg-dark-muted border border-light-border dark:border-dark-border rounded-handcrafted p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-sans font-semibold text-lg text-light-foreground dark:text-dark-foreground">General Admission</h4>
                      <button className="text-red-400 hover:text-red-300 font-sans text-base">
                        Remove
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block font-sans text-base text-light-foreground/70 dark:text-dark-foreground/70 mb-3">
                          Price
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-foreground/50 dark:text-dark-foreground/50" />
                          <input
                            type="number"
                            placeholder="0.00"
                            className="w-full pl-12 pr-5 py-4 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans shadow-sketch"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block font-sans text-base text-light-foreground/70 dark:text-dark-foreground/70 mb-3">
                          Quantity Available
                        </label>
                        <input
                          type="number"
                          placeholder="100"
                          className="w-full p-4 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans shadow-sketch"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-sans text-base text-light-foreground/70 dark:text-dark-foreground/70 mb-3">
                          Sales End
                        </label>
                        <input
                          type="datetime-local"
                          className="w-full p-4 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary focus:ring-2 focus:ring-light-secondary/20 dark:focus:ring-dark-secondary/20 transition-all duration-300 font-sans shadow-sketch"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 shadow-handcrafted text-lg mt-6">
                  + Add Another Ticket Type
                </button>
              </div>

              <div>
                <h3 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground mb-6">
                  Registration Settings
                </h3>
                
                <div className="space-y-6">
                  <label className="flex items-center space-x-4">
                    <input type="checkbox" className="rounded-sketch w-5 h-5" />
                    <span className="font-sans text-base text-light-foreground/70 dark:text-dark-foreground/70">Require approval for registrations</span>
                  </label>
                  
                  <label className="flex items-center space-x-4">
                    <input type="checkbox" className="rounded-sketch w-5 h-5" />
                    <span className="font-sans text-base text-light-foreground/70 dark:text-dark-foreground/70">Allow waitlist when sold out</span>
                  </label>
                  
                  <label className="flex items-center space-x-4">
                    <input type="checkbox" className="rounded-sketch w-5 h-5" />
                    <span className="font-sans text-base text-light-foreground/70 dark:text-dark-foreground/70">Send confirmation emails</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Publish */}
          {currentStep === 4 && (
            <div className="space-y-10">
              <div className="text-center">
                <h3 className="font-display font-semibold text-3xl text-light-foreground dark:text-dark-foreground mb-6">
                  Ready to Publish?
                </h3>
                <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-4xl mx-auto leading-relaxed">
                  Review your event details below. Once published, your event will be visible to the community and available for registration.
                </p>
              </div>

              {/* Event Preview */}
              <div className="bg-light-muted dark:bg-dark-muted border border-light-border dark:border-dark-border rounded-handcrafted p-10">
                <div className="aspect-video bg-light-background/50 dark:bg-dark-background/50 rounded-handcrafted mb-8 flex items-center justify-center">
                  <Image className="w-20 h-20 text-light-foreground/30 dark:text-dark-foreground/30" />
                </div>
                
                <h3 className="font-display font-semibold text-3xl text-light-foreground dark:text-dark-foreground mb-6">
                  Your Event Title Here
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-4 text-light-foreground/70 dark:text-dark-foreground/70">
                    <Calendar className="w-6 h-6" />
                    <span className="font-sans text-lg">March 15, 2025 at 8:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-4 text-light-foreground/70 dark:text-dark-foreground/70">
                    <MapPin className="w-6 h-6" />
                    <span className="font-sans text-lg">Your Location</span>
                  </div>
                  <div className="flex items-center space-x-4 text-light-foreground/70 dark:text-dark-foreground/70">
                    <DollarSign className="w-6 h-6" />
                    <span className="font-sans text-lg">Free</span>
                  </div>
                  <div className="flex items-center space-x-4 text-light-foreground/70 dark:text-dark-foreground/70">
                    <Users className="w-6 h-6" />
                    <span className="font-sans text-lg">50 spots available</span>
                  </div>
                </div>
                
                <p className="font-sans text-lg text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed">
                  Your event description will appear here, telling potential attendees what to expect and why they should join your event.
                </p>
              </div>

              <div className="bg-light-secondary/10 dark:bg-dark-secondary/10 border border-light-secondary/30 dark:border-dark-secondary/30 rounded-handcrafted p-8 text-center">
                <h4 className="font-display font-semibold text-xl text-light-foreground dark:text-dark-foreground mb-4">
                  Publishing Checklist
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-sans text-base">Event details completed</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-sans text-base">Ticketing configured</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-yellow-400">
                    <Clock className="w-5 h-5" />
                    <span className="font-sans text-base">Event image recommended</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pb-16">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className={`px-10 py-4 font-sans font-medium transition-all duration-300 text-lg rounded-handcrafted ${
              currentStep === 1
                ? 'bg-light-muted/30 dark:bg-dark-muted/30 text-light-foreground/30 dark:text-dark-foreground/30 cursor-not-allowed shadow-sketch'
                : 'bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground hover:bg-light-muted dark:hover:bg-dark-muted shadow-handcrafted'
            }`}
          >
            Previous
          </button>

          <div className="flex space-x-6">
            <button className="px-8 py-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 rounded-handcrafted shadow-handcrafted text-lg">
              Save Draft
            </button>
            
            {currentStep === totalSteps ? (
              <button className="px-10 py-4 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-semibold hover:opacity-90 transition-all duration-300 rounded-handcrafted shadow-handcrafted hover:animate-sketch text-lg">
                Publish Event
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                className="px-10 py-4 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-semibold hover:opacity-90 transition-all duration-300 rounded-handcrafted shadow-handcrafted hover:animate-sketch text-lg"
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