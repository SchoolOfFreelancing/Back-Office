import React from 'react';
import { I18nProvider } from '../i18n';

interface AppContextProps {
    children: React.ReactNode
}

export const AppContext = ({ children }: AppContextProps) => (
  <I18nProvider>
    {children}
  </I18nProvider>
);
