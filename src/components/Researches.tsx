import React from 'react';
import { map } from 'lodash';
import { RESEARCHES } from '../globals';
import { ResearchCard } from './cards/ResearchCard';

export const Researches: React.FC = () => (
  <div className="flex w-full md:pt-10 justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4">
      {map(RESEARCHES, (item) => (
        <ResearchCard
          research={item}
          key={item.id}
        />
      ))}
    </div>
  </div>
);
