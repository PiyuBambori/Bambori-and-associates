import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Let's discuss how we can help your business thrive
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-full px-6 py-8">
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Office Location
                    </h3>
                    <p className="mt-1 text-gray-500">
                      10-159, Bhandup Village Rd, Kukreja, Industrial Area,
                      Bhandup West,
                      <br />
                      Mumbai, Maharashtra 400078
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Contact Numbers
                    </h3>
                    <p className="mt-1 text-gray-500">
                      Phone: +91 9867611726
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Email Address
                    </h3>
                    <p className="mt-1 text-gray-500">
                      caganeshbambori@gmail.com
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <iframe
                    title="Office Location"
                    className="w-full h-64 rounded-lg"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1559908355716!2d72.93301121438343!3d19.14864008704954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90c99709bbf%3A0xe7f0ddf5db2ac4f3!2s10-159%2C%20Bhandup%20Village%20Rd%2C%20Kukreja%2C%20Industrial%20Area%2C%20Bhandup%20West%2C%20Mumbai%2C%20Maharashtra%20400078%2C%20India!5e0!3m2!1sen!2sus!4v1628690867297!5m2!1sen!2sus
                    "
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
