import Hero from '@/components/medicoreports/Hero';
import ClientsMarquee from '@/components/medicoreports/ClientsMarquee';
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

const Medicoreports = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-lg"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        {/* <ClientsMarquee /> */}
        <Features />
        <About />
        <NewFeatures />
        <FeatureV2 />
        {/* <HowItsWork />
        <CloudSolution /> */}
        <Blog badgeClass="badge-yellow" />
        <NewsLetter />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </Fragment>
  );
};

export default Medicoreports;


// import About from '@/components/homepage-01/About';
// import Blog from '@/components/homepage-01/Blog';
// import Faq from '@/components/homepage-01/Faq';
// import Hero from '@/components/homepage-01/Hero';
// import HowItWorks from '@/components/homepage-01/HowItWorks';
// import OurServices from '@/components/homepage-01/OurServices';
// import Testimonial from '@/components/homepage-01/Testimonial';
// import TimelineIntegration from '@/components/homepage-01/TimelineIntegration';
// import CTAV1 from '@/components/shared/cta/CTAV1';

// import FooterOne from '@/components/shared/footer/FooterOne';
// import NavbarOne from '@/components/shared/header/NavbarOne';
// import { defaultMetadata } from '@/utils/generateMetaData';
// import { Metadata } from 'next';
// import { Fragment } from 'react';

// export const metadata: Metadata = {
//   ...defaultMetadata,
//   title: 'Crypto - NextSaaS',
// };

// const Homepage01 = () => {
//   return (
//     <Fragment>
//       <NavbarOne
//         className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
//         btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
//       />
//       <main className="bg-background-2 dark:bg-background-5">
//         <Hero />
//         <About />
//         <HowItWorks />
//         <OurServices />
//         <Faq />
//         <TimelineIntegration />
//         <Testimonial />
//         <Blog />
//         <CTAV1
//           className="dark:bg-background-6 bg-white"
//           badgeClass="hidden"
//           ctaHeading="Build a complete website using the"
//           spanText="assistance"
//           description="Start your free trial today and see your ideas come to life easily and creatively."
//           btnClass="hover:btn-secondary dark:hover:btn-white"
//           ctaBtnText="Get started"
//         />
//       </main>
//       <FooterOne />
//     </Fragment>
//   );
// };
// Homepage01.displayName = 'Homepage01';
// export default Homepage01;
