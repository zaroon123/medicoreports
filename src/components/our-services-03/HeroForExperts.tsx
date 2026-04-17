import RevealAnimation from '../animation/RevealAnimation';
 
const Hero = () => { 

  return (
    <section className="pb-1 pt-14 md:pb-1 md:pt-2 lg:pb-[10px] lg:pt-[10px] xl:pb-[10px] xl:pt-[50px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.3}>
            <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
              Everything you need to produce medico-legal reports
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="xl:max-w-[700px] max-w-[500px] mx-auto">
              From consultation capture to final report delivery, Medqon brings the entire medico-legal workflow into one system.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section> 
  );
};

export default Hero;
