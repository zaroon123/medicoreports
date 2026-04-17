import Services from '@/components/our-services-03/NewServices';
import Integration from '@/components/our-services-03/NewIntegration';
import NewUseCases from '@/components/our-services-03/NewUseCases';
import CaseStudy from '@/components/case-study/NewCaseStudy';
import SpotlightStories from '@/components/success-stories/SpotlightStories';
import FooterFour from '@/components/shared/footer/FooterFour';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';


export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Medicoreports - About Us',
};
 
const Homepage18 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-lg"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Services />
        <SpotlightStories />
        <CaseStudy />
        <Integration />
        <NewUseCases />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </Fragment>
  );
};

export default Homepage18;
