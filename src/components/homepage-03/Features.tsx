import RevealAnimation from '../animation/RevealAnimation';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-5"> Deployment options </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              Choose the operating model that fits your organisation
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 lg:max-w-[696px]">
              From MedCo-aligned MRO workflows to fully customised agency operations, Medqon Vault can be deployed as a focused compliance system, a tailored workflow platform, or a full medico-legal operating environment.
            </p>
          </RevealAnimation> 
        </div>
      </div>
    </section>
  );
};

Features.displayName = 'Features';
export default Features;
