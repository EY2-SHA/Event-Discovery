import React, { useState } from 'react';
import { User, Calendar, Heart, Settings, MapPin, Bell, Shield } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events');

  const userEvents = [
    {
      id: 1,
      title: "Mindful Mornings: Meditation & Movement",
      date: "March 15, 2025",
      status: "upcoming",
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg"
    },
    {
      id: 2,
      title: "Digital Artistry Workshop",
      date: "March 22, 2025",
      status: "upcoming",
      image: "https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg"
    },
    {
      id: 3,
      title: "Sustainable Living Conference",
      date: "February 28, 2025",
      status: "attended",
      image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg"
    },
  ];

  const savedEvents = [
    {
      id: 4,
      title: "Jazz Under the Stars",
      date: "March 28, 2025",
      image: "https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg"
    },
    {
      id: 5,
      title: "Farm-to-Table Cooking Class",
      date: "April 5, 2025",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-gradient-secondary rounded-3xl p-8 mb-12 border border-white/20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-background" />
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-syne font-bold text-4xl text-foreground mb-2">
                Sarah Chen
              </h1>
              <p className="font-inter text-foreground/70 mb-4">
                Wellness enthusiast, creative soul, community builder
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                <div className="flex items-center space-x-2 text-foreground/70">
                  <MapPin className="w-4 h-4" />
                  <span className="font-inter text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground/70">
                  <Calendar className="w-4 h-4" />
                  <span className="font-inter text-sm">Member since 2023</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div className="text-center">
                  <div className="font-syne font-bold text-2xl text-foreground">24</div>
                  <div className="font-inter text-sm text-foreground/70">Events Attended</div>
                </div>
                <div className="text-center">
                  <div className="font-syne font-bold text-2xl text-foreground">12</div>
                  <div className="font-inter text-sm text-foreground/70">Following</div>
                </div>
                <div className="text-center">
                  <div className="font-syne font-bold text-2xl text-foreground">8</div>
                  <div className="font-inter text-sm text-foreground/70">Reviews</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button className="p-3 bg-white/10 backdrop-blur-glass border border-white/20 rounded-full text-foreground hover:bg-white/20 transition-all duration-300">
                <Settings className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 bg-gradient-primary text-background font-inter font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary rounded-full opacity-10"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 mb-8 border-b border-white/10">
          {[
            { id: 'events', label: 'My Events', icon: Calendar },
            { id: 'saved', label: 'Saved', icon: Heart },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 pb-4 border-b-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'border-cyan text-cyan'
                  : 'border-transparent text-foreground/70 hover:text-foreground'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-inter font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {/* My Events Tab */}
          {activeTab === 'events' && (
            <div>
              <h2 className="font-syne font-semibold text-2xl text-foreground mb-8">
                My Events
              </h2>

              {/* Upcoming Events */}
              <div className="mb-12">
                <h3 className="font-syne font-medium text-xl text-foreground mb-6">
                  Upcoming Events ({userEvents.filter(e => e.status === 'upcoming').length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userEvents
                    .filter(event => event.status === 'upcoming')
                    .map((event) => (
                      <div key={event.id} className="bg-white/10 backdrop-blur-glass rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-green-500 text-white text-sm font-inter font-medium rounded-full">
                              Registered
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-syne font-semibold text-lg text-foreground mb-2">
                            {event.title}
                          </h4>
                          <p className="font-inter text-foreground/70 text-sm mb-4">
                            {event.date}
                          </p>
                          <div className="flex space-x-3">
                            <button className="flex-1 py-2 bg-gradient-primary text-background font-inter font-medium rounded-lg hover:scale-105 transition-all duration-300 text-sm">
                              View Ticket
                            </button>
                            <button className="px-4 py-2 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-lg hover:bg-white/20 transition-all duration-300 text-sm">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Past Events */}
              <div>
                <h3 className="font-syne font-medium text-xl text-foreground mb-6">
                  Past Events ({userEvents.filter(e => e.status === 'attended').length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userEvents
                    .filter(event => event.status === 'attended')
                    .map((event) => (
                      <div key={event.id} className="bg-white/10 backdrop-blur-glass rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-blue-500 text-white text-sm font-inter font-medium rounded-full">
                              Attended
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-syne font-semibold text-lg text-foreground mb-2">
                            {event.title}
                          </h4>
                          <p className="font-inter text-foreground/70 text-sm mb-4">
                            {event.date}
                          </p>
                          <button className="w-full py-2 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-lg hover:bg-white/20 transition-all duration-300 text-sm">
                            Write Review
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Saved Events Tab */}
          {activeTab === 'saved' && (
            <div>
              <h2 className="font-syne font-semibold text-2xl text-foreground mb-8">
                Saved Events ({savedEvents.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedEvents.map((event) => (
                  <div key={event.id} className="bg-white/10 backdrop-blur-glass rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-syne font-semibold text-lg text-foreground mb-2">
                        {event.title}
                      </h4>
                      <p className="font-inter text-foreground/70 text-sm mb-4">
                        {event.date}
                      </p>
                      <div className="flex space-x-3">
                        <button className="flex-1 py-2 bg-gradient-primary text-background font-inter font-medium rounded-lg hover:scale-105 transition-all duration-300 text-sm">
                          View Event
                        </button>
                        <button className="px-4 py-2 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-lg hover:bg-white/20 transition-all duration-300 text-sm">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl">
              <h2 className="font-syne font-semibold text-2xl text-foreground mb-8">
                Account Settings
              </h2>

              <div className="space-y-6">
                {/* Profile Settings */}
                <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <User className="w-5 h-5 text-cyan" />
                    <h3 className="font-syne font-semibold text-lg text-foreground">
                      Profile Information
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-inter text-sm text-foreground/70 mb-2">
                        Display Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Sarah Chen"
                        className="w-full p-3 bg-background/50 border border-white/20 rounded-lg text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-sm text-foreground/70 mb-2">
                        Bio
                      </label>
                      <textarea
                        defaultValue="Wellness enthusiast, creative soul, community builder"
                        rows={3}
                        className="w-full p-3 bg-background/50 border border-white/20 rounded-lg text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-sm text-foreground/70 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        defaultValue="San Francisco, CA"
                        className="w-full p-3 bg-background/50 border border-white/20 rounded-lg text-foreground focus:outline-none focus:border-cyan transition-all duration-300 font-inter"
                      />
                    </div>
                  </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Bell className="w-5 h-5 text-cyan" />
                    <h3 className="font-syne font-semibold text-lg text-foreground">
                      Notifications
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-foreground/70">Event reminders</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-foreground/70">New recommendations</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-foreground/70">Event updates</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                  </div>
                </div>

                {/* Privacy Settings */}
                <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-5 h-5 text-cyan" />
                    <h3 className="font-syne font-semibold text-lg text-foreground">
                      Privacy & Security
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <button className="w-full text-left py-3 px-4 bg-background/50 border border-white/20 rounded-lg text-foreground hover:bg-white/10 transition-all duration-300 font-inter">
                      Change Password
                    </button>
                    <button className="w-full text-left py-3 px-4 bg-background/50 border border-white/20 rounded-lg text-foreground hover:bg-white/10 transition-all duration-300 font-inter">
                      Privacy Settings
                    </button>
                    <button className="w-full text-left py-3 px-4 bg-background/50 border border-white/20 rounded-lg text-foreground hover:bg-white/10 transition-all duration-300 font-inter">
                      Download My Data
                    </button>
                  </div>
                </div>

                {/* Save Button */}
                <button className="w-full py-4 bg-gradient-primary text-background font-inter font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;