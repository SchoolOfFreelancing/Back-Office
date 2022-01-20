import React from 'react';
import { map } from 'lodash';
import { MENTORS } from '../globals';
import { MentorCard } from './cards/MentorCard';

export const Mentors: React.FC = () => (
  <div className="flex w-full md:pt-10 pt-14 justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-3/4">
      {map(MENTORS, (item) => (
        <MentorCard
          mentor={item}
          key={item.id}
        />
      ))}
    </div>
  </div>
);
