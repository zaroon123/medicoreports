import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';

interface ListItem {
  id: string;
  text: string;
}

interface DataRoleItem {
  id: string;
  role: string;
  description: string;
}

interface LawfulBasisItem {
  id: string;
  basis: string;
  description: string;
}

interface DataCategoryItem {
  id: string;
  category: string;
  details: string;
}

interface SubProcessorItem {
  id: string;
  name: string;
  description: string;
}

const GdprContent = () => {
  // Data roles items
  const dataRoles: DataRoleItem[] = [
    {
      id: 'data-controller',
      role: 'Data Controller',
      description: 'For Portal User and Employment Data – Medqon determines the purposes and means of processing.',
    },
    {
      id: 'data-processor',
      role: 'Data Processor',
      description: 'For Claimant or Patient Data – Medqon processes data strictly on behalf of Portal Users.',
    },
    {
      id: 'joint-controller',
      role: 'Joint Controller',
      description: 'In limited circumstances (e.g., anonymised analytics, audit logging, AI-assisted QA).',
    },
  ];

  // Lawful basis items
  const lawfulBasisItems: LawfulBasisItem[] = [
    {
      id: 'contractual',
      basis: 'Contractual Necessity (Article 6(1)(b))',
      description: 'To provide secure portal access, manage user accounts, deliver case-management and report-writing functionality.',
    },
    {
      id: 'legitimate',
      basis: 'Legitimate Interests (Article 6(1)(f))',
      description: 'To maintain system integrity, monitor usage for audit and compliance, prevent fraud or misuse.',
    },
    {
      id: 'legal',
      basis: 'Legal Obligation (Article 6(1)(c))',
      description: 'To comply with statutory, regulatory, or professional requirements.',
    },
    {
      id: 'consent',
      basis: 'Consent (Article 6(1)(a))',
      description: 'For marketing, product updates, or other non-essential communications.',
    },
    {
      id: 'special-category',
      basis: 'Special Category Data (Article 9)',
      description: 'Health-related information processed under Article 9(2)(f) for legal claims or Article 9(2)(a) with explicit consent.',
    },
  ];

  // Data protection principles
  const gdprPrinciples: ListItem[] = [
    { id: 'lawfulness', text: 'Lawfulness, fairness, and transparency' },
    { id: 'purpose', text: 'Purpose limitation – data collected only for defined, legitimate purposes' },
    { id: 'minimisation', text: 'Data minimisation – processing only what is strictly necessary' },
    { id: 'accuracy', text: 'Accuracy – maintaining data that is current and correct' },
    { id: 'storage', text: 'Storage limitation – retaining data only as long as required' },
    { id: 'integrity', text: 'Integrity and confidentiality – ensuring security through appropriate controls' },
    { id: 'accountability', text: 'Accountability – evidencing compliance through records, training, and audit trails' },
  ];

  // Data categories
  const dataCategories: DataCategoryItem[] = [
    {
      id: 'portal-users',
      category: 'Portal Users',
      details: 'Identifiers (name, email, contact details, login credentials), professional details, usage logs, and correspondence.',
    },
    {
      id: 'claimants',
      category: 'Claimants',
      details: 'Personal and health information relevant to medico-legal reporting, including demographic data, injury details, and uploaded medical records.',
    },
    {
      id: 'employees',
      category: 'Employees & Contractors',
      details: 'Employment, payroll, and compliance data required for lawful operation.',
    },
  ];

  // Data retention items
  const dataRetentionItems: ListItem[] = [
    { id: 'portal-retention', text: 'Portal user data: retained for the life of the account + six years for audit, legal, or regulatory defence.' },
    { id: 'claimant-retention', text: 'Claimant data: held only under the data controller\'s instruction, ordinarily up to six years post-claim closure.' },
    { id: 'employee-retention', text: 'Employee data: retained in line with statutory record-keeping requirements.' },
    { id: 'deletion', text: 'When retention expires, data is securely deleted or anonymised using industry-approved standards.' },
  ];

  // Security measures
  const securityMeasures: ListItem[] = [
    { id: 'encryption', text: 'Encryption in transit and at rest.' },
    { id: 'mfa', text: 'Multi-factor authentication and role-based access control.' },
    { id: 'network', text: 'Network segmentation, firewalls, and intrusion detection.' },
    { id: 'scanning', text: 'Regular vulnerability scans and third-party penetration testing.' },
    { id: 'device', text: 'Strict device-management and password policies.' },
    { id: 'training', text: 'Mandatory staff confidentiality agreements and annual GDPR training.' },
  ];

  // Data subject rights
  const dataSubjectRights: ListItem[] = [
    { id: 'access', text: 'Access to personal data ("subject access request")' },
    { id: 'rectification', text: 'Rectification of inaccurate or incomplete data' },
    { id: 'erasure', text: 'Erasure ("right to be forgotten"), where legally applicable' },
    { id: 'restriction', text: 'Restriction or objection to processing' },
    { id: 'portability', text: 'Data portability (machine-readable copy)' },
    { id: 'withdraw', text: 'Withdrawal of consent (for consent-based processing)' },
    { id: 'automated', text: 'Not to be subject to automated decision-making without human review' },
  ];

  return (
    <section className="pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* GDPR Header */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-3">
              <h2>GDPR & Data Protection Policy</h2>
              <div className="space-y-7">
                <p className="text-secondary/70 dark:text-accent/70">
                  <strong>Medqon Limited – GDPR & Data Protection Policy</strong>
                  <br />
                  Last updated: 03.10.2025
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* Purpose and Scope */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Purpose and Scope</h3>
              <p>
                This policy sets out how Medqon Limited (“Medqon”, “we”, “us”, “our”) ensures lawful, fair, and 
                transparent processing of personal data under the UK General Data Protection Regulation (UK GDPR) and 
                the Data Protection Act 2018 (DPA 2018).
              </p>
              <p>
                It applies to all personal data processed through Medqons software platforms, including DictAIte™, 
                Medico Reports, Medico Vault, and associated portals, mobile applications, and support systems.
              </p>
              <p>
                This GDPR & Data Protection Policy applies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Portal Users</strong> – authorised individuals accessing Medqons platforms, including 
                  Medico Writer and Medico Vault. Portal Users include medical experts, administrative staff, agency 
                  personnel, and referrers (such as solicitors or attorneys) who hold registered accounts.
                </li>
                <li>
                  <strong>Claimants</strong> – individuals whose personal or health information is entered, uploaded, 
                  or processed by Portal Users through Medqons platforms.
                </li>
                <li>
                  <strong>Employees and Contractors</strong> – staff and third-party professionals engaged by Medqon 
                  who may process data as part of their contractual duties.
                </li>
              </ul>
            </div>
          </RevealAnimation>

          {/* Data Roles and Responsibilities */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Data Roles and Responsibilities</h3>
              <p>Medqon performs different roles depending on the nature of the personal data being processed.</p>
              <ul className="space-y-4 mt-4">
                {dataRoles.map((role) => (
                  <li key={role.id} className="flex flex-col gap-1">
                    <span className="text-secondary dark:text-accent font-semibold">{role.role}:</span>
                    <span className="text-secondary/60 dark:text-accent/60 pl-4">{role.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Data Protection Officer */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Data Protection Officer (DPO)</h3>
              <p>
                The DPO oversees data protection compliance, internal audits, staff training, and incident response.
              </p>
              <p>
                <strong>Contact:</strong> dpo@medqon.com
                <br />
                <strong>Address:</strong> Medqon Limited, Alison Business Centre, 39–40 Alison Crescent, Sheffield S2 1AS, United Kingdom.
              </p>
            </div>
          </RevealAnimation>

          {/* Lawful Basis for Processing */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Lawful Basis for Processing</h3>
              <p>
                All processing activities carried out by Medqon Limited are based on one or more lawful grounds set out 
                in Articles 6 and 9 of the UK GDPR and, where applicable, the Data Protection Act 2018:
              </p>
              <ul className="space-y-3 mt-4">
                {lawfulBasisItems.map((item) => (
                  <li key={item.id} className="flex flex-col gap-1">
                    <span className="text-secondary dark:text-accent font-semibold">{item.basis}</span>
                    <span className="text-secondary/60 dark:text-accent/60 pl-4">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Principles of Data Protection */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Principles of Data Protection</h3>
              <p>Medqon adheres to the seven key principles under Article 5 UK GDPR:</p>
              <ul className="space-y-2 mt-4">
                {gdprPrinciples.map((principle) => (
                  <li key={principle.id} className="flex items-center justify-start gap-2">
                    <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{principle.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Data Categories Processed */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Data Categories Processed</h3>
              <ul className="space-y-3 mt-4">
                {dataCategories.map((category) => (
                  <li key={category.id} className="flex flex-col gap-1">
                    <span className="text-secondary dark:text-accent font-semibold">{category.category}:</span>
                    <span className="text-secondary/60 dark:text-accent/60 pl-4">{category.details}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Data Retention and Deletion */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Data Retention and Deletion</h3>
              <ul className="space-y-2 mt-4">
                {dataRetentionItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-start gap-2">
                    <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Data Security and Confidentiality */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Data Security and Confidentiality</h3>
              <p>
                Medqon implements technical and organisational measures consistent with Articles 32 and 25 UK GDPR, 
                including:
              </p>
              <ul className="space-y-2 mt-4">
                {securityMeasures.map((measure) => (
                  <li key={measure.id} className="flex items-center justify-start gap-2">
                    <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{measure.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Access to personal data is limited to authorised individuals with a demonstrable business need.
              </p>
            </div>
          </RevealAnimation>

          {/* Sub-Processors and Third Parties */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Sub-Processors and Third Parties</h3>
              <p>
                Medqon engages certain authorised service providers (e.g. hosting, communication, and analytics vendors) 
                who act as sub-processors under written agreements imposing equivalent data protection obligations.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>All sub-processors are vetted for security, confidentiality, and jurisdictional compliance.</li>
                <li>Details of these providers are maintained in Medqons Sub-Processor Register, available to clients upon request.</li>
                <li>No personal data is transferred outside the UK or EEA without appropriate safeguards such as Standard Contractual Clauses or an adequacy decision.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* Data Subject Rights */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Data Subject Rights</h3>
              <p>Individuals have the following rights under the UK GDPR:</p>
              <ul className="space-y-2 mt-4">
                {dataSubjectRights.map((right) => (
                  <li key={right.id} className="flex items-center justify-start gap-2">
                    <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{right.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <strong>Portal users</strong> may contact Medqon directly to exercise these rights.<br />
                <strong>Claimants</strong> should contact the medical expert or agency (their data controller); Medqon will assist that controller in fulfilling any request.
              </p>
              <p>Requests will be acknowledged within one calendar month in accordance with Article 12 UK GDPR.</p>
            </div>
          </RevealAnimation>

          {/* Data Breach Management */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Data Breach Management</h3>
              <p>Medqon maintains a formal Incident Response Plan.</p>
              <p>In the event of a personal data breach:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The breach is logged and investigated immediately.</li>
                <li>Containment and mitigation steps are implemented.</li>
                <li>The DPO assesses risk to data subjects.</li>
                <li>If required, the ICO is notified within 72 hours.</li>
                <li>Affected controllers and individuals are informed without undue delay where there is a high risk to rights or freedoms.</li>
              </ul>
              <p>All incidents are reviewed for root-cause analysis and prevention.</p>
            </div>
          </RevealAnimation>

          {/* Accountability and Governance */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Accountability and Governance</h3>
              <p>To evidence ongoing compliance, Medqon:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Maintains a Record of Processing Activities (ROPA) under Article 30.</li>
                <li>Performs Data Protection Impact Assessments (DPIAs) for all high-risk or AI-related processing.</li>
                <li>Conducts regular internal audits and external security assessments.</li>
                <li>Reviews contracts with processors and sub-processors annually.</li>
                <li>Requires GDPR training for all staff and contractors.</li>
              </ul>
              <p>Non-compliance with this policy may result in disciplinary action, termination of contract, or legal referral.</p>
            </div>
          </RevealAnimation>

          {/* Cookies and Tracking Technologies */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Cookies and Tracking Technologies</h3>
              <p>Our web platforms use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain secure user sessions</li>
                <li>Improve performance and analytics</li>
                <li>Enhance usability</li>
              </ul>
              <p>Essential cookies are required for portal operation.</p>
              <p>
                Users may control or delete cookies through browser settings, though certain features may not function 
                as intended. For detailed information, see the Cookie Policy available on our website.
              </p>
            </div>
          </RevealAnimation>

          {/* International Transfers */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4">International Transfers</h3>
              <p>
                Medqon stores data primarily in the UK.
              </p>
              <p>
                Where transfer outside these jurisdictions is necessary, it is conducted only:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To countries recognised by the UK as providing adequate protection, or</li>
                <li>Under Standard Contractual Clauses approved by the ICO.</li>
              </ul>
              <p>All such transfers are encrypted and logged.</p>
            </div>
          </RevealAnimation>

          {/* Policy Review and Amendments */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Policy Review and Amendments</h3>
              <p>
                This policy is reviewed annually or sooner if required by legal, regulatory, or operational change.
              </p>
              <p>
                Material updates are published on the Medqon website, and continued use of our services constitutes 
                acceptance of the revised policy.
              </p>
            </div>
          </RevealAnimation>

          {/* Complaints and Contact */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Complaints and Contact</h3>
              <p>
                For any privacy-related queries or to exercise your rights, please contact:
              </p>
              <p>
                <strong>Data Protection Officer – Medqon Limited</strong>
                <br />
                Alison Business Centre, 39-40 Alison Crescent, Sheffield S2 1AS, United Kingdom
                <br />
                Email: dpo@medqon.com | Telephone: (+44) 330 001 0805
              </p>
              <p>
                If you are dissatisfied with our response, you may escalate to the Information Commissioners Office (ICO) 
                at www.ico.org.uk or telephone 0303 123 1113.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default GdprContent;