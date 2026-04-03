// components/shared/mega-menu/ResourceMenu.tsx

'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { resourceMenuItems } from '@/data/header';
import { cn } from '@/utils/cn';
import MegaMenuItem from './MegaMenuItem';

interface ResourceMenuProps {
  className?: string;
  isParentHovered?: boolean;  // ← NEW: Prop to detect when Resources is hovered
  onMouseEnter?: () => void;   // ← NEW: Pass mouse enter to parent
  onMouseLeave?: () => void;   // ← NEW: Pass mouse leave to parent
}

const ResourceMenu = ({ 
  className, 
  isParentHovered = false,
  onMouseEnter,
  onMouseLeave  
}: ResourceMenuProps) => {
  // State: Which submenu is active? Default to 'support' when Resources is hovered
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ NEW: Effect to set default submenu when Resources is hovered
  useEffect(() => {
    if (isParentHovered) {
      // When Resources is hovered, show Support Corner submenu by default
      setActiveSubmenu('support');
    } else {
      // When Resources is not hovered, clear submenu after delay
      if (!isHoveringDropdown) {
        timeoutRef.current = setTimeout(() => {
          setActiveSubmenu(null);
        }, 100);
      }
    }
  }, [isParentHovered]);

  // Handle hover on menu items with submenu
  const handleMenuItemHover = (id: string | null) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (id) {
      // Open the hovered submenu immediately
      setActiveSubmenu(id);
    } else {
      // Delay closing to allow moving to submenu
      timeoutRef.current = setTimeout(() => {
        if (!isHoveringDropdown) {
          setActiveSubmenu(null);
        }
      }, 100);
    }
  };

  // Handle dropdown mouse enter
  const handleDropdownMouseEnter = () => {
    setIsHoveringDropdown(true);
    
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Call parent's onMouseEnter if provided
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  // Handle dropdown mouse leave
  const handleDropdownMouseLeave = () => {
    setIsHoveringDropdown(false);
    
    // Clear submenu after leaving
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 100);
    
    // Call parent's onMouseLeave if provided
    if (onMouseLeave) {
      onMouseLeave();
    }
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
  const showSubmenu = activeItem?.submenu && activeItem.submenu.length > 0;

  // Get the appropriate header text based on active submenu
  const getSubmenuHeader = () => {
    if (activeItem?.id === 'support') {
      return {
        title: activeItem.label,
        subtitle: 'Quick Resources'
      };
    } else if (activeItem?.id === 'trust-centre') {
      return {
        title: activeItem.label,
        subtitle: 'Legal Information'
      };
    }
    return {
      title: activeItem?.label || '',
      subtitle: 'Resources'
    };
  };

  const submenuHeader = getSubmenuHeader();

  return (
    <div 
      className="relative"
      onMouseEnter={handleDropdownMouseEnter}
      onMouseLeave={handleDropdownMouseLeave}
    >
      {/* Main Dropdown Container */}
      <div
        className={cn(
          'dark:bg-background-6 border-stroke-1 dark:border-stroke-6',
          'absolute top-full left-1/2 z-50 mt-2',
          '-translate-x-1/2 overflow-visible',
          'rounded-[20px] border bg-white',
          'transition-all duration-300',
          // Visibility controlled by parent hover
          isParentHovered 
            ? 'pointer-events-auto opacity-100 translate-y-0' 
            : 'pointer-events-none opacity-0 translate-y-5',
          activeSubmenu ? 'w-auto min-w-[560px]' : 'w-full min-w-[280px]',
          className
        )}>
        
        <div className="relative flex">
          {/* Left Column: Main Menu Items */}
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
                  onHover={handleMenuItemHover}
                />
              ))}
            </ul>
          </div>
          
          {/* Right Column: Submenu Container */}
          {showSubmenu && (
            <div className="w-1/2 p-6 animate-in fade-in slide-in-from-right-5 duration-100">
              <div className="space-y-4">
                {/* Submenu Header - Changes based on active submenu */}
                <div className="pb-3 border-b border-stroke-1 dark:border-stroke-6">
                  <h3 className="text-sm font-medium text-secondary/60 dark:text-accent/60">
                    {submenuHeader.title}
                  </h3>
                  <h4 className="text-base font-semibold text-secondary dark:text-accent mt-1">
                    {submenuHeader.subtitle}
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
