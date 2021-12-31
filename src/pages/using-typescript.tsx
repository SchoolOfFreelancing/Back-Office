import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const UsingTypescript: React.FC = () => (
  <Layout>
    <Seo title="Using TypeScript" />
    <h1>Gatsby supports TypeScript by default!</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default UsingTypescript;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
