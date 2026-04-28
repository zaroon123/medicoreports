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

import section1Image from '@public/images/other-sectors/legal/section-1.png';
import section3Image from '@public/images/other-sectors/legal/section-3.png';
import section4Image from '@public/images/other-sectors/legal/section-4.png';
import section5Image from '@public/images/other-sectors/legal/section-5.png';

import whyMedqonVaultImage from '@public/images/medqon-vault/section-2/why-medqon-vault.png';
import { cn } from '@/utils/cn';
import gradient from '@public/images/gradient/gradient-11.png';
import Faq from '@/components/homepage-06/Faq';
import faqData from '@/data/json/faq/faq.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Medicoreports - Legal Sector',
};

const data = [
  {
    id: 1,
    icon: 'ns-shape-13',
    title: 'Case-Centred Communication',
    description: 'All emails, correspondence, and updates are automatically linked to the relevant case, eliminating fragmented communication.',
  },
  {
    id: 2,
    icon: 'ns-shape-41',
    title: 'Integrated Scheduling & Appointments',
    description: 'Manage appointments, availability, and reminders within the same system, keeping cases moving without manual coordination.',
  },
  {
    id: 3,
    icon: 'ns-shape-36',
    title: 'Task & Workflow Tracking',
    description: 'Assign tasks, monitor progress, and ensure every step from instruction to completion is tracked and accountable.',
  },
  {
    id: 4,
    icon: 'ns-shape-35',
    title: 'Built-In Workflow Structure',
    description: 'Standardise how cases progress, from intake through to report delivery, ensuring consistency across teams.',
  },

  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Full Case Visibility',
    description: 'Track case status, workload, and bottlenecks in real time, with complete oversight across all users.',
  },
  {
    id: 6,
    icon: 'ns-shape-30',
    title: 'Secure, Controlled Access',
    description: 'Role-based permissions, audit logs, and secure handling of sensitive case data across the entire system.',
  },
];

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
                  <span className="badge badge-white mb-5">Compliance-driven legal documentation engine</span>
                </RevealAnimation>

                <RevealAnimation delay={0.2}>
                  <h1  className="text-5xl sm:text-5xl lg:text-[3.8rem]">Turn legal work into structured, defensible documents in minutes</h1>
                </RevealAnimation>

                <RevealAnimation delay={0.3}>
                  <p className="mb-10 md:mb-14 lg:max-w-[440px] xl:max-w-[570px]">
                    Capture conversations, extract key facts, and generate jurisdiction-ready legal documents with built-in compliance, audit trails, and formatting.
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
                  {/* <li className="w-full sm:w-auto">
                    <RevealAnimation delay={0.4} direction="left" offset={50}>
                      <LinkButton
                        href="/pricing-01"
                        className="btn btn-white dark:btn-transparent btn-xl hover:btn-primary w-[90%] md:w-auto">
                        14-Days Free Trial
                      </LinkButton>
                    </RevealAnimation>
                  </li> */}
                </ul>

                {/* <AvatarGroup /> */}
              </div>

              {/* hero image  */}
              <div className="relative" aria-hidden="true">
                <RevealAnimation delay={0.3} useSpring={true} duration={2}>
                  <figure className="absolute z-[1] left-0 top-0 rounded-[20px] overflow-hidden w-[550px] hidden lg:block">
                    <Image
                      src={section1Image}
                      alt="Hero img 1"
                      className="size-full object-cover dark:hidden"
                      width={550}
                      height={550}
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
                    <span className="badge badge-green">conversation → structured output</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[518px]">Where Structured Documentation Matters Most</h2>
                  </RevealAnimation>
                </div>
              </div>
              <div className="flex-1 lg:text-left text-center">
                <div>
                  <RevealAnimation delay={0.3}>
                    <p className="max-w-[518px] lg:mx-0 mx-auto">
                      See how Medqon converts real-world legal workflows into structured, compliant documentation - reducing drafting time, improving consistency, and strengthening evidentiary quality.
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
                      <h3 className="text-heading-5">Client Interviews & Case Intake</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Capture client conversations and automatically structure them into clear, formatted case summaries, reducing manual note-taking and missed details.</p>
                    </div>
                    <div className="lg:text-left text-center">
                      <LinkButton
                        href={`/contact-us`}
                        className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                        Explore use case
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
                      <h3 className="text-heading-5">Witness Statements & Legal Narratives</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Convert spoken or written input into structured, formal statements aligned with legal standards, ensuring clarity, consistency, and admissibility.</p>
                    </div>
                    <div className="lg:text-left text-center">
                      <LinkButton
                        href={`/contact-us`}
                        className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                        Explore use case
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
                      <h3 className="text-heading-5">Case Reports & Legal Documentation</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Generate complete, structured legal documents with consistent formatting, logical flow, and built-in compliance checks.</p>
                    </div>
                    <div className="lg:text-left text-center">
                      <LinkButton
                        href={`/contact-us`}
                        className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                        Explore use case
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
                      <h3 className="text-heading-5">Compliance & Audit-Ready Records</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Automatically produce documentation with embedded structure, traceability, and consistency checks to support regulatory and internal audits.</p>
                    </div>
                    <div className="lg:text-left text-center">
                      <LinkButton
                        href={`/contact-us`}
                        className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                        Explore use case
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
                    <figure className="max-w-[608px] rounded-[20px]">
                      <Image
                        src={section3Image}
                        alt="about-data-integration"
                        className="size-full dark:hidden rounded-[20px] object-cover"
                      />
                      <Image
                        src={section3Image}
                        alt="about-data-integration"
                        className="size-full hidden dark:inline-block rounded-[20px] object-cover"
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
                      <span className="badge badge-green mb-5">How Medqon Works</span>
                    </RevealAnimation>
                    <div className="space-y-3 mb-8">
                      <RevealAnimation delay={0.3}>
                        <h2 className="max-w-[592px] mx-auto lg:mx-0">
                          Capture. Structure. Validate. Deliver.
                        </h2>
                      </RevealAnimation>
                      <RevealAnimation delay={0.4}>
                        <p>
                          Medqon captures conversations, extracts key legal facts, and structures them into compliant, audit-ready documents with consistent formatting and built-in validation.
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
                          Capture conversations in real time
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
                          Structure documents automatically
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
                          Ensure consistency and compliance
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
                    <span className="badge badge-cyan mb-5">Verified & Audit-Ready</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <h2>Every document can be verified for integrity and authenticity</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p>
                      Medqon embeds a unique digital fingerprint into every document, allowing you to verify its integrity at any time. Any modification after generation is immediately detectable, ensuring trust, traceability, and evidentiary reliability.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div>
                  <figure className="relative w-full md:w-[500px]">
                    <RevealAnimation delay={0.4}>
                      <div className="w-full">
                        <Image src={section4Image} alt="features" className="w-full" />
                      </div>
                    </RevealAnimation>
                    {/* <RevealAnimation delay={0.5} direction="right" offset={100}>
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
                    </RevealAnimation> */}
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <span className="badge badge-yellow">All Case Activity, One System</span>
                  </RevealAnimation>
                  <div className="space-y-3">
                    <RevealAnimation delay={0.3}>
                      <h2>One system to manage cases, communication, and documentation</h2>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4}>
                      <p>Medqon Vault brings case management, email communication, scheduling, tasks, and documentation into a single structured platform—ensuring nothing is missed, delayed, or disconnected.</p>
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
                    <figure className="w-full lg:w-[538.95px] lg:h-[640px] order-first lg:order-none lg:mt-[66px] xl:mt-0 lg:mr-6 xl:mr-0 flex-shrink-0">
                      <Image
                        src={section5Image}
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


        <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[50px] xl:pb-[100px]">
          <div className="main-container">
            {/* Header Section */}
            <div className="mb-14 space-y-3 text-center md:mb-[70px]">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-yellow mb-3.5 md:mb-5">Faq&apos;s</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2>Frequently asked questions</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto lg:max-w-[620px]">
                  Answers to common questions about how Medqon fits into your existing legal workflows and systems.
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