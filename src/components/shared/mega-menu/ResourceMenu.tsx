'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { resourceMenuItems } from '@/data/header';
import { cn } from '@/utils/cn';
import MegaMenuItem from './MegaMenuItem';

interface ResourceMenuProps {
  className?: string;
}

const ResourceMenu = ({ className }: ResourceMenuProps) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleSubmenuHover = (id: string | null) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (id) {
      setActiveSubmenu(id);
    } else {
      // Don't clear immediately, give a small delay
      timeoutRef.current = setTimeout(() => {
        if (!isHoveringDropdown) {
          setActiveSubmenu(null);
        }
      }, 100);
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsHoveringDropdown(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsHoveringDropdown(false);
    // Clear submenu after leaving
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 100);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Find the active submenu items
  const activeItem = resourceMenuItems.find(item => item.id === activeSubmenu);
  const hasSubmenu = activeItem?.submenu && activeItem.submenu.length > 0;

  return (
    <div className="relative">
      {/* Main Dropdown Container */}
      <div
        ref={dropdownRef}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
        className={cn(
          'dark:bg-background-6 border-stroke-1 dark:border-stroke-6 pointer-events-none absolute top-full left-1/2 z-50 mt-2 min-w-[280px] -translate-x-1/2 translate-y-5 overflow-visible rounded-[20px] border bg-white opacity-0 transition-all duration-300 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100',
          className,
          activeSubmenu ? 'w-auto min-w-[560px]' : 'w-full min-w-[280px]'
        )}>
        
        <div className="relative flex">
          {/* Main Menu Items */}
          <div className={cn(
            'transition-all duration-300',
            activeSubmenu ? 'w-1/2 border-r border-stroke-1 dark:border-stroke-6' : 'w-full'
          )}>
            <ul className="w-full space-y-5 p-6">
              {resourceMenuItems.map((item) => (
                <MegaMenuItem 
                  key={item.id} 
                  item={item}
                  isActive={activeSubmenu === item.id}
                  onHover={handleSubmenuHover}
                />
              ))}
            </ul>
          </div>
          
          {/* Submenu Container */}
          {hasSubmenu && (
            <div className="w-1/2 p-6 animate-in fade-in slide-in-from-right-5 duration-100">
              <div className="space-y-4">
                {/* Submenu Header */}
                <div className="pb-3 border-b border-stroke-1 dark:border-stroke-6">
                  <h3 className="text-sm font-medium text-secondary/60 dark:text-accent/60">
                    {activeItem?.label}
                  </h3>
                  <h4 className="text-base font-semibold text-secondary dark:text-accent mt-1">
                    Quick Resources
                  </h4>
                </div>
                
                {/* Submenu Items */}
                <div className="space-y-2">
                  {activeItem?.submenu?.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem.href}
                      className="block group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        {subItem.icon && (
                          <span className="text-lg">{subItem.icon}</span>
                        )}
                        <div className="flex-1">
                          <div className="font-medium text-secondary dark:text-accent group-hover:text-primary-600 transition-colors">
                            {subItem.label}
                          </div>
                          {subItem.description && (
                            <div className="text-sm text-secondary/60 dark:text-accent/60 mt-0.5">
                              {subItem.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceMenu;

// import { resourceMenuItems } from '@/data/header';
// import { cn } from '@/utils/cn';
// import MegaMenuItem from './MegaMenuItem';

// interface ResourceMenuProps {
//   className?: string;
// } 

// const ResourceMenu = ({ className }: ResourceMenuProps) => {
//   return (
//     <div className="">
//       <div className="fixed top-full left-1/2 z-50 hidden w-full max-w-[1290px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-transparent py-6 transition-all duration-200 group-focus-within/nav:flex group-hover/nav:flex dark:bg-transparent"></div>
//       <div
//         className={cn(
//           'dark:bg-background-6 border-stroke-1 dark:border-stroke-6 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-full min-w-[280px] -translate-x-1/2 translate-y-5 overflow-hidden rounded-[20px] border bg-white px-[60px] py-[30px] opacity-0 transition-transform duration-300 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100',
//           className,        
//         )}>
//         <ul className="w-full space-y-5">
//           {resourceMenuItems.map((item) => (
//             <MegaMenuItem key={item.id} item={item} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ResourceMenu;
