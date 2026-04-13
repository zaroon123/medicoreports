import heroImg01DarkImage from '@public/images/home-page-9/hero-img-01-dark.png';
import heroImg01Image from '@public/images/home-page-9/hero-img-01.png';
import heroImg02DarkImage from '@public/images/home-page-9/hero-img-02-dark.png';
import heroImg02Image from '@public/images/home-page-9/hero-img-02.png';
import heroImg03DarkImage from '@public/images/home-page-9/hero-img-03-dark.png';
import heroImg03Image from '@public/images/home-page-9/hero-img-03.png';
import heroImg04DarkImage from '@public/images/home-page-9/hero-img-04-dark.png';
import heroImg04Image from '@public/images/home-page-9/hero-img-04.png';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import AvatarGroup from '@/components/medicoreports/AvatarGroup';
import { Fragment } from 'react/jsx-runtime';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import FooterFour from '@/components/shared/footer/FooterFour';
import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import aboutDataIntegration1DarkImage from '@public/images/home-page-6/aboaut-data-integration-1-dark.png';
import aboutDataIntegration1Image from '@public/images/home-page-6/about-data-integration-1.png';
import aboutDataIntegration2DarkImage from '@public/images/home-page-6/about-data-integration-2-dark.svg';
import aboutDataIntegration2Image from '@public/images/home-page-6/about-data-integration-2.svg';
import aboutDataIntegration3DarkImage from '@public/images/home-page-6/about-data-integration-3-dark.svg';
import aboutDataIntegration3Image from '@public/images/home-page-6/about-data-integration-3.svg';
import feature1Img from '@public/images/home-page-8/feature-1.png';
import Progress from '@/components/homepage-04/Progress';
import NumberAnimation from '@/components/animation/NumberAnimation';
import { DownArrowIcon, UpArrowIcon } from '@/icons';
import featureImg from '@public/images/about-page-03/feature.png';
import salesAssetDarkImg from '@public/images/about-page-03/sales-asset-dark.svg';
import salesAssetImg from '@public/images/about-page-03/sales-asset.svg';
import satisfiedUserAssetLightImg from '@public/images/about-page-03/satisfied-user-asset-light.png';
import satisfiedUserAssetImg from '@public/images/about-page-03/satisfied-user-asset.png';
import badge3Img from '@public/images/home-page-7/badge-3.svg';
import businessGrowthCardDarkImg from '@public/images/about-page-03/business-growth-card-dark.png';
import businessGrowthCardImg from '@public/images/about-page-03/business-growth-card.png';
import authorAvatarBgImg from '@public/images/avatar/author-avatar-bg.png';
import avatar1Img from '@public/images/avatar/avatar-1.png';
import avatar2Img from '@public/images/avatar/avatar-2.png';
import avatar3Img from '@public/images/avatar/avatar-3.png';
import gradient4Img from '@public/images/gradient/gradient-4.png';
import Faq from '@/components/homepage-06/Faq';
import faqData from '@/data/json/faq/faq.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Medicoreports - Legal Sector',
};

