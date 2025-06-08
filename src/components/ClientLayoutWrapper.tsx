'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]); // Trigger effect when pathname changes

  return <>{children}</>;
}