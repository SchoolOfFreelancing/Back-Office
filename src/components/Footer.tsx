import * as React from 'react';
import { P, Text, TEXTS } from '../i18n';
import { GLOBALS } from '../globals';
import { Link, ROUTES } from '../navigation';

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
          <Link to={ROUTES.ABOUT} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.WHAT_WE_DO} />
          </Link>
          <Link to={ROUTES.MENTOR} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.OUR_MENTOR} />
          </Link>
          <Link to={ROUTES.IMPRESSUM} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.IMPRESSUM} />
          </Link>
          <Link to={ROUTES.SUCCESS_STORIES} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.SUCCESS_STORIES} />
          </Link>
          <Link to={ROUTES.CONTACT} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.CONTACT_US} />
          </Link>
        </div>
        <div className="gap-10">
          <h1 className="my-3 text-3xl capitalize">
            <Text messageKey={TEXTS.FOLLOW_US} />
          </h1>
          <Link to={GLOBALS.INSTAGRAM} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.INSTAGRAM} />
          </Link>
          <Link to={GLOBALS.WHATSAPP} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.WHATSAPP} />
          </Link>
          <Link to={GLOBALS.PINTEREST} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.PINTEREST} />
          </Link>
          <Link to={GLOBALS.MEDIUM} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.MEDIUM} />
          </Link>
          <Link to={GLOBALS.TIK_TOK} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.TIK_TOK} />
          </Link>
        </div>
        <div className="gap-10">
          <h1 className="my-3 text-3xl capitalize">
            <Text messageKey={TEXTS.SUPPORT} />
          </h1>
          <Link to={ROUTES.FAQ} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.FAQS} />
          </Link>
          <Link to={ROUTES.WRONGDOING} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.WRONGDOING} />
          </Link>
          <Link to={ROUTES.GET_SUPPORT} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.GET_SUPPORT} />
          </Link>
          <Link to={ROUTES.GETTING_START} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.GETTING_STARTED} />
          </Link>
          <Link to={GLOBALS.RELEASE_STATUS} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.RELEASE_STATUS} />
          </Link>
        </div>
        <div className="gap-10">
          <h1 className="my-3 text-3xl capitalize">
            <Text messageKey={TEXTS.RECOMMEND} />
          </h1>
          <Link to={ROUTES.TERMS_OF_USE} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.TERMS_OF_USE} />
          </Link>
          <Link to={ROUTES.PRIVACY_POLICY} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.PRIVACY_POLICY} />
          </Link>
          <Link to={ROUTES.CODE_OF_CONDUCT} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.CODE_OF_CONDUCT} />
          </Link>
          <Link to={ROUTES.REFUND_POLICY} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.REFUND_POLICY} />
          </Link>
          <Link to={ROUTES.TRAINING_RULES} target="_blank" rel="noreferrer">
            <P className="my-1" messageKey={TEXTS.TRAINING_RULES} />
          </Link>
        </div>
      </div>
      <P>
        ©
        {' '}
        {new Date().getFullYear()}
        , Built by
        {' '}
        Wagner Silva
      </P>
      <P>{GLOBALS.VERSION}</P>
    </footer>
  );
}

export default Footer;
