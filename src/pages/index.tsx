import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { ContentCard } from '../components/cards/ContentCard';
import { TEXTS } from '../i18n';
import { ItemsToSell } from '../components/ItemsToSell';

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <SectionWrapper className="bg-background">
        <ContentCard
          title={TEXTS.ABOUT_US}
          content={TEXTS.WE_WILL_MENTOR}
          titleClassName="text-primary font-bold"
        />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100">
        <ItemsToSell />
      </SectionWrapper>
      <p />
    </Layout>
  );
}

export default IndexPage;
