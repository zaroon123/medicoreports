import Benefits from '@/components/pricing-01/Benefits';
import Contact from '@/components/pricing-01/Contact';
import Features from '@/components/pricing-01/Features';
import Pricing from '@/components/pricing-01/Pricing';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterFour from '@/components/shared/footer/FooterFour';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing - Medicoreports',
};

const Pricing01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-accent dark:!bg-background-9"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Pricing" heading="Pricing " link="/medicoreports-pricing" />
        <Pricing />
        <Benefits />
        <Features />
        <Contact />
        <CTAV1
          className="dark:bg-background-7 bg-background-3"
          badgeText="Get started"
          badgeClass="!badge-cyan"
          ctaHeading="Build a complete website using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          ctaBtnText="Get started"
          btnClass="hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </Fragment>
  );
};

Pricing01.displayName = 'Pricing01';
export default Pricing01;
