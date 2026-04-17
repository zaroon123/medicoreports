'use client';
import { useGSAP } from '@gsap/react';
import featureVideoCard1 from '@public/images/medicoreports/cases.png';
import featureVideoCard2 from '@public/images/medicoreports/reports.png';
import featureVideoCard3 from '@public/images/medicoreports/cases.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

import featureCases from '@public/images/homepage/features/cases.png';
import featureSecure from '@public/images/homepage/features/secure.png';
import featureEncrypted from '@public/images/homepage/features/encrypted.png';

gsap.registerPlugin(ScrollTrigger);
 
const FeaturesFileCard = () => {
  const featureCard1Ref = useRef<HTMLElement>(null);
  const featureCard2Ref = useRef<HTMLElement>(null);
  const featureCard3Ref = useRef<HTMLElement>(null);

  useGSAP( 
    () => {
      const featureCard1 = featureCard1Ref.current;
      const featureCard2 = featureCard2Ref.current;
      const featureCard3 = featureCard3Ref.current;

      if (featureCard1) {
        gsap.from(featureCard1, {
          x: 100,
          rotation: 0,
          duration: 0.8,
          delay: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featureCard1,
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: 2,
          },
        });
      }

      if (featureCard2) {
        gsap.from(featureCard2, {
          rotation: 18,
          duration: 0.8,
          delay: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featureCard2,
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: 2,
          },
        });
      }

      if (featureCard3) {
        gsap.from(featureCard3, {
          x: -100,
          rotation: 0,
          duration: 0.8,
          delay: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featureCard3,
            start: 'top 90%',
            end: 'bottom 20%',
            scrub: 2,
          },
        });
      }
    },
    { scope: featureCard1Ref },
  );

  return (
    <RevealAnimation delay={0.2}>
      <div className="bg-white rounded-[20px] space-y-8 p-5 sm:p-8 md:p-5 xl:p-8">
        <div className="flex justify-center -space-x-12 items-center">
          <figure
            ref={featureCard1Ref}
            className="max-w-[214px] w-full overflow-hidden rotate-[12deg] rounded-b-[15px] shadow-13 ">
            <Image src={featureCases} alt="feature-1" className="w-full h-full object-cover" />
          </figure>
          <figure
            ref={featureCard2Ref}
            className="max-w-[214px] w-full overflow-hidden relative z-10 rounded-b-[15px] ">
            <Image src={featureSecure} alt="feature-1" className="w-full h-full object-cover" />
          </figure>
          <figure
            ref={featureCard3Ref}
            className="max-w-[214px] w-full overflow-hidden rounded-b-[15px] relative z-10 -rotate-[12deg] shadow-13 ">
            <Image src={featureEncrypted} alt="feature-1" className="w-full h-full object-cover" />
          </figure>
        </div>
        <RevealAnimation delay={0.1} start="top 97%">
          <div className="max-md:space-y-0.5 relative z-20">
            <h3 className="text-heading-6 md:text-heading-5">Secure & Effortless Data Management  </h3>
            <p className="max-w-[450px]">
              Access, organise, and protect your medico-legal reports with ease. dictAIte ensures seamless case tracking, AI-powered report generation, and compliance with medico-legal data security standards.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </RevealAnimation>
  );
};
 
export default FeaturesFileCard;
