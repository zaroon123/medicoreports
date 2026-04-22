import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from './Button';

/* ─────────────────────────────────────────────────────────────
   Icons
───────────────────────────────────────────────────────────── */
const IconEmail = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16v13a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    <path d="M4 4l8 9 8-9" />
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h8M8 11h8M8 15h5" />
  </svg>
);
const IconList = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);
const IconCard = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <path d="M3 10h18M7 15h2M13 15h4" />
  </svg>
);
const IconMobile = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M9 7h6M9 11h6M9 15h3" />
  </svg>
);
const IconLink = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────── */
type IconVariant = 'neutral' | 'purple' | 'navy' | 'purple-soft' | 'navy-soft';

const IconBox = ({ children, variant = 'neutral' }: { children: React.ReactNode; variant?: IconVariant }) => {
  const styles: Record<IconVariant, string> = {
    neutral:      'bg-background-3 dark:bg-background-5 border border-black/10 dark:border-white/10 text-[#6108c4]',
    purple:       'bg-white/15 text-white/85',
    navy:         'bg-white/12 text-white/85',
    'purple-soft':'text-[#000000] border border-black/5',
    'navy-soft':  'bg-[#d4e2f5] text-[#032f73]',
  };
  return (
    <div className={`mb-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${styles[variant]}`}>
      {children}
    </div>
  );
};

type DotColor = 'purple' | 'navy' | 'light' | 'navy-light';
const Dot = ({ color = 'purple' }: { color?: DotColor }) => {
  const bg: Record<DotColor, string> = {
    purple:       'bg-[#6108c4]',
    navy:         'bg-[#032f73]',
    light:        'bg-white/50',
    'navy-light': 'bg-[#2a5aab]',
  };
  return <span className={`mt-1 block h-[5px] w-[5px] shrink-0 rounded-full ${bg[color]}`} />;
};

const PointsList = ({
  points,
  dotColor = 'purple',
  textClass = 'text-secondary/60 dark:text-accent/60',
}: {
  points: string[];
  dotColor?: DotColor;
  textClass?: string;
}) => (
  <ul className="mt-auto space-y-1.5 pt-1">
    {points.map((pt, i) => (
      <li key={i} className={`flex items-start gap-2 text-[13px] leading-snug ${textClass}`}>
        <Dot color={dotColor} />
        {pt}
      </li>
    ))}
  </ul>
);

const Tag = ({ label, variant }: { label: string; variant: 'purple' | 'navy' | 'purple-solid' | 'navy-solid' }) => {
  const styles: Record<string, string> = {
    purple:       'bg-white/18 text-black/85',
    navy:         'bg-black/14 text-black/80',
    'purple-solid':'bg-[#BBE278] text-[#000000]',
    'navy-solid': 'bg-[#c9daf0] text-[#01276a]',
  };
  return (
    <span className={`mb-2.5 inline-block rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider ${styles[variant]}`}>
      {label}
    </span>
  );
};

/* ─────────────────────────────────────────────────────────────
   Card variants
───────────────────────────────────────────────────────────── */

/** Standard neutral card */
const NeutralCard = ({
  icon, title, description, points, meta, delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  meta?: { number: string; label: string };
  delay: number;
}) => (
  <RevealAnimation delay={delay}>
    <article className="bg-background-3 dark:bg-background-5 flex h-full flex-col rounded-2xl border border-black/5 p-6 dark:border-white/5">
      <IconBox variant="neutral">{icon}</IconBox>
      <h3 className="text-secondary dark:text-accent mb-2 text-[18px] font-medium leading-snug">{title}</h3>
      <p className="text-secondary/60 dark:text-accent/60 mb-4 text-[13px] leading-relaxed">{description}</p>
      <PointsList points={points} dotColor="purple" />
      {meta && (
        <div className="mt-4 flex items-center gap-2 border-t border-black/5 pt-4 dark:border-white/5">
          <span className="text-2xl font-light text-[#6108c4]">{meta.number}</span>
          <span className="text-[11px] leading-snug text-secondary/40 dark:text-accent/40">{meta.label}</span>
        </div>
      )}
    </article>
  </RevealAnimation>
);

