import OurMission from '@/components/aboutpage-01/OurMission';
import VisionStatement from '@/components/aboutpage-01/VisionStatement';
import WhyChooseUs from '@/components/aboutpage-01/WhyChooseUs';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Team from '@/components/homepage-05/Team';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import OurAchievements from '@/components/shared/OurAchievements';
import Hero from '@/components/homepage-19/Hero';
import MeetOurTeam from '@/components/homepage-19/MeetOurTeam';
import Features from '@/components/homepage-03/Features';
import FeaturesV2New from '@/components/homepage-03/FeaturesV2New';
import SpotlightStoriesForVault from '@/components/success-stories/SpotlightStoriesForVault';
import SpotlightStoriesVault from '@/components/success-stories/SpotlightStoriesVault';
import About from '@/components/homepage-01/About';
import Integration from '@/components/homepage-07/Integration';
import Testimonial from '@/components/homepage-36/Testimonial';
import Faq from '@/components/homepage-36/Faq';
import CTA from '@/components/homepage-36/CTA';
import FooterFour from '@/components/shared/footer/FooterFour';
import ReviewsV3 from '@/components/shared/reviews/ReviewsV3';
import { projectAchievements } from '@/data/achievements';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';


import { cn } from '@/utils/cn';
import gradient from '@public/images/gradient/gradient-11.png';
import holdMobile from '@public/images/home-page-22/hold-mobile.png';
import Image from 'next/image';

import whyMedqon from '@public/images/report-writer-for-experts/why-medqon.gif';
import medicoLegalReportTemplate from '@public/images/report-writer-for-experts/medico-legal-report-template.jpg';
import orthoReportTemplate from '@public/images/report-writer-for-experts/orthopaedic-reports.jpg';
import psycLegalReportTemplate from '@public/images/report-writer-for-experts/psychological-reports.jpg';
import physioLegalReportTemplate from '@public/images/report-writer-for-experts/physiotherapy-reports.jpg';
import customLegalReportTemplate from '@public/images/report-writer-for-experts/custom-reports.jpg';
import generatingMedicoLegal from '@public/images/report-writer-for-experts/generating-medical.png';

import features1 from '@public/images/home-page-3/features-1.png';
import features2 from '@public/images/home-page-3/features-2.png';
import subFeatures1 from '@public/images/home-page-3/sub-features-1.png';
import subFeatures2 from '@public/images/home-page-3/sub-features-2.png';
import subFeatures3 from '@public/images/home-page-3/sub-features-3.png';
import subFeatures4 from '@public/images/home-page-3/sub-features-4.png';
import subFeatures5 from '@public/images/home-page-3/sub-features-5.png';
import subFeatures6 from '@public/images/home-page-3/sub-features-6.png';
import subFeatures7 from '@public/images/home-page-3/sub-features-7.png';
import subFeatures8 from '@public/images/home-page-3/sub-features-8.png';
import subFeatures9 from '@public/images/home-page-3/sub-features-9.png';
import subFeaturesDark1 from '@public/images/home-page-3/sub-features-dark-1.png';
import subFeaturesDark2 from '@public/images/home-page-3/sub-features-dark-2.png';
import subFeaturesDark3 from '@public/images/home-page-3/sub-features-dark-3.png';
import subFeaturesDark4 from '@public/images/home-page-3/sub-features-dark-4.png';
import subFeaturesDark5 from '@public/images/home-page-3/sub-features-dark-5.png';
import subFeaturesDark6 from '@public/images/home-page-3/sub-features-dark-6.png';
import subFeaturesDark7 from '@public/images/home-page-3/sub-features-dark-7.png';
import subFeaturesDark8 from '@public/images/home-page-3/sub-features-dark-8.png';
import subFeaturesDark9 from '@public/images/home-page-3/sub-features-dark-9.png';


import whyMedqonVaultImage from '@public/images/medqon-vault/section-2/why-medqon-vault.png';

