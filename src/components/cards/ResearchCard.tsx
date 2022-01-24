import React from 'react';
import {
  P, H6,
} from '../../i18n';
import { Research } from '../../globals/Research';

interface Props {
    research: Research
}

export const ResearchCard = ({
  research,
}: Props) => {
  const { Icon, content, title } = research;
  return (
    <div
      className="border p-10 flex flex-col gap-2 hover:shadow-xl cursor-pointer w-full"
    >
      <div className="justify-center flex w-full">
        <Icon size="10em" />
      </div>
      <div className="flex items-center gap-1 mt-4 ">
        <H6 messageKey={title} className="text-background font-extrabold" />
      </div>
      <P messageKey={content} className="text-gray-600" />
    </div>
  );
};