/** Purple-tinted soft card */
const PurpleSoftCard = ({
  icon, tag, title, description, points, delay,
}: {
  icon: React.ReactNode; tag: string; title: string; description: string; points: string[]; delay: number;
}) => (
  <RevealAnimation delay={delay}>
    <article className="flex h-full flex-col rounded-2xl border border-[#BBE278] bg-[#F2FFDB] p-6">
      <IconBox variant="purple-soft">{icon}</IconBox>
      <Tag label={tag} variant="purple-solid" />
      <h3 className="mb-2 text-[18px] font-medium leading-snug text-[#000000]">{title}</h3>
      <p className="mb-4 text-[13px] leading-relaxed text-[#1a1a1c]">{description}</p>
      <PointsList points={points} dotColor="purple" textClass="text-[#1a1a1c]" />
    </article>
  </RevealAnimation>
);

/** Navy-tinted soft card */
const NavySoftCard = ({
  icon, tag, title, description, points, delay,
}: {
  icon: React.ReactNode; tag: string; title: string; description: string; points: string[]; delay: number;
}) => (
  <RevealAnimation delay={delay}>
    <article className="flex h-full flex-col rounded-2xl border border-[#a8bfe0] bg-[#e6edf8] p-6">
      <IconBox variant="navy-soft">{icon}</IconBox>
      <Tag label={tag} variant="navy-solid" />
      <h3 className="mb-2 text-[18px] font-medium leading-snug text-[#01276a]">{title}</h3>
      <p className="mb-4 text-[13px] leading-relaxed text-[#1a4580]">{description}</p>
      <PointsList points={points} dotColor="navy" textClass="text-[#1a4580]" />
    </article>
  </RevealAnimation>
);

/** Solid purple stat card */
const StatCard = ({ delay }: { delay: number }) => (
  <RevealAnimation delay={delay}>
    <div className="flex h-full flex-col justify-center rounded-2xl bg-[#1B0273] p-6">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-white/50">Time saved</p>
      <p className="mb-2 text-[82px] font-light leading-none text-white">68%</p>
      <p className="text-[12px] leading-relaxed text-white/55">
        average reduction in communication time after onboarding
      </p>
    </div>
  </RevealAnimation>
);

/** Solid navy card (compliance — spans 2 cols on desktop) */
const ComplianceCard = ({
  icon, title, description, points, delay,
}: {
  icon: React.ReactNode; title: string; description: string; points: string[]; delay: number;
}) => (
  <RevealAnimation delay={delay}>
    <article className="col-span-1 flex flex-col rounded-2xl bg-[#032f73] p-6 sm:col-span-2 lg:col-span-2">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex-1">
          <IconBox variant="navy">{icon}</IconBox>
          <Tag label="Enterprise-ready" variant="navy" />
          <h3 className="mb-2 text-[18px] font-medium leading-snug text-white">{title}</h3>
          <p className="text-[13px] leading-relaxed text-white/65">{description}</p>
        </div>
        <PointsList points={points} dotColor="light" textClass="text-white/65 flex-1 sm:pt-14" />
      </div>
    </article>
  </RevealAnimation>
);

/** Solid purple CTA card */
const CTACard = ({ delay }: { delay: number }) => (
  <RevealAnimation delay={delay}>
    <div className="flex h-full flex-col rounded-2xl bg-[#BBE278] p-6">
      <Tag label="Get started" variant="purple" />
      <h3 className="mb-2 text-[18px] font-medium leading-snug text-black">See Medqon in action</h3>
      <p className="mb-5 text-[13px] leading-relaxed text-black">
        A 20-minute walkthrough tailored to your agency — no commitment required.
      </p>
      <hr className="mb-4 border-black/12" />
      <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-black">Ready to begin?</p>
      <p className="mb-5 text-[12px] leading-relaxed text-black">
        Join agencies already running their case pipelines on Medqon.
      </p>
      <LinkButton
        href="/contact-us"
        className="mt-auto w-full"
        btnClass="btn-lg-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 w-full text-center"
      >
        Book a demo
      </LinkButton>
    </div>
  </RevealAnimation>
);
 
