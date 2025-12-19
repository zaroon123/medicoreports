import Blog from '@/components/homepage-15/Blog';
import CTA from '@/components/homepage-15/CTA';;
import Process from '@/components/homepage-15/Process';
import Testimonial from '@/components/homepage-15/Testimonial';
import TimelineIntegration from '@/components/medicoreports/TimelineIntegration';
import FooterFour from '@/components/shared/footer/FooterFour';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'How it works - Medicoreports',
};

const Homepage15 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white/60 backdrop-blur-[25px] top-5 dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
      <main className="bg-background-2 dark:bg-background-5 overflow-x-hidden pt-[100px] ">
        <TimelineIntegration />
        <Process />
        {/* <Testimonial /> */}
        <CTA />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </Fragment>
  );
};

export default Homepage15;
