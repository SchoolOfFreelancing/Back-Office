import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { ItemsToSell } from '../components/ItemsToSell';
import { HomeCarousel } from '../components/HomeCarousel';

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <SectionWrapper className="bg-background">
        <HomeCarousel />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100">
        <ItemsToSell />
      </SectionWrapper>
      <p />
    </Layout>
  );
}

export default IndexPage;
