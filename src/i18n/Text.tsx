import React, { JSXElementConstructor, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { join } from 'lodash';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import I18N from './en.json';
import { MessageKey } from './Context';
import { TEXTS } from './texts';
import { joinClassName } from '../components/elements/utils';

interface Props<V extends Record<string, any> | undefined = undefined> {
  messageKey?: MessageKey;
  values?: V
  children?: React.ReactNode
}
export const Text: React.FC<Props<Record<string, any>>> = <
    V extends Record<string, any> | undefined = undefined>(
    { messageKey, values, children }: Props<V>,
  ): React.ReactElement => {
  if (children) return children as ReactElement<any, string | JSXElementConstructor<any>>;
  return (
    <FormattedMessage
      id={messageKey || TEXTS.NO_MESSAGE_ID}
      defaultMessage={I18N[messageKey || TEXTS.NO_MESSAGE_ID]}
      values={values}
    />
  );
};

interface TypographyProps extends Props<Record<string, any>> {
  className?: string;
}

const P_DEFAULT_PROPS = {
  className: 'text-white',
  values: {},
  messageKey: TEXTS.NO_MESSAGE_ID,
  children: null,
};
export const P: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <p className={join([P_DEFAULT_PROPS.className, className], ' ')}>
    <Text {...props} />
  </p>
);

const H4_DEFAULT_PROPS = {
  className: 'text-white text-3xl',
  values: {},
  messageKey: TEXTS.NO_MESSAGE_ID,
  children: null,
};
export const H4: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <h4 className={join([H4_DEFAULT_PROPS.className, className], ' ')}>
    <Text {...props} />
  </h4>
);
const H1_DEFAULT_PROPS = {
  className: 'text-white text-6xl',
  values: {},
  messageKey: TEXTS.NO_MESSAGE_ID,
  children: null,
};
const H2_DEFAULT_PROPS = {
  className: 'text-white text-5xl',
  values: {},
  messageKey: TEXTS.NO_MESSAGE_ID,
  children: null,
};

const H6_DEFAULT_PROPS = {
  className: 'text-white text-xl',
  values: {},
  messageKey: TEXTS.NO_MESSAGE_ID,
  children: null,
};
const CODE_DEFAULT_PROPS = {
  className: '',
  values: {},
  messageKey: TEXTS.NO_MESSAGE_ID,
  children: null,
};

export const H1: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <h1 className={joinClassName(H1_DEFAULT_PROPS, className)}>
    <Text {...props} />
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <h2 className={joinClassName(H2_DEFAULT_PROPS, className)}>
    <Text {...props} />
  </h2>
);

export const H6: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <h2 className={joinClassName(H6_DEFAULT_PROPS, className)}>
    <Text {...props} />
  </h2>
);

export const Code: React.FC<TypographyProps> = ({ ...props }: TypographyProps) => (
  <SyntaxHighlighter language="javascript" style={dark}>
    <Text {...props} />
  </SyntaxHighlighter>
);

Text.defaultProps = {
  values: {},
  messageKey: TEXTS.NO_MESSAGE_ID,
  children: null,
};

P.defaultProps = P_DEFAULT_PROPS;
H4.defaultProps = H4_DEFAULT_PROPS;
H1.defaultProps = H1_DEFAULT_PROPS;
H2.defaultProps = H2_DEFAULT_PROPS;
H6.defaultProps = H6_DEFAULT_PROPS;
Code.defaultProps = CODE_DEFAULT_PROPS;
