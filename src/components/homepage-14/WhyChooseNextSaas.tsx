import { cn } from '@/utils/cn';
import gradient from '@public/images/gradient/gradient-11.png';
import holdMobile from '@public/images/home-page-22/hold-mobile.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import whyMedqon from '@public/images/report-writer-for-experts/why-medqon.gif';

const data = [
  {
    id: 1,
    icon: 'ns-shape-13',
    title: 'Consistent report quality',
    description: 'Standardised structure ensures every report meets medico-legal expectations',
  },
  {
    id: 2,
    icon: 'ns-shape-41',
    title: 'Faster turnaround',
    description: 'Reduce report creation time from hours to minutes',
  },
  {
    id: 3,
    icon: 'ns-shape-36',
    title: 'No rework required',
    description: 'Built-in structure removes the need for repeated edits and corrections',
  },
  {
    id: 4,
    icon: 'ns-shape-35', 
    title: 'Compliance built in',
    description: 'Reports are aligned with medico-legal standards by default',
  },

  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Verifiable report integrity',
    description: 'Confirm whether a report is original or has been altered',
  },
  {
    id: 6,
    icon: 'ns-shape-30',
    title: 'Secure data handling',
    description: 'All case data and reports are stored within controlled environments',
  },
];

const WhyChooseNextSaas = () => {
  return (
    <section className="py-20 md:py-[90px] lg:py-[100px]" aria-label="Why choose NextSaaS">
      <div className="main-container">
        <div className="pt-16 md:pt-[100px] max-lg:pb-10 px-5 sm:px-7 md:px-14 relative rounded-4xl bg-white overflow-hidden dark:bg-background-8">
          <RevealAnimation delay={0.8} duration={0.9} offset={200} direction="up">
            <figure className="absolute top-[-407px] md:top-[-354px] rounded-t-4xl right-[-145px] md:right-[-149px] rotate-[240deg] md:rotate-[238deg] size-[650px] opacity-90 select-none pointer-events-none">
              <Image src={gradient} alt="Gradient background" className="size-full object-cover" />
            </figure>  
          </RevealAnimation>
          <div className="space-y-[70px]">
            {/* heading  */}
            <div className="space-y-[20px] text-center md:text-left">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-yellow">Why Medqon?</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2>Built for accuracy, speed, and trust</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>From structured documentation to verifiable reports, every part of the system is designed to support medico-legal professionals.</p>
                </RevealAnimation>
              </div>
            </div>
            {/* content  */}
            <div className="max-w-[1178px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
              <div className="w-full gap-8 flex flex-col md:flex-row lg:flex-col">
                {data.slice(0, 3).map((item, index) => (
                  <RevealAnimation delay={0.6 + index * 0.1} direction="left" key={item.id}>
                    <div className="space-y-3 md:max-w-[300px] w-full">
                      <span className={cn('block text-[36px] text-secondary dark:text-accent', item.icon)} />
                      <div>
                        <h3 className="text-tagline-1 font-medium">{item.title}</h3>
                        <p className="text-tagline-2">{item.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
              {/* feature img  */}
              <RevealAnimation delay={0.7} duration={0.7} offset={80}>
                <figure className="w-full lg:w-[638.95px] lg:h-[640px] order-first lg:order-none lg:mt-[66px] xl:mt-0 lg:mr-6 xl:mr-0 flex-shrink-0">
                  <Image
                    src={whyMedqon}
                    alt="Investment platform interface showing key features"
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
              {/* right side feature  */}
              <div className="w-full gap-8 flex flex-col md:flex-row lg:flex-col lg:ml-4 xl:ml-0">
                {data.slice(3).map((item, index) => (
                  <RevealAnimation delay={0.6 + index * 0.1} direction="right" key={item.id}>
                    <div className="space-y-3 md:max-w-[300px] w-full">
                      <span className={cn('block text-[36px] text-secondary dark:text-accent', item.icon)} />
                      <div>
                        <h3 className="text-tagline-1 font-medium">{item.title}</h3>
                        <p className="text-tagline-2">{item.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNextSaas;
