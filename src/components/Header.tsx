import * as React from 'react';
import {
  HOME, HeaderLink, HeaderMainLink, ROUTES,
} from '../navigation';
import { TEXTS } from '../i18n';
import { GLOBALS } from '../globals';

function Header() {
  return (
    <header className="fixed w-full z-50 bg-white">
      <div className="p-4 bg-gray-200 items-center flex justify-between shadow">
        <HeaderMainLink to={HOME} messageKey={TEXTS.HOME} />
        <div className="flex gap-6">
          <HeaderLink to={ROUTES.ABOUT} messageKey={TEXTS.WHAT_WE_DO} />
          <HeaderLink to={ROUTES.TRAINING} messageKey={TEXTS.TRAINING} />
          <HeaderLink to={GLOBALS.TRAINEE} messageKey={TEXTS.TRAINEE} target="_blank" />
          <HeaderLink to={HOME} messageKey={TEXTS.PAGES} />
          <HeaderLink to={ROUTES.CONTACT} messageKey={TEXTS.CONTACT} />
        </div>
      </div>
    </header>
  );
}

export default Header;
