import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Ganesh Bambori',
    role: 'Founder',
    image: 'https://i.ibb.co/yh2LC2n/720.jpg ',
    linkedin: 'https://www.linkedin.com/in/ganesh-bambori-aa9b07243/',
    email: 'caganeshbambori@gmail.com',
  },
  {
    name: 'Dataram Shivgun',
    role: 'Tax Director',
    image:
      '',
    linkedin: '#',
    email: 'michael@bamboriassociates.com',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Audit Manager',
    image:
      '',
    linkedin: '#',
    email: 'elena@bamboriassociates.com',
  },
];

export default function Team() {
  return (
    <div id="team" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Expert professionals committed to your success
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  className="w-full h-96 object-cover object-center group-hover:opacity-75 transition-opacity"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className="p-2 text-white hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 text-white hover:text-blue-400 transition-colors"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
