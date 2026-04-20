import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from './Button';

const features = [
  {
    id: 1,
    icon: '✉',
    title: 'Automated communication',
    description:
      'Send appointment details, updates, and reports automatically via integrated channels.',
    points: [
      'SMS notifications for appointments',
      'Email integration (Office 365)',
      'Automated updates and reminders',
    ],
  },
  {
    id: 2,
    icon: '📄',
    title: 'Smart correspondence generation',
    description:
      'Generate letters and communications directly from case data and instructions.',
    points: [
      'Instruction to appointment letters',
      'Automated document generation',
      'Consistent formatting and templates',
    ],
  },
  {
    id: 3,
    icon: '🗂',
    title: 'Case management',
    description:
      'Track cases, appointments, and report progress in one structured system.',
    points: [
      'Centralised case tracking',
      'Appointment scheduling',
      'Report status visibility',
    ],
  },
  {
    id: 4,
    icon: '💳',
    title: 'Invoicing and financial tracking',
    description:
      'Manage invoices and financial workflows directly within the platform.',
    points: ['Invoice generation', 'Payment tracking', 'Xero integration'],
  },
  {
    id: 5,
    icon: '📱',
    title: 'Access across all devices',
    description:
      'Work seamlessly across desktop and mobile environments.',
    points: ['Web platform', 'iOS and Android apps', 'Fully synchronised data'],
  },
  {
    id: 6,
    icon: '🔗',
    title: 'Integrations and APIs',
    description:
      'Connect Medqon with your existing systems and agency workflows.',
    points: [
      'API integrations for medical agencies',
      'Email and system integrations',
      'Flexible workflow connectivity',
    ],
  },
  {
    id: 7,
    icon: '🛡',
    title: 'Compliance and support',
    description:
      'Operate with confidence with built-in compliance and ongoing support.',
    points: [
      'GDPR-aligned data handling',
      'International compliance support',
      'Dedicated support hub',
    ],
  },
];

const PlatformFeatures = () => {
  return (
    <section
      className="py-12 md:py-18 lg:pb-24 xl:py-28"
      aria-label="platform features section"
    >
      <div className="main-container space-y-17.5">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div>
            <RevealAnimation delay={0.1}>
              <h2>Everything behind the report</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>Medqon supports the full medico-legal workflow — from instruction to delivery, communication, and compliance.</p>
            </RevealAnimation>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <RevealAnimation key={feature.id} delay={0.1 * (index + 1)}>
              <article
                className={`bg-background-3 dark:bg-background-5 flex h-full flex-col rounded-xl p-6 ${
                  feature.id === 7
                    ? 'sm:col-span-2 lg:col-span-1 xl:col-span-1'
                    : ''
                }`}
              >
                {/* Icon */}
                <div className="bg-background-12 mb-5 flex h-10 w-10 items-center justify-center rounded-lg text-lg">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-secondary dark:text-accent mb-3 text-base font-semibold leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-secondary/70 dark:text-accent/70 mb-6 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Points */}
                <ul className="mt-auto space-y-2">
                  {feature.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-secondary/60 dark:text-accent/60 flex items-start gap-2 text-sm"
                    >
                      <span className="bg-ns-green mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealAnimation>
          ))}

          {/* CTA card — spans remaining space on last row */}
          <RevealAnimation delay={0.9}>
            <div className="bg-secondary dark:bg-background-5 flex h-full flex-col justify-between rounded-xl p-6">
              <div>
                <span className="bg-accent/10 text-tagline-3 mb-5 inline-block rounded-full px-5 py-1.5 font-medium text-nowrap text-white">
                  Get started
                </span>
                <p className="mt-5 mb-8 text-white">
                  See how Medqon transforms medical case management for agencies and practitioners.
                </p>
              </div>
              <div className="w-[90%] md:w-auto">
                <LinkButton
                  href="/contact-us"
                  className="mx-auto w-full md:mx-0 md:w-auto"
                  btnClass="btn-lg-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2"
                >
                  Book a demo
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

PlatformFeatures.displayName = 'PlatformFeatures';
export default PlatformFeatures;

// import hotjarIcon from '@public/images/icons/new-icons/hotjar.svg';
// import notionIcon from '@public/images/icons/new-icons/notion-v2.svg';
// import scapicIcon from '@public/images/icons/new-icons/scapic.svg';
// import stripeIcon from '@public/images/icons/new-icons/stripe.svg';
// import nsAvatar17 from '@public/images/ns-avatar-17.png';
// import nsAvatar20 from '@public/images/ns-avatar-20.png';
// import nsAvatar21 from '@public/images/ns-avatar-21.png';
// import nsAvatar23 from '@public/images/ns-avatar-23.png';
// import Image from 'next/image';
// import NumberAnimation from '../animation/NumberAnimation';
// import RevealAnimation from '../animation/RevealAnimation';
// import LinkButton from './Button';
  
