import { FaBuilding, FcLinux, IoBriefcase } from 'react-icons/all';
import pkg from '../../package.json';
import { TEXTS } from '../i18n';
import { ItemToSell } from './ItemToSell';
import { Mentor } from './Mentor';
import {
  JAMIL, KAWSER, MASUM, RAHIM,
} from '../images';

export const GLOBALS = {
  INSTAGRAM: 'https://www.instagram.com/schooloffreelancing/',
  WHATSAPP: 'https://wa.me/8801748973769',
  PINTEREST: 'https://www.pinterest.com/schooloffreelancing/',
  MEDIUM: 'https://medium.com/@schooloffreelancing',
  TIK_TOK: 'https://www.tiktok.com/@schooloffreelancing',
  GIT_HUB: 'https://github.com/SchoolOfFreelancing',
  TRELLO: 'https://trello.com/b/RFo7GNdY/school-of-freelancing',
  YOUTUBE: 'https://www.youtube.com/channel/UCVPPcG_DnwE_L1YgiIGsSIA?sub_confirmation=1',
  LINKEDIN: 'https://www.linkedin.com/company/school-of-freelancing/',
  FACEBOOK: 'https://www.facebook.com/SchoolOfFreelancing/',
  TWITTER: 'https://twitter.com/SchoolOfFreelan',
  TUMBLR: 'https://www.tumblr.com/blog/schooloffreelancing',
  RELEASE_STATUS: 'https://github.com/SchoolOfFreelancing/Back-Office/releases',
  TRAINEE: 'https://github.com/orgs/SchoolOfFreelancing/people',
  VERSION: pkg.version,
  PHONE_NUMBER: 'tel:+8801748973769',
  EMAIL: 'mailto:office@schooloffreelancing.com',
  BUSINESS_ROOT_TEXT: '23°27\'29.2"N 91°11\'15.7"E',
  GOOGLE_FORM_LINK: 'https://docs.google.com/forms/d/e/1FAIpQLSegVfKLtEPKMX7IEo6qxiPivR-adO_vJCxEpk_NeRAKlWRNPw/viewform',
  ENROLL_LINK: 'https://docs.google.com/forms/d/e/1FAIpQLScjHsrKXFrwuF_W_5IZ24thsD3hNcyhakDJm5Rc2DVIuf3gBQ/viewform',
  DMCA_IMAGE: 'https://images.dmca.com/Badges/dmca-badge-w150-5x1-06.png?ID=2eb33dd8-974c-4cdd-9fc1-b1ea1e1ef881',
  DMCA_LINK: 'https://www.dmca.com/Protection/Status.aspx?ID=2eb33dd8-974c-4cdd-9fc1-b1ea1e1ef881&refurl=https://www.schooloffreelancing.com/',
  MAPS_LINK: 'https://www.google.com/maps/place/School+Of+Freelancing/@23.4580657,91.1855088,17z/data=!3m1!4b1!4m5!3m4!1s0x37547f3bd4643e87:0xc2c3e3301a902004!8m2!3d23.4580657!4d91.1876975',
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

const MENTOR_MASUM = new Mentor({
  name: 'Masum',
  image: MASUM,
  description: TEXTS.MASUM_DESCRIPTION,
  facebook: 'https://www.facebook.com/WebMasum/',
  github: 'https://github.com/UbuntuEvangelist',
  linkedin: 'https://www.linkedin.com/in/linuxgun/',
  trello: 'https://trello.com/masumchowdhury/activity',
});

const MENTOR_DRJAMIL = new Mentor({
  name: 'Dr. Jamil',
  image: JAMIL,
  description: TEXTS.DRJAMIL_DESCRIPTION,
  facebook: 'https://www.facebook.com/jamil.imam.927',
});

const MENTOR_BARRISTER = new Mentor({
  name: 'Barrister Khandoker Kawsar',
  image: KAWSER,
  description: TEXTS.BARRISTER_DESCRIPTION,
  facebook: 'https://www.facebook.com/khandoker.kawsar',
});

const MENTOR_RAHIM = new Mentor({
  name: 'Rahim',
  image: RAHIM,
  description: TEXTS.RAHIM_DESCRIPTION,
  facebook: 'https://www.facebook.com/rahimcs27',
});

export const MENTORS = [MENTOR_DRJAMIL, MENTOR_BARRISTER, MENTOR_RAHIM, MENTOR_MASUM];
