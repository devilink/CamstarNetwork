import { AnimateCard, AnimateText } from "./AnimateSection";

export default function HowWeWork() {
  const steps = [
    {
      id: "01",
      title: "Onboarding & Strategy",
      description: "All projects require a clear, documented briefing. Work begins immediately following a standard 50% advance payment.",
    },
    {
      id: "02",
      title: "Delivery & Revisions",
      description: "Timelines are deeply respected based on project scope. We offer limited revisions per initial agreement to definitively ensure your vision is realized.",
    },
    {
      id: "03",
      title: "Final Handover",
      description: "High-resolution final source files and completely integrated live campaigns are deployed following completion of full payment.",
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-8">
      
      <div className="glow-orb glow-orange w-[500px] h-[500px] bottom-[10%] left-[-10%] mix-blend-screen opacity-30"></div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <AnimateText>
            <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="font-sans text-white/50 font-medium max-w-xl mx-auto">
              A streamlined, transparent process designed to deliver exceptional results.
            </p>
          </AnimateText>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <AnimateCard 
              key={step.id} 
              delay={0.1 * index}
              className="bento-card p-10 md:p-12 flex flex-col justify-between min-h-[350px] relative overflow-hidden"
            >
              {/* Massive background number */}
              <div className="absolute -right-8 -bottom-12 font-sans text-[150px] font-extrabold text-white/5 select-none pointer-events-none">
                {step.id}
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-sans font-bold text-white mb-8">
                  {step.id}
                </div>
                
                <h3 className="font-sans text-2xl font-bold text-white tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-white/60 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimateCard>
          ))}
        </div>

      </div>
    </section>
  );
}
