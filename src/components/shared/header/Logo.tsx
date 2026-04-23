import logoDark from '@public/images/shared/Medqon-Logo.png';
import logo from '@public/images/shared/logo.svg';
import mainLogo from '@public/images/shared/Medqon-Logo.png';
import Image from 'next/image'; 
import Link from 'next/link';

const Logo = () => {
  return ( 
    <div>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="hidden lg:block lg:max-w-[198px]">
          <Image src={mainLogo} alt="Medqon" className="dark:invert" />
        </figure>

        {/* mobile logo */}
        <figure className="block max-w-[135px] lg:hidden">
          <Image src={mainLogo} alt="Medqon" className="block w-full dark:hidden" />
          <Image src={logoDark} alt="Medqon" className="hidden w-full dark:block" />
        </figure>
      </Link>
    </div>
  ); 
};

export default Logo;
