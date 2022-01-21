import React from 'react';
import dayjs from 'dayjs';
import {
  P, H1, H6,
} from '../../i18n';
import { Notice } from '../../globals/Notice';
import { Link } from '../../navigation';

interface Props {
    notice: Notice
}

export const NoticeCard = ({
  notice,
}: Props) => (
  <Link to={notice.link} target="_blank" rel="noreferrer">
    <div
      className="flex flex-col md:flex-row hover:shadow-xl cursor-pointer w-full md:h-32"
    >
      <div className="justify-center flex flex-col w-full bg-primary md:w-32 p-4 items-center">
        <H1>{dayjs(notice.date).format('DD')}</H1>
        <div className="flex">
          <P>{dayjs(notice.date).format('MMM')}</P>
          <P>/</P>
          <P>{dayjs(notice.date).format('YYYY')}</P>
        </div>
      </div>
      <div className="justify-center flex flex-col w-full bg-gray-100 items-center p-8 gap-2">
        <H6 messageKey={notice.title} className="text-gray-600" />
        <P messageKey={notice.content} className="text-gray-500" />
      </div>
    </div>
  </Link>
);
