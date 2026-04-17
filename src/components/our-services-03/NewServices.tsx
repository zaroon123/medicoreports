import RevealAnimation from '../animation/RevealAnimation';
 
const Services = () => { 

  return (
    <section className="pb-1 pt-14 md:pb-1 md:pt-2 lg:pb-[10px] lg:pt-[10px] xl:pb-[10px] xl:pt-[200px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Empowering Precision and Innovation in Medical Legal Practice</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto"> 
              Seamless Integration, Enhanced Performance
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="xl:max-w-[700px] max-w-[500px] mx-auto">
              Navigate the complexities of medico-legal work with our innovative web-based solutions. Medqon Ltd. is committed to transforming the medical legal sector by developing software that optimises efficiency and enhances the performance of medical legal agencies and medical legal experts.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
