import React from 'react';
import { map, orderBy } from 'lodash';
import { NOTICES } from '../globals';
import { NoticeCard } from './cards/NoticeCard';

export const Notices: React.FC = () => (
  <div className="flex w-full justify-center">
    <div className="grid grid-cols-1 gap-8 lg:w-3/4">
      {map(orderBy(NOTICES, ['date'], ['desc']), (item) => (
        <NoticeCard
          notice={item}
          key={item.id}
        />
      ))}
    </div>
  </div>
);
