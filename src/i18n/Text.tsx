// eslint-disable-next-line max-classes-per-file
import React from 'react';
import { useIntl } from 'react-intl';
import { join } from 'lodash';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactHtmlParser from 'react-html-parser';

import I18N from './en.json';
import { MessageKey } from './Context';
import { TEXTS } from './texts';
import { joinClassName } from '../components/elements/utils';

class Props<V extends Record<string, any> | undefined = undefined> {
  messageKey?: MessageKey;

  values?: V

  children?: string | null
}
// @ts-ignore
export const Text: React.FC<Props<Record<string, any>>> = <
    V extends Record<string, any> | undefined = undefined>(
    { messageKey, values, children }: Props<V>,
  ): React.ReactElement<any, string | React.JSXElementConstructor<any>>[] => {
  const intl = useIntl();

  const itemToRender: string = children || intl.formatMessage({
    defaultMessage: I18N[messageKey || TEXTS.NO_MESSAGE_ID],
    id: messageKey,
  }, values);

  return ReactHtmlParser(itemToRender);
};

class TypographyProps extends Props<Record<string, any>> {
  className?: string;

  constructor(params: Partial<TypographyProps> = {}) {
    super();

    this.values = {};

    this.messageKey = TEXTS.NO_MESSAGE_ID;

    this.children = null;
    // eslint-disable-next-line no-constructor-return
    return {
      ...this,
      ...params,
    };
  }
}

const P_DEFAULT_PROPS = {
  className: 'text-white',
  values: {},
  messageKey: TEXTS.NO_MESSAGE_ID,
  children: null,
};
export const P: React.FC<TypographyProps> = ({
  className, ...props
}: TypographyProps) => (
  <p className={join([P_DEFAULT_PROPS.className, className], ' ')}>
    <Text {...props} />
  </p>
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

const H3_DEFAULT_PROPS = {
  className: 'text-white text-4xl',
  values: {},
  messageKey: TEXTS.NO_MESSAGE_ID,
  children: null,
};

const H4_DEFAULT_PROPS = new TypographyProps({
  className: 'text-white text-3xl',
});
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
export const H3: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <h3 className={joinClassName(H3_DEFAULT_PROPS, className)}>
    <Text {...props} />
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ className, ...props }: TypographyProps) => (
  <h4 className={joinClassName(H4_DEFAULT_PROPS.className, className)}>
    <Text {...props} />
  </h4>
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
H3.defaultProps = H3_DEFAULT_PROPS;
H6.defaultProps = H6_DEFAULT_PROPS;
Code.defaultProps = CODE_DEFAULT_PROPS;
