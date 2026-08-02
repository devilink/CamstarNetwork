import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="bg-[#111111] text-[#f4f4f4] py-24 px-6 md:px-12 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Headline with Inline Images */}
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif tracking-tight leading-[1.3] md:leading-[1.1] text-center max-w-5xl">
          A{' '}
          <span className="inline-block align-middle mx-2 md:mx-3 w-16 h-12 md:w-28 md:h-20 rounded-xl md:rounded-2xl overflow-hidden relative">
            <Image
              src="/assets/noti.jpg" // Replace with your image path
              alt="Creative workspace"
              fill
              className="object-cover"
            />
          </span>{' '}
          creative powerhouse<br className="hidden md:block" />
          where we{' '}
          <span className="inline-block align-middle mx-2 md:mx-3 w-16 h-12 md:w-28 md:h-20 rounded-xl md:rounded-2xl overflow-hidden relative">
            <Image
              src="/assets/brin.jpg" // Replace with your image path
              alt="Dynamic visual design"
              fill
              className="object-cover"
            />
          </span>{' '}
          dominates<br className="hidden md:block" />
          digital space...{' '}
          <span className="inline-block align-middle mx-2 md:mx-3 w-20 h-12 md:w-32 md:h-20 rounded-xl md:rounded-[20px] overflow-hidden relative">
            <Image
              src="/assets/lappy.jpg" // Replace with your image path
              alt="Team collaborating"
              fill
              className="object-cover"
            />
          </span>
        </h1>

      </div>
    </section>
  );
}