import { useEffect, useState } from 'react';
import { useGetCurrentBreakpoint } from '../hooks/useGetCurrentBreakpoint';
import { useWindowSize } from '../hooks/useWindowSize';

interface MobileContainerProps {
  children: React.ReactNode;
}

export const MobileContainer = ({ children }: MobileContainerProps) => {
  const { currentBreakpointValue } = useGetCurrentBreakpoint();
  const [windowWidth] = useWindowSize();
  const [containerWidth, setContainerWidth] = useState('100%');

  useEffect(() => {
    if (windowWidth > (currentBreakpointValue || 700)) {
      setContainerWidth(`${currentBreakpointValue}px`);
    } else {
      setContainerWidth('100%');
    }
  }, [windowWidth, currentBreakpointValue]); // определение текущего набора стилей 

  return (
    <div className="w-full flex justify-center">
      <div
        className=" min-h-[667px] object-cover bg-cover bg-center bg-bg-1"
        style={{ width: containerWidth }}>
        {children}
      </div>
    </div>
  );
};
