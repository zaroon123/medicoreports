'use client';

import { MegaSubMenuItem } from '@/data/header';
import Link from 'next/link';
import { useState } from 'react';

interface SubmenuProps {
  items: MegaSubMenuItem[];
  isOpen: boolean;
  parentId: string;
}

const Submenu = ({ items, isOpen, parentId }: SubmenuProps) => {
  if (!items || items.length === 0) return null;
 
  return (
    <div
      className={`
        absolute left-full top-0 ml-2 w-64 rounded-lg bg-white shadow-lg border border-stroke-1 dark:border-stroke-6 dark:bg-background-6
        transition-all duration-200 origin-left
        ${isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2'}
      `}
    >
      <ul className="py-2">
        {items.map((subItem) => (
          <li key={subItem.id}>
            <Link
              href={subItem.href}
              className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
            >
              <div className="flex items-start gap-3">
                {subItem.icon && (
                  <span className="text-lg mt-0.5">{subItem.icon}</span>
                )}
                <div className="flex-1">
                  <div className="font-medium text-secondary dark:text-accent group-hover:text-primary-600">
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
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default Submenu;