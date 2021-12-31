import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: '1.45rem' }}
      />
      <p />
    </Layout>
  );
}

export default IndexPage;
