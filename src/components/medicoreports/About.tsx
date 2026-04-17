import aboutDataIntegration1DarkImage from '@public/images/home-page-6/aboaut-data-integration-1-dark.png';
import aboutDataIntegration1Image from '@public/images/home-page-6/about-data-integration-1.png';
import aboutDataIntegration2DarkImage from '@public/images/home-page-6/about-data-integration-2-dark.svg';
import aboutDataIntegration2Image from '@public/images/home-page-6/about-data-integration-2.svg';
import aboutDataIntegration3DarkImage from '@public/images/home-page-6/about-data-integration-3-dark.svg';
import aboutDataIntegration3Image from '@public/images/home-page-6/about-data-integration-3.svg';
import aboutDataSolution1DarkImage from '@public/images/home-page-6/about-data-solution-1-dark.svg';
import aboutDataSolution1Image from '@public/images/home-page-6/about-data-solution-1.svg';
import trustVerification from '@public/images/homepage/trust-verification.gif';
import aboutDataSolution2DarkImage from '@public/images/home-page-6/about-data-solution-2-dark.svg';
import aboutDataSolution2Image from '@public/images/home-page-6/about-data-solution-2.svg';
import aboutDataSolution3DarkImage from '@public/images/home-page-6/about-data-solution-3-dark.svg';
import aboutDataSolution3Image from '@public/images/home-page-6/about-data-solution-3.svg';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import AboutFeaturesList from './AboutFeaturesList';

