import ClientsMarquee from '@/components/medicoreports/ClientsMarquee';
import Hero from '@/components/our-services-03/HeroForExperts';
import HeroForExperts from '@/components/homepage-19/HeroForExperts';
import Clients from '@/components/homepage-38/Clients';
import SpotlightStories from '@/components/success-stories/SpotlightStories';
import ProcessOperation from '@/components/process-02/ProcessOperation';
import WhyChooseNextSaas from '@/components/homepage-14/WhyChooseNextSaas';
import Feature from '@/components/homepage-14/Feature';
import Eligibility from '@/components/homepage-14/Eligibility';
import Features from '@/components/medicoreports/Features';
import About from '@/components/medicoreports/About';
import NewFeatures from '@/components/medicoreports/NewFeatures';
import FeatureV2 from '@/components/medicoreports/FeatureV2';
import HowItsWork from '@/components/medicoreports/HowItsWork';
import CloudSolution from '@/components/medicoreports/CloudSolution';
import Blog from '@/components/medicoreports/Blog';
import Integration from '@/components/homepage-07/Integration';
import NewsLetter from '@/components/medicoreports/NewsLetter';
import FooterFour from '@/components/shared/footer/FooterFour';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';
import { TabProvider } from '@/context/TabContext';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Tab from '@/components/ui/tab/Tab';
import TabList from '@/components/ui/tab/TabList';
import aboutBlockchain from '@public/images/home-page-1/about-blockchain.png';
import aboutDecentralization from '@public/images/home-page-1/about-decentralization-1.png';
import aboutExchanges from '@public/images/home-page-1/about-exchanges.png';
import aboutPrivacy from '@public/images/home-page-1/about-privacy.png';
import Image from 'next/image';
import LinkButton from '@/components/ui/button/LinkButton';
import TabContent from '@/components/ui/tab/TabContent';


export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Medicoreports - Home',
};

const aboutTabsData = [
  {
    id: 'medico-legal-reports',
    badge: 'Medico Legal Reports',
    title: 'General medico-legal',
    titleBreak: true,
    highlightedText: ' reports',
    description:
      'Generate full medico-legal reports covering history, examination, causation, and prognosis — structured and compliant by default.',
    image: aboutDecentralization,
    imageAlt: 'Happy man using phone',
    buttonText: 'Contact Us',
    buttonHref: '/contact-us',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Complete report structure from consultation',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Built-in medico-legal formatting',
        description: ' ',
      },
      {
        icon: 'ns-shape-47',
        title: 'Minimal manual editing required',
        description: ' ',
      },
    ],
  },
  {
    id: 'orthopaedic-medico-legal-reports',
    badge: 'Orthopaedic reports',
    title: 'Orthopaedic medico-legal ',
    titleBreak: false,
    highlightedText: ' reports.',
    description:
      'Capture musculoskeletal assessments and generate structured orthopaedic reports aligned with medico-legal standards.',
    image: aboutBlockchain,
    imageAlt: 'Happy man using phone',
    buttonText: 'Contact Us',
    buttonHref: '/contact-us',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Injury-specific documentation',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Structured clinical examination sections',
        description: ' ',
      },
      {
        icon: 'ns-shape-47',
        title: 'Prognosis and functional impact',
        description: ' ',
      },
    ],
  },
  {
    id: 'psychological-medico-legal-reports',
    badge: 'Psychological reports',
    title: 'Psychological medico-legal ',
    titleBreak: false,
    highlightedText: ' reports.',
    description:
      "Generate structured psychological assessments with consistent formatting and terminology for medico-legal use.",
    image: aboutPrivacy,
    imageAlt: 'Happy man using phone',
    buttonText: 'Contact Us',
    buttonHref: '/contact-us',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Mental health and behavioural assessments',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Structured diagnostic sections',
        description: ' ',
      },
      {
        icon: 'ns-shape-47',
        title: 'Standardised medico-legal language',
        description: ' ',
      },
    ],
  },
  {
    id: 'physiotherapy-assessment-and-treatment-reports',
    badge: 'Physiotherapy reports',
    title: 'Physiotherapy assessment and treatment ',
    titleBreak: false,
    highlightedText: ' reports.',
    description:
      'Create structured physiotherapy reports including assessments, treatment plans, and rehabilitation progress.',
    image: aboutExchanges,
    imageAlt: 'Happy man using phone',
    buttonText: 'Contact Us',
    buttonHref: '/contact-us',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Assessment and treatment planning',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Exercise and rehabilitation tracking',
        description: ' ',
      },
      {
        icon: 'ns-shape-47',
        title: 'Patient progress documentation',
        description: ' ',
      },
    ],
  },
  {
    id: 'custom-report-templates',
    badge: 'Custom report',
    title: 'Custom report ',
    titleBreak: false,
    highlightedText: ' templates',
    description:
      'Build and generate reports tailored to your workflow, requirements, and jurisdiction.',
    image: aboutExchanges,
    imageAlt: 'Happy man using phone',
    buttonText: 'Contact Us',
    buttonHref: '/contact-us',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Configurable report structures',
        description: ' ',
      },
      {
        icon: 'ns-shape-46',
        title: 'Adaptable to different use cases',
        description: ' ',
      },
      {
        icon: 'ns-shape-47',
        title: 'Flexible output formats',
        description: ' ',
      },
    ],
  },
];

const MedicoreportsForExperts = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-lg"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <HeroForExperts />
        <Hero />
        <Feature />
        <RevealAnimation delay={0.3}>
          <section className="dark:bg-background-6 overflow-hidden bg-white pt-20 pb-14 sm:pb-36 lg:pt-[88px] xl:pt-[100px] xl:pb-[176px]">
            <div className="main-container">
              <TabProvider defaultValue={0}>
                <>
                  {/* Desktop TabList */}
                  <TabList variant="desktop">
                    <Tab index={0} variant="desktop">
                      Medico-Legal Reports
                    </Tab>
                    <Tab index={1} variant="desktop">
                      Orthopaedic Reports
                    </Tab>
                    <Tab index={2} variant="desktop">
                      Psychological Reports
                    </Tab>
                    <Tab index={3} variant="desktop">
                      Physiotherapy Reports
                    </Tab>
                    <Tab index={4} variant="desktop">
                      Custom Reports
                    </Tab>
                  </TabList>
                  {/* Mobile TabList */}
                  <TabList variant="mobile">
                    <Tab index={0} variant="mobile">
                      Medico-Legal Reports
                    </Tab>
                    <Tab index={1} variant="mobile">
                      Orthopaedic Reports
                    </Tab>
                    <Tab index={2} variant="mobile">
                      Psychological Reports
                    </Tab>
                    <Tab index={3} variant="mobile" className="text-nowrap">
                      Physiotherapy Reports
                    </Tab>
                    <Tab index={4} variant="mobile">
                      Custom Reports
                    </Tab>
                  </TabList>
                </>
                <>
                  {aboutTabsData.map((tab, index) => (
                    <TabContent key={tab.id} index={index}>
                      <div className="flex w-full flex-col items-start justify-between gap-x-24 gap-y-14 lg:flex-row">
                        <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
                          <span className="badge badge-green mb-3.5 xl:mb-5">{tab.badge}</span>
                          <h2 className={`${index === 0 ? 'lg:text-heading-2 text-heading-4' : ''} mb-3`}>
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
        <WhyChooseNextSaas />
        <ProcessOperation />
        <SpotlightStories />
        {/* <Integration /> */}
        <Eligibility />
        <NewsLetter />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </Fragment>
  );
};

export default MedicoreportsForExperts;