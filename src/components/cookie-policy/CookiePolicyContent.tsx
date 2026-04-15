import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const CookiePolicyContent = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        {/* Header Section */}
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Cookie Policy</h2>
            <div className="space-y-7">
              <p className="text-secondary/70 dark:text-accent/70">
                <strong>Medqon Limited – Cookie Policy</strong>
                <br /> 
                Effective Date: 23-09-2024
              </p>
            </div>
          </div>
        </RevealAnimation>

        <article className="terms-conditions-body">
          {/* Introduction */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <p>
                Medqon Limited (“we,” “our,” or “us”) uses cookies and similar technologies to collect and store 
                information when you visit our websites, including medicoreports.com, medicoreportwriter.com, 
                medqon.co.uk, and medqon.com (collectively, “the Websites”). This policy explains what cookies are, 
                how we use them, and your choices regarding cookies.
              </p>
            </div>
          </RevealAnimation>

          {/* 1. What are Cookies? */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>1. What are Cookies?</h3>
              <p>
                Cookies are small text files placed on your computer or mobile device when you visit a website. They are 
                widely used to make websites function efficiently, enhance user experience, and provide insights to 
                website owners. Cookies allow us to recognize your device, remember your preferences, and understand 
                how you interact with our Websites.
              </p>
            </div>
          </RevealAnimation>

          {/* 2. How We Use Cookies */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>2. How We Use Cookies</h3>
              <p>
                We use both first-party (set by Medqon) and third-party (set by external services) cookies for various 
                purposes. The cookies we use fall into the following categories:
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">2.1. Essential Cookies</h4>
              <p>
                These cookies are necessary for the basic operation of our Websites. Without them, services you request, 
                such as logging in or accessing secure areas, would not be possible. They do not store any personally 
                identifiable information.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Purpose:</strong> Enable core website functionality (e.g., session management, security).</li>
                <li><strong>Duration:</strong> Session cookies, deleted when you close your browser.</li>
                <li><strong>Legal Basis:</strong> Legitimate interest (necessary for providing services you request).</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">2.2. Performance Cookies</h4>
              <p>
                Performance cookies collect information on how visitors use our Websites, such as which pages are visited 
                most often or if any error messages are encountered. This information is aggregated and anonymous. These 
                cookies help us improve the functionality of our Websites and enhance the user experience.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Purpose:</strong> Analyze user behavior, optimize website performance.</li>
                <li><strong>Duration:</strong> Persistent cookies, retained for a predefined period (e.g., 6 months).</li>
                <li><strong>Legal Basis:</strong> Legitimate interest (site improvement).</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">2.3. Functional Cookies</h4>
              <p>
                These cookies allow our Websites to remember choices you make (e.g., language or region preferences) and 
                provide enhanced, personalized features. They may also be used to provide services you have requested, 
                such as commenting on blog posts or using live chat.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Purpose:</strong> Personalize user experience, store user preferences.</li>
                <li><strong>Duration:</strong> Persistent cookies (e.g., 1 year) to retain your settings across sessions.</li>
                <li><strong>Legal Basis:</strong> Legitimate interest or consent (for some optional features).</li>
              </ul>

              <h4 className="text-heading-6 font-semibold mt-4">2.4. Targeting/Advertising Cookies</h4>
              <p>
                These cookies track your browsing habits to deliver ads that are relevant to you. They may also be used 
                to limit the number of times you see an advertisement and measure the effectiveness of ad campaigns. 
                These cookies are typically placed by third-party advertising networks with our permission.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Purpose:</strong> Serve targeted ads, measure ad effectiveness, limit ad frequency.</li>
                <li><strong>Duration:</strong> Persistent cookies, lasting up to 1 year depending on the provider.</li>
                <li><strong>Legal Basis:</strong> Consent (required under GDPR for non-essential cookies).</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* 3. Third-Party Cookies */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>3. Third-Party Cookies</h3>
              <p>
                We use third-party service providers, such as HubSpot and Google Analytics, to help us with marketing, 
                analytics, and understanding user interactions on our Websites. These third-party cookies are placed by 
                external services and are subject to the respective providers privacy and cookie policies.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>HubSpot:</strong> Used for managing marketing campaigns and tracking user interactions 
                  (e.g., form submissions). For more details, refer to HubSpots Privacy Policy.
                </li>
                <li>
                  <strong>Google Analytics:</strong> Used to track website traffic and analyze visitor behavior. 
                  Google Analytics anonymizes your IP address to protect your privacy. See Googles Privacy Policy.
                </li>
              </ul>
              <p>
                We do not control these third-party cookies, and you should refer to the providers privacy policies 
                for details.
              </p>
            </div>
          </RevealAnimation>

          {/* 4. Managing Cookies */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>4. Managing Cookies</h3>
              <p>
                You have the right to accept or reject cookies. You can manage cookies through your browser settings, 
                allowing you to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>View and delete individual cookies.</li>
                <li>Block third-party cookies or all cookies.</li>
                <li>Delete all cookies when you close your browser.</li>
                <li>Open a private browsing or incognito session.</li>
              </ul>
              <p>
                <strong>Browser-Specific Guides:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="#" className="text-primary-600 hover:underline">Google Chrome: Manage Cookies in Chrome</a></li>
                <li><a href="#" className="text-primary-600 hover:underline">Mozilla Firefox: Manage Cookies in Firefox</a></li>
                <li><a href="#" className="text-primary-600 hover:underline">Microsoft Edge: Manage Cookies in Edge</a></li>
                <li><a href="#" className="text-primary-600 hover:underline">Apple Safari: Manage Cookies in Safari</a></li>
              </ul>
              <p>
                Please note that blocking or disabling cookies may affect the functionality of our Websites and limit 
                your access to certain features.
              </p>
            </div>
          </RevealAnimation>

          {/* 5. Cookie Duration */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>5. Cookie Duration</h3>
              <p>
                Cookies may be either session cookies or persistent cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Session Cookies:</strong> These cookies are temporary and are deleted when you close your 
                  browser. They are primarily used to maintain session data, such as keeping you logged in while 
                  navigating between pages.
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> These cookies remain on your device for a specified period or 
                  until you manually delete them. They are used to remember your preferences and settings for future 
                  visits to our Websites.
                </li>
              </ul>
              <p>
                The duration of persistent cookies varies depending on their purpose. For example, performance cookies 
                may last a few months, while targeting cookies may last up to a year.
              </p>
            </div>
          </RevealAnimation>

          {/* 6. Consent for Cookies */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>6. Consent for Cookies</h3>
              <p>
                By using our Websites, you consent to the use of cookies as described in this Cookie Policy. You have 
                the right to withdraw your consent at any time by adjusting your browser settings to block or delete 
                cookies.
              </p>
              <p>
                In some regions, such as the European Economic Area (EEA) and the United Kingdom, you are required to 
                give explicit consent before we can place non-essential cookies (e.g., performance or targeting cookies) 
                on your device. Upon your first visit to our Websites, you will be prompted with a cookie consent banner 
                to choose which types of cookies you allow. You can modify your preferences at any time.
              </p>
            </div>
          </RevealAnimation>

          {/* 7. Changes to this Cookie Policy */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>7. Changes to this Cookie Policy</h3>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in the law, our data processing 
                practices, or our services. Any changes will be posted on this page, and the “Effective Date” at the 
                top of the policy will be updated accordingly. We recommend checking this page periodically for updates.
              </p>
            </div>
          </RevealAnimation>

          {/* 8. Contact Us */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>8. Contact Us</h3>
              <p>
                If you have any questions or concerns about our use of cookies, or if you would like to exercise your 
                rights regarding cookies, please contact us at:
              </p>
              <p>
                <strong>Medqon Limited</strong>
                <br />
                Medqon Limited, Alison Business Centre, 39-40 Alison Crescent, Sheffield, England, S2 1AS
                <br />
                Email: info@medqon.co.uk
                <br />
                Telephone: (+44) 3300010805
              </p>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default CookiePolicyContent;