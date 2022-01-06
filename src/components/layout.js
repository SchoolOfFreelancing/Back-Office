import * as React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import { AppContext } from '../context';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <AppContext>
      <Header />
      <div className="pt-14 h-screen bg-white">
        <main>{children}</main>
        <Footer />
      </div>
    </AppContext>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