/* ─────────────────────────────────────────────────────────────
   Main section
───────────────────────────────────────────────────────────── */
const SpotlightStories = () => {
  return (
    <section className="py-12 md:py-18 lg:pb-24 xl:py-28" aria-label="platform features section">
      <div className="main-container space-y-12">

        {/* ── Header ── */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <RevealAnimation delay={0.05}>
              <p className="mb-3 text-[13px] font-medium uppercase tracking-widest text-[#6108c4]">
                Platform capabilities
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.1}>
              <h2>Everything behind the report</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/60 dark:text-accent/60 mt-2 max-w-md text-sm leading-relaxed">
                Medqon supports the full medico-legal workflow — from instruction to delivery, communication, and compliance.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* ── Grid ──
              Mobile  : 1 col
              Tablet  : 2 col  (sm:)
              Desktop : 3 col  (lg:)
        ── */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">

          {/* Row 1 */}
          <NeutralCard
            icon={<IconEmail />}
            title="Automated communication"
            description="Send appointment details, updates, and reports automatically via integrated channels."
            points={['SMS notifications for appointments', 'Email integration (Office 365)', 'Automated updates and reminders']}
            delay={0.10}
          />

          <PurpleSoftCard
            icon={<IconDoc />}
            tag="Automated"
            title="Smart correspondence generation"
            description="Generate letters and communications directly from case data and instructions."
            points={['Instruction to appointment letters', 'Automated document generation', 'Consistent formatting and templates']}
            delay={0.15}
          />

          <StatCard delay={0.20} />

          {/* Row 2 */}
          <NeutralCard
            icon={<IconLink />}
            title="Integrations and APIs"
            description="Connect Medqon with your existing systems and agency workflows seamlessly."
            points={['API integrations for medical agencies', 'Email and system integrations', 'Flexible workflow connectivity']}
            delay={0.40}
          />

          <NeutralCard
            icon={<IconCard />}
            title="Invoicing and financial tracking"
            description="Manage invoices and financial workflows directly within the platform."
            points={['Invoice generation', 'Payment tracking', 'Xero integration']}
            delay={0.30}
          />

          {/* Compliance spans 2 cols on sm+, 1 col on mobile */}
          <NeutralCard
            icon={<IconShield />}
            title="Compliance and support"
            description="Operate with confidence with built-in compliance features and ongoing dedicated support."
            points={['GDPR-aligned data handling', 'International compliance support', 'Dedicated support hub']}
            delay={0.45}
          />

          

          {/* Row 3 */}

          {/* CTA spans 2 cols on mobile, 1 col on sm+ so it fills row 4 */}
          <CTACard delay={0.50} />

           <NeutralCard
            icon={<IconList />}
            title="Case management"
            description="Track cases, appointments, and report progress in one structured system."
            points={['Centralised case tracking', 'Appointment scheduling', 'Report status visibility']}
            delay={0.25}
          />
          

          
          <PurpleSoftCard
            icon={<IconMobile />}
            tag="Multi-device"
            title="Access across all devices"
            description="Work seamlessly across desktop and mobile — fully synchronised in real time."
            points={['Web platform', 'iOS and Android apps', 'Fully synchronised data']}
            delay={0.35}
          />

          

        </div>
      </div>
    </section>
  );
};

SpotlightStories.displayName = 'SpotlightStories';
export default SpotlightStories;

// import RevealAnimation from '../animation/RevealAnimation';
// import LinkButton from './Button';

// /* ─── Icon components ─────────────────────────────────────── */
// const IconEmail = () => (
//   <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
//     <path d="M4 4h16v13a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
//     <path d="M4 4l8 9 8-9" />
//   </svg>
// );
// const IconDoc = () => (
//   <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
//     <rect x="4" y="3" width="16" height="18" rx="2" />
//     <path d="M8 7h8M8 11h8M8 15h5" />
//   </svg>
// );
// const IconList = () => (
//   <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
//     <path d="M3 6h18M3 12h18M3 18h18" />
//   </svg>
// );
// const IconCard = () => (
//   <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
//     <rect x="3" y="6" width="18" height="13" rx="2" />
//     <path d="M3 10h18M7 15h2M13 15h4" />
//   </svg>
// );
// const IconMobile = () => (
//   <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
//     <rect x="5" y="2" width="14" height="20" rx="2" />
//     <path d="M9 7h6M9 11h6M9 15h3" />
//   </svg>
// );
// const IconLink = () => (
//   <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
//     <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
//     <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
//   </svg>
// );
// const IconShield = () => (
//   <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//   </svg>
// );

