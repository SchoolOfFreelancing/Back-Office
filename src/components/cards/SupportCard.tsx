import React from 'react';
import {
  P, H6,
} from '../../i18n';

import { Support } from '../../globals/Support';
import { Link } from '../../navigation';

interface Props {
    support: Support
}

export const SupportCard = ({
  support,
}: Props) => {
  const {
    Icon, content, title, preTitle, link,
  } = support;
  return (
    <Link to={link} target="_blank" rel="noreferrer">
      <div
        className="p-10 flex flex-col gap-2 hover:shadow-xl cursor-pointer w-full"
      >
        <div className="justify-center flex w-full">
          <Icon size="10em" />
        </div>
        <P messageKey={preTitle} className="text-gray-600 text-xs" />
        <div className="flex items-center gap-1 mt-4 ">
          <H6 messageKey={title} className="text-background font-extrabold" />
        </div>
        <P messageKey={content} className="text-gray-600" />
      </div>
    </Link>

  );
};
