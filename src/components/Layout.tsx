import { ReactNode } from 'react';
import { useWindowSize } from '@hooks/index';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width ? windowSize.width < 768 : false;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        {children}
      </div>
    </div>
  );
};