// /* ─── Shared sub-components ───────────────────────────────── */
// const IconBox = ({
//   children,
//   variant = 'base',
// }: {
//   children: React.ReactNode;
//   variant?: 'base' | 'purple' | 'navy';
// }) => {
//   const styles = {
//     base: 'bg-white border border-black/10 text-[#6108c4] dark:bg-white/10 dark:border-white/10 dark:text-white/70',
//     purple: 'bg-white/15 text-white/85',
//     navy: 'bg-white/12 text-white/85',
//   };
//   return (
//     <div className={`mb-[14px] flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg ${styles[variant]}`}>
//       {children}
//     </div>
//   );
// };

// const Dot = ({ color = 'purple' }: { color?: 'purple' | 'navy' | 'light' }) => {
//   const bg = {
//     purple: 'bg-[#6108c4]',
//     navy: 'bg-[#032f73]',
//     light: 'bg-white/50',
//   }[color];
//   return <span className={`mt-1 block h-[5px] w-[5px] shrink-0 rounded-full ${bg}`} />;
// };

// const PointsList = ({
//   points,
//   dotColor = 'purple',
//   textClass = 'text-secondary/60 dark:text-accent/60',
// }: {
//   points: string[];
//   dotColor?: 'purple' | 'navy' | 'light';
//   textClass?: string;
// }) => (
//   <ul className="mt-auto space-y-1.5">
//     {points.map((pt, i) => (
//       <li key={i} className={`flex items-start gap-2 text-[13px] leading-snug ${textClass}`}>
//         <Dot color={dotColor} />
//         {pt}
//       </li>
//     ))}
//   </ul>
// );

// /* ─── Individual card types ───────────────────────────────── */

// /** Standard neutral card */
// const BaseCard = ({
//   icon,
//   title,
//   description,
//   points,
//   meta,
//   delay,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   points: string[];
//   meta?: { number: string; label: string };
//   delay: number;
// }) => (
//   <RevealAnimation delay={delay}>
//     <article className="bg-background-3 dark:bg-background-5 mb-[14px] break-inside-avoid rounded-2xl border border-black/5 p-6 dark:border-white/5">
//       <IconBox variant="base">{icon}</IconBox>
//       <h3 className="text-secondary dark:text-accent mb-2 text-[18px] font-semibold leading-snug">{title}</h3>
//       <p className="text-secondary/60 dark:text-accent/60 mb-4 text-[13px] leading-relaxed">{description}</p>
//       <PointsList points={points} dotColor="purple" />
//       {meta && (
//         <div className="mt-4 flex items-center gap-2 border-t border-black/5 pt-4 dark:border-white/5">
//           <span className="text-2xl font-light text-[#6108c4]">{meta.number}</span>
//           <span className="text-[11px] leading-snug text-secondary/40 dark:text-accent/40">{meta.label}</span>
//         </div>
//       )}
//     </article>
//   </RevealAnimation>
// );

// /** Purple-tinted soft card */
// const PurpleSoftCard = ({
//   icon,
//   tag,
//   title,
//   description,
//   points,
//   delay,
// }: {
//   icon: React.ReactNode;
//   tag: string;
//   title: string;
//   description: string;
//   points: string[];
//   delay: number;
// }) => (
//   <RevealAnimation delay={delay}>
//     <article className="mb-[14px] break-inside-avoid rounded-2xl border border-[#d9b8f7] bg-[#f3ebfd] p-6">
//       <div className="mb-[14px] flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg border border-[#d9b8f7] bg-white text-[#6108c4]">
//         {icon}
//       </div>
//       <span className="mb-3 inline-block rounded-full bg-[#ede0fc] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#6108c4]">
//         {tag}
//       </span>
//       <h3 className="mb-2 text-[18px] font-semibold leading-snug text-[#6108c4]">{title}</h3>
//       <p className="mb-4 text-[13px] leading-relaxed text-[#7a3db0]">{description}</p>
//       <PointsList points={points} dotColor="purple" textClass="text-[#7a3db0]" />
//     </article>
//   </RevealAnimation>
// );

