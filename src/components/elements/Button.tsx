import React, { MouseEventHandler } from 'react';
import { MessageKey, P } from '../../i18n';
import { joinClassName } from './utils';

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>;
    messageKey: MessageKey
    className?:string
}

const DEFAULT_PROPS = {
  className: 'flex bg-background font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-primary mr-6',
};
export const Button = ({ onClick, messageKey, className }: Props) => (
  <button onClick={onClick} type="button" className={joinClassName(DEFAULT_PROPS, className)}>
    <P messageKey={messageKey} />
  </button>
);

Button.defaultProps = DEFAULT_PROPS;
