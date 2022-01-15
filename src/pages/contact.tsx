import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionWrapper } from '../components/SectionWrapper';
import { GoogleMaps } from '../components/GoogleMaps';

function ContactPage() {
  return (
    <Layout>
      <Seo title="About" />
      <SectionWrapper className="bg-background">
        <GoogleMaps />
      </SectionWrapper>
    </Layout>
  );
}

export default ContactPage;
