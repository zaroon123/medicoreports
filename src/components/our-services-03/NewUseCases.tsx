import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const NewUseCases = () => {
  const useCasesData: IService[] = getMarkDownData('src/data/services').slice(8, 11);
  return (
    <section className="pb-[100px] xl:pb-[200px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="flex lg:items-end items-center lg:flex-row flex-col lg:gap-0 gap-4 justify-between mb-[70px]">
          <div className="flex-1 lg:text-left text-center">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Use cases</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[518px]">How We Connect with Customers</h2>
              </RevealAnimation>
            </div>
          </div>
          <div className="flex-1 lg:text-left text-center">
            <div>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[518px] lg:mx-0 mx-auto">
                  Explore the ways our innovative solutions improve communication and boost efficiency in your
                  organization. From streamlined workflows to enhanced collaboration tools, we provide everything you
                  need to succeed.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:gap-8 gap-y-14">
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 lg:col-span-4">
              <div className="space-y-6">
                <div className="max-lg:text-center">
                  <span className={`ns-shape-14 text-[52px] text-secondary dark:text-accent`} />
                </div>
                <div className="space-y-1 lg:text-left text-center">
                  <h3 className="text-heading-5">Creative Filters & Effects</h3>
                  <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Add artistic flair to your images with AI-powered creative filters and effects — from cinematic tones to vintage aesthetics and modern stylizations.</p>
                </div>
                <div className="lg:text-left text-center">
                  <LinkButton
                    href={`/contact-us`}
                    className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                    Read more
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 lg:col-span-4">
              <div className="space-y-6">
                <div className="max-lg:text-center">
                  <span className={`ns-shape-9 text-[52px] text-secondary dark:text-accent`} />
                </div>
                <div className="space-y-1 lg:text-left text-center">
                  <h3 className="text-heading-5">Cryptocurrency Lending</h3>
                  <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">A secure and efficient way for individuals and businesses to lend or borrow digital assets, earn interest, and access liquidity without traditional banks.</p>
                </div>
                <div className="lg:text-left text-center">
                  <LinkButton
                    href={`/contact-us`}
                    className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                    Read more
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 lg:col-span-4">
              <div className="space-y-6">
                <div className="max-lg:text-center">
                  <span className={`ns-shape-15 text-[52px] text-secondary dark:text-accent`} />
                </div>
                <div className="space-y-1 lg:text-left text-center">
                  <h3 className="text-heading-5">Customer Support Automation</h3>
                  <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Deliver exceptional customer experiences with AI-powered support automation that reduces response times, lowers costs, and improves satisfaction.</p>
                </div>
                <div className="lg:text-left text-center">
                  <LinkButton
                    href={`/contact-us`} 
                    className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                    Read more
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default NewUseCases;
