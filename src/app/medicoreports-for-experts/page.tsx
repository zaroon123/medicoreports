import ClientsMarquee from '@/components/medicoreports/ClientsMarquee';
import Hero from '@/components/our-services-03/HeroForExperts';
import Clients from '@/components/homepage-38/Clients';
import SpotlightStories from '@/components/success-stories/SpotlightStories';
import ProcessOperation from '@/components/process-02/ProcessOperation';
import Feature from '@/components/homepage-14/Feature';
import Eligibility from '@/components/homepage-14/Eligibility';
import Features from '@/components/medicoreports/Features';
import About from '@/components/medicoreports/About';
import NewFeatures from '@/components/medicoreports/NewFeatures';
import FeatureV2 from '@/components/medicoreports/FeatureV2';
import HowItsWork from '@/components/medicoreports/HowItsWork';
import CloudSolution from '@/components/medicoreports/CloudSolution';
import Blog from '@/components/medicoreports/Blog';
import NewsLetter from '@/components/medicoreports/NewsLetter';
import FooterFour from '@/components/shared/footer/FooterFour';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';


export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Medicoreports - Home',
};

const MedicoreportsForExperts = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-lg"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        <Clients /> 
        <SpotlightStories />
        <ProcessOperation />
        <Feature />
        <Eligibility />
        <NewsLetter />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </Fragment>
  );
};

export default MedicoreportsForExperts;