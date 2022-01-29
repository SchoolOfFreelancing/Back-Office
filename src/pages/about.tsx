import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { ContentCard } from '../components/cards/ContentCard';
import { TEXTS } from '../i18n';
import { TrainingsCard } from '../components/cards/TrainingsCard';
import { PrimaryCard } from '../components/cards/PrimaryCard';

function AboutPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <ContentCard
          title={TEXTS.ABOUT_US}
          content={TEXTS.WE_WILL_MENTOR}
          titleClassName="text-primary font-extrabold"
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
        <PrimaryCard messageKey={TEXTS.WORK_EARN_BEYOND_YOUR_IMMIGRATION} />
      </SectionWrapper>
      <p />
    </Layout>
  );
}

export default AboutPage;
