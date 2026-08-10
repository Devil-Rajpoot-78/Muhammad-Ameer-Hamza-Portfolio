import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-4">MUHAMMAD AMEER HAMZA</div>
        <div className="text-gray-400 text-lg">INITIALIZING DIGITAL WORKSHOP</div>
        <div className="mt-8 flex justify-center">
          <div className="animate-pulse flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
