import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { ContentCard } from '../components/cards/ContentCard';
import { TEXTS, H1 } from '../i18n';
import { TrainingsCard } from '../components/cards/TrainingsCard';

function AboutPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <ContentCard
          title={TEXTS.ABOUT_US}
          content={TEXTS.WE_WILL_MENTOR}
          titleClassName="text-primary font-bold"
        />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100">
        <ContentCard
          title={TEXTS.WHAT_WE_DO}
          content={TEXTS.WE_WILL_MENTOR}
          titleClassName="text-black text-2xl"
          contentClassName="text-gray-500"
        >
          <TrainingsCard />
        </ContentCard>
      </SectionWrapper>
      <SectionWrapper className="bg-primary justify-center">
        <H1 messageKey={TEXTS.WORK_EARN_BEYOND_YOUR_IMMIGRATION} className="font-bold" />
      </SectionWrapper>
      <p />
    </Layout>
  );
}

export default AboutPage;
