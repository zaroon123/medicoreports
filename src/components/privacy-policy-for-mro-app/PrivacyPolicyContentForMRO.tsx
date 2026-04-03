import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const PrivacyPolicyContentForMRO = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        {/* Header Section */}
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Privacy Policy</h2>
            <div className="space-y-7">
              <p className="text-secondary/70 dark:text-accent/70">
                <strong>Medqon Limited – Mobile App Privacy Policy</strong>
                <br />
                Effective Date: 06-02-2025
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
                This Privacy Policy outlines how our mobile application (the “App”) handles user data. The App is a 
                companion tool designed to provide medical experts and staff with seamless access to their clinic 
                schedules and patient lists. The App does not independently collect, process, or store any personal 
                data; instead, it retrieves and displays information from the Medical Reporting Organisation (MRO) 
                System (“MRO System”), which operates in full compliance with the UK General Data Protection Regulation 
                (UK GDPR) and relevant data protection laws.
              </p>
            </div>
          </RevealAnimation>

          {/* 2. Scope and Application */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. Scope and Application</h3>
              <p>
                This Privacy Policy applies exclusively to the App. It does not extend to the MRO System, which has 
                its own Privacy Policy and Terms of Use governing the collection, processing, and security of personal 
                data.
              </p>
              <p>
                The App serves only as a display interface for authorised users, enabling them to view their clinic 
                schedules, access patient appointment details, and update attendance status (Attended, DNA, Cancelled). 
                No patient accounts, logins, or registrations are created within the App, and no user credentials are 
                stored on the device.
              </p>
            </div>
          </RevealAnimation>

          {/* 3. Data Handling & Security */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. Data Handling &amp; Security</h3>
              
              <h4 className="text-heading-6 font-semibold mt-4">3.1 Data Access &amp; Processing</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>The App does not collect, store, or process personal data independently.</li>
                <li>All displayed information is securely retrieved in real time from the MRO System.</li>
                <li>The App does not modify, transmit, or share data beyond its intended use.</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">3.2 Authentication &amp; User Access</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users do not create accounts or log in through the App.</li>
                <li>Access is granted exclusively via credentials managed within the MRO System.</li>
                <li>If a user&apos;s access to the MRO System is revoked, their access to the App is automatically disabled.</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">3.3 Data Protection &amp; Security Measures</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>All communications between the App and the MRO System are encrypted using industry-standard security protocols.</li>
                <li>The App does not retain any user data locally on the device.</li>
                <li>Compliance with UK GDPR, Data Protection Act 2018, and other applicable regulations is maintained through the MRO System.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 4. Third-Party Services */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>4. Third-Party Services</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The App does not integrate with or share data with third-party services, analytics platforms, or advertising networks.</li>
                <li>No tracking cookies, background data collection, or third-party access is implemented.</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 5. User Rights & Contact Information */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>5. User Rights &amp; Contact Information</h3>
              <p>
                As the App does not independently process personal data, any queries regarding data access, correction, 
                or removal should be directed to the administrator of the MRO System.
              </p>
              <p>
                For further inquiries, please contact:
              </p>
              <p className="mt-2">
                <strong>📧 info@medqon.com</strong>
              </p>
            </div>
          </RevealAnimation>

          {/* 6. Updates to This Policy */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>6. Updates to This Policy</h3>
              <p>
                We reserve the right to update or modify this Privacy Policy as necessary to reflect changes in legal 
                requirements, industry best practices, or system functionality. Any updates will be communicated 
                through the appropriate channels.
              </p>
              <p className="mt-4">
                By using the App, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </RevealAnimation>

          {/* Related Policy Links */}
          <RevealAnimation delay={0.4}>
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="/terms-and-conditions"
                className="section-button btn dark:btn-accent hover:btn-primary btn-xl btn-secondary"
              >
                Terms of Use
              </Link>
              <Link
                href="/acceptable-use-policy"
                className="section-button btn dark:btn-accent hover:btn-primary btn-xl btn-outline"
              >
                Acceptable Use Policy
              </Link>
              <Link
                href="/gdpr-compliance"
                className="section-button btn dark:btn-accent hover:btn-primary btn-xl btn-outline"
              >
                GDPR Compliance
              </Link>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default PrivacyPolicyContentForMRO;