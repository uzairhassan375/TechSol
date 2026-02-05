import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative flex items-start bg-gradient-to-br from-black via-[#0D1B2A] to-black overflow-hidden">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      {/* Glowing Accent Dot */}
      <div className="absolute right-[15%] top-[40%] w-3 h-3 bg-[#39FF14] rounded-full opacity-60 blur-sm animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-24 pb-12 lg:pb-16 w-full">
        <div className="max-w-4xl">
          {/* CTA Button - Mobile: Above Heading */}
          <div className="mb-4 lg:hidden flex justify-end">
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-4 py-2.5 rounded-full font-semibold text-sm hover:bg-white/10 hover:border-[#39FF14] transition-all duration-200 whitespace-nowrap"
            >
              Book a Meeting
            </Link>
          </div>

          {/* Main Heading - Left Aligned */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight text-left">
            Transforming Ideas Into
            <span className="block text-[#39FF14]">Innovative Solutions</span>
          </h1>

          {/* CTA Button - Desktop Only */}
          <div className="mb-8 hidden lg:block">
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-[#39FF14] transition-all duration-200"
            >
              Book a Meeting
            </Link>
          </div>

          {/* Descriptive Text */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl text-left leading-relaxed">
            TechSol is an emerging <strong className="text-white">software development agency</strong>, transforming your vision into innovative digital solutions that drive your business forward.
          </p>

          {/* Statistic - Mobile: Below Description Left, Desktop: Absolute Right */}
          <div className="lg:absolute lg:bottom-16 lg:right-8 lg:md:right-16 lg:text-right mt-8 lg:mt-0">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">50+</div>
            <div className="text-sm md:text-base text-gray-300 mt-2">Projects completed</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