const About = () => {  
  return (
    <section className="bg-background-3 dark:bg-background-5 overflow-hidden">
      <div className="main-container">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[112px] py-28">
          {/*Integration Data*/}
          <div className="pt-5 max-lg:order-1 text-center sm:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow-v2 mb-5">Trust & Verification</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">Verifiable medico-legal report integrity</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mb-8">
                Instantly confirm whether a report is original or has been altered after issuance.
              </p>
            </RevealAnimation>

            <AboutFeaturesList />

            <RevealAnimation delay={0.7}>
              <div>
                <LinkButton
                  href="/about-01"
                  className="solution-button btn btn-lg md:btn-xl btn-secondary inline-block hover:btn-primary dark:btn-accent w-[90%] md:w-auto mx-auto md:mx-0">
                  Started Your Journey
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          <div className="max-lg:order-0">
            {/*Integration Images*/}
            <div className="relative z-10 inline-block max-sm:pt-[200px] sm:pt-[130px] left-1/2 -translate-x-1/2">
              <RevealAnimation delay={0.3} offset={100} useSpring={true} duration={2}>
                <figure className="max-sm:w-[300px] ml-0 sm:ml-16 lg:ml-0 xl:ml-16 rounded-2xl overflow-hidden">
                  <Image
                    src={trustVerification}
                    alt="aboaut-data-integration"
                    className="size-full object-cover block dark:hidden"
                  />
                  <Image
                    src={trustVerification}
                    alt="aboaut-data-integration"
                    className="size-full object-cover hidden dark:inline-block"
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

export default About;



// import aboutDataIntegration1DarkImage from '@public/images/home-page-6/aboaut-data-integration-1-dark.png';
// import aboutDataIntegration1Image from '@public/images/home-page-6/about-data-integration-1.png';
// import aboutDataIntegration2DarkImage from '@public/images/home-page-6/about-data-integration-2-dark.svg';
// import aboutDataIntegration2Image from '@public/images/home-page-6/about-data-integration-2.svg';
// import aboutDataIntegration3DarkImage from '@public/images/home-page-6/about-data-integration-3-dark.svg';
// import aboutDataIntegration3Image from '@public/images/home-page-6/about-data-integration-3.svg';
// import aboutDataSolution1DarkImage from '@public/images/home-page-6/about-data-solution-1-dark.svg';
// import aboutDataSolution1Image from '@public/images/home-page-6/about-data-solution-1.svg';
// import aboutDataSolution2DarkImage from '@public/images/home-page-6/about-data-solution-2-dark.svg';
// import aboutDataSolution2Image from '@public/images/home-page-6/about-data-solution-2.svg';
// import aboutDataSolution3DarkImage from '@public/images/home-page-6/about-data-solution-3-dark.svg';
// import aboutDataSolution3Image from '@public/images/home-page-6/about-data-solution-3.svg';

// import Image from 'next/image';
// import RevealAnimation from '../animation/RevealAnimation';
// import LinkButton from '../ui/button/LinkButton';
// import AboutFeaturesList from './AboutFeaturesList';

// const About = () => {  
//   return (
//     <section className="bg-background-3 dark:bg-background-5 overflow-hidden">
//       <div className="main-container">

//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[112px] py-28">
//           {/*Integration Data*/}
//           <div className="pt-5 max-lg:order-1 text-center sm:text-left">
//             <RevealAnimation delay={0.1}>
//               <span className="badge badge-yellow-v2 mb-5">Trust & Verification</span>
//             </RevealAnimation>

//             <RevealAnimation delay={0.2}>
//               <h2 className="mb-3">Verifiable medico-legal report integrity</h2>
//             </RevealAnimation>

//             <RevealAnimation delay={0.3}>
//               <p className="mb-8">
//                 Instantly confirm whether a report is original or has been altered after issuance.
//               </p>
//             </RevealAnimation>

//             <AboutFeaturesList />

//             <RevealAnimation delay={0.7}>
//               <div>
//                 <LinkButton
//                   href="/about-01"
//                   className="solution-button btn btn-lg md:btn-xl btn-secondary inline-block hover:btn-primary dark:btn-accent w-[90%] md:w-auto mx-auto md:mx-0">
//                   Started Your Journey
//                 </LinkButton>
//               </div>
//             </RevealAnimation>
//           </div>

//           <div className="max-lg:order-0">
//             {/*Integration Images*/}
//             <div className="relative z-10 inline-block max-sm:pt-[200px] sm:pt-[230px] left-1/2 -translate-x-1/2">
//               <RevealAnimation delay={0.3} offset={100} useSpring={true} duration={2}>
//                 <figure className="max-sm:w-[300px] ml-0 sm:ml-16 lg:ml-0 xl:ml-16 rounded-2xl overflow-hidden">
//                   <Image
//                     src={aboutDataSolution1Image}
//                     alt="aboaut-data-integration"
//                     className="size-full object-cover block dark:hidden"
//                   />
//                   <Image
//                     src={aboutDataSolution1DarkImage}
//                     alt="aboaut-data-integration"
//                     className="size-full object-cover hidden dark:inline-block"
//                   />
//                 </figure>
//               </RevealAnimation>

//               <RevealAnimation delay={0.4} offset={100} direction="up" useSpring={true} duration={2}>
//                 <figure className="absolute left-0 top-0 rounded-[20px] overflow-hidden">
//                   <Image
//                     src={aboutDataSolution2Image}
//                     alt="about-data-integration"
//                     className="size-full object-cover block dark:hidden"
//                   />
//                   <Image
//                     src={aboutDataSolution2DarkImage}
//                     alt="about-data-integration"
//                     className="size-full object-cover hidden dark:inline-block"
//                   />
//                 </figure>
//               </RevealAnimation>

//               <RevealAnimation delay={0.4} offset={100} direction="right" useSpring={true} duration={2}>
//                 <figure className="absolute max-sm:w-[150px] -right-[50px] sm:-right-[150px] lg:-right-[50px] top-[150px] xl:-right-[150px] -z-10 rounded-2xl overflow-hidden">
//                   <Image
//                     src={aboutDataSolution3Image}
//                     alt="about-data-integration "
//                     className="size-full object-cover block dark:hidden"
//                   />
//                   <Image
//                     src={aboutDataSolution3DarkImage}
//                     alt="about-data-integration "
//                     className="size-full object-cover hidden dark:inline-block"
//                   />
//                 </figure>
//               </RevealAnimation>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