// /** Navy-tinted soft card */
// const NavySoftCard = ({
//   icon,
//   tag,
//   title,
//   description,
//   points,
//   delay,
// }: {
//   icon: React.ReactNode;
//   tag: string;
//   title: string;
//   description: string;
//   points: string[];
//   delay: number;
// }) => (
//   <RevealAnimation delay={delay}>
//     <article className="mb-[14px] break-inside-avoid rounded-2xl border border-[#b3c6e8] bg-[#e8eef8] p-6">
//       <div className="mb-[14px] flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg border border-[#b3c6e8] bg-white text-[#032f73]">
//         {icon}
//       </div>
//       <span className="mb-3 inline-block rounded-full bg-[#d4e2f5] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#032f73]">
//         {tag}
//       </span>
//       <h3 className="mb-2 text-[18px] font-semibold leading-snug text-[#032f73]">{title}</h3>
//       <p className="mb-4 text-[13px] leading-relaxed text-[#2a4f88]">{description}</p>
//       <PointsList points={points} dotColor="navy" textClass="text-[#2a4f88]" />
//     </article>
//   </RevealAnimation>
// );

// /** Bold purple stat card */
// const StatCard = ({ delay }: { delay: number }) => (
//   <RevealAnimation delay={delay}>
//     <div className="mb-[14px] break-inside-avoid rounded-2xl bg-[#6108c4] p-6">
//       <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-white/50">Time saved</p>
//       <p className="mb-1 text-[52px] font-light leading-none text-white">68%</p>
//       <p className="text-[11px] leading-relaxed text-white/55">
//         average reduction in case communication time after onboarding
//       </p>
//     </div>
//   </RevealAnimation>
// );

// /** Navy dark card (compliance) */
// const NavyDarkCard = ({
//   icon,
//   title,
//   description,
//   points,
//   delay,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   points: string[];
//   delay: number;
// }) => (
//   <RevealAnimation delay={delay}>
//     <article className="mb-[14px] break-inside-avoid rounded-2xl bg-[#032f73] p-6">
//       <IconBox variant="navy">{icon}</IconBox>
//       <h3 className="mb-2 text-[18px] font-semibold leading-snug text-white">{title}</h3>
//       <p className="mb-4 text-[13px] leading-relaxed text-white/65">{description}</p>
//       <PointsList points={points} dotColor="light" textClass="text-white/60" />
//     </article>
//   </RevealAnimation>
// );

// /** Navy CTA card */
// const CTACard = ({ delay }: { delay: number }) => (
//   <RevealAnimation delay={delay}>
//     <div className="mb-[14px] break-inside-avoid rounded-2xl bg-[#032f73] p-6">
//       <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/70">
//         Get started
//       </span>
//       <h3 className="mb-2 text-[18px] font-semibold leading-snug text-white">See Medqon in action</h3>
//       <p className="mb-5 text-[13px] leading-relaxed text-white/65">
//         A 20-minute walkthrough tailored to your agencys workflow — no commitment required.
//       </p>
//       <hr className="mb-4 border-white/10" />
//       <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-white/40">Ready to begin?</p>
//       <p className="mb-5 text-[11px] leading-relaxed text-white/60">
//         Join agencies already running their medical case pipelines on Medqon.
//       </p>
//       <LinkButton
//         href="/contact-us"
//         className="w-full"
//         btnClass="btn-lg-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 w-full text-center"
//       >
//         Book a demo
//       </LinkButton>
//     </div>
//   </RevealAnimation>
// );

// /* ─── Main section ────────────────────────────────────────── */
// const SpotlightStories = () => {
//   return (
//     <section className="py-12 md:py-18 lg:pb-24 xl:py-28" aria-label="platform features section">
//       <div className="main-container space-y-12">

