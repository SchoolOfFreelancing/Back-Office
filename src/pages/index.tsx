import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="bg-background h-screen p-14 justify-center flex">
        <h1 className="text-primary">Hello School of Freelancing</h1>
      </div>
      <div className="bg-gray-100 h-screen p-14 justify-center flex">
        <h1 className="text-background">Hello School of Freelancing</h1>
      </div>
      <p />
    </Layout>
  );
}

export default IndexPage;
