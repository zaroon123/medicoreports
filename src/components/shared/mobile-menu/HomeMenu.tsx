// components/shared/mega-menu/HomeMenu.tsx

import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const HomeMenu = () => {
  // Menu items data
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      href: '/',
      hasSubmenu: false
    },
    {
      id: 'about-medqon',
      label: 'About Medqon',
      href: '/medicoreports-about-us',
      hasSubmenu: false
    },
    {
      id: 'for-experts',
      label: 'For Experts (Report Writer)',
      href: '/medicoreports-for-experts',
      hasSubmenu: false
    },
    {
      id: 'for-agencies',
      label: 'For Agencies (Medqon Vault)',
      href: '/medicoreports-vault',
      hasSubmenu: false
    },
    {
      id: 'api-integration',
      label: 'API Integration',
      href: '#',
      hasSubmenu: false
    },
    {
      id: 'pricing',
      label: 'Pricing',
      href: '/medicoreports-pricing',
      hasSubmenu: false
    },
    {
      id: 'contact-us',
      label: 'Contact Us',
      href: '/contact-us',
      hasSubmenu: false
    }
  ];

  return (
      <ul className="space-y-0">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 pl-4 text-left font-normal transition-all duration-200 hover:text-secondary dark:hover:text-accent"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
  );
};

HomeMenu.displayName = 'HomeMenu';

export default HomeMenu;


// import { homeMegaMenuColumns } from '@/data/header';
// import Link from 'next/link';
// import MobileMenuItem from './MobileMenuItem';
// const homepages = [...homeMegaMenuColumns[0].items, ...homeMegaMenuColumns[1].items, ...homeMegaMenuColumns[2].items];

// const HomeMenu = () => { 
//   return (
//     <MobileMenuItem id="home" title="Home" hasSubmenu={false}>
//       {/* <ul>
//         {homepages.map((item) => (
//           <li key={item.id}>
//             <Link
//               href={item.href}
//               className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul> */}
//     </MobileMenuItem>
//   );
// };

// HomeMenu.displayName = 'HomeMenu';

// export default HomeMenu;

