import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { H2, H6, TEXTS } from '../i18n';
import { ContentCard } from '../components/cards/ContentCard';
import { ItemsToSell } from '../components/ItemsToSell';
import { PrimaryCard } from '../components/cards/PrimaryCard';

function TrainingPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <ContentCard
          title={TEXTS.HANDS_ON_TRAINING}
          content={TEXTS.WE_WILL_MENTOR}
          titleClassName="text-primary font-bold"
        />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100">
        <ItemsToSell />
      </SectionWrapper>
      <SectionWrapper className="bg-primary justify-center">
        <PrimaryCard messageKey={TEXTS.CONVERT_YOUR_IDEAL} />
      </SectionWrapper>
    </Layout>
  );
}

export default TrainingPage;
