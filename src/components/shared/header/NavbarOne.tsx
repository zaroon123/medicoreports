'use client';

// Header v1
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { navigationItems } from '@/data/header';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import { FC, useState } from 'react';
import MobileMenu from '../MobileMenu';
import AboutMenu from '../mega-menu/AboutMenu';
import BlogMenu from '../mega-menu/BlogMenu';
import HomeMegaMenu from '../mega-menu/HomeMegaMenu';
import PageMegaMenu from '../mega-menu/PageMegaMenu';
import ServicesMenu from '../mega-menu/ServicesMenu';
import ResourceMenu from '../mega-menu/ResourceMenu';
import SolutionsMenu from '../mega-menu/SolutionsMenu';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import NavCTAButton from './NavCTAButton';
import NavItemLink from './NavItemLink';

interface NavbarOneProps {
  className?: string;
  megaMenuColor?: string; 
  btnClassName?: string;
  navItemClass?: string;  
} 

const NavbarOne: FC<NavbarOneProps> = ({ className, megaMenuColor, btnClassName }) => {
  const { isScrolled } = useNavbarScroll(100);
  
  // State to track which menu is currently hovered
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  
  // Handle mouse enter on menu item
  const handleMenuMouseEnter = (menuId: string) => {
    setHoveredMenu(menuId);
  };
  
  // Handle mouse leave on menu item
  const handleMenuMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <MobileMenuProvider>
      <header>
        <div
          className={cn(
            'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto flex w-full max-w-[320px] -translate-x-1/2 items-center justify-between rounded-full px-2.5 py-2.5 transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0',
            className,
            isScrolled && 'lg:top-2 top-2 transition-all duration-500 ease-in-out',
          )}>
          {/* logo */}
          <Logo /> 
          
          {/* navigation */}
          <nav className="hidden items-center xl:flex">
            <ul className="flex items-center">
              {navigationItems.map((item) => {
                const renderMegaMenu = () => {
                  switch (item?.megaMenuComponent) {
                    case 'HomeMegaMenu':
                      return <HomeMegaMenu className={megaMenuColor} />;
                    case 'ResourceMegaMenu':
                      return (
                        <ResourceMenu 
                          className={megaMenuColor}
                          isParentHovered={hoveredMenu === item.id}
                          onMouseEnter={() => handleMenuMouseEnter(item.id)}
                          onMouseLeave={handleMenuMouseLeave}
                        />
                      );
                    case 'SolutionsMegaMenu':
                      return <SolutionsMenu 
                          className={megaMenuColor}
                          isParentHovered={hoveredMenu === item.id}
                          onMouseEnter={() => handleMenuMouseEnter(item.id)}
                          onMouseLeave={handleMenuMouseLeave}
                      />;
                    case 'ServicesMenu':
                      return <ServicesMenu className={megaMenuColor} />;
                    case 'BlogMenu':
                      return <BlogMenu className={megaMenuColor} />;
                    default:
                      return null;
                  }
                };

                // mega menu render
                return (
                  <li 
                    key={item?.id} 
                    className={cn(
                      'py-2.5', 
                      item?.hasDropdown && 'group/nav relative cursor-pointer'
                    )}
                    onMouseEnter={() => {
                      if (item.hasDropdown) {
                        handleMenuMouseEnter(item.id);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) {
                        handleMenuMouseLeave();
                      }
                    }}
                  >
                    <NavItemLink item={item} />
                    {item.hasDropdown && renderMegaMenu()}
                  </li>
                );
              })}
            </ul>
          </nav>
          
          <NavCTAButton href="/signup-01" btnClassName={btnClassName} label="Get started" />
          
          {/* mobile menu btn */}
          <MobileMenuButton />
        </div>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
};

NavbarOne.displayName = 'NavbarOne';
export default NavbarOne;