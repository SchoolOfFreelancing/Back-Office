import React from 'react';
import { FormattedMessage } from 'react-intl';
import { join } from 'lodash';
import I18N from './en.json';
import { MessageKey } from './Context';

interface Props<V extends Record<string, any> | undefined = undefined> {
  messageKey: MessageKey;
  values?: V
}
export const Text: React.FC<Props<Record<string, any>>> = <
    V extends Record<string, any> | undefined = undefined>(
    { messageKey, values }: Props<V>,
  ): React.ReactElement => (
    <FormattedMessage
      id={messageKey || 'NO_MESSAGE_ID'}
      defaultMessage={I18N[messageKey]}
      values={values}
    />
  );

interface TypographyProps extends Props<Record<string, any>> {
  className?: string;
}
export const P: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <p className={join([P.defaultProps?.className, className], ' ')}>
    <Text {...props} />
  </p>
);

Text.defaultProps = {
  values: {},
};

P.defaultProps = {
  values: {},
  className: 'text-white',
};
