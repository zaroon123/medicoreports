import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        {/* Header Section */}
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Terms of Use</h2>
            <div className="space-y-7">
              <p className="text-secondary/70 dark:text-accent/70">
                <strong>Medqon Limited – Terms of Use</strong>
                <br />
                Last updated: 03.10.25
              </p>
            </div>
          </div>
        </RevealAnimation>

        <article className="terms-conditions-body">
          {/* Introduction */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>1. Introduction</h3>
              <p>
                1.1 These Terms of Use (“Terms”) govern your access to and use of the Medqon Platforms, comprising 
                Medico Writer and Medico Vault, operated through www.medqon.com, www.medicowriter.com, and 
                www.medicoreports.ai, www.medicoreports.com (collectively referred to as the “Service”).
              </p>
              <p>
                1.2 The Service is owned and operated by Medqon Limited, a company registered in England and Wales 
                (Company No. 12195670) whose registered office is at Alison Business Centre, 39–40 Alison Crescent, 
                Sheffield, S2 1AS, United Kingdom (“Medqon”, “we”, “us”, “our”).
              </p>
              <p>
                1.3 By registering for, accessing, or using the Service, you agree to be bound by these Terms and the 
                documents incorporated herein by reference:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Privacy Policy;</li>
                <li>The Acceptable Use Policy; and</li>
                <li>The Data Processing Agreement (DPA), where applicable.</li>
              </ul>
              <p>
                1.4 If you do not agree with these Terms, you must not access or use the Service.
              </p>
            </div>
          </RevealAnimation>

          {/* Definitions */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. Definitions</h3>
              <p>For the purposes of these Terms:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account</strong> – the unique credentials enabling access to the Service.</li>
                <li><strong>Credits</strong> – prepaid digital units required to generate reports or treatment plans.</li>
                <li><strong>Portal User</strong> – any authorised medical expert, administrative user, referrer, or agency staff member using the Service.</li>
                <li><strong>Claimant Data</strong> – personal or health-related information entered by Portal Users concerning patients or claimants.</li>
                <li><strong>Customer</strong> – the legal entity or individual responsible for payment and account ownership.</li>
                <li><strong>Agreement</strong> – these Terms together with all referenced policies and documents.</li>
                <li><strong>GDPR</strong> – the UK General Data Protection Regulation and the Data Protection Act 2018.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* Scope of Service */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. Scope of Service</h3>
              <p>
                3.1 The Service enables Portal Users to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate medico-legal, orthopaedic, psychological, and physiotherapy assessment reports via smart templates or DictAIte™ through Medico Writer;</li>
                <li>Manage case data, financial information, documentation, and correspondence through Medico Vault; and</li>
                <li>Access communication and workflow tools to support case management.</li>
              </ul>
              <p>
                3.2 Medqon provides the Service on a Software-as-a-Service (SaaS) basis. Access may be provided through 
                prepaid credits, subscriptions, or other contractual arrangements.
              </p>
              <p>
                3.3 Medqon does not provide medical, legal, or professional advice and is not responsible for the content, 
                accuracy, or conclusions of any report generated using the Service.
              </p>
            </div>
          </RevealAnimation>

          {/* Account Registration and Security */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>4. Account Registration and Security</h3>
              <p>
                4.1 Users must provide accurate and complete registration information and maintain the confidentiality 
                of their credentials.
              </p>
              <p>
                4.2 Users are responsible for all activities under their Account and must promptly notify Medqon of any 
                unauthorised access or suspected security breach.
              </p>
              <p>
                4.3 Medqon reserves the right to disable or suspend an Account where misuse, unauthorised access, or a 
                breach of these Terms is suspected.
              </p>
            </div>
          </RevealAnimation>

          {/* Credits and Payment */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>5. Credits and Payment</h3>
              <p>
                5.1 Certain features of the Service require the purchase of Credits, used as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>One (1) Credit per medico-legal or orthopaedic report;</li>
                <li>One (1) Credit per psychological report;</li>
                <li>Five (5) Credits per physiotherapy assessment or treatment plan.</li>
              </ul>
              <p>
                5.2 Credits are non-refundable and has no expiry date.
              </p>
              <p>
                5.3 Medqon may amend pricing or credit structures by giving at least 30 days’ prior notice. Updated 
                pricing applies to subsequent purchases only.
              </p>
              <p>
                5.4 All fees are exclusive of VAT unless explicitly stated.
              </p>
            </div>
          </RevealAnimation>

          {/* Acceptable Use */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>6. Acceptable Use</h3>
              <p>
                6.1 Users must comply with the Acceptable Use Policy, which forms part of this Agreement.
              </p>
              <p>
                6.2 Users must not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upload or transmit unlawful, defamatory, or infringing content;</li>
                <li>Attempt unauthorised access to other Accounts or Medqon’s systems;</li>
                <li>Interfere with or disrupt the performance or security of the Service;</li>
                <li>Use the Service to conduct competitive analysis, data scraping, or benchmarking;</li>
                <li>Share login credentials or misuse the system in a manner inconsistent with professional conduct.</li>
              </ul>
              <p>
                6.3 Any breach of this clause constitutes a material breach and may result in immediate suspension or 
                termination of access without refund.
              </p>
            </div>
          </RevealAnimation>

          {/* Data Protection and Privacy */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>7. Data Protection and Privacy</h3>
              <p>
                7.1 Each party shall comply with all applicable data protection legislation, including the UK GDPR and 
                the Data Protection Act 2018.
              </p>
              <p>
                7.2 For Portal User and website data, Medqon acts as a <strong>Data Controller</strong>.<br />
                For Claimant Data entered by Portal Users, Medqon acts solely as a <strong>Data Processor</strong>, 
                processing such data only on the documented instructions of the relevant Data Controller (the medical 
                expert, agency, or referrer).
              </p>
              <p>
                7.3 Medqon shall implement appropriate technical and organisational measures to ensure data security 
                and confidentiality, including encryption, access controls, and staff training.
              </p>
              <p>
                7.4 Details of processing activities, retention periods, and data subject rights are outlined in the 
                Privacy Policy and Data Processing Agreement.
              </p>
            </div>
          </RevealAnimation>

          {/* Intellectual Property */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>8. Intellectual Property</h3>
              <p>
                8.1 All intellectual property rights in the Service, software, documentation, and underlying templates 
                are owned by or licensed to Medqon.
              </p>
              <p>
                8.2 Users are granted a limited, non-exclusive, non-transferable licence to use the Service solely for 
                their professional activities during the valid subscription or credit period.
              </p>
              <p>
                8.3 Reports and documents generated via Medico Writer belong to the User or their organisation. Medqon 
                retains ownership of the software and templates used to produce them.
              </p>
            </div>
          </RevealAnimation>

          {/* Service Availability and Maintenance */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>9. Service Availability and Maintenance</h3>
              <p>
                9.1 Medqon aims to maintain continuous operation of the Service but does not guarantee uninterrupted uptime.
              </p>
              <p>
                9.2 Scheduled maintenance, upgrades, or system enhancements may occur. Where feasible, Medqon will 
                provide advance notice.
              </p>
              <p>
                9.3 Emergency maintenance or downtime due to external factors (such as hosting outages) shall not 
                constitute a breach of these Terms.
              </p>
            </div>
          </RevealAnimation>

          {/* Limitation of Liability */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>10. Limitation of Liability</h3>
              <p>
                10.1 The Service is provided on an “as is” and “as available” basis. Medqon disclaims all implied 
                warranties, including merchantability, accuracy, and fitness for purpose.
              </p>
              <p>
                10.2 To the fullest extent permitted by law, Medqon’s total liability for any claim shall not exceed 
                the total amount paid by the User in the preceding one (1) month.
              </p>
              <p>
                10.3 Medqon shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Loss of profits, business opportunity, goodwill, or data;</li>
                <li>Indirect, consequential, or incidental damages;</li>
                <li>Errors or omissions in User-generated reports;</li>
                <li>Delays, network failures, or events beyond Medqon’s reasonable control.</li>
              </ul>
              <p>
                10.4 Nothing in these Terms limits liability for death or personal injury caused by negligence, or for 
                fraud or fraudulent misrepresentation.
              </p>
            </div>
          </RevealAnimation>

          {/* Suspension and Termination */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>11. Suspension and Termination</h3>
              <p>
                11.1 Medqon may suspend or terminate access immediately if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A breach of these Terms or the Acceptable Use Policy occurs;</li>
                <li>Required by law or regulatory authority;</li>
                <li>Continued use poses a risk to system integrity or compliance obligations.</li>
              </ul>
              <p>
                11.2 Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to the Service shall cease immediately;</li>
                <li>Medqon may delete or anonymise data in accordance with its retention policy;</li>
                <li>Clauses relating to liability, confidentiality, and intellectual property shall survive termination.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* Modifications to Terms */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>12. Modifications to Terms</h3>
              <p>
                12.1 Medqon may amend these Terms from time to time. Substantive changes will be notified at least 
                30 days before coming into effect.
              </p>
              <p>
                12.2 Continued use of the Service after such date constitutes acceptance of the updated Terms.
              </p>
            </div>
          </RevealAnimation>

          {/* Governing Law and Jurisdiction */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>13. Governing Law and Jurisdiction</h3>
              <p>
                These Terms are governed by and construed in accordance with the laws of England and Wales. Both parties 
                submit to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </RevealAnimation>

          {/* Contact Information */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>14. Contact</h3>
              <p>
                <strong>Medqon Limited</strong>
                <br />
                Alison Business Centre, 39–40 Alison Crescent, Sheffield S2 1AS, United Kingdom
                <br />
                Email: info@medqon.co.uk | Tel: (+44) 330 001 0805
              </p>
            </div>
          </RevealAnimation>

          {/* Entire Agreement */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>15. Entire Agreement</h3>
              <p>
                These Terms, together with the Privacy Policy, Acceptable Use Policy, and any executed Data Processing 
                Agreement, represent the entire agreement between Medqon and the User regarding the Service.
              </p>
              <p>
                No prior or contemporaneous statements shall override these Terms.
              </p>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;