//         {/* Header */}
//         <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
//           <div>
//             <RevealAnimation delay={0.05}>
//               <p className="mb-3 text-[13px] font-medium uppercase tracking-widest text-[#6108c4]">
//                 Platform capabilities
//               </p>
//             </RevealAnimation>
//             <RevealAnimation delay={0.1}>
//               <h2>Everything behind the report</h2>
//             </RevealAnimation>
//             <RevealAnimation delay={0.2}>
//               <p className="text-secondary/60 dark:text-accent/60 mt-2 max-w-md text-sm leading-relaxed">
//                 Medqon supports the full medico-legal workflow — from instruction to delivery, communication, and compliance.
//               </p>
//             </RevealAnimation>
//           </div>
//         </div>

//         {/* Masonry grid — 1 col mobile / 2 col tablet / 3 col desktop */}
//         <div className="columns-1 gap-[14px] sm:columns-2 lg:columns-3">

//           {/* Col flow 1 */}
//           <BaseCard
//             icon={<IconEmail />}
//             title="Automated communication"
//             description="Send appointment details, updates, and reports automatically via integrated channels."
//             points={['SMS notifications for appointments', 'Email integration (Office 365)', 'Automated updates and reminders']}
//             delay={0.1}
//           />

//           <StatCard delay={0.15} />

//           <BaseCard
//             icon={<IconCard />}
//             title="Invoicing and financial tracking"
//             description="Manage invoices and financial workflows directly within the platform."
//             points={['Invoice generation', 'Payment tracking', 'Xero integration']}
//             delay={0.2}
//           />

//           <CTACard delay={0.25} />

//           {/* Col flow 2 */}
//           <PurpleSoftCard
//             icon={<IconDoc />}
//             tag="Automated"
//             title="Smart correspondence generation"
//             description="Generate letters and communications directly from case data and instructions."
//             points={['Instruction to appointment letters', 'Automated document generation', 'Consistent formatting and templates']}
//             delay={0.1}
//           />

//           <BaseCard
//             icon={<IconList />}
//             title="Case management"
//             description="Track cases, appointments, and report progress in one structured system."
//             points={['Centralised case tracking', 'Appointment scheduling', 'Report status visibility']}
//             meta={{ number: '1', label: 'unified workspace for all case activity' }}
//             delay={0.2}
//           />

//           {/* Col flow 3 */}
//           <NavySoftCard
//             icon={<IconMobile />}
//             tag="Multi-device"
//             title="Access across all devices"
//             description="Work seamlessly across desktop and mobile — fully synchronised in real time."
//             points={['Web platform', 'iOS and Android apps', 'Fully synchronised data']}
//             delay={0.1}
//           />

//           <BaseCard
//             icon={<IconLink />}
//             title="Integrations and APIs"
//             description="Connect Medqon with your existing systems and agency workflows."
//             points={['API integrations for medical agencies', 'Email and system integrations', 'Flexible workflow connectivity']}
//             delay={0.15}
//           />

//           <NavyDarkCard
//             icon={<IconShield />}
//             title="Compliance and support"
//             description="Operate with confidence with built-in compliance and ongoing dedicated support."
//             points={['GDPR-aligned data handling', 'International compliance support', 'Dedicated support hub']}
//             delay={0.2}
//           />

//         </div>
//       </div>
//     </section>
//   );
// };

// SpotlightStories.displayName = 'SpotlightStories';
// export default SpotlightStories;

// import RevealAnimation from '../animation/RevealAnimation';
// import LinkButton from './Button';

