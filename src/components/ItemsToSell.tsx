import React, { useCallback, useMemo } from 'react';
import { navigate } from 'gatsby';
import { map, take } from 'lodash';
import { ItemToSell } from './cards/ItemToSell';
import { TEXTS } from '../i18n';
import { Button } from './elements';
import { ROUTES } from '../navigation';
import { ITEMS_TO_SELL } from '../globals';

interface ItemsToSellProps {
    showOnly?: number | 'ALL'
}

export const ItemsToSell: React.FC<ItemsToSellProps> = ({ showOnly }: ItemsToSellProps) => {
  const items = useMemo(() => {
    if (showOnly === 'ALL') return ITEMS_TO_SELL;
    return take(ITEMS_TO_SELL, showOnly);
  }, []);
  return (
    <div className="flex w-full flex-col">
      {showOnly !== 'ALL' && (
        <div className="flex justify-end mb-2 w-full">
          <Button onClick={() => navigate(ROUTES.TRAINING)} messageKey={TEXTS.SEE_ALL} />
        </div>
      )}
      <div className="flex gap-10 justify-center items-center flex-col md:flex-row">
        {map(items, (item) => (
          <ItemToSell
            content={item.content}
            Icon={item.Icon}
            title={item.title}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

ItemsToSell.defaultProps = {
  showOnly: 'ALL',
};
