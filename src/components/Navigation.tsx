import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Plus, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/search', label: 'Discover' },
    { path: '/recommendations', label: 'For You' },
    { path: '/how-it-works', label: 'How it Works' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="font-syne font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              Eventide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-inter font-medium transition-all duration-300 hover:text-cyan ${
                  isActive(path) ? 'text-cyan' : 'text-foreground/70'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/search"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              to="/create-event"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-background font-inter font-medium hover:scale-105 transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              <span>Create Event</span>
            </Link>
            <Link
              to="/profile"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-glass border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block font-inter font-medium transition-all duration-300 ${
                  isActive(path) ? 'text-cyan' : 'text-foreground/70'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <Link
                to="/create-event"
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-background font-inter font-medium w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Plus className="w-4 h-4" />
                <span>Create Event</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;