import section4Image from '@public/images/medqon-vault/section-4/app.png';
import section4Feature1 from '@public/images/medqon-vault/section-4/1.jpg';
import section4Feature2 from '@public/images/medqon-vault/section-4/2.jpg';
import section4Feature3 from '@public/images/medqon-vault/section-4/3.jpg';
import section4Feature4 from '@public/images/medqon-vault/section-4/4.jpg';
import section4Feature5 from '@public/images/medqon-vault/section-4/5.jpg';
import section4Feature6 from '@public/images/medqon-vault/section-4/6.jpg';

import medicoVaultImage from '@public/images/medqon-vault/section-3/Medico-Vault.jpg';
import medicoRegisteredImage from '@public/images/medqon-vault/section-3/MedCo-registered-MROs.jpg';
import medicoVaultCustomImage from '@public/images/medqon-vault/section-3/custom-workflow.jpg';

import emailImage from '@public/images/medqon-vault/section-5/email-integration.png';
import accountingImage from '@public/images/medqon-vault/section-5/accounting-integration.png';
import smsImage from '@public/images/medqon-vault/section-5/sms.png';

import LinkButton from '@/components/ui/button/LinkButton';
import TabContent from '@/components/ui/tab/TabContent';
import Tab from '@/components/ui/tab/Tab';
import TabList from '@/components/ui/tab/TabList';
import { TabProvider } from '@/context/TabContext';

import ProcessDarkImage from '@public/images/home-page-4/process-dark.png';
import ProcessImage from '@public/images/home-page-4/process.png';

import IntegrationsSection from '@/components/medqon-vault/Integrations';

import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Medqon Vault - Medicoreports',
};

const eligibilityData = [
  {
    id: 1,
    text: 'Real-time appointment notifications',
  },
  {
    id: 2,
    text: 'Daily schedule and clinic visibility',
  },
  {
    id: 3,
    text: 'Case summaries on demand',
  },
  {
    id: 4,
    text: 'Attendance tracking from mobile',
  },
  {
    id: 5,
    text: 'Task and instruction alerts',
  },
];

const emailIntegrations = [
  {
    id: 1,
    text: 'Send emails from within case workflows ',
  },
  {
    id: 2,
    text: 'Automatic logging against case records ',
  },
  {
    id: 3,
    text: 'Centralised communication history ',
  },
  {
    id: 4,
    text: 'Supports Office 365 and standard email systems ',
  },
];

const smsNotifications = [
  {
    id: 1,
    text: 'Appointment reminders and confirmations ',
  },
  {
    id: 2,
    text: 'Custom SMS messaging to patients and experts ',
  },
  {
    id: 3,
    text: 'Reduce DNAs and missed appointments ',
  },
  {
    id: 4,
    text: 'Triggered notifications based on workflow events ',
  },
];

const accountingIntegrations = [
  {
    id: 1,
    text: 'Invoice generation linked to case workflows ',
  },
  {
    id: 2,
    text: 'Sync with Xero accounting platforms ',
  },
  {
    id: 3,
    text: 'Track payment status (pending / paid) ',
  },
  {
    id: 4,
    text: 'Reduce manual reconciliation ',
  },
];

