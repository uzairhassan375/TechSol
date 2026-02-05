'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Mark Johnson',
      country: 'United States',
      content:
        'TechSol transformed our digital presence completely. Their team is professional, innovative, and always delivers on time. Highly recommended!',
      rating: 5,
      avatar: '/assets/avatars/mark.png',
      date: '15th March, 2024',
    },
    {
      name: 'Ahmad Hassan',
      country: 'Pakistan',
      content:
        'Great experience working with TechSol. They delivered quality work and were responsive throughout the project. Very satisfied with the results.',
      rating: 4,
      avatar: '/assets/avatars/ahmad.png',
      date: '8th February, 2024',
    },
    {
      name: 'Sarah Johnson',
      country: 'United Kingdom',
      content:
        'The best decision we made was partnering with TechSol. Their expertise and dedication to quality is unmatched in the industry.',
      rating: 5,
      avatar: '/assets/avatars/sarah.png',
      date: '22nd January, 2024',
    },
    {
      name: 'Ibrahim Khan',
      country: 'Pakistan',
      content:
        'TechSol provided excellent service and delivered on time. The team is knowledgeable and professional. Would definitely work with them again.',
      rating: 4,
      avatar: '/assets/avatars/ibrahim.png',
      date: '5th April, 2024',
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const totalSlides = testimonials.length;
  const avgRating = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const prevIndex = currentReviewIndex === 0 ? totalSlides - 1 : currentReviewIndex - 1;
  const nextIndex = currentReviewIndex === totalSlides - 1 ? 0 : currentReviewIndex + 1;
  const prevReview = testimonials[prevIndex];
  const nextReview = testimonials[nextIndex];
  const currentReview = testimonials[currentReviewIndex];

  const StarIcon = ({ filled, size = 'md' }) => (
    <svg
      className={`${size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} ${filled ? 'text-[#FFC107]' : 'text-gray-300'}`}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="2"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section className="py-20 bg-[#0D1B2A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] px-4 md:py-4 shadow-2xl overflow-hidden">
          <div className="px-4 mb-6 md:mb-4 pt-8 md:pt-6">
            <h2 className="text-center text-xl md:text-3xl font-bold text-[#0D1B2A]">
              What our Customers have to say
            </h2>
          </div>

          <div className="flex flex-col md:block gap-5 px-4 md:px-0 pb-8">
            {/* Overall rating - Zambeel style */}
            <div className="bg-white rounded-[2.5rem] md:rounded-none p-8 md:p-0 shadow-xl md:shadow-none text-center md:mb-4">
              <div className="text-[#0D1B2A] text-5xl md:text-6xl font-extrabold tracking-tighter mb-2">
                {avgRating}
              </div>
              <div className="flex justify-center gap-1.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < Math.round(avgRating)} />
                ))}
              </div>
              <div className="text-xs md:text-sm font-medium text-gray-500">
                (106 reviews)
              </div>
            </div>

            <h3 className="text-center text-lg font-bold text-[#0D1B2A] mb-4">
              Most recent reviews
            </h3>

            {/* 3-card layout: prev | center | next - Zambeel style */}
            <div className="flex items-center justify-center w-full md:px-8 gap-4 md:gap-8">
              {/* Left (prev) card - smaller, half visible */}
              <div className="hidden md:flex w-1/4 min-w-[220px] h-40 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm opacity-60 flex-col justify-center select-none transform scale-95">
                <div className="flex items-center gap-2 mb-3 opacity-70">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-100">
                    <Image
                      src={prevReview.avatar}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                      alt={prevReview.name}
                    />
                  </div>
                  <span className="font-bold text-xs text-gray-700">
                    {prevReview.name}
                  </span>
                </div>
                <div className="flex gap-0.5 mb-2 opacity-70">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < prevReview.rating} size="sm" />
                  ))}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  &quot;{prevReview.content.substring(0, 40)}...&quot;
                </p>
              </div>

              {/* Center card - full size, prominent */}
              <div className="w-full md:w-[550px] flex-shrink-0 z-20">
                <div className="bg-white border border-gray-100 rounded-[2.5rem] md:rounded-3xl p-6 shadow-xl md:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] h-auto">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
                        <Image
                          src={currentReview.avatar}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          alt={currentReview.name}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base md:text-lg">
                          {currentReview.name}
                        </h4>
                        <p className="text-[10px] md:text-xs text-[#007BFF] font-bold mt-0.5">
                          {currentReview.date}
                        </p>
                        <p className="text-[10px] text-gray-500 mt-0.5">
                          {currentReview.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          filled={i < currentReview.rating}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                    &quot;{currentReview.content}&quot;
                  </p>
                </div>
              </div>

              {/* Right (next) card - smaller, half visible */}
              <div className="hidden md:flex w-1/4 min-w-[220px] h-40 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm opacity-60 flex-col justify-center select-none transform scale-95">
                <div className="flex items-center gap-2 mb-3 opacity-70">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-100">
                    <Image
                      src={nextReview.avatar}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                      alt={nextReview.name}
                    />
                  </div>
                  <span className="font-bold text-xs text-gray-700">
                    {nextReview.name}
                  </span>
                </div>
                <div className="flex gap-0.5 mb-2 opacity-70">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < nextReview.rating} size="sm" />
                  ))}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  &quot;{nextReview.content.substring(0, 40)}...&quot;
                </p>
              </div>
            </div>

            {/* Dots - Zambeel style: gold active, navy inactive */}
            <div className="flex justify-center gap-2 md:gap-3 mt-2 md:mt-4 pb-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReviewIndex(idx)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer transition-all ${
                    idx === currentReviewIndex
                      ? 'bg-[#FFC107]'
                      : 'bg-[#0D1B2A] opacity-60 hover:opacity-80'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
