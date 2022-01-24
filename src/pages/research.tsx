import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { TEXTS } from '../i18n';
import { PrimaryCard } from '../components/cards/PrimaryCard';
import { Researches } from '../components/Researches';

function ResearchPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-white">
        <Researches />
      </SectionWrapper>
      <SectionWrapper className="bg-primary justify-center">
        <PrimaryCard messageKey={TEXTS.JOIN_OUR_TRAINING_FROM_ANYWHERE_USING_ANYDESK} />
      </SectionWrapper>
    </Layout>
  );
}

export default ResearchPage;
