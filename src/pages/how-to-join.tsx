import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { P, TEXTS } from '../i18n';
import { ContentCard } from '../components/cards/ContentCard';
import { PrimaryCard } from '../components/cards/PrimaryCard';

function HowToJoinPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <ContentCard
          title={TEXTS.HOW_TO_JOIN}
          content={TEXTS.YOU_CAN_JOIN}
          titleClassName="text-primary font-extrabold"
        />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100 flex-col gap-4">
        <P className="text-gray-500 text-justify" messageKey={TEXTS.IF_YOU_ARE_DETERMINATE} />
        <P className="text-gray-500 text-justify" messageKey={TEXTS.DURING_INTERVIEW} />
        <P className="text-gray-500 text-justify" messageKey={TEXTS.AFTER_RECEIVE_INVITATION} />
        <P className="text-gray-500 text-justify" messageKey={TEXTS.WE_ACCEPT_BKASH} />
      </SectionWrapper>
      <SectionWrapper className="bg-primary items-center flex-col">
        <PrimaryCard messageKey={TEXTS.WORK_FREELY_WITHOUT_DEPENDENCY} />
      </SectionWrapper>
    </Layout>
  );
}

export default HowToJoinPage;