// const SpotlightStories = () => {
//   return (
//     <section className="py-12 md:py-18 lg:pb-24 xl:py-28" aria-label="spotlight stories section">
//       <div className="main-container space-y-17.5">
//         <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:justify-between md:space-y-0">
//           <div>
//             <RevealAnimation delay={0.1}>
//               <h2>Spotlight Stories</h2>
//             </RevealAnimation>
//             <RevealAnimation delay={0.2}>
//               <p>Real results from real teams</p>
//             </RevealAnimation>
//           </div>
//           {/* btns */}
//           <ul className="flex flex-col items-center justify-start gap-x-4 gap-y-3 max-md:w-full md:flex-row md:gap-y-0">
//             <li className="w-[90%] md:w-auto">
//               <RevealAnimation delay={0.3} direction="left" offset={70}>
//                 <div>
//                   <LinkButton
//                     href={'/customer'}
//                     btnClass="btn-lg-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 "
//                     className="mx-auto w-full md:mx-0 md:w-auto">
//                     Read customer stories
//                   </LinkButton>
//                 </div>
//               </RevealAnimation>
//             </li>
//             <li className="w-[90%] list-none md:w-auto">
//               <RevealAnimation delay={0.4} direction="left" offset={70}>
//                 <div>
//                   <LinkButton
//                     href={'/contact-us'}
//                     btnClass="btn-lg-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 "
//                     className="mx-auto w-full md:mx-0 md:w-auto">
//                     Share your story
//                   </LinkButton>
//                 </div>
//               </RevealAnimation>
//             </li>
//           </ul>
//         </div>
//         {/* stories */}
//         <article className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-2">
//           <RevealAnimation delay={0.1}>
//             <div className="bg-background-3 dark:bg-background-5 max-w-full rounded-xl p-6 xl:max-w-[316px]">
//               <figure>
//                 <Image src={hotjarIcon} alt="story" />
//               </figure>
//               <p className="text-secondary dark:text-accent pt-16 pb-8">
//                 We easily converted scripts into natural voices and scaled our ad campaigns faster than ever.
//               </p>
//               <figure className="flex items-center gap-3">
//                 <Image
//                   src={nsAvatar20}
//                   className="size-11 rounded-full object-cover object-center"
//                   alt="Andrew Gasiorowski's avatar"
//                   width={44}
//                   height={44}
//                   loading="lazy"
//                 />
//                 <figure>
//                   <h3 className="text-tagline-1 leading-[1.5] font-semibold sm:text-lg">Andrew Gasiorowski</h3>
//                   <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
//                     NLP Engineer Goodcall
//                   </p>
//                 </figure>
//               </figure>
//             </div>
//           </RevealAnimation>
//           <div className="max-w-full space-y-5 max-lg:w-full lg:space-y-2">
//             <RevealAnimation delay={0.2}>
//               <div className="bg-background-3 dark:bg-background-5 rounded-xl p-6 xl:max-w-[316px]">
//                 <RevealAnimation delay={0.1}>
//                   <span
//                     className="bg-background-12 text-secondary text-tagline-3 rounded-full px-5 py-1.5 font-medium text-nowrap"
//                     role="text"
//                     aria-label="Section category">
//                     Case study
//                   </span>
//                 </RevealAnimation>
//                 <p className="text-secondary dark:text-accent pt-16 pb-8">
//                   SoundWave Studios boosts video output by 40% using AI-generated voices.
//                 </p>
//                 <div className="w-[90%] md:w-auto">
//                   <LinkButton
//                     href="case-study/ai-powered-patient-care-solutions-in-healthcare"
//                     className="mx-auto w-full md:mx-0 md:w-auto"
//                     btnClass="btn-lg-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
//                     Read now
//                   </LinkButton>
//                 </div>
//               </div>
//             </RevealAnimation>
//             <RevealAnimation delay={0.3}>
//               <div className="bg-ns-green space-y-3 rounded-xl p-6 xl:max-w-[316px]">
//                 <h2 className="text-secondary pt-6 text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[110%]">
//                   <NumberAnimation number={50} speed={1000} interval={180} rooms={2} heightSpaceRatio={2}>
//                     50%
//                   </NumberAnimation>
//                 </h2>
//                 <p className="text-secondary/60">less time spent on dubbing compared to traditional workflows.</p>
//               </div>
//             </RevealAnimation>
//           </div>
//           <div className="max-w-full space-y-5 max-lg:w-full lg:space-y-2">
//             <RevealAnimation delay={0.4}>
//               <div className="bg-background-3 dark:bg-background-5 rounded-xl p-6 xl:max-w-[316px]">
//                 <figure>
//                   <Image src={stripeIcon} alt="story" />
//                 </figure>
//                 <p className="text-secondary dark:text-accent pt-37.5 pb-8">
//                   The voice clarity and tone customization blew us away!
//                 </p>
//                 <figure className="flex items-center gap-3">
//                   <Image
//                     src={nsAvatar21}
//                     className="size-11 rounded-full object-cover object-center"
//                     alt="Carlos M.'s avatar"
//                     width={44}
//                     height={44}
//                     loading="lazy"
//                   />
//                   <figure>
//                     <h3 className="text-tagline-1 leading-[1.5] font-semibold sm:text-lg">Carlos M.</h3>
//                     <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">Business Owner</p>
//                   </figure>
//                 </figure>
//               </div>
//             </RevealAnimation>
//             <RevealAnimation delay={0.2}>
//               <div className="bg-background-3 dark:bg-background-5 rounded-xl p-6 xl:max-w-[316px]">
//                 <figure>
//                   <Image src={notionIcon} alt="story" />
//                 </figure>
//                 <p className="text-secondary dark:text-accent pt-31 pb-8">
//                   We instantly localize our campaigns with natural accents — no extra cost, no delays.
//                 </p>
//                 <figure className="flex items-center gap-3">
//                   <Image
//                     src={nsAvatar23}
//                     className="size-11 rounded-full object-cover object-center"
//                     alt="Nora Kim.'s avatar"
//                     width={44}
//                     height={44}
//                     loading="lazy"
//                   />
//                   <figure>
//                     <h3 className="text-tagline-1 leading-[1.5] font-semibold sm:text-lg">Nora Kim.</h3>
//                     <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
//                       Marketing Lead, AdPulse Global
//                     </p>
//                   </figure>
//                 </figure>
//               </div>
//             </RevealAnimation>
//           </div>
//           <div className="max-w-full space-y-5 lg:space-y-2">
//             <RevealAnimation delay={0.4}>
//               <div className="bg-secondary dark:bg-background-5 rounded-xl p-6 xl:max-w-[316px]">
//                 <RevealAnimation delay={0.1}>
//                   <span
//                     className="bg-accent/10 text-tagline-3 rounded-full px-5 py-1.5 font-medium text-nowrap text-white"
//                     role="text"
//                     aria-label="Section category">
//                     Case study
//                   </span>
//                 </RevealAnimation>
//                 <p className="pt-5 pb-8 text-white">
//                   SoundWave Studios boosts video output by 40% using AI-generated voices.
//                 </p>
//                 <div className="w-[90%] md:w-auto">
//                   <LinkButton
//                     href="case-study/bright-path-customer-engagement-and-retention"
//                     className="mx-auto w-full md:mx-0 md:w-auto"
//                     btnClass="btn-lg-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2">
//                     Read now
//                   </LinkButton>
//                 </div>
//               </div>
//             </RevealAnimation>
//             <RevealAnimation delay={0.3}>
//               <div className="bg-background-3 dark:bg-background-5 rounded-xl p-6 xl:max-w-[316px]">
//                 <figure>
//                   <Image src={scapicIcon} alt="story" />
//                 </figure>
//                 <p className="text-secondary dark:text-accent pt-19 pb-8">
//                   Our explainer videos now sound professional without hiring multiple voice actors. Its a total
//                   game-changer.
//                 </p>
//                 <figure className="flex items-center gap-3">
//                   <Image
//                     src={nsAvatar17}
//                     className="size-11 rounded-full object-cover object-center"
//                     alt="Liam Brooks's avatar"
//                     width={44}
//                     height={44}
//                     loading="lazy"
//                   />
//                   <figure>
//                     <h3 className="text-tagline-1 leading-[1.5] font-semibold sm:text-lg">Liam Brooks</h3>
//                     <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
//                       Video Producer, BrightMotion
//                     </p>
//                   </figure>
//                 </figure>
//               </div>
//             </RevealAnimation>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

// SpotlightStories.displayName = 'SpotlightStories';
// export default SpotlightStories;