const aboutTabsData = [
  {
    id: 'medico-vault',
    badge: 'Medico Vault',
    title: 'A comprehensive platform for cases, people, appointments, documents, correspondence,',
    titleBreak: true,
    highlightedText: '  and finance',
    description:
      'Medico Vault is the full medico-legal case-management platform for agencies, expert organisations, and admin teams that need more than a basic CRM. It brings together case handling, scheduling, document management, communication, invoicing, portals, and workflow control into one secure environment.',
    image: medicoVaultImage,
    imageAlt: 'Happy man using phone',
    buttonText: 'Explore Medico Vault',
    buttonHref: '/contact-us',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Accounts, roles, and staff access control ',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Case management, documents, reports, and chronology ',
        description: ' ',
      },
      {
        icon: 'ns-shape-47',
        title: 'Appointments, diary management, reschedules, and DNAs ',
        description: ' ',
      },
      {
        icon: 'ns-shape-6',
        title: 'Expert, clinic, and availability management ',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Correspondence, email, SMS, and invoicing ',
        description: ' ',
      },
      {
        icon: 'ns-shape-47',
        title: 'Referrer, expert, patient, and admin/staff portals ',
        description: ' ',
      },
      {
        icon: 'ns-shape-6',
        title: 'Reporting, dashboards, and business intelligence ',
        description: ' ',
      },
    ],
  },
  {
    id: 'medco-registered-mros',
    badge: 'MedCo-registered MROs',
    title: 'A case management system built around MRO ',
    titleBreak: false,
    highlightedText: ' compliance requirements.',
    description:
      'Designed for Medical Reporting Organisations operating within the MedCo environment, this deployment focuses on maintaining the records, workflows, and operational outputs needed to support compliant MRO operations. It helps teams manage cases, experts, clinic locations, appointments, communications, and key compliance metrics in a structured, auditable system.',
    image: medicoRegisteredImage,
    imageAlt: 'Happy man using phone',
    buttonText: 'See MRO workflow',
    buttonHref: '/contact-us',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Case history from instruction to closure ',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Expert validation profiles and review tracking ',
        description: ' ',
      },
      {
        icon: 'ns-shape-47',
        title: 'Clinic location analysis and rural/urban data handling',
        description: ' ',
      },
      {
        icon: 'ns-shape-6',
        title: 'Appointment management, report chasing, and notifications ',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Compliance data export aligned to MedCo technical-aid requirements ',
        description: ' ',
      },
    ],
  },
  {
    id: 'custom-workflow ',
    badge: 'Custom workflow ',
    title: 'Configured around your operational flow - not the ',
    titleBreak: false,
    highlightedText: ' other way around.',
    description:
      "For organisations with established internal processes, Medico Vault can be configured and extended to match how your team actually works. From case states and task logic to document handling, notifications, portals, and reporting, the system can be adapted to support your operational model rather than forcing you into a rigid template.",
    image: medicoVaultCustomImage,
    imageAlt: 'Happy man using phone',
    buttonText: 'Discuss your workflow',
    buttonHref: '/contact-us',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Custom case stages and workflow logic ',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Tailored forms, fields, and status structures ',
        description: ' ',
      },
      {
        icon: 'ns-shape-47',
        title: 'Bespoke notifications, reminders, and correspondence flows ',
        description: ' ',
      },
      {
        icon: 'ns-shape-6',
        title: 'Configurable portals and user permissions ',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Additional development available as operational needs evolve ',
        description: ' ',
      },
    ],
  }
];

const data = [
  {
    id: 1,
    icon: 'ns-shape-13',
    title: 'Centralised case control',
    description: 'All case data, documents, communications, and updates in one structured system',
  },
  {
    id: 2,
    icon: 'ns-shape-41',
    title: 'Faster case progression',
    description: 'Reduce delays by managing appointments, tasks, and follow-ups in a single workflow',
  },
  {
    id: 3,
    icon: 'ns-shape-36',
    title: 'No fragmented processes',
    description: 'Replace email threads, spreadsheets, and manual tracking with one platforms',
  },
  {
    id: 4,
    icon: 'ns-shape-35',
    title: 'Built-in workflow structure',
    description: 'Standardise how cases move from instruction to report release across your team',
  },

  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Full operational visibility',
    description: 'Track case status, workload, and bottlenecks in real time across all users',
  },
  {
    id: 6,
    icon: 'ns-shape-30',
    title: 'Secure and controlled data handling',
    description: 'Role-based access, audit logs, and secure infrastructure for sensitive case data',
  },
];

