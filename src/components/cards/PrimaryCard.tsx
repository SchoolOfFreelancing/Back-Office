import React from 'react';
import {
  MessageKey, H2,
} from '../../i18n';

interface Props {
    messageKey: MessageKey
}

export const PrimaryCard = ({
  messageKey,
}: Props) => (
  <div className="p-10">
    <H2 messageKey={messageKey} className="font-extrabold" />
  </div>
);
