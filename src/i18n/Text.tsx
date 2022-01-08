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

const P_DEFAULT_PROPS = {
  className: 'text-white',
  values: {},
};
export const P: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <p className={join([P_DEFAULT_PROPS.className, className], ' ')}>
    <Text {...props} />
  </p>
);

const H4_DEFAULT_PROPS = {
  className: 'text-white text-3xl',
  values: {},
};
export const H4: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <h4 className={join([H4_DEFAULT_PROPS.className, className], ' ')}>
    <Text {...props} />
  </h4>
);
const H1_DEFAULT_PROPS = {
  className: 'text-white text-6xl',
  values: {},
};

export const H1: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <h1 className={join([H1_DEFAULT_PROPS.className, className], ' ')}>
    <Text {...props} />
  </h1>
);

Text.defaultProps = {
  values: {},
};

P.defaultProps = P_DEFAULT_PROPS;
H4.defaultProps = H4_DEFAULT_PROPS;
H1.defaultProps = H1_DEFAULT_PROPS;
