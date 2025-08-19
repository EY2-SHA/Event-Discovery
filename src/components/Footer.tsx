import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="font-syne font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                Eventide
              </span>
            </div>
            <p className="text-foreground/70 font-inter text-sm leading-relaxed">
              Discover extraordinary experiences that inspire, connect, and transform. 
              Where every moment becomes a cherished memory.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-syne font-semibold text-foreground mb-4">Discover</h3>
            <div className="space-y-2">
              <Link to="/search" className="block text-foreground/70 hover:text-cyan transition-colors font-inter text-sm">
                Browse Events
              </Link>
              <Link to="/recommendations" className="block text-foreground/70 hover:text-cyan transition-colors font-inter text-sm">
                Personalized
              </Link>
              <Link to="/how-it-works" className="block text-foreground/70 hover:text-cyan transition-colors font-inter text-sm">
                How it Works
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-syne font-semibold text-foreground mb-4">Support</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-foreground/70 hover:text-cyan transition-colors font-inter text-sm">
                About Us
              </Link>
              <Link to="/faq" className="block text-foreground/70 hover:text-cyan transition-colors font-inter text-sm">
                FAQ
              </Link>
              <Link to="/contact" className="block text-foreground/70 hover:text-cyan transition-colors font-inter text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-syne font-semibold text-foreground mb-4">Connect</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-foreground/70 font-inter text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@eventide.com</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/70 font-inter text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/70 font-inter text-sm">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-foreground/50 font-inter text-sm">
            © 2025 Eventide. Crafted with intention, designed with love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;