import React from 'react';
import { Calculator, BarChart2, FileText, Landmark, Receipt, Shield } from 'lucide-react';

const services = [
  {
    title: 'Tax Planning & Compliance',
    description: 'Strategic tax planning and timely compliance services for businesses and individuals.',
    icon: Receipt
  },
  {
    title: 'Audit & Assurance',
    description: 'Comprehensive audit services ensuring accuracy and compliance with regulatory standards.',
    icon: Shield
  },
  {
    title: 'Business Advisory',
    description: 'Expert guidance for business growth, restructuring, and financial strategy.',
    icon: BarChart2
  },
  {
    title: 'Bookkeeping',
    description: 'Accurate and efficient bookkeeping services to maintain your financial records.',
    icon: Calculator
  },
  {
    title: 'Financial Reporting',
    description: 'Detailed financial reports and analysis for informed decision-making.',
    icon: FileText
  },
  {
    title: 'Corporate Finance',
    description: 'Specialized corporate finance solutions including mergers and acquisitions.',
    icon: Landmark
  }
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive financial solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}