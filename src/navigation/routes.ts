import { MessageKey, TEXTS } from '../i18n';

export const HOME = '/';
export const ABOUT = '/about';
export const CODE_OF_CONDUCT = '/code-of-conduct';
export const CONTACT = '/contact';
export const FAQ = '/faq';
export const GET_SUPPORT = '/get-support';
export const GETTING_START = '/getting-start';
export const HOW_TO_JOIN = '/how-to-join';
export const IMPRESSUM = '/impressum';
export const KNOW_YOUR_CUSTOMER = '/know-your-customer';
export const MENTOR = '/mentor';
export const NOTICE = '/notice';
export const PRIVACY_POLICY = '/privacy-policy';
export const QUICK_START = '/quick-start';
export const REFUND_POLICY = '/refund-policy';
export const RESEARCH = '/research';
export const SALE = '/sale';
export const SUCCESS_STORIES = '/success-stories';
export const TERMS_OF_USE = '/terms-of-use';
export const TRAINING = '/training';
export const TRAINING_RULES = '/training-rules';
export const WRONGDOING = '/wrongdoing';

export const ROUTES = {
  HOME,
  ABOUT,
  CODE_OF_CONDUCT,
  CONTACT,
  FAQ,
  GET_SUPPORT,
  GETTING_START,
  HOW_TO_JOIN,
  IMPRESSUM,
  KNOW_YOUR_CUSTOMER,
  MENTOR,
  NOTICE,
  PRIVACY_POLICY,
  QUICK_START,
  REFUND_POLICY,
  RESEARCH,
  SALE,
  SUCCESS_STORIES,
  TERMS_OF_USE,
  TRAINING,
  TRAINING_RULES,
  WRONGDOING,
};

export type RouteKey = keyof typeof ROUTES

export const ROUTES_NAME: Record<string, MessageKey> = {
  [ROUTES.HOME]: TEXTS.HOME,
  [ROUTES.ABOUT]: TEXTS.ABOUT_US,
  [ROUTES.CODE_OF_CONDUCT]: TEXTS.CODE_OF_CONDUCT,
  [ROUTES.CONTACT]: TEXTS.CONTACT,
  [ROUTES.FAQ]: TEXTS.FAQS,
  [ROUTES.GET_SUPPORT]: TEXTS.GET_SUPPORT,
  [ROUTES.GETTING_START]: TEXTS.GETTING_STARTED,
  [ROUTES.HOW_TO_JOIN]: TEXTS.HOW_TO_JOIN,
  [ROUTES.IMPRESSUM]: TEXTS.IMPRESSUM,
  [ROUTES.KNOW_YOUR_CUSTOMER]: TEXTS.KNOW_YOUR_CUSTOMER,
  [ROUTES.MENTOR]: TEXTS.OUR_MENTOR,
  [ROUTES.NOTICE]: TEXTS.NOTICE,
  [ROUTES.PRIVACY_POLICY]: TEXTS.PRIVACY_POLICY,
  [ROUTES.QUICK_START]: TEXTS.QUICK_START,
  [ROUTES.REFUND_POLICY]: TEXTS.REFUND_POLICY,
  [ROUTES.RESEARCH]: TEXTS.RESEARCH,
  [ROUTES.SUCCESS_STORIES]: TEXTS.SUCCESS_STORIES,
  [ROUTES.TERMS_OF_USE]: TEXTS.TERMS_OF_USE,
  [ROUTES.TRAINING]: TEXTS.TRAINING,
  [ROUTES.TRAINING_RULES]: TEXTS.TRAINING_RULES,
  [ROUTES.WRONGDOING]: TEXTS.WRONGDOING,
};
