'use client';

import { useState } from 'react';

const PLACEHOLDER_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%231a1a2e" width="400" height="500"/%3E%3Ctext fill="%23555" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="12"%3EImage placeholder%3C/text%3E%3C/svg%3E';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Web & Mobile App Development',
    description:
      'We develop cutting-edge web and mobile applications, delivering robust and scalable digital solutions.',
    image: '/assets/services/web-mobile.png',
  },
  {
    id: 2,
    number: '02',
    title: 'UI / UX Research & Design',
    description:
      'Our UI/UX research and design services create intuitive and engaging digital interfaces, enhancing user experiences.',
    image: '/assets/services/ui-ux.png',
  },
  {
    id: 3,
    number: '03',
    title: 'Generative AI / Machine Learning',
    description:
      'Leveraging Generative AI and Machine Learning, we deliver intelligent solutions that drive innovation and efficiency.',
    image: '/assets/services/ai-ml.png',
  },
  {
    id: 4,
    number: '04',
    title: 'Digital Marketing & SEO',
    description:
      'Our digital marketing and SEO strategies enhance your online presence, driving growth and engagement.',
    image: '/assets/services/digital-marketing.png',
  },
  {
    id: 5,
    number: '05',
    title: 'Branding & Visual Identity',
    description:
      'We build strong, memorable brands through compelling visual identities and strategic branding services.',
    image: '/assets/services/branding.png',
  },
];

export default function WhatWeOfferSection() {
  const [hoveredService, setHoveredService] = useState(0);
  const [activeImage, setActiveImage] = useState(services[0].image);

  const handleMouseEnter = (index, image) => {
    setHoveredService(index);
    setActiveImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredService(0);
    setActiveImage(services[0].image);
  };

  return (
    <section className="py-10 md:py-14 bg-[#0D1B2A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-10">
          <div>
            <p className="text-[#39FF14] text-xs font-medium uppercase tracking-wider mb-1">
              Our Services
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Solutions We Provide
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              With every single one of our clients, we bring forth a deep passion
              for creative problem-solving, innovative solutions, and
              forward-thinking strategies. At TechSol, we push the boundaries to
              help brands succeed.
            </p>
          </div>
        </div>

        {/* Main content: Image (left, desktop) + Services (right) - matches reference exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Image area - hidden on mobile, on LEFT for desktop, same size as reference */}
          <div className="hidden lg:flex lg:col-span-5 order-first items-start justify-center">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] w-full max-w-[320px] max-h-[400px] rounded-2xl overflow-hidden -rotate-3 bg-gray-900">
                <img
                  src={activeImage}
                  alt="Service"
                  className="w-full h-full object-cover transition-opacity duration-500"
                  onError={(e) => {
                    e.target.src = PLACEHOLDER_IMAGE;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Services list - on RIGHT for desktop, full width on mobile */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-gray-700/50">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onMouseEnter={() =>
                    handleMouseEnter(index, service.image)
                  }
                  onMouseLeave={handleMouseLeave}
                  className={`py-6 md:py-8 group cursor-pointer transition-all duration-300 ${
                    hoveredService === index ? 'opacity-100' : 'opacity-90'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-gray-500 text-sm mb-2 block">
                        {service.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-[#39FF14] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    {/* Diagonal arrow (top-right) - matches reference */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredService === index
                          ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0D1B2A]'
                          : ''
                      }`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H10M17 7V14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
