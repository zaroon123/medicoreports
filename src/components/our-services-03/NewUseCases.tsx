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
                <span className="badge badge-green">Meet Our Team</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[518px]">Diverse Expertise, Collaborative Culture, Driven by Excellence</h2>
              </RevealAnimation> 
            </div> 
          </div>
          <div className="flex-1 lg:text-left text-center">
            <div>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[518px] lg:mx-0 mx-auto">
                  At Medqon Ltd., we understand that the strength of our software is matched by the excellence of our people. Together, we bring a unique set of experiences that enhance our company and the solutions we provide.
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
                  <h3 className="text-heading-5">Diverse Expertise</h3>
                  <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Our team members come from various disciplines within the medical legal and technology sectors, ensuring a broad and deep understanding of both the challenges our clients face and the innovative solutions required to address them.</p>
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
                  <h3 className="text-heading-5">Collaborative Culture</h3>
                  <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">We thrive on teamwork and shared goals. Our collaborative approach extends across all departments, fostering a work environment that encourages open communication and mutual respect.</p>
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
                  <h3 className="text-heading-5">Customer-Centric Approach</h3>
                  <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Every member of our team is dedicated to understanding and meeting the needs of our clients. We pride ourselves on being responsive and adaptable, ensuring that our clients' objectives are always at the forefront.</p>
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
                  <h3 className="text-heading-5">Passion for Excellence</h3>
                  <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Our commitment to excellence is unwavering. We strive to exceed expectations in everything we do, from software development to customer service.</p>
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
                  <h3 className="text-heading-5">Empowered Learning</h3>
                  <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">We believe in continuous improvement and professional growth. Our team is encouraged to pursue ongoing education and training opportunities, keeping us at the cutting edge of technology and industry best practices.</p>
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
                  <h3 className="text-heading-5">Innovation and Creativity</h3>
                  <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">Innovation is at the heart of our mission. We foster a culture where creativity flourishes, leading to breakthrough ideas and pioneering solutions that set new standards in the medical legal field.</p>
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
