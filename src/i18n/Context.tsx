import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import en from './en.json';

interface I18nProviderProps {
    children: React.ReactNode
}

export type Messages = Record<keyof typeof en, string>
export type MessageKey = keyof Messages;
export type Locale = 'en';

export const LOCALES: Record<string, Locale> = {
  EN: 'en',
};

function useI18nState() {
  const [messages] = useState<Messages>(en);
  const [locale] = useState<Locale>(LOCALES.EN);
  // We can have a setLocale and a setMessages here later
  // in order to set the app messages depending on the user language
  return {
    messages,
    locale,
  };
}
export const I18nProvider = ({ children }: I18nProviderProps) => {
  const { messages, locale } = useI18nState();
  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale={LOCALES.EN}>
      {children}
    </IntlProvider>
  );
};
