import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import emailImage from '@public/images/icons/email.svg';
import smsImage from '@public/images/icons/sms.svg';
import accountingImage from '@public/images/icons/accounting.svg';

/* ─────────────────────────────────────────────────────────────
   Data — exactly as provided, unchanged
───────────────────────────────────────────────────────────── */
const emailIntegrations = [
  { id: 1, text: 'Send emails from within case workflows' },
  { id: 2, text: 'Automatic logging against case records' },
  { id: 3, text: 'Centralised communication history' },
  { id: 4, text: 'Supports Office 365 and standard email systems' },
];

const smsNotifications = [
  { id: 1, text: 'Appointment reminders and confirmations' },
  { id: 2, text: 'Custom SMS messaging to patients and experts' },
  { id: 3, text: 'Reduce DNAs and missed appointments' },
  { id: 4, text: 'Triggered notifications based on workflow events' },
];

const accountingIntegrations = [
  { id: 1, text: 'Invoice generation linked to case workflows' },
  { id: 2, text: 'Sync with Xero accounting platforms' },
  { id: 3, text: 'Track payment status (pending / paid)' },
  { id: 4, text: 'Reduce manual reconciliation' },
];

/* ─────────────────────────────────────────────────────────────
   Variant style maps
   light  → white card
   dark   → #1f0375 deep navy/purple card
   accent → #BBE278 lime card
───────────────────────────────────────────────────────────── */
type Variant = 'light' | 'dark' | 'accent';

const styles = {
  card: {
    light:  'bg-white border border-black/[0.08] dark:bg-white/[0.04] dark:border-white/[0.08]',
    dark:   'bg-[#1f0375]',
    accent: 'bg-[#BBE278]',
  },
  tag: {
    light:  'bg-[#1f0375]/[0.08] text-[#1f0375]',
    dark:   'bg-white/[0.12] text-white/80',
    accent: 'bg-black/[0.10] text-black/70',
  },
  iconBox: {
    light:  'bg-[#f0ecff] border border-[#ddd5ff]',
    dark:   'bg-white/[0.12]',
    accent: 'bg-black/[0.07]',
  },
  title: {
    light:  'text-[#0a0a0a] dark:text-white',
    dark:   'text-white',
    accent: 'text-[#0a0a0a]',
  },
  desc: {
    light:  'text-[#666] dark:text-white/55',
    dark:   'text-white/60',
    accent: 'text-black/65',
  },
  divider: {
    light:  'bg-black/[0.07] dark:bg-white/[0.08]',
    dark:   'bg-white/[0.12]',
    accent: 'bg-black/[0.10]',
  },
  itemText: {
    light:  'text-[#333] dark:text-white/75',
    dark:   'text-white/80',
    accent: 'text-[#111]',
  },
  checkBg: {
    light:  'bg-[#BBE278]',
    dark:   'bg-[#BBE278]',
    accent: 'bg-[#1f0375]',
  },
  checkStroke: {
    light:  '#0a0a0a',
    dark:   '#0a0a0a',
    accent: '#BBE278',
  },
} as const;

/* ─────────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────────── */
const IntegrationsSection = () => {
  const cards: {
    id: number;
    image: string;
    alt: string;
    tag: string;
    title: string;
    description: string;
    items: { id: number; text: string }[];
    variant: Variant;
  }[] = [
    {
      id: 1,
      image: emailImage,
      alt: 'Email',
      tag: 'Email',
      title: 'Email integration (Office 365 & Outlook)',
      description:
        'Send, receive, and track all case-related communication directly within the system. Emails are automatically linked to cases, ensuring a complete and auditable communication history.',
      items: emailIntegrations,
      variant: 'light',
    },
    {
      id: 2,
      image: smsImage,
      alt: 'SMS',
      tag: 'SMS',
      title: 'SMS and real-time notifications',
      description:
        'Automate appointment confirmations, reminders, and updates to keep claimants and experts informed without manual follow-up.',
      items: smsNotifications,
      variant: 'dark',
    },
    {
      id: 3,
      image: accountingImage,
      alt: 'Accounting',
      tag: 'Finance',
      title: 'Accounting integration (Xero and external systems)',
      description:
        'Streamline invoicing and financial tracking by connecting Medico Vault with your accounting systems, reducing duplication and improving financial visibility.',
      items: accountingIntegrations,
      variant: 'accent',
    },
  ];

  return (
    <section className="bg-background-2 dark:bg-background-5 pt-[100px] pb-[100px] xl:pb-[200px]">
      <div className="main-container">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="mb-16 lg:mb-20">

          {/* Badge row */}
          <RevealAnimation delay={0.1}>
            <div className="mb-6 flex items-center gap-3">
              <span className="badge badge-green">Integrations</span>
              <div className="h-px w-12 rounded-full bg-[#BBE278]" />
            </div>
          </RevealAnimation>

          {/* Title + body — 2-col on desktop */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-20">
            <div className="flex-1">
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[518px] text-[#0a0a0a] dark:text-white">
                  Connected to the tools your operations already rely on
                </h2>
              </RevealAnimation>
            </div>
            <div className="flex-1">
              <RevealAnimation delay={0.3}>
                <p className="max-w-[518px] text-[15px] leading-relaxed text-secondary/65 dark:text-accent/60 lg:mx-0">
                  Medico Vault integrates with email, messaging, and financial systems to ensure
                  communication, case progression, and billing workflows run without duplication or
                  manual intervention.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* ── Cards ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => {
            const v = card.variant;
            return (
              <RevealAnimation key={card.id} delay={0.4 + idx * 0.1}>
                <article
                  className={`flex h-full flex-col rounded-2xl p-7 transition-shadow duration-300 hover:shadow-2xl ${styles.card[v]}`}
                >

                  {/* ── Icon + tag pill ── */}
                  <div className="mb-6 flex items-start justify-between gap-2">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.iconBox[v]}`}
                    >
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={26}
                        height={26}
                        className={v === 'dark' ? 'brightness-0 invert' : ''}
                      />
                    </div>
                    <span
                      className={`mt-1 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${styles.tag[v]}`}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* ── Title ── */}
                  <h3 className={`mb-3 text-[18px] font-semibold leading-snug ${styles.title[v]}`}>
                    {card.title}
                  </h3>

                  {/* ── Description ── */}
                  <p className={`mb-6 text-[13px] leading-relaxed ${styles.desc[v]}`}>
                    {card.description}
                  </p>

                  {/* ── Divider ── */}
                  <div className={`mb-6 h-px w-full ${styles.divider[v]}`} />

                  {/* ── Feature list — same loop pattern as original ── */}
                  <ul className="mt-auto space-y-4" aria-label="Eligibility requirements">
                    {card.items.map((item, i) => (
                      <RevealAnimation key={item.id} delay={0.4 + idx * 0.1 + i * 0.05}>
                        <li className="flex items-center gap-3">
                          {/* Branded check icon */}
                          <span
                            className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${styles.checkBg[v]}`}
                          >
                            <svg
                              viewBox="0 0 12 12"
                              className="h-[9px] w-[9px]"
                              fill="none"
                              stroke={styles.checkStroke[v]}
                              strokeWidth={2.4}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2 6l3 3 5-5" />
                            </svg>
                          </span>
                          <p className={`text-[13px] leading-snug ${styles.itemText[v]}`}>
                            {item.text}
                          </p>
                        </li>
                      </RevealAnimation>
                    ))}
                  </ul>

                </article>
              </RevealAnimation>
            );
          })}
        </div>

      </div>
    </section>
  );
};

IntegrationsSection.displayName = 'IntegrationsSection';
export default IntegrationsSection;