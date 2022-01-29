import React from 'react';
import { navigate } from 'gatsby';
import {
  MessageKey, P, H6,
} from '../../i18n';
import { ROUTES } from '../../navigation';

interface Props {
    Icon: React.FC<{ size: string}>;
    title: MessageKey;
    content: MessageKey;
    id: string
}
function getOnClick(id: string) {
  return () => navigate(`${ROUTES.SALE}/${id}`, { state: { id } });
}

export const ItemToSell = ({
  Icon, content, title, id,
}: Props) => (
  <button
    className="border p-10 flex flex-col gap-2 hover:shadow-xl cursor-pointer w-full"
    onClick={getOnClick(id)}
    type="button"
  >
    <div className="justify-center flex w-full">
      <Icon size="12em" />
    </div>
    <div className="flex items-center gap-1 mt-2">
      <H6 messageKey={title} className="text-background font-bold" />
    </div>
    <P messageKey={content} className="text-gray-600 text-left" />
  </button>
);
