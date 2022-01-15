import { FaBuilding, FcLinux, IoBriefcase } from 'react-icons/all';
import pkg from '../../package.json';
import { TEXTS } from '../i18n';
import { ItemToSell } from './ItemToSell';

export const GLOBALS = {
  INSTAGRAM: 'https://www.instagram.com/schooloffreelancing/',
  WHATSAPP: 'https://wa.me/8801748973769',
  PINTEREST: 'https://www.pinterest.com/schooloffreelancing/',
  MEDIUM: 'https://medium.com/@schooloffreelancing',
  TIK_TOK: 'https://www.tiktok.com/@schooloffreelancing',
  RELEASE_STATUS: 'https://github.com/SchoolOfFreelancing/Back-Office/releases',
  TRAINEE: 'https://github.com/orgs/SchoolOfFreelancing/people',
  VERSION: pkg.version,
};

const LINUX_FREELANCING_TRAINING = new ItemToSell({
  content: TEXTS.LINUX_FREELANCING_TRAINING_CONTENT,
  title: TEXTS.LINUX_FREELANCING_TRAINING,
  Icon: FcLinux,
});
const CORPORATE_FREELANCING_TRAINING = new ItemToSell({
  content: TEXTS.CORPORATE_FREELANCING_TRAINING_CONTENT,
  title: TEXTS.CORPORATE_FREELANCING_TRAINING,
  Icon: FaBuilding,
});
const STARTUP_DEVELOPMENT_TRAINING = new ItemToSell({
  content: TEXTS.STARTUP_DEVELOPMENT_TRAINING_CONTENT,
  title: TEXTS.STARTUP_DEVELOPMENT_TRAINING,
  Icon: IoBriefcase,
});

export const ITEMS_TO_SELL = [
  LINUX_FREELANCING_TRAINING,
  CORPORATE_FREELANCING_TRAINING,
  STARTUP_DEVELOPMENT_TRAINING,
];
