{
  /* =========================
Process Steps v2 section
===========================*/
}
import ProcessDarkImage from '@public/images/home-page-4/process-dark.png';
import ProcessImage from '@public/images/home-page-4/process.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const ProcessOperation = () => {  
  return (
    <section className="py-[100px] bg-background-1 dark:bg-background-6 space-y-[70px]">
      <div className="main-container space-y-[70px]">
        <div className="space-y-5 max-w-[804px] mx-auto text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan-v2">Process</span>
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[624px] mx-auto">Start producing medico-legal reports in minutes</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[802px] mx-auto">
                No complex setup. Capture, generate, and deliver compliant medico-legal reports through a simple, structured workflow.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-y-20 gap-y-14">
          <div className="col-span-12 xl:col-span-5 lg:col-span-6">
            <RevealAnimation delay={0.4}>
              <div>
                <figure className="max-w-[478px] max-h-[547px] lg:mx-0 mx-auto">
                  <Image src={ProcessImage} alt="process" className="h-full w-full object-cover dark:hidden block" />
                  <Image
                    src={ProcessDarkImage}
                    alt="process"
                    className="h-full w-full object-cover hidden dark:block"
                  />
                </figure>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 xl:col-span-7 lg:col-span-6">
            <div className="space-y-5">
              <RevealAnimation delay={0.5}>
                <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                  <div>
                    <div className="size-10 rounded-full bg-ns-yellow text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                      1
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                      Create a case in seconds
                    </h3>
                    <p>
                      Enter details manually or drag and drop an instruction letter. The system extracts and fills key case information automatically.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                  <div className="size-10 rounded-full bg-ns-green text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                      Capture or input information
                    </h3>
                    <p>
                      Record the consultation, dictate findings, type directly, or upload audio — all inputs are supported.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                  <div className="size-10 rounded-full bg-ns-red text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">Automatic report structuring</h3>
                    <p>
                      DictAIte identifies key medical and legal details and builds structured report sections in real time.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                  <div>
                    <div className="size-10 rounded-full bg-ns-yellow text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                      4
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                      Review and finalise
                    </h3>
                    <p>
                      Make quick edits if needed and generate a complete medico-legal report ready for submission.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-background-3 dark:bg-background-7 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4">
                  <div className="size-10 rounded-full bg-ns-green text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                      Verify and deliver
                    </h3>
                    <p>
                      Share reports with confidence using built-in verification to confirm authenticity and detect any alterations.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOperation;
