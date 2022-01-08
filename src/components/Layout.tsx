import * as React from 'react';

import Header from './Header';
import { AppContext } from '../context';
import Footer from './Footer';

function Layout({ children }: React.PropsWithChildren<any>) {
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

export default Layout;
