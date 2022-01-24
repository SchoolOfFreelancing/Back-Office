import React from 'react';
import { map } from 'lodash';
import { SUPPORTS } from '../globals';
import { SupportCard } from './cards/SupportCard';

export const Supports: React.FC = () => (
  <div className="flex w-full md:pt-10 justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4">
      {map(SUPPORTS, (item) => (
        <SupportCard
          support={item}
          key={item.id}
        />
      ))}
    </div>
  </div>
);
