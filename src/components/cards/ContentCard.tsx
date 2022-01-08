import React from 'react';
import { MessageKey, P, H4 } from '../../i18n';

interface Props {
    title: MessageKey
    content: MessageKey
    titleClassName?: string
    contentClassName?: string
    children?: React.ReactNode
}

export const ContentCard = ({
  title, content, titleClassName, contentClassName, children,
}: Props) => (
  <div className="p-8">
    <H4 messageKey={title} className={titleClassName} />
    <P messageKey={content} className={contentClassName} />
    {children}
  </div>
);

ContentCard.defaultProps = {
  titleClassName: '',
  contentClassName: '',
  children: null,
};
