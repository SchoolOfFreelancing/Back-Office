import * as React from 'react';
import { HOME, HeaderLink, HeaderMainLink } from '../navigation';
import { TEXTS } from '../i18n';

function Header() {
  return (
    <header className="fixed w-full z-50 bg-white">
      <div className="p-4 bg-gray-200 items-center flex justify-between shadow">
        <HeaderMainLink to={HOME} messageKey={TEXTS.HOME} />
        <div className="flex gap-6">
          <HeaderLink to={HOME} messageKey={TEXTS.WHAT_WE_DO} />
          <HeaderLink to={HOME} messageKey={TEXTS.TRAINING} />
          <HeaderLink to={HOME} messageKey={TEXTS.TRAINEE} />
          <HeaderLink to={HOME} messageKey={TEXTS.PAGES} />
          <HeaderLink to={HOME} messageKey={TEXTS.CONTACT} />
        </div>
      </div>
    </header>
  );
}

export default Header;
