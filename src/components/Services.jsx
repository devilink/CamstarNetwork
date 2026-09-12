import { AnimateCard, AnimateText } from "./AnimateSection";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Influencer Marketing",
      description: "Plan and execute highly effective brand campaigns via smart influencer collaborations perfectly matched to your demographic.",
      icon: "🎯"
    },
    {
      id: "02",
      title: "Video Editing",
      description: "Crisp arrays of high-quality reels, ads, and promos optimized for algorithms and maximum audience retention.",
      icon: "🎬"
    },
    {
      id: "03",
      title: "Ad Designing",
      description: "Creative visual assets scaled perfectly and converting cleanly on all platforms and social networks.",
      icon: "✨"
    },
    {
      id: "04",
      title: "Personal Branding",
      description: "End-to-end social media growth, consistent content strategies, and engaging your native audience day over day.",
      icon: "🚀"
    },
  ];

  return (
    <section id="services" className="relative py-24 px-4 md:px-8">
      <div className="max-w-[1400px] w-full mx-auto">
        
        <div className="text-center mb-16">
          <AnimateText>
            <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Digital <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="font-sans text-white/50 font-medium max-w-xl mx-auto">
              An all-in-one digital suite focused on real results, stunning visuals, and incredibly engaging content strategies.
            </p>
          </AnimateText>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <AnimateCard 
              key={service.id} 
              delay={0.1 * index}
              className="bento-card p-8 flex flex-col min-h-[320px] group relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#ff3333]/0 to-[#ff3333]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex-1">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="font-sans text-2xl font-bold text-white tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-white/50 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </AnimateCard>
          ))}
        </div>

      </div>
    </section>
  );
}
