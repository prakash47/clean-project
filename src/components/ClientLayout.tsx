'use client';
import { useEffect } from 'react';
import { registerCustomProperties } from '@/utils/registerCustomProperties';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    registerCustomProperties();
  }, []);

  return <>{children}</>;
}