import React from 'react';
import { Calculator, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-semibold text-white">Bambori & Associates</span>
            </div>
            <p className="mt-4 text-gray-400">
              Professional chartered accountants delivering comprehensive financial solutions with precision and integrity since 1995.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#services" className="text-base text-gray-300 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#team" className="text-base text-gray-300 hover:text-white">Our Team</a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-300 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect With Us</h3>
            <div className="mt-4 flex space-x-6">
              <a href="https://www.linkedin.com/in/ganesh-bambori-aa9b07243/" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://x.com/cbambori" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Bambori & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}