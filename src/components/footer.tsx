import Link from 'next/link';
import { Github, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Sand Analysis
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Low-cost camera-based automated mapping system for beach sediment grain size estimation and classification.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-base md:text-lg">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#map" className="text-muted-foreground hover:text-foreground transition-colors">
                  Map
                </Link>
              </li>
              <li>
                <Link
                  href="/#explore"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Resources</h4>
            <ul className="space-y-3 text-base md:text-lg">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Data Sources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                <a href="mailto:contact@aonecoastal.com" className="hover:text-foreground transition-colors">
                  contact@aonecoastal.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Github className="w-5 h-5 md:w-6 md:h-6" />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-base md:text-lg text-muted-foreground">
            © {new Date().getFullYear()} Sand Analysis Mapping System. All rights reserved.
          </p>
          <div className="flex space-x-6 text-base md:text-lg text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Credits
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

