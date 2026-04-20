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

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Medqon Vault - Medicoreports',
};



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
        <MeetOurTeam />
        <Features />
        <FeaturesV2New />
        {/* <About /> */}
        {/* <Integration /> */}
        <SpotlightStoriesForVault />
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
