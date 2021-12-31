import * as React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import { AppContext } from '../context';

function Layout({ children }) {
  return (
    <AppContext>
      <Header />
      <div className="pt-14 h-screen">
        <main>{children}</main>
        <footer
          className="bg-gray-200 p-14 justify-center flex"
        >
          <p className="text-black">
            ©
            {' '}
            {new Date().getFullYear()}
            , Built by
            {' '}
            Wagner Silva
          </p>
        </footer>
      </div>
    </AppContext>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
