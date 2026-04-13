// components/shared/mega-menu/ResourceMenu.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { resourceMenuItems } from '@/data/header';
import { cn } from '@/utils/cn';
import MegaMenuItem from './MegaMenuItem';

interface ResourceMenuProps {
  className?: string;
  isParentHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// Icon component to handle both emoji and PNG icons
const MenuIcon = ({ icon, label }: { icon?: string; label: string }) => {
  if (!icon) return null;
  
  // Check if icon is an image path (PNG, JPG, JPEG, SVG, WebP)
  const isImagePath = icon.startsWith('/') || 
                      icon.startsWith('http') || 
                      icon.includes('.png') || 
                      icon.includes('.jpg') || 
                      icon.includes('.jpeg') || 
                      icon.includes('.svg') || 
                      icon.includes('.webp');
  
  if (isImagePath) {
    return (
      <div className="w-5 h-5 flex-shrink-0 relative mt-0.5">
        <Image
          src={icon}
          alt={label}
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
    );
  }
  
  // Default to emoji/text icon
  return <span className="text-lg flex-shrink-0">{icon}</span>;
};

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

  // Effect to set default submenu when Resources is hovered
  useEffect(() => {
    if (isParentHovered) {
      // Only set default if no active submenu is set
      if (!activeSubmenu) {
        setActiveSubmenu('support');
      }
    } else {
      if (!isHoveringDropdown) {
        timeoutRef.current = setTimeout(() => {
          setActiveSubmenu(null);
        }, 100);
      }
    }
  }, [isParentHovered, activeSubmenu]);

  // Handle hover on menu items with submenu
  const handleMenuItemHover = (id: string | null) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (id) {
      setActiveSubmenu(id);
    } else {
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
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  // Handle dropdown mouse leave
  const handleDropdownMouseLeave = () => {
    setIsHoveringDropdown(false);
    
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 100);
    
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
  
  // Check if submenu has many items (more than 4) to use two columns
  const hasManyItems = activeItem?.submenu && activeItem.submenu.length > 4;
  
  // Split submenu items into two columns for Trust Centre
  const getSubmenuColumns = () => {
    if (!activeItem?.submenu) return { leftColumn: [], rightColumn: [] };
    
    const items = activeItem.submenu;
    const midPoint = Math.ceil(items.length / 2);
    
    return {
      leftColumn: items.slice(0, midPoint),
      rightColumn: items.slice(midPoint)
    };
  };
  
  const { leftColumn, rightColumn } = getSubmenuColumns();

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
  
  // LEFT COLUMN: Fixed width (doesn't change)
  // RIGHT COLUMN: Auto width (expands based on content)
  const getDropdownWidth = () => {
    if (!activeSubmenu) return 'w-auto min-w-[280px]';
    if (activeSubmenu === 'trust-centre') return 'w-auto min-w-[780px]'; // Right column will expand
    return 'w-auto min-w-[580px]'; // Right column will expand
  };

  // Helper function to safely get icon as string
  const getIconAsString = (icon: unknown): string | undefined => {
    if (typeof icon === 'string') return icon;
    return undefined;
  };

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
          getDropdownWidth(),
          className
        )}>
        
        {/* 
          KEY FIX: Left column has FIXED width (w-[240px]), 
          Right column takes remaining space (flex-1) and expands based on content
        */}
        <div className="relative flex">
          {/* LEFT COLUMN: Fixed width - NEVER changes, stays at 240px */}
          <div className="w-[240px] flex-shrink-0 border-r border-stroke-1 dark:border-stroke-6">
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
          
          {/* RIGHT COLUMN: Flexible width - EXPANDS based on content */}
          <div className={cn(
            'flex-1 min-w-0 transition-all duration-200',
            showSubmenu ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}>
            {showSubmenu && (
              <div className="p-6 h-full animate-in fade-in duration-150">
                <div className="space-y-4 h-full flex flex-col">
                  {/* Submenu Header */}
                  <div className="pb-3 border-b border-stroke-1 dark:border-stroke-6">
                    <h3 className="text-sm font-medium text-secondary/60 dark:text-accent/60">
                      {submenuHeader.title}
                    </h3>
                    <h4 className="text-base font-semibold text-secondary dark:text-accent mt-1">
                      {submenuHeader.subtitle}
                    </h4>
                  </div>
                  
                  {/* Submenu Items - Single or Two Columns based on item count */}
                  {activeSubmenu === 'trust-centre' && hasManyItems ? (
                    // Two columns layout for Trust Centre - RIGHT COLUMN EXPANDS
                    <div className="grid grid-cols-2 gap-4 flex-1">
                      {/* Left Column of Submenu */}
                      <div className="space-y-2">
                        {leftColumn.map((subItem, idx) => (
                          <Link
                            key={subItem.id}
                            href={subItem.href}
                            className="block group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            <div className="flex items-start gap-3">
                              <MenuIcon icon={getIconAsString(subItem.icon)} label={subItem.label} />
                              <div className="flex-1 min-w-0">
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
                      
                      {/* Right Column of Submenu */}
                      <div className="space-y-2">
                        {rightColumn.map((subItem, idx) => (
                          <Link
                            key={subItem.id}
                            href={subItem.href}
                            className="block group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                            style={{ animationDelay: `${(leftColumn.length + idx) * 50}ms` }}
                          >
                            <div className="flex items-start gap-3">
                              <MenuIcon icon={getIconAsString(subItem.icon)} label={subItem.label} />
                              <div className="flex-1 min-w-0">
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
                  ) : (
                    // Single column layout for Support Corner - RIGHT COLUMN EXPANDS
                    <div className="space-y-2 flex-1">
                      {activeItem?.submenu?.map((subItem, idx) => (
                        <Link
                          key={subItem.id}
                          href={subItem.href} 
                          className="block group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 animate-in fade-in slide-in-from-left-2"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <div className="flex items-start gap-3">
                            <MenuIcon icon={getIconAsString(subItem.icon)} label={subItem.label} />
                            <div className="flex-1 min-w-0">
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
                  )}
                </div>
              </div>
            )}
          </div>
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
