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
import whyMedqonVaultImage from '@public/images/medqon-vault/section-2/why-medqon-vault.png';
import checkMarkDarkImage from '@public/images/icons/checkmark-dark.svg';
import { cn } from '@/utils/cn';
import gradient from '@public/images/gradient/gradient-11.png';
import Faq from '@/components/homepage-06/Faq';
import faqData from '@/data/json/faq/faq-public-sector.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Medicoreports - Public Sector',
};

const data = [
  {
    id: 1,
    icon: 'ns-shape-13',
    title: 'Case-Centred Communication',
    description: 'All notes, updates, and correspondence linked to each case or record.',
  },
  {
    id: 2,
    icon: 'ns-shape-41',
    title: 'Inspection & Case Scheduling',
    description: 'Manage visits, follow-ups, and reviews in one place.',
  },
  {
    id: 3,
    icon: 'ns-shape-36',
    title: 'Task & Process Tracking',
    description: 'Track actions, responsibilities, and outcomes across workflows.',
  },
  {
    id: 4,
    icon: 'ns-shape-35',
    title: 'Built-In Workflow Structure',
    description: 'Standardise how cases move from intake to final decision.',
  },

  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Full Operational Visibility',
    description: 'Monitor workload, case status, and bottlenecks in real time.',
  },
  {
    id: 6,
    icon: 'ns-shape-30',
    title: 'Secure Data Handling',
    description: 'Role-based access, audit logs, and secure handling of sensitive information.',
  },
];

const eligibilityData = [
  {
    id: 1,
    text: 'Tamper-evident reports',
  },
  {
    id: 2,
    text: 'Verifiable records for audit',
  },
  {
    id: 3,
    text: 'Full traceability across document lifecycle',
  },
];

const PublicSector = () => {
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
                  <span className="badge badge-white mb-5">Public sector documentation platform</span>
                </RevealAnimation>

                <RevealAnimation delay={0.2}>
                  <h1 className="text-5xl sm:text-5xl lg:text-[3.8rem]">From fieldwork and interviews to structured, audit-ready reports</h1>
                </RevealAnimation>

                <RevealAnimation delay={0.3}>
                  <p className="mb-10 md:mb-14 lg:max-w-[440px] xl:max-w-[570px]">
                    Capture inspections, casework, and investigations, and convert them into structured, compliant documentation with consistent formatting, traceability, and readiness for audit and review.
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
                    <span className="badge badge-green">conversation → structured output</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[518px]">How Medqon is used across public sector workflows</h2>
                  </RevealAnimation>
                </div>
              </div>
              <div className="flex-1 lg:text-left text-center">
                <div>
                  <RevealAnimation delay={0.3}>
                    <p className="max-w-[518px] lg:mx-0 mx-auto">
                      Medqon structures documentation across inspections, investigations, and casework—reducing manual effort while improving consistency, accountability, and audit readiness.
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
                      <h3 className="text-heading-5">Incident & Investigation Reports.</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Capture interviews and field notes, and generate structured reports with clear findings, timelines, and supporting evidence.</p>
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
                      <h3 className="text-heading-5">Inspections & Compliance Reporting</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Convert inspection notes into standardised reports for housing, environmental health, and regulatory compliance.</p>
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
                      <h3 className="text-heading-5">Caseworker & Social Services Documentation</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Structure case notes, assessments, and follow-ups into consistent, compliant records.</p>
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
                      <h3 className="text-heading-5">Grant & Funding Assessments</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Generate structured summaries and evaluation reports for funding decisions and eligibility reviews.</p>
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
                      <h3 className="text-heading-5">Governance & Decision Records</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Produce clear, structured documentation for internal decisions, reviews, and accountability processes.</p>
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
                      <span className="badge badge-green mb-5">How Medqon Works</span>
                    </RevealAnimation>
                    <div className="space-y-3 mb-8">
                      <RevealAnimation delay={0.3}>
                        <h2 className="max-w-[592px] mx-auto lg:mx-0">
                          Public sector documentation, structured as you work
                        </h2>
                      </RevealAnimation>
                      <RevealAnimation delay={0.4}>
                        <p>
                          Medqon captures interviews, field notes, and operational inputs, and converts them into structured, compliant documentation with built-in validation and consistency checks.
                        </p>
                      </RevealAnimation>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <RevealAnimation delay={0.5}>
                      <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                        <div>
                          <div className="size-10 rounded-full bg-ns-yellow text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                            1
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                            Capture
                          </h3>
                          <p>
                             Record interviews, inspections, and case discussions.
                          </p>
                        </div>
                      </div>
                    </RevealAnimation>
                    <RevealAnimation delay={0.6}>
                      <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                        <div className="size-10 rounded-full bg-ns-green text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                          2
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                            Structure
                          </h3>
                          <p>
                             Automatically generate standardised reports aligned with required formats.
                          </p>
                        </div>
                      </div>
                    </RevealAnimation>
                    <RevealAnimation delay={0.7}>
                      <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                        <div className="size-10 rounded-full bg-ns-red text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                          3
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">Validate</h3>
                          <p>
                            Ensure completeness, consistency, and readiness for audit or review.
                          </p>
                        </div>
                      </div>
                    </RevealAnimation>
                  </div>

                  <RevealAnimation delay={0.8}>
                    <div className='mt-5'>
                      <LinkButton href="/signup-01" className="btn hover:btn-primary btn-xl btn-secondary dark:btn-accent">
                        See how it works
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
                    <span className="badge badge-cyan mb-5">Document Integrity</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <h2>Know if a report has been altered</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p>
                      Every document includes a verifiable digital fingerprint and audit trail. Any modification after creation is immediately detectable, supporting accountability, audit, and regulatory review.
                    </p>
                  </RevealAnimation>
                  <ul className="space-y-4 mb-14" aria-label="Eligibility requirements">
                  {eligibilityData.map((item, idx) => (
                    <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                      <li className="flex items-center gap-3">
                        <span>
                          <Image
                            src={checkMarkDarkImage}
                            alt="Checkbox icon"
                            width={18}
                            height={18}
                            className="size-[18px] dark:hidden"
                          />
                          <Image
                            src={checkMarkDarkImage}
                            alt="Checkbox icon"
                            width={18}
                            height={18}
                            className="size-[18px] hidden dark:block"
                          />
                        </span>
                        <p>{item.text}</p>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
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
                    <span className="badge badge-yellow">Unified Operational Workflow</span>
                  </RevealAnimation>
                  <div className="space-y-3">
                    <RevealAnimation delay={0.3}>
                      <h2>Everything connected to the case, from input to decision</h2>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4}>
                      <p>Medqon connects communication, documentation, scheduling, and task tracking into a single structured system—ensuring consistency and accountability across operations.</p>
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
                        src={whyMedqonVaultImage}
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

        <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[50px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] overflow-hidden">
          <div className="main-container">
            <div className="grid grid-cols-12 lg:gap-x-0 xl:gap-x-28 gap-y-12 items-center">
              <div className="col-span-12 lg:col-span-6">
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <span className="badge badge-cyan mb-5">Integration</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <h2>Works with your existing systems</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p>
                      Medqon integrates via API with your existing case management, inspection, and internal systems.
                    </p>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p>
                       It enhances documentation and reporting without replacing your current infrastructure.
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
                  Answers to common questions about how Medqon fits into public sector operations, compliance requirements, and existing systems.
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

export default PublicSector;