// const features = [
//   {
//     id: 1,
//     icon: '✉',
//     title: 'Automated communication',
//     description:
//       'Send appointment details, updates, and reports automatically via integrated channels.',
//     points: [
//       'SMS notifications for appointments',
//       'Email integration (Office 365)',
//       'Automated updates and reminders',
//     ],
//   },
//   {
//     id: 2,
//     icon: '📄',
//     title: 'Smart correspondence generation',
//     description:
//       'Generate letters and communications directly from case data and instructions.',
//     points: [
//       'Instruction to appointment letters',
//       'Automated document generation',
//       'Consistent formatting and templates',
//     ],
//   },
//   {
//     id: 3,
//     icon: '🗂',
//     title: 'Case management',
//     description:
//       'Track cases, appointments, and report progress in one structured system.',
//     points: [
//       'Centralised case tracking',
//       'Appointment scheduling',
//       'Report status visibility',
//     ],
//   },
//   {
//     id: 4,
//     icon: '💳',
//     title: 'Invoicing and financial tracking',
//     description:
//       'Manage invoices and financial workflows directly within the platform.',
//     points: ['Invoice generation', 'Payment tracking', 'Xero integration'],
//   },
//   {
//     id: 5,
//     icon: '📱',
//     title: 'Access across all devices',
//     description:
//       'Work seamlessly across desktop and mobile environments.',
//     points: ['Web platform', 'iOS and Android apps', 'Fully synchronised data'],
//   },
//   {
//     id: 6,
//     icon: '🔗',
//     title: 'Integrations and APIs',
//     description:
//       'Connect Medqon with your existing systems and agency workflows.',
//     points: [
//       'API integrations for medical agencies',
//       'Email and system integrations',
//       'Flexible workflow connectivity',
//     ],
//   },
//   {
//     id: 7,
//     icon: '🛡',
//     title: 'Compliance and support',
//     description:
//       'Operate with confidence with built-in compliance and ongoing support.',
//     points: [
//       'GDPR-aligned data handling',
//       'International compliance support',
//       'Dedicated support hub',
//     ],
//   },
// ];

// const PlatformFeatures = () => {
//   return (
//     <section
//       className="py-12 md:py-18 lg:pb-24 xl:py-28"
//       aria-label="platform features section"
//     >
//       <div className="main-container space-y-17.5">
//         {/* Header */}
//         <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:justify-between md:space-y-0">
//           <div>
//             <RevealAnimation delay={0.1}>
//               <h2>Everything behind the report</h2>
//             </RevealAnimation>
//             <RevealAnimation delay={0.2}>
//               <p>Medqon supports the full medico-legal workflow — from instruction to delivery, communication, and compliance.</p>
//             </RevealAnimation>
//           </div>
//         </div>

//         {/* Feature Cards Grid */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {features.map((feature, index) => (
//             <RevealAnimation key={feature.id} delay={0.1 * (index + 1)}>
//               <article
//                 className={`bg-background-3 dark:bg-background-5 flex h-full flex-col rounded-xl p-6 ${
//                   feature.id === 7
//                     ? 'sm:col-span-2 lg:col-span-1 xl:col-span-1'
//                     : ''
//                 }`}
//               >
//                 {/* Icon */}
//                 <div className="bg-background-12 mb-5 flex h-10 w-10 items-center justify-center rounded-lg text-lg">
//                   {feature.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-secondary dark:text-accent mb-3 text-base font-semibold leading-snug">
//                   {feature.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-secondary/70 dark:text-accent/70 mb-6 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>

//                 {/* Points */}
//                 <ul className="mt-auto space-y-2">
//                   {feature.points.map((point, i) => (
//                     <li
//                       key={i}
//                       className="text-secondary/60 dark:text-accent/60 flex items-start gap-2 text-sm"
//                     >
//                       <span className="bg-ns-green mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full" />
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </article>
//             </RevealAnimation>
//           ))}

//           {/* CTA card — spans remaining space on last row */}
//           <RevealAnimation delay={0.9}>
//             <div className="bg-secondary dark:bg-background-5 flex h-full flex-col justify-between rounded-xl p-6">
//               <div>
//                 <span className="bg-accent/10 text-tagline-3 mb-5 inline-block rounded-full px-5 py-1.5 font-medium text-nowrap text-white">
//                   Get started
//                 </span>
//                 <p className="mt-5 mb-8 text-white">
//                   See how Medqon transforms medical case management for agencies and practitioners.
//                 </p>
//               </div>
//               <div className="w-[90%] md:w-auto">
//                 <LinkButton
//                   href="/contact-us"
//                   className="mx-auto w-full md:mx-0 md:w-auto"
//                   btnClass="btn-lg-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2"
//                 >
//                   Book a demo
//                 </LinkButton>
//               </div>
//             </div>
//           </RevealAnimation>
//         </div>
//       </div>
//     </section>
//   );
// };

// PlatformFeatures.displayName = 'PlatformFeatures';
// export default PlatformFeatures;

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
