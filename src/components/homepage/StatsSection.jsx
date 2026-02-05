export default function StatsSection() {
  const stats = [
    {
      number: '50+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries',
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Our clients rate us highly for quality and service',
    },
    {
      number: '3+',
      label: 'Years Experience',
      description: 'Years of expertise in delivering cutting-edge solutions',
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock support for all our clients',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333333]">
            Our Achievements
          </h2>
          <p className="text-[#777777] text-lg max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-xl p-8 text-center hover:bg-[#007BFF] hover:text-white transition-all duration-300 border border-gray-200 hover:border-[#007BFF] group"
            >
              <div className="text-5xl md:text-6xl font-bold mb-3 text-[#007BFF] group-hover:text-white transition-colors duration-300">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#333333] group-hover:text-white transition-colors duration-300">
                {stat.label}
              </h3>
              <p className="text-[#777777] text-sm group-hover:text-gray-200 transition-colors duration-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
