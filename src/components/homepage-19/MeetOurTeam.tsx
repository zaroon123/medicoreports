'use client';

import { useWordAnimation } from '@/hooks/useWordAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const MeetOurTeam = () => {
  const { titleRef } = useWordAnimation();

  return (
    <section className="pb-[50px] md:pb-[80px] lg:pb-[100px]" aria-label="Team Introduction">
      <div className="main-container">
        <div className="space-y-7 md:space-y-14">
          <h2 ref={titleRef} className="split-text-team-title text-center">
            Work Smarter, Not Harder! We aim to streamline your operations, increase efficiency, and minimise your effort with our web-based and easy-to use products so you can work more proficiently without wasting hours on paperwork and inefficient task management.
          </h2>

          <RevealAnimation delay={0.2}>
            <div className="text-center">
              <LinkButton
                href="/contact-us"
                className="btn btn-primary btn-md w-[85%] md:w-auto hover:btn-secondary dark:hover:btn-accent">
                Get Started
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
