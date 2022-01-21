import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { ContentCard } from '../components/cards/ContentCard';
import { TEXTS } from '../i18n';
import { Notices } from '../components/Notices';

function NoticePage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <ContentCard
          title={TEXTS.NOTICE}
          content={TEXTS.NOTICE_CONTENT}
          titleClassName="text-primary"
        />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <Notices />
      </SectionWrapper>
    </Layout>
  );
}

export default NoticePage;
