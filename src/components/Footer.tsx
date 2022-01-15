import * as React from 'react';
import { P, Text, TEXTS } from '../i18n';
import { GLOBALS } from '../globals';

function Footer() {
  return (
    <footer
      className="bg-background p-14 justify-center text-white"
    >
      <div
        className="flex justify-end gap-14"
      >
        <div className="gap-10">
          <h1 className="my-3 text-3xl capitalize">
            <Text messageKey={TEXTS.COMPANY} />
          </h1>
          <P className="my-1" messageKey={TEXTS.WHAT_WE_DO} />
          <P className="my-1" messageKey={TEXTS.OUR_MENTOR} />
          <P className="my-1" messageKey={TEXTS.IMPRESSUM} />
          <P className="my-1" messageKey={TEXTS.SUCCESS_STORIES} />
          <P className="my-1" messageKey={TEXTS.CONTACT_US} />
        </div>
        <div className="gap-10">
          <h1 className="my-3 text-3xl capitalize">
            <Text messageKey={TEXTS.FOLLOW_US} />
          </h1>
          <a href={GLOBALS.INSTAGRAM} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.INSTAGRAM} />
          </a>
          <a href={GLOBALS.WHATSAPP} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.WHATSAPP} />
          </a>
          <a href={GLOBALS.PINTEREST} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.PINTEREST} />
          </a>
          <a href={GLOBALS.MEDIUM} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.MEDIUM} />
          </a>
          <a href={GLOBALS.TIK_TOK} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.TIK_TOK} />
          </a>
        </div>
        <div className="gap-10">
          <h1 className="my-3 text-3xl capitalize">
            <Text messageKey={TEXTS.SUPPORT} />
          </h1>
          <P className="my-1" messageKey={TEXTS.FAQS} />
          <P className="my-1" messageKey={TEXTS.WRONGDOING} />
          <P className="my-1" messageKey={TEXTS.GET_SUPPORT} />
          <P className="my-1" messageKey={TEXTS.GETTING_STARTED} />
          <P className="my-1" messageKey={TEXTS.RELEASE_STATUS} />
        </div>
        <div className="gap-10">
          <h1 className="my-3 text-3xl capitalize">
            <Text messageKey={TEXTS.RECOMMEND} />
          </h1>
          <P className="my-1" messageKey={TEXTS.TERMS_OF_USE} />
          <P className="my-1" messageKey={TEXTS.PRIVACY_POLICY} />
          <P className="my-1" messageKey={TEXTS.CODE_OF_CONDUCT} />
          <P className="my-1" messageKey={TEXTS.REFUND_POLICY} />
          <P className="my-1" messageKey={TEXTS.TRAINING_RULES} />
        </div>
      </div>
      <p>
        ©
        {' '}
        {new Date().getFullYear()}
        , Built by
        {' '}
        Wagner Silva
      </p>
    </footer>
  );
}

export default Footer;
