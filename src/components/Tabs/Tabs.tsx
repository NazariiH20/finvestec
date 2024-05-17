import React, { ReactNode, useState } from 'react';

import { TabProps } from '@/components/Tabs/TabsItem.tsx';

import './Tabs.scss';

interface TabsProps {
  children: ReactNode;
}

function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='tabs blur'>
      <h1 className='tabs-title'>Aktuelle Stellenangebote</h1>
      <div className='tab-buttons'>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<TabProps>(child)) {
            return React.cloneElement(child, {
              isActive: activeIndex === index,
              onClick: () => handleItemClick(index),
            });
          }
          return null;
        })}
      </div>
    </div>
  );
}
export default Tabs;