const Legal = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-lg"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <section
          className="xl:pt-[230px] pt-[140px] bg-[url('/images/home-page-9/hero-bg.png')] md:pt-[160px] lg:pt-[200px] pb-[120px] lg:pb-[150px] xl:pb-[200px] bg-no-repeat bg-left lg:bg-top-right"
          aria-label="Hero section">
          <div className="main-container">
            <div className="flex 2xl:gap-[100px] flex-col sm:flex-row h-[396px]">
              {/* hero text  */}
              <div className="lg:max-w-[570px] xl:max-w-[595px] md:w-full text-center lg:text-left">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-white mb-5">Keep an eye on your finances</span>
                </RevealAnimation>

                <RevealAnimation delay={0.2}>
                  <h1 className="mb-4">Cloud solutions for business success</h1>
                </RevealAnimation>

                <RevealAnimation delay={0.3}>
                  <p className="mb-10 md:mb-14 lg:max-w-[440px] xl:max-w-[570px]">
                    Empower your business with NextSaaS—your all-in-one cloud-based software designed for performance,
                    automation, and growth.
                  </p>
                </RevealAnimation>

                {/* hero btns */}
                <ul className="flex items-center flex-col md:flex-row gap-4 mb-9 md:justify-center lg:justify-start">
                  <li className="w-full sm:w-auto">
                    <RevealAnimation delay={0.3} direction="left" offset={50}>
                      <LinkButton
                        href="/contact-us"
                        className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-white w-[90%] md:w-auto">
                        Get started
                      </LinkButton>
                    </RevealAnimation>
                  </li>
                  <li className="w-full sm:w-auto">
                    <RevealAnimation delay={0.4} direction="left" offset={50}>
                      <LinkButton
                        href="/pricing-01"
                        className="btn btn-white dark:btn-transparent btn-xl hover:btn-primary w-[90%] md:w-auto">
                        14-Days Free Trial
                      </LinkButton>
                    </RevealAnimation>
                  </li>
                </ul>

                <AvatarGroup />
              </div>

              {/* hero image  */}
              <div className="relative" aria-hidden="true">
                <RevealAnimation delay={0.3} useSpring={true} duration={2}>
                  <figure className="absolute z-[1] left-0 top-0 rounded-[20px] overflow-hidden w-[408px] hidden lg:block">
                    <Image
                      src={heroImg01Image}
                      alt="Hero img 1"
                      className="size-full object-cover dark:hidden"
                      width={408}
                      height={408}
                      priority
                    />
                    <Image
                      src={heroImg01DarkImage}
                      alt="Hero img 1"
                      className="size-full object-cover dark:inline-block hidden"
                      width={408}
                      height={408}
                      priority
                    />
                  </figure>
                </RevealAnimation>

                <RevealAnimation delay={0.4} useSpring={true} duration={2}>
                  <figure className="absolute z-[2] top-[275px] left-0 w-[408px] overflow-hidden rounded-[20px] hidden lg:block">
                    <Image
                      src={heroImg02Image}
                      alt="Hero img 2"
                      className="size-full object-cover dark:hidden"
                      width={408}
                      height={408}
                      priority
                    />
                    <Image
                      src={heroImg02DarkImage}
                      alt="Hero img 2"
                      className="size-full object-cover dark:inline-block hidden"
                      width={408}
                      height={408}
                      priority
                    />
                  </figure>
                </RevealAnimation>

                <RevealAnimation delay={0.5} useSpring={true} duration={2}>
                  <figure className="relative z-[3] left-[358px] rotate-[-20deg] top-[43px] overflow-hidden w-[273px] hidden lp:block">
                    <Image
                      src={heroImg03Image}
                      alt="Hero img 3"
                      className="size-full object-cover dark:hidden"
                      width={273}
                      height={273}
                      priority
                    />
                    <Image
                      src={heroImg03DarkImage}
                      alt="Hero img 3"
                      className="size-full object-cover dark:inline-block hidden"
                      width={273}
                      height={273}
                      priority
                    />
                  </figure>
                </RevealAnimation>

                <RevealAnimation delay={0.6} useSpring={true} duration={2}>
                  <figure className="relative z-[4] top-[-115px] left-[401px] rotate-[5deg] overflow-hidden w-[273px] shadow-4 hidden lp:block">
                    <Image
                      src={heroImg04Image}
                      alt="Hero img 4"
                      className="size-full object-cover dark:hidden"
                      width={273}
                      height={273}
                      priority
                    />
                    <Image
                      src={heroImg04DarkImage}
                      alt="Hero img 4"
                      className="size-full object-cover dark:inline-block hidden"
                      width={273}
                      height={273}
                      priority
                    />
                  </figure>
                </RevealAnimation>

                <RevealAnimation delay={0.7} useSpring={true} duration={2}>
                  <figure className="relative z-[3] top-[-310px] left-[450px] rotate-[5deg] overflow-hidden w-[273px] shadow-4 hidden lp:block">
                    <Image
                      src={heroImg04Image}
                      alt="Hero img 5"
                      className="size-full object-cover dark:hidden"
                      width={273}
                      height={273}
                      priority
                    />
                    <Image
                      src={heroImg04DarkImage}
                      alt="Hero img 5"
                      className="size-full object-cover dark:inline-block hidden"
                      width={273}
                      height={273}
                      priority
                    />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-[100px] xl:pb-[150px] xl:pt-[150px] bg-background-2 dark:bg-background-5">
          <div className="main-container">
            <div className="flex lg:items-end items-center lg:flex-row flex-col lg:gap-0 gap-4 justify-between mb-[70px]">
              <div className="flex-1 lg:text-left text-center">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <span className="badge badge-green">Use cases</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[518px]">How We Connect with Customers</h2>
                  </RevealAnimation>
                </div>
              </div>
              <div className="flex-1 lg:text-left text-center">
                <div>
                  <RevealAnimation delay={0.3}>
                    <p className="max-w-[518px] lg:mx-0 mx-auto">
                      Explore the ways our innovative solutions improve communication and boost efficiency in your
                      organization. From streamlined workflows to enhanced collaboration tools, we provide everything you
                      need to succeed.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 lg:gap-8 gap-y-14">
              <RevealAnimation delay={0.4}>
                <div className="col-span-12 lg:col-span-4">
                  <div className="space-y-6">
                    <div className="max-lg:text-center">
                      <span className={`ns-shape-14 text-[52px] text-secondary dark:text-accent`} />
                    </div>
                    <div className="space-y-1 lg:text-left text-center">
                      <h3 className="text-heading-5">Creative Filters & Effects</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Add artistic flair to your images with AI-powered creative filters and effects — from cinematic tones to vintage aesthetics and modern stylizations.</p>
                    </div>
                    <div className="lg:text-left text-center">
                      <LinkButton
                        href={`/contact-us`}
                        className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                        Read more
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="col-span-12 lg:col-span-4">
                  <div className="space-y-6">
                    <div className="max-lg:text-center">
                      <span className={`ns-shape-9 text-[52px] text-secondary dark:text-accent`} />
                    </div>
                    <div className="space-y-1 lg:text-left text-center">
                      <h3 className="text-heading-5">Cryptocurrency Lending</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">A secure and efficient way for individuals and businesses to lend or borrow digital assets, earn interest, and access liquidity without traditional banks.</p>
                    </div>
                    <div className="lg:text-left text-center">
                      <LinkButton
                        href={`/contact-us`}
                        className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                        Read more
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="col-span-12 lg:col-span-4">
                  <div className="space-y-6">
                    <div className="max-lg:text-center">
                      <span className={`ns-shape-15 text-[52px] text-secondary dark:text-accent`} />
                    </div>
                    <div className="space-y-1 lg:text-left text-center">
                      <h3 className="text-heading-5">Customer Support Automation</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Deliver exceptional customer experiences with AI-powered support automation that reduces response times, lowers costs, and improves satisfaction.</p>
                    </div>
                    <div className="lg:text-left text-center">
                      <LinkButton
                        href={`/contact-us`}
                        className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                        Read more
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>
        <section className="bg-background-2 dark:bg-background-5 pt-[100px] lg:pt-[150px] xl:pt-[150px] pb-[100px] overflow-hidden">
          <div className="main-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:gap-[100px] md:gap-y-20 sm:gap-y-10 gap-y-28 lg:mb-[120px]">
              <div className="max-lg:order-0">
                {/*Integration Images*/}
                <div className="relative z-10 inline-block max-lg:left-1/2 max-lg:-translate-x-1/2">
                  <RevealAnimation delay={0.2}>
                    <figure className="max-w-[358px] rounded-[20px]">
                      <Image
                        src={aboutDataIntegration1Image}
                        alt="about-data-integration"
                        className="size-full dark:hidden rounded-[20px] object-cover"
                      />
                      <Image
                        src={aboutDataIntegration1DarkImage}
                        alt="about-data-integration"
                        className="size-full hidden dark:inline-block rounded-[20px] object-cover"
                      />
                    </figure>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3} direction="right">
                    <figure className="absolute max-sm:w-[200px] md:w-[250px] lg:w-[260px] xl:w-auto -top-12 -right-14 sm:-top-[90px] sm:-right-[200px] md:-right-[150px] lg:-right-[150px] xl:-right-[200px] rounded-2xl overflow-hidden">
                      <Image
                        src={aboutDataIntegration2Image}
                        alt="about-data-integration"
                        className="size-full object-cover block dark:hidden"
                      />
                      <Image
                        src={aboutDataIntegration2DarkImage}
                        alt="about-data"
                        className="size-full object-cover hidden dark:block"
                      />
                    </figure>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4} direction="right">
                    <figure className="absolute max-sm:w-[130px] bottom-12 -right-14 sm:bottom-[85px] sm:-right-[200px] md:-right-[150px] lg:-right-[150px] xl:-right-[200px] -z-10 rounded-2xl overflow-hidden">
                      <Image
                        src={aboutDataIntegration3Image}
                        alt="about-data-integration"
                        className="size-full object-cover block dark:hidden"
                      />
                      <Image
                        src={aboutDataIntegration3DarkImage}
                        alt="about-data-integration"
                        className="size-full object-cover hidden dark:inline-block"
                      />
                    </figure>
                  </RevealAnimation>
                </div>
              </div>
              {/*Integration Data*/}
              <div className="pt-5 max-lg:order-1">
                <div className="max-w-[592px] mx-auto lg:mx-0 lg:text-left text-center lg:max-w-full">
                  <div className="space-y-5 mb-8">
                    <RevealAnimation delay={0.2}>
                      <span className="badge badge-green mb-5">Data integrations</span>
                    </RevealAnimation>
                    <div className="space-y-3 mb-8">
                      <RevealAnimation delay={0.3}>
                        <h2 className="max-w-[592px] mx-auto lg:mx-0">
                          A clear vision is essential for understanding wealth dynamics.
                        </h2>
                      </RevealAnimation>
                      <RevealAnimation delay={0.4}>
                        <p>
                          A clear vision is essential for understanding wealth dynamics because it provides direction,
                          purpose, and clarity in navigating financial growth and sustainability.
                        </p>
                      </RevealAnimation>
                    </div>
                  </div>
                  <ul className="max-sm:flex-col flex sm:items-start items-center gap-6 mb-14">
                    <RevealAnimation delay={0.5}>
                      <li className="flex items-center gap-2">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <path
                            d="M15.1875 5.0625L7.3125 12.9371L3.375 9"
                            className="stroke-secondary dark:stroke-accent"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-secondary font-medium text-tagline-1 dark:text-accent/60">
                          On demand support
                        </span>
                      </li>
                    </RevealAnimation>
                    <RevealAnimation delay={0.6}>
                      <li className="flex items-center gap-2">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <path
                            d="M15.1875 5.0625L7.3125 12.9371L3.375 9"
                            className="stroke-secondary dark:stroke-accent"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-secondary font-medium text-tagline-1 dark:text-accent/60">
                          Information Sharing
                        </span>
                      </li>
                    </RevealAnimation>
                    <RevealAnimation delay={0.7}>
                      <li className="flex items-center gap-2">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <path
                            d="M15.1875 5.0625L7.3125 12.9371L3.375 9"
                            className="stroke-secondary dark:stroke-accent"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-secondary font-medium text-tagline-1 dark:text-accent/60">
                          Cloud Technology
                        </span>
                      </li>
                    </RevealAnimation>
                  </ul>
                  <RevealAnimation delay={0.8}>
                    <div>
                      <LinkButton href="/signup-01" className="btn hover:btn-primary btn-xl btn-secondary dark:btn-accent">
                        Start Your Journey
                      </LinkButton>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[50px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] overflow-hidden">
          <div className="main-container">
            <div className="grid grid-cols-12 lg:gap-x-0 xl:gap-x-28 gap-y-12 items-center">
              <div className="col-span-12 lg:col-span-6">
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <span className="badge badge-cyan mb-5">Our Mission</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <h2>To help teams work and grow with smart, secure software.</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p>
                      We help companies turn messy workflows into manageable systems—one dashboard, one automation, one
                      insight at a time.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div>
                  <figure className="relative w-full md:w-[500px]">
                    <RevealAnimation delay={0.4}>
                      <div className="w-full">
                        <Image src={feature1Img} alt="features" className="w-full" />
                      </div>
                    </RevealAnimation>
                    <RevealAnimation delay={0.5} direction="right" offset={100}>
                      <div className="p-6 absolute top-3/4 -translate-y-3/4 left-[35%] sm:left-[63%] md:left-[60%] lg:left-[1%] xl:left-[50%] 2xl:left-[60%] w-[220px] md:w-[288px] h-[100px] rounded-xl overflow-hidden shadow-2 bg-white dark:bg-background-7">
                        <figcaption className="flex justify-between gap-2">
                          <span className="text-tagline-1 font-normal dark:text-accent"> Today&apos;s Revenue </span>
                          <p className="text-lg font-medium leading-[1.5] text-secondary dark:text-accent flex items-center gap-1">
                            $
                            <NumberAnimation
                              number={53224}
                              speed={1000}
                              interval={180}
                              rooms={5}
                              heightSpaceRatio={2.5}
                              className="text-lg font-medium leading-[1.5] text-secondary dark:text-accent"></NumberAnimation>
                          </p>
                        </figcaption>
                        <Progress />
                      </div>
                    </RevealAnimation>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-14 pt-10 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] overflow-hidden">
          <div className="main-container space-y-14 md:space-y-[70px]">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan mb-5">Passion meets purpose</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="xl:text-heading-1 font-medium lg:max-w-[980px] mx-auto">
                  Engineered for advancement. Crafted for potential.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="lg:max-w-[904px] mx-auto">
                  At NextSaaS, we create tools that simplify your work, scale with your growth, and bring clarity to
                  complexity. From streamlining operations to unlocking insights, our platform is built to support your
                  entire journey—from startup to enterprise.
                </p>
              </RevealAnimation>
            </div>

            {/* Features Grid */}
            <div className="flex flex-col-reverse gap-y-7 gap-x-4 md:flex-row justify-around items-start md:items-center lg:items-end 2xl:justify-evenly">
              {/* Left Column Images */}
              <article
                aria-label="Feature supporting images"
                className="space-y-[25px] flex flex-row max-md:gap-2 max-md:justify-between md:flex-col items-center md:hidden lg:block">
                <RevealAnimation delay={0.4} duration={2.8} useSpring={true} direction="left">
                  <figure className="max-w-[254px] rounded-2xl shadow-5 overflow-hidden max-h-[250px]">
                    <Image
                      src={salesAssetImg}
                      className="size-full shadow-5 object-cover block dark:hidden"
                      alt="Sales performance visualization"
                      loading="lazy"
                    />
                    <Image
                      src={salesAssetDarkImg}
                      className="size-full shadow-5 object-cover hidden dark:block"
                      alt="Sales performance visualization"
                      loading="lazy"
                    />
                  </figure>
                </RevealAnimation>

                <RevealAnimation delay={0.5} duration={2.2} useSpring={true}>
                  <figure className="max-w-[143px] rounded-2xl shadow-2 overflow-hidden max-h-[110px]">
                    <Image
                      src={satisfiedUserAssetImg}
                      className="size-full object-cover block dark:hidden"
                      alt="Sales Asset"
                    />
                    <Image
                      src={satisfiedUserAssetLightImg}
                      className="size-full object-cover hidden dark:block"
                      alt="Sales Asset"
                    />
                  </figure>
                </RevealAnimation>
              </article>

              {/* Center Main Feature Image */}
              <RevealAnimation delay={0.5} direction="up">
                <figure aria-label="Main feature visualization" className="max-w-[630px] max-h-[564px]">
                  <Image
                    src={featureImg}
                    alt="Main platform feature visualization"
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>

              {/* Right Column  Balance */}
              <article className="space-y-[37px] max-md:w-full">
                <RevealAnimation delay={0.5} useSpring={true} duration={2.2}>
                  <figure>
                    <Image src={badge3Img} alt="Achievement badge" loading="lazy" />
                  </figure>
                </RevealAnimation>

                {/* Investment  */}
                <RevealAnimation delay={0.4} direction="right">
                  <div className="flex items-start flex-col bg-secondary dark:bg-accent w-full md:w-[148px] h-auto md:h-[91px] gap-1 p-4 rounded-2xl">
                    <h3 className="text-tagline-2 text-accent dark:text-secondary font-normal">Investment target</h3>
                    <h3 className="text-heading-5 flex items-center justify-center gap-0.5 text-ns-green dark:text-secondary font-normal">
                      <NumberAnimation number={76} speed={2500} interval={180} rooms={2} heightSpaceRatio={2.6}>
                        76
                      </NumberAnimation>
                      %
                    </h3>
                  </div>
                </RevealAnimation>

                {/* Balance Card */}
                <RevealAnimation delay={0.6} direction="right">
                  <div className="bg-white dark:bg-black rounded-2xl p-6 max-w-full md:max-w-[288px] min-w-full md:min-w-[288px]">
                    <div className="text-left">
                      <span className="text-tagline-2 font-normal text-secondary dark:text-accent">Balance</span>
                      <h3 className="text-[40px] flex items-center font-normal leading-[1.2] mt-2 mb-[30px]">
                        $
                        <NumberAnimation number={45324} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.2} />
                      </h3>
                    </div>

                    <div className="flex gap-3">
                      {/* Income Card */}
                      <div className="bg-background-4 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                        <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                          <span className="bg-ns-red flex items-center justify-center rounded-full size-[18px] p-1">
                            <DownArrowIcon className="size-[8px] dark:fill-background-5" />
                          </span>
                          Income
                        </div>
                        <div className="text-lg flex items-center font-medium leading-[1.5] dark:text-accent">
                          $
                          <NumberAnimation number={48000} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                        </div>
                      </div>

                      {/* Expenses Card */}
                      <div className="bg-background-4 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                        <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                          <span className="bg-ns-green flex items-center justify-center rounded-full size-[18px] p-1">
                            <UpArrowIcon className="size-[9px] dark:fill-background-5" />
                          </span>
                          Expenses
                        </div>
                        <div className="text-lg flex items-center font-medium leading-[1.5] dark:text-accent">
                          $
                          <NumberAnimation number={2321} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              </article>
            </div>
          </div>
        </section>
        <section className="pb-20 pt-14 md:pb-28 md:pt-16 lg:pb-44 lg:pt-[88px] xl:pb-[200px] xl:pt-[100px]">
          <div className="main-container">
            <div className="grid grid-cols-12 gap-y-14 xl:gap-x-28 items-center">
              <div className="col-span-12 lg:col-span-6 mx-4 xl:mx-0">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <span className="badge badge-cyan mb-5">Our Mission</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <h2>Empowering teams to collaborate and thrive with intelligent</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p>
                      In today&apos;s fast-paced, digitally connected world, successful teams rely on more than just
                      talent—they thrive on intelligent collaboration.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              {/*  */}
              <div className="col-span-12 lg:col-span-6 relative mx-4 xl:mx-0">
                {/* Business Growth Card */}
                <RevealAnimation delay={0.5} useSpring={true} duration={2.5}>
                  <figure className="absolute max-w-[360px] z-20 overflow-hidden left-1/2 -translate-x-1/2 top-[78%] rounded-[12px]">
                    <Image
                      src={businessGrowthCardImg}
                      alt="business growth card"
                      className="h-full w-full block dark:hidden"
                    />
                    <Image
                      src={businessGrowthCardDarkImg}
                      alt="business growth card"
                      className="h-full w-full hidden dark:block"
                    />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <div className="p-[26px] backdrop-blur-[20px] bg-white/60 dark:bg-background-8 shadow-2 min-h-[380px] rounded-[20px] h-full overflow-hidden relative z-10 flex items-center justify-center">
                    {/* gradient bg */}
                    <RevealAnimation delay={0.7}>
                      <figure className="absolute select-none pointer-events-none max-[376px]:bottom-[-45%] bottom-[-54%] md:bottom-[-112%] lg:bottom-[-80%] right-[-33%] md:right-[-30%] xl:bottom-[-90%] xl:right-[-32%] max-w-[500px] md:max-w-[700px] w-full -z-10 rotate-180">
                        <Image src={gradient4Img} alt="hero author bg" className="size-full object-cover" />
                      </figure>
                    </RevealAnimation>
                    <div className="text-center -mt-20">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="flex -space-x-3.5 group">
                          <figure className="inline-block size-11 rounded-full ring-3 ring-white bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%] overflow-hidden relative">
                            <Image src={avatar1Img} alt="avatar" className="max-w-full" />
                            <Image src={authorAvatarBgImg} alt="avatar" className="absolute top-0 left-0 -z-10" />
                          </figure>
                          <figure className="inline-block size-11 rounded-full ring-3 ring-white bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%] overflow-hidden relative">
                            <Image src={avatar2Img} alt="avatar" className="max-w-full" />
                            <Image src={authorAvatarBgImg} alt="avatar" className="absolute top-0 left-0 -z-10" />
                          </figure>
                          <figure className="inline-block size-11 rounded-full ring-3 ring-white bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%] overflow-hidden relative">
                            <Image src={avatar3Img} alt="avatar" className="max-w-full" />
                            <Image src={authorAvatarBgImg} alt="avatar" className="absolute top-0 left-0 -z-10" />
                          </figure>
                          <div className="inline-flex overflow-hidden items-center justify-center size-12 rounded-full ring-3 ring-white text-secondary/80 bg-ns-yellow text-tagline-3 font-medium relative z-10">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:-translate-y-12 group-hover:translate-x-8 transition-all duration-500">
                              <path
                                d="M6 18L18 6"
                                stroke="#1A1A1C"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.25 6H18V15.75"
                                stroke="#1A1A1C"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {/*  */}
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute translate-y-6 -translate-x-12 transition-all duration-500 group-hover:-translate-x-[1px] group-hover:-translate-y-[2%]">
                              <path
                                d="M6 18L18 6"
                                stroke="#1A1A1C"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.25 6H18V15.75"
                                stroke="#1A1A1C"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <h6 className="mb-1 text-secondary dark:text-accent text-xl font-normal leading-[1 .5]">
                        20k+ global investment
                      </h6>
                      <p className="text-secondary/60 dark:text-accent/60">Get Global Investment policy in the year</p>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[50px] xl:pb-[100px]">
          <div className="main-container">
            {/* Header Section */}
            <div className="mb-14 space-y-3 text-center md:mb-[70px]">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-yellow mb-3.5 md:mb-5">Faq&apos;s</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2>Commonly asked questions</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto lg:max-w-[620px]">
                  By offering concise and informative responses, this section helps users find solutions without the need to
                  contact customer support, saving time
                </p>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.4}>
            <div>
              <Accordion
                className="max-w-[770px] mx-auto space-y-6"
                defaultValue="1"
                enableScrollAnimation={true}
                animationDelay={0.1}>
                {faqData.map((item) => (
                  <AccordionItem
                    className="bg-background-2 dark:bg-background-5 rounded-[20px] px-4 sm:px-8"
                    key={item.id}
                    value={item.id.toString()}>
                    <AccordionTrigger
                      titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                      className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                      value={item.id.toString()}
                      iconType="arrow">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>
        </section>
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </Fragment>
  );
};

export default Legal;