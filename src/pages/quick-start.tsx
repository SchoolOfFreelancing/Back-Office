import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { TEXTS } from '../i18n';
import { ContentCard } from '../components/cards/ContentCard';
import { Supports } from '../components/Supports';

function QuickStartPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <ContentCard
          title={TEXTS.QUICK_START_TEAM}
          content={TEXTS.WE_PRESENT_OUR_BEST_DEVELOPER_TO_WORK}
          titleClassName="text-primary font-extrabold"
        />
      </SectionWrapper>
      <SectionWrapper className="bg-white">
        <Supports />
      </SectionWrapper>
    </Layout>
  );
}

export default QuickStartPage;
