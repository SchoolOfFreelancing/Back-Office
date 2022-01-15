import React from 'react';
import { MessageKey, P, H4 } from '../../i18n';
import { joinClassName } from '../elements/utils';

interface Props {
    title: MessageKey
    content: MessageKey
    titleClassName?: string
    contentClassName?: string
    children?: React.ReactNode
}

const DEFAULT_PROPS = {
  titleClassName: 'font-extrabold',
  contentClassName: '',
  children: null,
};

export const ContentCard = ({
  title, content, titleClassName, contentClassName, children,
}: Props) => (
  <div className="p-8">
    <H4
      messageKey={title}
      className={joinClassName(DEFAULT_PROPS.titleClassName, titleClassName)}
    />
    <P messageKey={content} className={contentClassName} />
    {children}
  </div>
);

ContentCard.defaultProps = DEFAULT_PROPS;
