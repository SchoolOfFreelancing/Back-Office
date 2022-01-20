import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { H6, P, TEXTS } from '../i18n';
import { ContentCard } from '../components/cards/ContentCard';
import { PrimaryCard } from '../components/cards/PrimaryCard';

function KnowYourCustomerPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <ContentCard
          content={TEXTS.KNOW_YOUR_CUSTOMER_CONTENT}
          title={TEXTS.KNOW_YOUR_CUSTOMER_TITLE}
          titleClassName="text-primary"
        />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100">
        <div>
          <div className="flex flex-col gap-2">
            <H6 messageKey={TEXTS.VERIFICATION_PROCESS_FOR_ENROLLMENT} className="text-black font-bold" />
            <P messageKey={TEXTS.TO_ENSURE_THE_SAFETY_AND_SECURITY} className="text-gray-600 font-bold" />
            <div className="flex flex-col gap-4 my-4">
              <P messageKey={TEXTS.PAYMENT_PROOF_OF_DEPOSIT} className="text-gray-400" />
              <P messageKey={TEXTS.ANY_GOVERNMENT_ISSUED} className="text-gray-400" />
              <P messageKey={TEXTS.CERTIFICATION_FOR_OWNERSHIP_OF_A_BANK} className="text-gray-400" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <P messageKey={TEXTS.WE_ACCEPT_THE_FOLLOWING} className="text-gray-600 font-bold" />
            <div className="flex flex-col gap-4 my-4">
              <P messageKey={TEXTS.NATIONAL_ID} className="text-gray-400" />
              <P messageKey={TEXTS.DRIVERS_LICENSE} className="text-gray-400" />
              <P messageKey={TEXTS.PASSPORT} className="text-gray-400" />
            </div>
            <P messageKey={TEXTS.NOTE_ACCEPTED_DOCUMENTS} className="text-gray-600 font-bold" />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-primary justify-center">
        <PrimaryCard messageKey={TEXTS.LEVEL_UP_YOUR_LINUX_FREELANCE} />
      </SectionWrapper>
    </Layout>
  );
}

export default KnowYourCustomerPage;
