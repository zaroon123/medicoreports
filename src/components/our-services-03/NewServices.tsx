import RevealAnimation from '../animation/RevealAnimation';
 
const Services = () => { 

  return (
    <section className="pb-1 pt-14 md:pb-1 md:pt-2 lg:pb-[10px] lg:pt-[10px] xl:pb-[10px] xl:pt-[200px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Our services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
              Leading companies around the globe rely on nexSaas.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="xl:max-w-[700px] max-w-[500px] mx-auto">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin,
              though it looks like it
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
