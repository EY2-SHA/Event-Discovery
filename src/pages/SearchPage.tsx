import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, DollarSign, Users } from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'music', label: 'Music & Concerts' },
    { value: 'art', label: 'Art & Culture' },
    { value: 'tech', label: 'Technology' },
    { value: 'wellness', label: 'Health & Wellness' },
    { value: 'food', label: 'Food & Drink' },
    { value: 'sports', label: 'Sports & Fitness' },
    { value: 'business', label: 'Business' },
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'san-francisco', label: 'San Francisco' },
    { value: 'new-york', label: 'New York' },
    { value: 'los-angeles', label: 'Los Angeles' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'online', label: 'Online Events' },
  ];

  const priceRanges = [
    { value: 'all', label: 'Any Price' },
    { value: 'free', label: 'Free' },
    { value: '0-50', label: '$0 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100+', label: '$100+' },
  ];

  const events = [
    {
      id: 1,
      title: "Mindful Mornings: Meditation & Movement",
      date: "March 15, 2025",
      time: "8:00 AM",
      location: "Golden Gate Park",
      price: "Free",
      attendees: 45,
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg",
      category: "Wellness",
      description: "Start your day with intention through guided meditation and gentle movement."
    },
    {
      id: 2,
      title: "Digital Artistry Workshop",
      date: "March 22, 2025",
      time: "2:00 PM",
      location: "Mission District Studio",
      price: "$75",
      attendees: 20,
      image: "https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg",
      category: "Creative",
      description: "Learn digital art techniques from industry professionals."
    },
    {
      id: 3,
      title: "Sustainable Living Summit",
      date: "April 3, 2025",
      time: "9:00 AM",
      location: "Moscone Center",
      price: "$120",
      attendees: 200,
      image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg",
      category: "Conference",
      description: "Explore innovative solutions for sustainable living and environmental consciousness."
    },
    {
      id: 4,
      title: "Jazz Under the Stars",
      date: "March 28, 2025",
      time: "7:00 PM",
      location: "Rooftop Terrace",
      price: "$45",
      attendees: 80,
      image: "https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg",
      category: "Music",
      description: "An intimate evening of smooth jazz with city skyline views."
    },
    {
      id: 5,
      title: "Farm-to-Table Cooking Class",
      date: "April 5, 2025",
      time: "11:00 AM",
      location: "Culinary Institute",
      price: "$95",
      attendees: 16,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      category: "Food",
      description: "Learn to create seasonal dishes using locally sourced ingredients."
    },
    {
      id: 6,
      title: "Tech Innovation Forum",
      date: "April 10, 2025",
      time: "10:00 AM",
      location: "Online Event",
      price: "Free",
      attendees: 500,
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      category: "Technology",
      description: "Discover the latest trends and innovations in technology."
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-light-foreground dark:text-dark-foreground mb-6">
            Discover Your Next{' '}
            <span className="text-light-secondary dark:text-dark-secondary">
              Experience
            </span>
          </h1>
          <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-2xl mx-auto">
            Find events that resonate with your soul and connect you with like-minded individuals.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-light-card dark:bg-dark-card border-2 border-light-border dark:border-dark-border p-8 mb-12 shadow-soft">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-foreground/50 dark:text-dark-foreground/50" />
            <input
              type="text"
              placeholder="Search for events, topics, or organizers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-light-background dark:bg-dark-background border-2 border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground placeholder-light-foreground/50 dark:placeholder-dark-foreground/50 focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary transition-all duration-300 font-sans"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-sm font-medium">
                <Filter className="w-4 h-4" />
                <span>Category</span>
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 bg-light-background dark:bg-dark-background border-2 border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary transition-all duration-300 font-sans"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-sm font-medium">
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-3 bg-light-background dark:bg-dark-background border-2 border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary transition-all duration-300 font-sans"
              >
                {locations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-sm font-medium">
                <DollarSign className="w-4 h-4" />
                <span>Price Range</span>
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full p-3 bg-light-background dark:bg-dark-background border-2 border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary transition-all duration-300 font-sans"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-sm font-medium">
                <Calendar className="w-4 h-4" />
                <span>Date</span>
              </label>
              <input
                type="date"
                className="w-full p-3 bg-light-background dark:bg-dark-background border-2 border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground focus:outline-none focus:border-light-secondary dark:focus:border-dark-secondary transition-all duration-300 font-sans"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70">
            Found <span className="font-semibold text-light-foreground dark:text-dark-foreground">{events.length}</span> events
          </p>
        </div>

        {/* Events Grid - Wabi-Sabi Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className={`bg-light-card dark:bg-dark-card overflow-hidden border-2 border-light-border dark:border-dark-border hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 shadow-brutal hover:shadow-brutal-lg transform hover:-translate-y-1 group cursor-pointer ${
                event.id % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${
                event.id % 4 === 0 ? 'lg:row-span-2' : ''
              }`}
              style={{
                transform: `rotate(${(event.id % 3 - 1) * 0.5}deg)`,
              }}
            >
              <div className={`relative overflow-hidden ${event.id % 4 === 0 ? 'aspect-square' : 'aspect-video'}`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-light-secondary dark:bg-dark-secondary text-white text-sm font-sans font-medium shadow-soft">
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-light-background/90 dark:bg-dark-background/90 text-light-foreground dark:text-dark-foreground text-sm font-sans font-medium">
                    {event.price}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-display font-semibold text-xl text-light-foreground dark:text-dark-foreground group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors">
                  {event.title}
                </h3>
                
                <p className="font-sans text-sm text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-sm">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-semibold hover:opacity-90 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-light-card dark:bg-dark-card rounded-full text-light-foreground dark:text-dark-foreground font-sans font-medium border-2 border-light-border dark:border-dark-border hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300">
            Load More Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;