'use client';

import { useState, useEffect } from 'react';

export default function ServicesBar() {
  const services = ['WEB DEV', 'APP DEV', 'UI & UX', 'AI', 'SEO'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-300 py-4 lg:py-6 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop View - Show All Services */}
        <div className="hidden lg:grid grid-cols-5 items-center w-full px-8 gap-4">
          {/* WEB DEV - Left */}
          <div className="text-[#333333] font-bold text-2xl lg:text-3xl hover:text-[#007BFF] transition-colors duration-200 cursor-pointer text-left">
            WEB DEV
          </div>
          
          {/* AI - Middle Left */}
          <div className="text-[#333333] font-bold text-2xl lg:text-3xl hover:text-[#007BFF] transition-colors duration-200 cursor-pointer text-center">
            AI
          </div>
          
          {/* UI & UX - Center */}
          <div className="text-[#333333] font-bold text-2xl lg:text-3xl hover:text-[#007BFF] transition-colors duration-200 cursor-pointer text-center">
            UI & UX
          </div>
          
          {/* SEO - Middle Right */}
          <div className="text-[#333333] font-bold text-2xl lg:text-3xl hover:text-[#007BFF] transition-colors duration-200 cursor-pointer text-center">
            SEO
          </div>
          
          {/* APP DEV - Right */}
          <div className="text-[#333333] font-bold text-2xl lg:text-3xl hover:text-[#007BFF] transition-colors duration-200 cursor-pointer text-right">
            APP DEV
          </div>
        </div>

        {/* Mobile View - Slideshow */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="min-w-full flex items-center justify-center py-2"
                >
                  <div className="text-[#333333] font-bold text-2xl">
                    {service}
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
