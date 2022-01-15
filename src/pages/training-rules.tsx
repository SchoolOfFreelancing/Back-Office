import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { H6 } from '../i18n';

function TrainingRulesPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <H6>TrainingRulesPage</H6>
      </SectionWrapper>
    </Layout>
  );
}

export default TrainingRulesPage;
