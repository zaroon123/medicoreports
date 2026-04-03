import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const DisclaimerContent = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        {/* Header Section */}
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Disclaimer</h2>
            <div className="space-y-7">
              <p className="text-secondary/70 dark:text-accent/70">
                <strong>Medqon Limited – Disclaimer</strong>
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
                This Disclaimer applies to the use of medicoreports.com, medicoreportwriter.com, medqon.co.uk, and 
                medqon.com (collectively referred to as &quot;the Websites&quot;), all of which are owned and operated by 
                Medqon Limited (“we,” “our,” or “us”). By using any of the Websites, you agree to this Disclaimer. 
                If you do not agree, please discontinue use of the Websites immediately. This Disclaimer will be 
                reviewed by a qualified legal professional.
              </p>
            </div>
          </RevealAnimation>

          {/* 1. No Medical Advice */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>1. No Medical Advice</h3>
              <p>
                The information, tools, and services provided on the Websites are for general informational purposes 
                only and are not intended to constitute or substitute professional medical advice, diagnosis, or 
                treatment. You should not rely on the information presented on the Websites as a replacement for 
                direct consultation with a healthcare professional.
              </p>
              
              <h4 className="text-heading-6 font-semibold mt-4">Consult a Professional:</h4>
              <p>
                Always seek the advice of your physician or a qualified healthcare provider with any questions you may 
                have regarding a medical condition. Never ignore or delay seeking professional medical advice due to 
                something you have read on our Websites.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">No Physician-Patient Relationship:</h4>
              <p>
                Use of the Websites does not create any doctor-patient relationship. Medqon Limited expressly disclaims 
                any liability that may arise from the use of the information on the Websites for diagnosing or treating 
                a medical condition.
              </p>
            </div>
          </RevealAnimation>

          {/* 2. Accuracy of Information */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>2. Accuracy of Information</h3>
              <p>
                While Medqon Limited strives to ensure that the information on the Websites is up-to-date and accurate, 
                we make no representations or warranties, express or implied, regarding the completeness, accuracy, 
                reliability, suitability, or availability of any information, products, services, or related graphics 
                on the Websites for any purpose.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">No Guarantee:</h4>
              <p>
                We do not guarantee that all content, including medical, legal, or professional advice, is accurate or 
                complete. Any reliance you place on such information is at your own risk.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">No Liability for Errors:</h4>
              <p>
                Medqon Limited will not be held liable for any errors or omissions in the information on the Websites. 
                Content may be updated, changed, or removed at any time without notice.
              </p>
            </div>
          </RevealAnimation>

          {/* 3. Third-Party Links */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>3. Third-Party Links</h3>
              <p>
                The Websites may contain links to third-party websites or resources. These links are provided for your 
                convenience and informational purposes only.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">No Control Over External Content:</h4>
              <p>
                Medqon Limited has no control over the content, privacy practices, or availability of third-party 
                websites. We do not endorse or make any representations regarding the accuracy or completeness of 
                information contained on these external websites.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">Your Responsibility:</h4>
              <p>
                By accessing third-party websites via links on our Websites, you acknowledge that Medqon Limited is 
                not responsible for, and accepts no liability for, any loss or damage caused by the use or reliance 
                on any content, goods, or services available on or through any external sites.
              </p>
            </div>
          </RevealAnimation>

          {/* 4. Limitation of Liability */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>4. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by applicable law, Medqon Limited shall not be liable for any direct, 
                indirect, incidental, special, consequential, or punitive damages arising from your use of the Websites 
                or reliance on any content provided therein.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">No Liability for Loss:</h4>
              <p>
                Medqon Limited is not liable for any loss of data, profit, business, or goodwill, nor for any injury 
                or damages of any kind, whether arising in contract, tort, or otherwise, in connection with the use 
                of the Websites or reliance on any content or services.
              </p>

              <h4 className="text-heading-6 font-semibold mt-4">No Warranty:</h4>
              <p>
                The Websites are provided &quot;as is&quot; and &quot;as available,&quot; without any warranties of any kind, either 
                express or implied, including, but not limited to, warranties of merchantability, fitness for a 
                particular purpose, or non-infringement.
              </p>
            </div>
          </RevealAnimation>

          {/* 5. Changes to this Disclaimer */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>5. Changes to this Disclaimer</h3>
              <p>
                Medqon Limited reserves the right to modify or update this Disclaimer at any time. Changes will be 
                effective upon posting on the Websites. Continued use of the Websites after any changes have been made 
                constitutes your acceptance of the updated Disclaimer.
              </p>
            </div>
          </RevealAnimation>

          {/* 6. Contact Us */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>6. Contact Us</h3>
              <p>
                If you have any questions about this Disclaimer, please contact us at:
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

export default DisclaimerContent;