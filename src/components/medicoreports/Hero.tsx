'use client';

import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import { CheckIcon, DownArrowIcon, TransferSuccessIcon, UpArrowIcon } from '@/icons';
import avatar9 from '@public/images/medicoreports/left-cursor-widget.png';
import rightTopImage from '@public/images/medicoreports/right-cursor-widget.png';
import gradient12 from '@public/images/gradient/gradient-12.png';
import heroBottomImage from '@public/images/home-page-18/hero-bottom-image.png';
import heroImageDark from '@public/images/home-page-18/hero-image-dark.png';
import heroImage from '@public/images/home-page-18/hero-image.png';
import heroLeftCursorDark from '@public/images/home-page-18/hero-left-cursor-dark.svg';
import heroLeftCursor from '@public/images/medicoreports/Left-cursor.png';
import misc06Dark from '@public/images/home-page-18/misc-06-dark.png';
import misc06 from '@public/images/home-page-18/misc-06.png';
import badge3 from '@public/images/medicoreports/Right-cursor.png';
import badgeDark3 from '@public/images/home-page-7/badge-dark-3.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';
import LinkButton from '../ui/button/LinkButton';

import heroBanner from '@public/images/medicoreports/CRMimage.png';

const benefits = [
  {
    id: 1,
    text: 'Boost your business with AI.',
  },
  {
    id: 2,
    text: 'Trusted by leading industries worldwide.',
  },
  {
    id: 3,
    text: 'Start your AI journey today.',
  },
];

const experienceList = [
  {
    id: 1,
    text: '8 years in creative direction, design & code',
  }, 
  { 
    id: 2, 
    text: 'Collaborated with over 50 brands in tech, fashion, and media',
  },
  {
    id: 3,
    text: 'Enthusiastic about typography, interaction, and minimalism',
  }, 
];

const Hero = () => { 
  const sceneRef = useParallaxEffect();
  return (
    <section
      ref={sceneRef}
      className="pt-[320px] md:pt-[200px] lg:pt-[200px] xl:pt-[260px] pb-16 md:pb-20 lg:pb-[120px] xl:pb-[150px] bg-[url('/images/medicoreports/hero-bg.png')] bg-no-repeat bg-top relative z-0"
      id="scene">
      {/*Hero Title Content*/}
      <div className="main-container flex flex-col items-center space-y-[124px] relative z-10 mb-[100px] lg:mb-[150px] xl:mb-[220px]">
        {/*Hero shape left item*/}
        <div className="absolute -top-[160px] md:-top-[80px] w-[323px] lg:top-[50px] left-5 lg:left-[50px] 2xl:-left-[120px] md:rotate-8 -z-10">
          <RevealAnimation delay={0.9} useSpring offset={100} duration={1.9}>
            <figure
              className="w-[112px] top-0 absolute right-0 parallax-effect"
              data-parallax-value="1.2"
              data-parallax-y="1.2"
              data-parallax-x="1.2">
              <Image src={heroLeftCursor} alt="shape" className="w-full h-full dark:hidden" />
              <Image src={heroLeftCursorDark} alt="shape" className="w-full h-full hidden dark:inline-block" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.8} useSpring offset={80} duration={2.9}>
            <div className="w-[300px] absolute top-[60px] lg:top-[160px] xl:top-[60px] left-0 md:left-6 lg:left-0 space-y-4">
              <div className="dark:bg-black w-full space-y-4 rounded-xl">
                {/* heading  */}
                <div className="flex items-center justify-between">
                  <Image
                    src={avatar9}
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
        {/*Hero shape right item*/}
        <div className="absolute -top-[200px] md:-top-[80px] w-[323px] lg:top-[50px] right-5 lg:right-[50px] 2xl:-right-[120px] -rotate-8 -z-12">
          <RevealAnimation delay={0.9} useSpring offset={100} duration={1.9}>
            <figure
              className="w-[155px] top-0 absolute left-0 parallax-effect hidden sm:block"
              data-parallax-value="1.2"
              data-parallax-y="1.2"
              data-parallax-x="-1.2">
              <Image src={badge3} alt="shape" className="w-full h-full dark:hidden" />
              <Image src={badgeDark3} alt="shape" className="w-full h-full hidden dark:inline-block" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.9} useSpring offset={50} duration={3.9}>
            <div className="w-[250px] lg:w-[270px] 2xl:w-[288px] absolute top-[60px] lg:top-[150px] xl:top-[60px] sm:right-5 xl:right-0 bg-white dark:bg-black rounded-2xl hidden sm:block">
              <div className="text-left">
                <Image
                    src={rightTopImage}
                    alt="shape"
                  />
              </div>
            </div>
          </RevealAnimation>
        </div>
        <div className="text-left md:text-center max-md:pt-[150px] max-lg:pt-[200px]">
          <RevealAnimation delay={0.2}>
            <h1 className="mb-4">
              Automate smarter. <br className="hidden md:block" />
              Grow faster.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[650px] mx-auto mb-6">
              &nbsp;Save time and elevate your business with intelligent workflow automation from NextSaaS.
            </p>
          </RevealAnimation>
          <ul className="list-none mb-14 flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-nowrap gap-4 md:gap-9 w-fit md:mx-auto">
            {benefits.map((item, idx) => (
              <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                <li className="flex items-center gap-2.5">
                  <span className="size-[19px] rounded-full bg-secondary dark:bg-accent/20">
                    <CheckIcon className="w-[18px] h-[18px] fill-white dark:fill-accent" />
                  </span>
                  <span className="text-tagline-2 dark:text-accent/60">{item.text}</span>
                </li>
              </RevealAnimation>
            ))}
          </ul>
          <RevealAnimation delay={0.7}>
            <div className="block md:inline-block">
              <LinkButton
                href="/pricing-01"
                className="btn btn-primary hover:btn-white dark:btn-accent btn-xl dark:hover:btn-primary w-[90%] md:w-auto mx-auto"
                aria-label="Start building free">
                Get started
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
      {/*Hero Bottom item*/}
      <div className="main-container">
        <div className="relative z-0">
          <div className="w-full h-full bg-white dark:bg-background-8 absolute -z-10 overflow-hidden rounded-[20px]">
            <RevealAnimation delay={0.7} useSpring offset={140} direction="right">
              <div className="-z-10 absolute lg:-top-[155%] md:-top-[65%] -top-[75%] -right-[75%] lg:-right-[40%] md:-right-[70%] md:rotate-[60deg] rotate-[10deg] size-[1060px] select-none pointer-events-none">
                <Image src={gradient12} alt="gradient" />
              </div>
            </RevealAnimation>
          </div>
          {/* banner */}
          <RevealAnimation delay={0.4} direction="up" instant>
            <figure className="max-w-[620px] -mb-3 lg:max-w-[840px] xl:max-w-[1000px] 2xl:max-w-[1016px] min-[1800px]:!max-w-[1166px] mx-auto">
              <Image src={heroBanner} alt="Hero banner" className="w-full h-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
