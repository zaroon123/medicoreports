import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const AcceptableContent = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        {/* Header Section */}
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Acceptable Use Policy</h2>
            <div className="space-y-7">
              <p className="text-secondary/70 dark:text-accent/70">
                <strong>Medqon Limited – Acceptable Use Policy</strong>
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
              <p>
                This Acceptable Use Policy (“Policy”) defines the standards, responsibilities, and restrictions that 
                apply to all users (“Users”) of the Medqon Platforms, including Medico Writer and Medico Vault 
                (collectively, the “Service”).
              </p>
              <p>
                The Service is operated by Medqon Limited, a company registered in England and Wales (Company No. 12195670) 
                with its registered office at Alison Business Centre, 39–40 Alison Crescent, Sheffield, S2 1AS, 
                United Kingdom (“Medqon”, “we”, “us”, “our”).
              </p>
              <p>
                All Users are required to adhere to this Policy to maintain a secure, lawful, and professional 
                environment for the processing of medico-legal and healthcare-related information.
              </p>
              <p>
                Use of the Service constitutes acceptance of this Policy and forms part of the Terms of Use.
              </p>
            </div>
          </RevealAnimation>

          {/* 2. Permitted and Restricted Use */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. Permitted and Restricted Use</h3>
              
              <h4 className="text-heading-6 font-semibold mt-4">2.1 Permitted Use</h4>
              <p>Users may use the Service solely for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Creating, managing, and storing medico-legal, clinical, and related professional reports through Medico Writer.</li>
                <li>Managing cases, documentation, and communications through Medico Vault.</li>
                <li>Conducting lawful, ethical, and professional activities consistent with the intended functionality of the Service.</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">2.2 General Restrictions</h4>
              <p>Users must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any unlawful or unauthorised purpose.</li>
                <li>Use automated systems (robots, crawlers, scrapers, or similar tools) to access, monitor, or copy any part of the Service without prior written authorisation from Medqon.</li>
                <li>Circumvent or attempt to bypass security, authentication, or access-control mechanisms.</li>
                <li>Interfere with, disrupt, or degrade the performance or integrity of the Service or its infrastructure.</li>
                <li>Attempt to reverse-engineer, decompile, or modify any software component of the Service.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 3. Content Standards */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. Content Standards</h3>
              
              <h4 className="text-heading-6 font-semibold mt-4">3.1 User Responsibility</h4>
              <p>
                Users are solely responsible for any data, content, or materials uploaded, entered, or transmitted 
                through the Service (“User Content”).
              </p>
              <p>Users must ensure that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All data is accurate, lawful, and entered with the required consent or authority.</li>
                <li>No content uploaded infringes upon the rights of third parties.</li>
                <li>Data is entered and processed only for legitimate medico-legal or healthcare-related purposes.</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">3.2 Prohibited Content</h4>
              <p>The following content is strictly prohibited:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Information that infringes intellectual property, confidentiality, or privacy rights.</li>
                <li>Defamatory, obscene, abusive, or discriminatory material.</li>
                <li>Material that promotes hatred, violence, or illegal activity.</li>
                <li>Content that includes malicious code, viruses, or corrupted files.</li>
                <li>Unauthorised personal data or medical information relating to individuals for whom the User has no lawful basis to process such data.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 4. Prohibited Activities */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>4. Prohibited Activities</h3>
              <p>Users must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Engage in fraudulent, deceptive, or misleading activities.</li>
                <li>Use the Service to store or transmit material that violates any law, regulation, or professional code.</li>
                <li>Attempt to gain unauthorised access to other accounts, data, or systems.</li>
                <li>Engage in data mining, scraping, or harvesting of information.</li>
                <li>Upload or transmit unsolicited communications, spam, or promotional material.</li>
                <li>Use the Service for competitive analysis, benchmarking, or development of a competing product.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 5. Security Obligations */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>5. Security Obligations</h3>
              
              <h4 className="text-heading-6 font-semibold mt-4">5.1 Account Security</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users must keep login credentials confidential and must not share accounts.</li>
                <li>Users must use strong passwords and enable multi-factor authentication where available.</li>
                <li>Users must notify Medqon immediately of any suspected or actual unauthorised access or compromise.</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">5.2 Data Security and Compliance</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users must comply with all applicable data protection laws, including the UK GDPR and Data Protection Act 2018.</li>
                <li>Users must not download, export, or store personal or medical data outside secure, authorised systems.</li>
                <li>Users must take reasonable steps to protect any data they access via the Service from unauthorised disclosure or loss.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 6. Monitoring and Enforcement */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>6. Monitoring and Enforcement</h3>
              
              <h4 className="text-heading-6 font-semibold mt-4">6.1 Monitoring</h4>
              <p>
                Medqon reserves the right (but is not obligated) to monitor user activity and content to ensure 
                compliance with this Policy, applicable law, and security standards.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">6.2 Enforcement</h4>
              <p>Medqon may take any action it deems appropriate in response to violations, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Temporary or permanent suspension of access;</li>
                <li>Removal or deletion of content;</li>
                <li>Termination of account(s);</li>
                <li>Legal action or referral to regulatory or law enforcement authorities.</li>
              </ul>
              <p>
                Such actions may be taken without prior notice and without refund where a breach is material or 
                poses a security or compliance risk.
              </p>
            </div>
          </RevealAnimation>

          {/* 7. Policy Updates */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>7. Policy Updates</h3>
              <p>
                Medqon may amend this Policy at any time to reflect changes in law, operational requirements, or 
                security needs.
              </p>
              <p>
                Updated versions will be published on our website, and continued use of the Service after publication 
                shall constitute acceptance of the revised Policy.
              </p>
            </div>
          </RevealAnimation>

          {/* 8. Reporting Violations */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>8. Reporting Violations</h3>
              <p>
                Users who become aware of potential violations of this Policy must notify Medqon promptly at:
                <br />
                <strong className="text-secondary dark:text-accent">info@medqon.com</strong>
              </p>
              <p>
                Medqon will review all legitimate reports and take appropriate action consistent with applicable law 
                and professional standards.
              </p>
            </div>
          </RevealAnimation>

          {/* 9. Contact Information */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>9. Contact Information</h3>
              <p>
                <strong>Medqon Limited</strong>
                <br />
                Alison Business Centre, 39–40 Alison Crescent, Sheffield, S2 1AS, United Kingdom
                <br />
                Email: info@medqon.co.uk | Tel: (+44) 330 001 0805
              </p>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default AcceptableContent;