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
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const eligibilityData = [
  {
    id: 1,
    text: 'Access & Share Documents',
  },
  {
    id: 2,
    text: 'Collaborate & Track',
  },
];

const FeaturesV2New = () => { 
  return (
    <section className="pt-44 pb-24 md:pt-16 md:pb-24 lg:pt-[88px] lg:pb-[140px] xl:pt-[50px] xl:pb-[150px] xl:mt-[300px]">
      <div className="main-container space-y-[220px] md:space-y-[300px] xl:space-y-[300px]">

        {/* Features 2 Section */}
        <div className="flex flex-col-reverse items-center justify-between gap-x-5 gap-y-28 sm:gap-y-24 md:gap-x-10 md:gap-y-20 lg:flex-row-reverse lg:items-start lg:gap-x-16 2xl:gap-x-24">
          <div className="w-full lg:w-1/2">
            <div className="mb-8 space-y-3 px-4 text-center sm:px-0 md:text-left lg:mb-14">
              <RevealAnimation delay={0.3}>
                <h3 className="md:text-heading-3 lg:text-heading-2">
                  Web-Based Products
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="lg:max-w-[596px]">
                  Our CRM system and report writer software are web-based, which enables quick and easy access from anywhere at any time.
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
                <LinkButton
                  href="/contact-us"
                  className="btn btn-md btn-white dark:btn-transparent hover:btn-primary block w-[90%] md:inline-block md:w-auto">
                  Get started
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Features Image */}
          <div className="relative -mt-20 w-full md:-mt-36 lg:w-1/2">
            <RevealAnimation delay={0.4}>
              <figure className="h-auto max-w-full lg:max-w-[452px] lg:justify-self-end">
                <Image src={features2} alt="features Images" className="h-full w-full object-cover object-center" />
              </figure>
            </RevealAnimation>
            <div className="absolute top-[55%] -left-3 z-20 flex flex-col items-center md:-left-5 lg:-left-2 xl:-left-3 2xl:-left-8">
              <RevealAnimation delay={0.5} useSpring={true} duration={2}>
                <figure className="max-w-[280px] overflow-hidden rounded-[20px] md:h-[74px] md:max-w-[320px] md:self-end">
                  <Image
                    src={subFeatures4}
                    alt="Sub features"
                    className="shadow-3 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark4}
                    alt="Sub features"
                    className="shadow-3 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.6} useSpring={true} duration={2}>
                <figure className="my-1 max-w-[280px] overflow-hidden rounded-2xl object-cover md:my-2 md:h-[74px] md:max-w-[320px]">
                  <Image
                    src={subFeatures5}
                    alt="Sub features"
                    className="shadow-3 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark5}
                    alt="Sub features"
                    className="shadow-3 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.7} useSpring={true} duration={2}>
                <figure className="shadow-7 relative z-40 max-h-[72px] max-w-[250px] overflow-hidden rounded-2xl md:max-w-[310px]">
                  <Image
                    src={subFeatures6}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark6}
                    alt="Sub features"
                    className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8} useSpring={true} duration={2}>
                <figure className="shadow-7 z-30 -mt-[37px] hidden max-h-[72px] max-w-[200px] overflow-hidden rounded-2xl md:block md:max-w-[280px]">
                  <Image
                    src={subFeatures7}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark7}
                    alt="Sub features"
                    className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.9} useSpring={true} duration={2}>
                <figure className="shadow-7 z-20 -mt-[37px] hidden max-h-[72px] max-w-[180px] overflow-hidden rounded-2xl md:block md:max-w-[260px]">
                  <Image
                    src={subFeatures8}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark8}
                    alt="Sub features"
                    className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1} useSpring={true} duration={2}>
                <figure className="shadow-7 -mt-[37px] max-h-[72px] max-w-[240px] overflow-hidden rounded-2xl">
                  <Image
                    src={subFeatures9}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark9}
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
  );
};

FeaturesV2New.displayName = 'FeaturesV2New';
export default FeaturesV2New;
