import { DownArrowIcon, TransferSuccessIcon, UpArrowIcon } from '@/icons';
import avatar9 from '@public/images/avatar/avatar-9.png';
import heroBgDark from '@public/images/home-page-19/hero-bg-dark.svg';
import heroBg from '@public/images/home-page-19/hero-bg.svg';
import heroImg01Dark from '@public/images/home-page-19/hero-img-01-dark.png';
import heroImg01 from '@public/images/home-page-19/hero-img-01.png';
import heroImg06Dark from '@public/images/home-page-19/hero-img-06-dark.svg';
import heroImg06 from '@public/images/home-page-19/hero-img-06.svg';
import heroImg07Dark from '@public/images/home-page-19/hero-img-07-dark.png';
import heroImg07 from '@public/images/home-page-19/hero-img-07.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';
import LinkButton from '../ui/button/LinkButton';

import heroMedqonVault from '@public/images/medqon-vault/section 1.png';

const Hero = () => { 
  return ( 
    <section className="pt-[115px] pb-[97px] overflow-hidden">
      <div className="max-w-[1365px] mx-auto">
        <div className="relative">
          {/* hero bg  */}
          <figure className="absolute animate-pulse z-0 max-w-[1365px] -top-5 left-[50%] translate-x-[-50%] w-full h-full overflow-hidden">
            <Image src={heroBg} alt="Decorative background pattern" className="size-full object-cover dark:hidden" />
            <Image
              src={heroBgDark}
              alt="Decorative background pattern"
              className="size-full object-cover hidden dark:inline-block"
            />
          </figure>
          <div className="main-container">
            <div className="flex items-start gap-12 xl:gap-0 flex-col lg:flex-row justify-between pt-4 lg:pt-[200px] pb-[110px]">
              {/* hero content  */}
              <div className="lg:max-w-[490px] xl:max-w-[629px] w-full space-y-7 lg:space-y-14 text-center md:text-left">
                {/* heading text  */}
                <div className="space-y-4">
                  <RevealAnimation delay={0.2}>
                    <span className="badge badge-green mb-5">Medico-legal case management platform</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <h1 className="text-5xl sm:text-5xl lg:text-[3.8rem]">
                      The operating system for medico-legal case management
                    </h1>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p>
                      Manage instructions, experts, appointments, documents, billing, and report workflows in one secure medico-legal platform.
                    </p>
                  </RevealAnimation>
                </div>
                {/* heading btn  */}
                <RevealAnimation delay={0.4} className="w-full md:w-auto">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-lg btn-primary hover:btn-secondary dark:hover:btn-accent w-[90%] md:w-auto">
                    <span>Book a Demo</span>
                  </LinkButton>
                </RevealAnimation>
              </div>
              <div className="relative" aria-hidden="true">
                {/* income   */}
                <figure className="p-2.5 dark:bg-background-9 rounded-xl max-w-[480px] md:max-w-[403px] lg:max-w-[475px] xl:max-w-[408px] 2xl:max-w-[708px] w-full relative left-[30px] md:left-[160px] lg:left-[-109px] xl:left-[-107px] 2xl:left-[-3px] top-[30px] lg:top-[1px]">
                    <Image src={heroMedqonVault} alt="Application dashboard interface" className="rounded-xl dark:hidden" />
                    <Image
                      src={heroMedqonVault}
                      alt="Application dashboard interface"
                      className="rounded-xl hidden dark:block"
                    />
                  </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
