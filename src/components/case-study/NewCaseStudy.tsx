import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudy = () => {
  return (
    <section className="pt-7 pb-[20px] lg:pb-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <RevealAnimation delay={0.8}>
            <figure className="max-w-[1288px] rounded-4xl overflow-hidden">
              <Image
                src="/images/medicoreports/about.jpg"
                alt="VelocityFinance case study dashboard showing financial reporting interface"
                width={1290}
                height={800}
                className="w-full h-full object-cover"
              />
            </figure> 
          </RevealAnimation>
          <div className="space-y-1">
            <RevealAnimation delay={0.1}>
              <h3 className="text-heading-4">The challenge</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[705px]">
                VelocityFinance was managing its financial operations manually, using a combination of spreadsheets and
                disconnected tools. Their reporting process was slow, error-prone, and difficult to scale.
              </p>
            </RevealAnimation>
          </div>
          <div className="flex items-center flex-col md:flex-row gap-16 justify-between">
            <div className="space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">The Solution</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>NextSaaS helped them:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      Set up real-time dashboards with custom financial KPIs
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      Automate monthly reporting for leadership and investors
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      Integrate their accounting tools and CRM into one platform
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
            <div className="space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">The results</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>NextSaaS helped them:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      82% reduction in reporting time
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      95% accuracy increase across all financial statements
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      4x faster decision-making during strategic reviews
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
