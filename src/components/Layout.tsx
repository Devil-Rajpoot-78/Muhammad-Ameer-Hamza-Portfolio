import { ReactNode } from 'react';

interface LayoutProps { children: ReactNode; }

export const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-black text-white">
    <div className="relative">{children}</div>
  </div>
);