const MedqonVault = () => {
  return (
    <>
      <NavbarOne
        megaMenuColor="dark:bg-background-7"
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <Hero />
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
                    <span className="badge badge-yellow">Why Medqon Vault</span>
                  </RevealAnimation>
                  <div className="space-y-3">
                    <RevealAnimation delay={0.3}>
                      <h2>Built for control, visibility, and operational reliability</h2>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4}>
                      <p>Medqon Vault is designed specifically for medico-legal operations, giving your team full control over cases, workflows, communication, and financial tracking in one system.</p>
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
        {/* <MeetOurTeam /> */}
        <RevealAnimation delay={0.3}>
          <section className="dark:bg-background-6 overflow-hidden bg-white pt-20 pb-14 sm:pb-36 lg:pt-[88px] xl:pt-[100px] xl:pb-[176px]">
            <div className="main-container">
              <div className="mb-10 text-center md:mb-[70px]">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-green-v2 mb-5"> Deployment options </span>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 className="mb-3">
                    Choose the operating model that fits your organisation
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="mx-auto mb-8 lg:max-w-[696px]">
                    From MedCo-aligned MRO workflows to fully customised agency operations, Medqon Vault can be deployed as a focused compliance system, a tailored workflow platform, or a full medico-legal operating environment.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <div className="main-container">
              <TabProvider defaultValue={0}>
                <>
                  {/* Desktop TabList */}
                  <TabList variant="desktop">
                    <Tab index={0} variant="desktop">
                      Medico Vault
                    </Tab>
                    <Tab index={1} variant="desktop">
                      MedCo-registered MROs
                    </Tab>
                    <Tab index={2} variant="desktop">
                      Custom workflow
                    </Tab>
                  </TabList>
                  {/* Mobile TabList */}
                  <TabList variant="mobile">
                    <Tab index={0} variant="mobile">
                      Medico Vault
                    </Tab>
                    <Tab index={1} variant="mobile">
                      MedCo-registered MROs
                    </Tab>
                    <Tab index={2} variant="mobile">
                      Custom workflow
                    </Tab>
                  </TabList>
                </>
                <>
                  {aboutTabsData.map((tab, index) => (
                    <TabContent key={tab.id} index={index}>
                      <div className="flex w-full flex-col items-start justify-between gap-x-24 gap-y-14 lg:flex-row">
                        <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
                          <span className="badge badge-green mb-3.5 xl:mb-5">{tab.badge}</span>
                          <h2 className={`${index === 0 ? 'lg:text-heading-4 text-heading-4' : ''} mb-3`}>
                            {tab.title}
                            {tab.titleBreak && <br className="hidden lg:block" />}
                            <span className={`text-primary-500 ${index === 1 ? 'inline-block' : ''}`}>{tab.highlightedText}</span>
                          </h2>
                          <p className={`${index === 0 ? 'mb-6 xl:mb-8' : 'mb-8'} lg:max-w-[478px]`}>{tab.description}</p>
                          <ul className={`${index === 0 ? 'mb-7 xl:mb-14' : 'mb-7 md:mb-14'} space-y-1.5`}>
                            {tab.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex list-none items-center gap-4 py-2">
                                <span className={`${feature.icon} text-secondary text-[36px] dark:text-white`}></span>
                                <div>
                                  <strong className="text-tagline-1 text-secondary dark:text-accent font-medium">
                                    {feature.title}
                                  </strong>
                                  <p className="text-secondary/60 text-tagline-2 dark:text-accent/60 font-normal">
                                    {feature.description}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <div>
                            <LinkButton
                              href={tab.buttonHref}
                              className="btn btn-white btn-lg md:btn-xl dark:btn-transparent hover:btn-primary w-full md:w-auto">
                              {tab.buttonText}
                            </LinkButton>
                          </div>
                        </div>
                        {/* About Image */}
                        <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
                          <div className="flex items-center justify-center">
                            <figure className={index === 0 ? 'lg:inline-block' : 'tab-item-image'}>
                              <Image src={tab.image} alt={tab.imageAlt} className={index === 0 ? 'w-fit object-cover' : ''} />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                  ))}
                </>
              </TabProvider>
            </div>
          </section>
        </RevealAnimation>





        <section className="pb-24 md:pb-24 lg:pt-[8px] lg:pb-[140px] xl:pt-[50px] xl:pb-[150px] xl:mt-[150px]">
          <div className="main-container space-y-[220px] md:space-y-[300px] xl:space-y-[300px]">

            {/* Features 2 Section */}
            <div className="flex flex-col-reverse items-center justify-between gap-x-5 gap-y-28 sm:gap-y-24 md:gap-x-10 md:gap-y-20 lg:flex-row-reverse lg:items-start lg:gap-x-16 2xl:gap-x-24">
              <div className="w-full lg:w-1/2">
                <div className="mb-8 space-y-3 px-4 text-center sm:px-0 md:text-left lg:mb-14">
                  <RevealAnimation delay={0.2}>
                    <span className="badge badge-green mb-5">Mobile access</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <h3 className="md:text-heading-3 lg:text-heading-2">
                      iOS and Android apps built for experts on the move
                    </h3>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p className="lg:max-w-[596px]">
                      Keep experts connected to their schedule, cases, and workflow in real time. Medqon’s mobile apps ensure appointments, updates, and actions are never missed — whether in clinic, on-site, or between sessions.
                    </p>
                  </RevealAnimation>
                </div>
                <ul className="space-y-4 mb-14" aria-label="Eligibility requirements">
                  {eligibilityData.map((item, idx) => (
                    <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                      <li className="flex items-center gap-3">
                        <span>
                          <Image
                            src="images/icons/checkmark-dark.svg"
                            alt="Checkbox icon"
                            width={18}
                            height={18}
                            className="size-[18px] dark:hidden"
                          />
                          <Image
                            src="images/icons/checkmark-white.svg"
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
                <RevealAnimation delay={0.5}>
                  <div className="flex justify-center md:justify-start">
                    <div className="flex md:flex-row flex-col gap-y-3 md:gap-y-0 items-center justify-center gap-x-4">
                      <RevealAnimation delay={0.4} direction="left" offset={50}>
                        <li className="group list-none w-[90%] sm:w-auto">
                          <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase shadow-1 bg-secondary border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                            <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                              App Store
                            </span>
                            <div className="relative overflow-hidden size-6">
                              {/* one  */}
                              <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <path d="M11 5H13V7H11V5Z" fill="white" />
                                  <path d="M5 5H7V7H5V5Z" fill="white" />
                                  <path d="M14 8H16V10H14V8Z" fill="white" />
                                  <path d="M8 8H10V10H8V8Z" fill="white" />
                                  <path d="M17 11H19V13H17V11Z" fill="white" />
                                  <path d="M11 11H13V13H11V11Z" fill="white" />
                                  <path d="M14 14H16V16H14V14Z" fill="white" />
                                  <path d="M8 14H10V16H8V14Z" fill="white" />
                                  <path d="M11 17H13V19H11V17Z" fill="white" />
                                  <path d="M5 17H7V19H5V17Z" fill="white" />
                                </svg>
                              </span>
                              {/* two  */}
                              <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <path d="M11 5H13V7H11V5Z" fill="white" />
                                  <path d="M5 5H7V7H5V5Z" fill="white" />
                                  <path d="M14 8H16V10H14V8Z" fill="white" />
                                  <path d="M8 8H10V10H8V8Z" fill="white" />
                                  <path d="M17 11H19V13H17V11Z" fill="white" />
                                  <path d="M11 11H13V13H11V11Z" fill="white" />
                                  <path d="M14 14H16V16H14V14Z" fill="white" />
                                  <path d="M8 14H10V16H8V14Z" fill="white" />
                                  <path d="M11 17H13V19H11V17Z" fill="white" />
                                  <path d="M5 17H7V19H5V17Z" fill="white" />
                                </svg>
                              </span>
                            </div>
                          </a>
                        </li>
                      </RevealAnimation>
                      <RevealAnimation delay={0.5} direction="left" offset={50}>
                        <li className="group list-none w-[90%] sm:w-auto">
                          <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-secondary group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase bg-background-4 border-stroke-7 text-secondary group-hover:text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                            <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                              Google play
                            </span>
                            <div className="relative overflow-hidden size-6">
                              {/* one  */}
                              <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <path d="M11 5H13V7H11V5Z" fill="white" />
                                  <path d="M5 5H7V7H5V5Z" fill="white" />
                                  <path d="M14 8H16V10H14V8Z" fill="white" />
                                  <path d="M8 8H10V10H8V8Z" fill="white" />
                                  <path d="M17 11H19V13H17V11Z" fill="white" />
                                  <path d="M11 11H13V13H11V11Z" fill="white" />
                                  <path d="M14 14H16V16H14V14Z" fill="white" />
                                  <path d="M8 14H10V16H8V14Z" fill="white" />
                                  <path d="M11 17H13V19H11V17Z" fill="white" />
                                  <path d="M5 17H7V19H5V17Z" fill="white" />
                                </svg>
                              </span>
                              {/* two  */}
                              <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <path d="M11 5H13V7H11V5Z" fill="#1A1A1C" />
                                  <path d="M5 5H7V7H5V5Z" fill="#1A1A1C" />
                                  <path d="M14 8H16V10H14V8Z" fill="#1A1A1C" />
                                  <path d="M8 8H10V10H8V8Z" fill="#1A1A1C" />
                                  <path d="M17 11H19V13H17V11Z" fill="#1A1A1C" />
                                  <path d="M11 11H13V13H11V11Z" fill="#1A1A1C" />
                                  <path d="M14 14H16V16H14V14Z" fill="#1A1A1C" />
                                  <path d="M8 14H10V16H8V14Z" fill="#1A1A1C" />
                                  <path d="M11 17H13V19H11V17Z" fill="#1A1A1C" />
                                  <path d="M5 17H7V19H5V17Z" fill="#1A1A1C" />
                                </svg>
                              </span>
                            </div>
                          </a>
                        </li>
                      </RevealAnimation>
                    </div>
                    {/* <LinkButton
                      href="/contact-us"
                      className="btn btn-md btn-white dark:btn-transparent hover:btn-primary block w-[90%] md:inline-block md:w-auto">
                      Get started
                    </LinkButton> */}
                  </div>
                </RevealAnimation>
              </div>

              {/* Features Image */}
              <div className="relative w-full lg:w-1/2">
                <RevealAnimation delay={0.4}>
                  <figure className="h-auto max-w-full lg:max-w-[452px] lg:justify-self-end">
                    <Image src={section4Image} alt="features Images" className="h-full w-full object-cover object-center" />
                  </figure>
                </RevealAnimation>
                <div className="absolute top-[55%] -left-3 z-20 flex flex-col items-center md:-left-5 lg:-left-2 xl:-left-3 2xl:-left-8">
                  <RevealAnimation delay={0.5} useSpring={true} duration={2}>
                    <figure className="max-w-[280px] overflow-hidden rounded-[20px] md:h-[74px] md:max-w-[320px] md:self-end">
                      <Image
                        src={section4Feature1}
                        alt="Sub features"
                        className="shadow-3 block h-auto w-full object-cover object-center dark:hidden"
                      />
                      <Image
                        src={section4Feature1}
                        alt="Sub features"
                        className="shadow-3 hidden h-auto w-full object-cover object-center dark:block"
                      />
                    </figure>
                  </RevealAnimation>
                  <RevealAnimation delay={0.6} useSpring={true} duration={2}>
                    <figure className="my-1 max-w-[280px] overflow-hidden rounded-2xl object-cover md:my-2 md:h-[74px] md:max-w-[320px]">
                      <Image
                        src={section4Feature2}
                        alt="Sub features"
                        className="shadow-3 block h-auto w-full object-cover object-center dark:hidden"
                      />
                      <Image
                        src={section4Feature2}
                        alt="Sub features"
                        className="shadow-3 hidden h-auto w-full object-cover object-center dark:block"
                      />
                    </figure>
                  </RevealAnimation>
                  <RevealAnimation delay={0.7} useSpring={true} duration={2}>
                    <figure className="shadow-7 relative z-40 max-h-[72px] max-w-[250px] overflow-hidden rounded-2xl md:max-w-[310px]">
                      <Image
                        src={section4Feature3}
                        alt="Sub features"
                        className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                      />
                      <Image
                        src={section4Feature3}
                        alt="Sub features"
                        className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                      />
                    </figure>
                  </RevealAnimation>
                  <RevealAnimation delay={0.8} useSpring={true} duration={2}>
                    <figure className="shadow-7 z-30 -mt-[37px] hidden max-h-[72px] max-w-[200px] overflow-hidden rounded-2xl md:block md:max-w-[280px]">
                      <Image
                        src={section4Feature4}
                        alt="Sub features"
                        className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                      />
                      <Image
                        src={section4Feature4}
                        alt="Sub features"
                        className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                      />
                    </figure>
                  </RevealAnimation>
                  <RevealAnimation delay={0.9} useSpring={true} duration={2}>
                    <figure className="shadow-7 z-20 -mt-[37px] hidden max-h-[72px] max-w-[180px] overflow-hidden rounded-2xl md:block md:max-w-[260px]">
                      <Image
                        src={section4Feature5}
                        alt="Sub features"
                        className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                      />
                      <Image
                        src={section4Feature5}
                        alt="Sub features"
                        className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                      />
                    </figure>
                  </RevealAnimation>
                  <RevealAnimation delay={1} useSpring={true} duration={2}>
                    <figure className="shadow-7 -mt-[37px] max-h-[72px] max-w-[240px] overflow-hidden rounded-2xl">
                      <Image
                        src={section4Feature6}
                        alt="Sub features"
                        className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                      />
                      <Image
                        src={section4Feature6}
                        alt="Sub features"
                        className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                      />
                    </figure>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <FeaturesV2New /> */}


        {/* <section className="pt-[100px] pb-[100px] xl:pb-[200px] bg-background-2 dark:bg-background-5">
          <div className="main-container">
            <div className="flex lg:items-end items-center lg:flex-row flex-col lg:gap-0 gap-4 justify-between mb-[70px]">
              <div className="flex-1 lg:text-left text-center">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <span className="badge badge-green">Integrations</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <h2 className="max-w-[518px]">Connected to the tools your operations already rely on</h2>
                  </RevealAnimation>
                </div>
              </div>
              <div className="flex-1 lg:text-left text-center">
                <div>
                  <RevealAnimation delay={0.3}>
                    <p className="max-w-[518px] lg:mx-0 mx-auto">
                      Medico Vault integrates with email, messaging, and financial systems to ensure communication, case progression, and billing workflows run without duplication or manual intervention.
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
                      <Image
                        src={emailImage}
                        alt='Email'
                        className="text-[52px] text-secondary dark:text-accent"
                      />
                    </div>
                    <div className="space-y-1 lg:text-left text-center">
                      <h3 className="text-heading-5">Email integration (Office 365 & Outlook)</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto">Send, receive, and track all case-related communication directly within the system. Emails are automatically linked to cases, ensuring a complete and auditable communication history.</p>
                      <ul className="space-y-4 mb-14 mt-6" aria-label="Eligibility requirements">
                        {emailIntegrations.map((item, idx) => (
                          <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                            <li className="flex items-center gap-3">
                              <span>
                                <Image
                                  src="images/icons/checkmark-dark.svg"
                                  alt="Checkbox icon"
                                  width={18}
                                  height={18}
                                  className="size-[18px] dark:hidden"
                                />
                                <Image
                                  src="images/icons/checkmark-white.svg"
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
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="col-span-12 lg:col-span-4">
                  <div className="space-y-6">
                    <div className="max-lg:text-center">
                      <Image
                        src={smsImage}
                        alt='SMS'
                        className="text-[52px] text-secondary dark:text-accent"
                      />
                    </div>
                    <div className="space-y-1 lg:text-left text-center">
                      <h3 className="text-heading-5">SMS and real-time notifications</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto">Automate appointment confirmations, reminders, and updates to keep claimants and experts informed without manual follow-up.</p>
                      <ul className="space-y-4 mb-14 mt-6" aria-label="Eligibility requirements">
                        {smsNotifications.map((item, idx) => (
                          <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                            <li className="flex items-center gap-3">
                              <span>
                                <Image
                                  src="images/icons/checkmark-dark.svg"
                                  alt="Checkbox icon"
                                  width={18}
                                  height={18}
                                  className="size-[18px] dark:hidden"
                                />
                                <Image
                                  src="images/icons/checkmark-white.svg"
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
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="col-span-12 lg:col-span-4">
                  <div className="space-y-6">
                    <div className="max-lg:text-center">
                      <Image
                        src={accountingImage}
                        alt='Accounting'
                        className="text-[52px] text-secondary dark:text-accent"
                      />
                    </div>
                    <div className="space-y-1 lg:text-left text-center">
                      <h3 className="text-heading-5">Accounting integration (Xero and external systems)</h3>
                      <p className="max-w-[337px] lg:mx-0 mx-auto">Streamline invoicing and financial tracking by connecting Medico Vault with your accounting systems, reducing duplication and improving financial visibility.</p>
                      <ul className="space-y-4 mb-14 mt-6" aria-label="Eligibility requirements">
                        {accountingIntegrations.map((item, idx) => (
                          <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                            <li className="flex items-center gap-3">
                              <span>
                                <Image
                                  src="images/icons/checkmark-dark.svg"
                                  alt="Checkbox icon"
                                  width={18}
                                  height={18}
                                  className="size-[18px] dark:hidden"
                                />
                                <Image
                                  src="images/icons/checkmark-white.svg"
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
                </div>
              </RevealAnimation>

            </div>
          </div>
        </section> */}


        <IntegrationsSection />




        <section className="py-[100px] bg-background-1 dark:bg-background-6 space-y-[70px]">
          <div className="main-container space-y-[70px]">
            <div className="space-y-5 max-w-[804px] mx-auto text-center">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan-v2">Compliance & security</span>
              </RevealAnimation>
              <div className="space-y-3 text-center">
                <RevealAnimation delay={0.2}>
                  <h2 className="max-w-[624px] mx-auto">Built for regulated medico-legal data environments</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[802px] mx-auto">
                    Medico Vault is designed to support organisations handling sensitive claimant data, with security, governance, and compliance controls aligned to UK GDPR and the Data Protection Act 2018. From data access to audit trails, every part of the system is structured to ensure information is handled securely, transparently, and in line with regulatory expectations.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-y-20 gap-y-14">
              <div className="col-span-12 xl:col-span-5 lg:col-span-6">
                <RevealAnimation delay={0.4}>
                  <div>
                    <figure className="max-w-[478px] max-h-[547px] lg:mx-0 mx-auto">
                      <Image src={ProcessImage} alt="process" className="h-full w-full object-cover dark:hidden block" />
                      <Image
                        src={ProcessDarkImage}
                        alt="process"
                        className="h-full w-full object-cover hidden dark:block"
                      />
                    </figure>
                  </div>
                </RevealAnimation>
              </div>
              <div className="col-span-12 xl:col-span-7 lg:col-span-6">
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
                          UK GDPR and Data Protection Act aligned
                        </h3>
                        <p>
                          Designed to support compliant handling of personal and sensitive data under UK regulations
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
                          Role-based access control
                        </h3>
                        <p>
                          Restrict system access based on user roles across admin, experts, and referrers
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
                        <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">Full audit logging</h3>
                        <p>
                          Track changes, actions, and access across cases, documents, and communications
                        </p>
                      </div>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                      <div>
                        <div className="size-10 rounded-full bg-ns-yellow text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                          4
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                          Encryption at rest and in transit
                        </h3>
                        <p>
                          Data protected using industry-standard encryption protocols
                        </p>
                      </div>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.6}>
                    <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                      <div className="size-10 rounded-full bg-ns-green text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                        5
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                          Secure UK-based hosting infrastructure
                        </h3>
                        <p>
                          Hosted within controlled environments aligned to ISO-certified standards
                        </p>
                      </div>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.7}>
                    <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                      <div className="size-10 rounded-full bg-ns-red text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                        6
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">Backup and disaster recovery measures</h3>
                        <p>
                          Ensures continuity and protection of critical case data
                        </p>
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <About /> */}
        {/* <Integration /> */}
        <SpotlightStoriesVault />
        {/* <Testimonial /> */}
        <Faq />
        <CTA />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </>
  );
};
MedqonVault.displayName = 'MedqonVault';
export default MedqonVault;
