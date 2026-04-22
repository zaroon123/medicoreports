'use client';

import { useWordAnimation } from '@/hooks/useWordAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const MeetOurTeam = () => {
  const { titleRef } = useWordAnimation();

  return (
    <section className="pb-[50px] md:pb-[80px] lg:pb-[100px]" aria-label="Team Introduction">
      <div className="main-container">
        <div className="space-y-7 md:space-y-14 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-5">Medico-legal case management platform</span>
          </RevealAnimation>
          <h2 ref={titleRef} className="split-text-team-title text-center">
            Choose the operating model that fits your organisation
          </h2>
          <RevealAnimation delay={0.3}>
            <p>
              From MedCo-aligned MRO workflows to fully customised agency operations, Medqon Vault can be deployed as a focused compliance system, a tailored workflow platform, or a full medico-legal operating environment.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
