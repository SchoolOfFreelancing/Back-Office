import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { TEXTS } from '../i18n';
import { PrimaryCard } from '../components/cards/PrimaryCard';
import { Mentors } from '../components/Mentors';

function MentorPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-white">
        <Mentors />
      </SectionWrapper>
      <SectionWrapper className="bg-primary justify-center">
        <PrimaryCard messageKey={TEXTS.EXCLUSIVE_PROFESSIONAL_TRAINING} />
      </SectionWrapper>
    </Layout>
  );
}

export default MentorPage;
