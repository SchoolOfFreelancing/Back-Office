import * as React from 'react';

import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { H6 } from '../i18n';

function SalePage({
  path, pageContext, location, uri,
}: PageProps) {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <H6>SalePage</H6>
        <H6>{path}</H6>
        <p>{JSON.stringify(location)}</p>
        <H6>{uri}</H6>
        <H6>{JSON.stringify(pageContext)}</H6>
      </SectionWrapper>
    </Layout>
  );
}

export default SalePage;
