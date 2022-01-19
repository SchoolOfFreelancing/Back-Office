import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { GoogleMaps } from '../components/GoogleMaps';
import { PrimaryCard } from '../components/cards/PrimaryCard';
import { P, TEXTS } from '../i18n';
import { Link } from '../navigation';
import { GLOBALS } from '../globals';

function ContactPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <GoogleMaps />
      </SectionWrapper>
      <SectionWrapper className="bg-primary items-center flex-col">
        <PrimaryCard messageKey={TEXTS.FILL_UP} />
        <Link to={GLOBALS.GOOGLE_FORM_LINK} target="_blank" rel="noreferrer">
          <P className="my-1" messageKey={TEXTS.OPEN_THE_FORM} />
        </Link>
      </SectionWrapper>
    </Layout>
  );
}

// https://docs.google.com/forms/d/e/1FAIpQLSegVfKLtEPKMX7IEo6qxiPivR-adO_vJCxEpk_NeRAKlWRNPw/viewform
export default ContactPage;
