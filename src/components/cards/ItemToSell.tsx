import React from 'react';
import {
  MessageKey, P, H6,
} from '../../i18n';

interface Props {
    Icon: React.FC<{ size: string}>;
    title: MessageKey;
    content: MessageKey;
}
export const ItemToSell = ({ Icon, content, title }: Props) => (
  <div className="border p-10 flex flex-col gap-2 hover:shadow-xl cursor-pointer w-full">
    <div className="justify-center flex">
      <Icon size="12em" />
    </div>
    <div className="flex items-center gap-1 my-2">
      <H6 className="text-background font-bold">$</H6>
      <H6 messageKey={title} className="text-background font-bold" />
    </div>
    <P messageKey={content} className="text-gray-600" />
  </div>
);
