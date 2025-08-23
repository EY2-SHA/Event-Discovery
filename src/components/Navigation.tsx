import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Plus, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/search', label: 'Discover' },
    { path: '/recommendations', label: 'For You' },
    { path: '/how-it-works', label: 'How it Works' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-light-card/95 dark:bg-dark-card/95 backdrop-blur-sm border-b border-light-border dark:border-dark-border shadow-handcrafted">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted flex items-center justify-center shadow-sketch">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-light-foreground dark:text-dark-foreground">
              Eventide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-sans font-medium text-sm transition-all duration-300 hover:text-light-secondary dark:hover:text-dark-secondary ${
                  isActive(path) ? 'text-light-secondary dark:text-dark-secondary' : 'text-light-foreground/70 dark:text-dark-foreground/70'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-handcrafted bg-light-muted dark:bg-dark-muted hover:bg-light-primary/20 dark:hover:bg-dark-primary/20 transition-all duration-300 shadow-sketch"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-light-foreground dark:text-dark-foreground" />
              ) : (
                <Sun className="w-4 h-4 text-light-foreground dark:text-dark-foreground" />
              )}
            </button>
            <Link
              to="/search"
              className="p-2 rounded-handcrafted bg-light-muted dark:bg-dark-muted hover:bg-light-primary/20 dark:hover:bg-dark-primary/20 transition-all duration-300 shadow-sketch"
            >
              <Search className="w-4 h-4 text-light-foreground dark:text-dark-foreground" />
            </Link>
            <Link
              to="/create-event"
              className="flex items-center space-x-2 px-4 py-2 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted text-white font-sans font-medium hover:opacity-90 transition-all duration-300 shadow-handcrafted hover:animate-sketch"
            >
              <Plus className="w-4 h-4" />
              <span>Create Event</span>
            </Link>
            <Link
              to="/profile"
              className="p-2 rounded-handcrafted bg-light-muted dark:bg-dark-muted hover:bg-light-primary/20 dark:hover:bg-dark-primary/20 transition-all duration-300 shadow-sketch"
            >
              <User className="w-4 h-4 text-light-foreground dark:text-dark-foreground" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-light-foreground dark:text-dark-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-light-foreground dark:text-dark-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border shadow-handcrafted">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block font-sans font-medium text-sm transition-all duration-300 hover:text-light-secondary dark:hover:text-dark-secondary ${
                  isActive(path) ? 'text-light-secondary dark:text-dark-secondary' : 'text-light-foreground/70 dark:text-dark-foreground/70'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 border-t border-light-border dark:border-dark-border space-y-4">
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-4 py-2 bg-light-muted dark:bg-dark-muted rounded-handcrafted text-light-foreground dark:text-dark-foreground font-sans font-medium w-fit shadow-sketch"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
              <Link
                to="/create-event"
                className="flex items-center space-x-2 px-4 py-2 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted text-white font-sans font-medium w-fit shadow-handcrafted"
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