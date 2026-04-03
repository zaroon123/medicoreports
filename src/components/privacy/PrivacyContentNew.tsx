import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const PrivacyContentNew = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        {/* Header Section */}
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Privacy Policy</h2>
            <div className="space-y-7">
              <p className="text-secondary/70 dark:text-accent/70">
                <strong>Medqon Limited – Privacy Policy</strong>
                <br />
                Last updated: 03.10.25
              </p>
            </div>
          </div>
        </RevealAnimation>

        <article className="terms-conditions-body">
          {/* 1. Introduction */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>1. Introduction</h3>
              <p>
                This Privacy Policy explains how Medqon Limited (“Medqon”, “we”, “us”, “our”) collects, uses, and 
                protects personal data processed through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Medico Writer – medico-legal report-writing platform</li>
                <li>Medico Vault – case-management and CRM platform</li>
                <li>www.medqon.com</li>
                <li>www.medicoreports.com</li>
                <li>www.medicoreportwriter.com</li>
                <li>www.medicoreports.ai</li>
              </ul>
              <p>
                These websites and portals are operated and owned by Medqon Limited.
              </p>
              <p>
                We are committed to safeguarding all personal data in accordance with the UK General Data Protection 
                Regulation (UK GDPR), the Data Protection Act 2018, and the Privacy and Electronic Communications 
                Regulations (PECR).
              </p>
              <p>
                This Policy applies to all individuals whose data we process, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Portal Users (medical experts, administrative staff, agencies, referrers, solicitors, or attorneys);</li>
                <li>Claimants or patients whose data is entered by Portal Users;</li>
                <li>Website visitors and individuals submitting online enquiries; and</li>
                <li>Employees and contractors engaged by Medqon.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 2. Who We Are */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. Who We Are</h3>
              <p>
                <strong>Medqon Limited</strong>
                <br />
                Alison Business Centre, 39–40 Alison Crescent, Sheffield, England, S2 1AS.
                <br />
                Registered in England and Wales.
              </p>
              <p>
                We act as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Data Controller</strong> for Portal Users, Website Visitors, and Employees/Contractors;</li>
                <li><strong>Data Processor</strong> for Claimant or Patient information entered by Portal Users.</li>
              </ul>
              <p>
                For all privacy enquiries, please contact our Data Protection Officer (DPO):
                <br />
                Email: dpo@medqon.com | Tel: (+44) 330 001 0805
              </p>
            </div>
          </RevealAnimation>

          {/* 3. What Data We Collect */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. What Data We Collect</h3>
              
              <h4 className="text-heading-6 font-semibold mt-4">(a) Portal Users (Controller)</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, title, email, and phone number.</li>
                <li>Login credentials and permissions.</li>
                <li>Professional details (e.g., GMC/HPC number, organisation name).</li>
                <li>System activity logs (login times, IP address, audit history).</li>
                <li>Support tickets, messages, and correspondence.</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">(b) Claimants / Patients (Processor)</h4>
              <p>Data entered by Portal Users may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identifiers (name, date of birth, gender, address, contact information).</li>
                <li>Accident or claim details (date, location, summary).</li>
                <li>Medical information (clinical history, injury details, treatment notes, attached medical records).</li>
                <li>Identification documents (passport, driving licence).</li>
              </ul>
              <p>
                Medqon does not collect claimant data directly and has no control over its entry, accuracy, or content.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">(c) Website Visitors (Controller)</h4>
              <p>
                Across www.medqon.com, www.medicoreports.com, www.medicoreportwriter.com, and www.medicoreports.ai, 
                we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email, phone number, and message content submitted through contact or demo forms.</li>
                <li>Technical information such as IP address, browser type, and device identifiers.</li>
                <li>Analytics data via cookies or tracking pixels (e.g., Google Analytics) for website performance measurement.</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">(d) Employees and Contractors (Controller)</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details, employment history, and qualifications.</li>
                <li>Payroll, tax, and pension information.</li>
                <li>Compliance and HR records (right-to-work, training, confidentiality agreements).</li>
                <li>System access and security logs.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 4. How and Why We Use Personal Data */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>4. How and Why We Use Personal Data</h3>
              
              <h4 className="text-heading-6 font-semibold mt-4">Platform Users</h4>
              <p>We use data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain secure access to Medico Writer and Medico Vault.</li>
                <li>Manage accounts, authentication, and permissions.</li>
                <li>Respond to support requests.</li>
                <li>Ensure security, compliance, and performance monitoring.</li>
              </ul>
              <p>
                <strong>Legal bases:</strong> contractual necessity (Art. 6(1)(b)); legitimate interests (Art. 6(1)(f)); 
                legal obligation (Art. 6(1)(c)); consent (Art. 6(1)(a)) for optional updates.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">Claimants / Patients</h4>
              <p>Processed solely to enable Portal Users to prepare medico-legal reports or manage cases.</p>
              <p><strong>Legal bases:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Article 6(1)(f) – legitimate interests (legal claims);</li>
                <li>Article 6(1)(c) – legal obligation (court or regulatory requirements);</li>
                <li>Article 9(2)(f) – processing health data necessary for legal claims;</li>
                <li>Article 9(2)(a) – explicit consent where voluntarily provided.</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">Website Visitors</h4>
              <p>We process data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to contact or demo enquiries.</li>
                <li>Improve website functionality and analytics.</li>
                <li>Maintain site security and prevent misuse.</li>
                <li>Send marketing communications only with consent.</li>
              </ul>
              <p>
                <strong>Legal bases:</strong> legitimate interests for responding to enquiries and maintaining the site; 
                consent for marketing and cookies.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">Employees and Contractors</h4>
              <p>
                Processed for employment administration, payroll, compliance, and internal security under 
                Articles 6(1)(b) and 6(1)(c).
              </p>
            </div>
          </RevealAnimation>

          {/* 5. Cookies and Tracking */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>5. Cookies and Tracking</h3>
              <p>Our website uses cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enable core site functionality (session management, security).</li>
                <li>Measure traffic and performance (analytics).</li>
                <li>Support marketing campaigns (only if consented).</li>
              </ul>
              <p>
                On first visit, you will see a cookie banner allowing you to accept or reject non-essential cookies.
              </p>
              <p>You may update preferences at any time via browser settings.</p>
              <p>For more information, see our separate Cookie Policy.</p>
            </div>
          </RevealAnimation>

          {/* 6. Who We Share Data With */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>6. Who We Share Data With</h3>
              <p>We share data only when necessary:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With authorised Portal Users and their organisations (for claimant processing).</li>
                <li>With hosting and IT providers acting as sub-processors under binding contracts.</li>
                <li>With courts, insurers, or regulators when legally required.</li>
                <li>With email, analytics, and CRM providers (e.g., Microsoft 365, Google Analytics) for business operations.</li>
              </ul>
              <p><strong>We never sell or lease personal data to third parties.</strong></p>
            </div>
          </RevealAnimation>

          {/* 7. International Data Transfers */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>7. International Data Transfers</h3>
              <p>
                Data is stored primarily within the UK.
              </p>
              <p>
                When transfer outside these jurisdictions is necessary, we apply safeguards such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard Contractual Clauses (SCCs);</li>
                <li>Data-processing agreements; and</li>
                <li>Encryption and access-control measures.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 8. Data Retention */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>8. Data Retention</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-stroke-1 dark:border-stroke-6">
                      <th className="text-left py-3 px-4 font-semibold">Category</th>
                      <th className="text-left py-3 px-4 font-semibold">Typical Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stroke-1 dark:border-stroke-6">
                      <td className="py-3 px-4">Portal Users</td>
                      <td className="py-3 px-4">Active account + 6 years</td>
                    </tr>
                    <tr className="border-b border-stroke-1 dark:border-stroke-6">
                      <td className="py-3 px-4">Claimant Data</td>
                      <td className="py-3 px-4">As instructed by controller, usually ≤ 6 years after claim closure</td>
                    </tr>
                    <tr className="border-b border-stroke-1 dark:border-stroke-6">
                      <td className="py-3 px-4">Website Enquiries</td>
                      <td className="py-3 px-4">12 months from last interaction</td>
                    </tr>
                    <tr className="border-b border-stroke-1 dark:border-stroke-6">
                      <td className="py-3 px-4">Analytics Data</td>
                      <td className="py-3 px-4">Per provider settings (e.g., 26 months – Google)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Employees & Contractors</td>
                      <td className="py-3 px-4">Duration of engagement + statutory period</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Data no longer required is securely deleted or anonymised.</p>
            </div>
          </RevealAnimation>

          {/* 9. Data Security */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>9. Data Security</h3>
              <p>Medqon employs administrative, technical, and physical safeguards:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption in transit and at rest.</li>
                <li>Multi-factor authentication and least-privilege access.</li>
                <li>Role-based controls and continuous monitoring.</li>
                <li>Regular independent penetration testing.</li>
                <li>Mandatory staff confidentiality and annual GDPR training.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 10. Your Rights */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>10. Your Rights</h3>
              <p>Under the UK GDPR, you may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your data;</li>
                <li>Request correction of inaccuracies;</li>
                <li>Request deletion or restriction of processing;</li>
                <li>Object to processing;</li>
                <li>Request data portability; and</li>
                <li>Withdraw consent at any time.</li>
              </ul>
              <p>
                <strong>Claimants:</strong> contact your medical expert or agency (they are the controller).
              </p>
              <p>
                <strong>Portal Users, Website Visitors, Employees:</strong> contact Medqon directly via dpo@medqon.com.
              </p>
              <p>We will respond within one calendar month.</p>
            </div>
          </RevealAnimation>

          {/* 11. Children's Data */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>11. Childrens Data</h3>
              <p>
                Our services and website are not intended for use by individuals under 16.
              </p>
              <p>
                We do not knowingly collect or process childrens data.
              </p>
            </div>
          </RevealAnimation>

          {/* 12. Changes to This Policy */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>12. Changes to This Policy</h3>
              <p>
                This Privacy Policy may be updated periodically.
              </p>
              <p>
                Material changes will be posted on our website and, where appropriate, notified to users directly.
              </p>
              <p>
                Please review this page occasionally to remain informed.
              </p>
            </div>
          </RevealAnimation>

          {/* 13. Contact and Complaints */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>13. Contact and Complaints</h3>
              <p>
                <strong>Data Protection Officer</strong>
                <br />
                Medqon Limited
                <br />
                Alison Business Centre, 39–40 Alison Crescent, Sheffield S2 1AS – United Kingdom
                <br />
                Email: dpo@medqon.com | Tel: (+44) 330 001 0805
              </p>
              <p>
                If unsatisfied, you may escalate to the Information Commissioners Office (ICO):
                <br />
                www.ico.org.uk | Tel: 0303 123 1113
              </p>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default PrivacyContentNew;