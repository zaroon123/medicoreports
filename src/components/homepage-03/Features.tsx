import RevealAnimation from '../animation/RevealAnimation';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-5"> Benefits & Features </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              We Make Everything Accessible, Manageable & Shareable
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 lg:max-w-[696px]">
              Our software is designed to precisely and reliably meet diverse needs. All our products prioritise user-friendliness, data integrity, access controls, 
              responsive designs, and intuitive features, ensuring quick adaptation and seamless integration into existing workflows.
            </p>
          </RevealAnimation>
        </div>
        {/* Feature Grid */}
        <FeatureCard /> 
      </div>
    </section>
  );
};

Features.displayName = 'Features';
export default Features;
