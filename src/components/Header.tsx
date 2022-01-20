import * as React from 'react';
import { useBoolean, useScroll } from 'ahooks';
import {
  FaInstagram, FaWhatsapp, FaPinterest, FaMedium,
  FaTiktok, FaGithub, FaTrello, FaYoutube, FaLinkedinIn,
  FaFacebook, FaTwitter, FaTumblr, HiMenu, MdClear,
} from 'react-icons/all';
import { keys, map } from 'lodash';
import {
  HOME, HeaderLink, HeaderMainLink, ROUTES, Link, ROUTES_NAME,
} from '../navigation';
import { P, TEXTS } from '../i18n';
import { GLOBALS } from '../globals';

const NavHeader = () => {
  const scroll = useScroll(null);
  const showNavHeader = !scroll?.top || scroll?.top === 0;
  if (!showNavHeader) return null;
  return (
    <div className="px-14 py-2 bg-gray-100 transition-opacity duration-200 ease-in-out flex items-center justify-between">
      <div className="flex gap-2">
        <Link to={GLOBALS.INSTAGRAM} target="_blank" rel="noreferrer" className="p-1">
          <FaInstagram />
        </Link>
        <Link to={GLOBALS.WHATSAPP} target="_blank" rel="noreferrer" className="p-1">
          <FaWhatsapp />
        </Link>
        <Link to={GLOBALS.PINTEREST} target="_blank" rel="noreferrer" className="p-1">
          <FaPinterest />
        </Link>
        <Link to={GLOBALS.MEDIUM} target="_blank" rel="noreferrer" className="p-1">
          <FaMedium />
        </Link>
        <Link to={GLOBALS.TIK_TOK} target="_blank" rel="noreferrer" className="p-1">
          <FaTiktok />
        </Link>
        <Link to={GLOBALS.GIT_HUB} target="_blank" rel="noreferrer" className="p-1">
          <FaGithub />
        </Link>
        <Link to={GLOBALS.TRELLO} target="_blank" rel="noreferrer" className="p-1">
          <FaTrello />
        </Link>
        <Link to={GLOBALS.YOUTUBE} target="_blank" rel="noreferrer" className="p-1">
          <FaYoutube />
        </Link>
        <Link to={GLOBALS.LINKEDIN} target="_blank" rel="noreferrer" className="p-1">
          <FaLinkedinIn />
        </Link>
        <Link to={GLOBALS.FACEBOOK} target="_blank" rel="noreferrer" className="p-1">
          <FaFacebook />
        </Link>
        <Link to={GLOBALS.TWITTER} target="_blank" rel="noreferrer" className="p-1">
          <FaTwitter />
        </Link>
        <Link to={GLOBALS.TUMBLR} target="_blank" rel="noreferrer" className="p-1">
          <FaTumblr />
        </Link>
      </div>
      <div className="flex gap-2">
        <Link to={ROUTES.HOME}>
          <P className="p-1 text-gray-600 uppercase text-sm" messageKey={TEXTS.HOME} />
        </Link>
        <Link to={ROUTES.HOW_TO_JOIN}>
          <P className="p-1 text-gray-600 uppercase text-sm" messageKey={TEXTS.HOW_TO_JOIN} />
        </Link>
        <Link to={ROUTES.KNOW_YOUR_CUSTOMER}>
          <P className="p-1 text-gray-600 uppercase text-sm" messageKey={TEXTS.KNOW_YOUR_CUSTOMER} />
        </Link>
        <Link to={GLOBALS.ENROLL_LINK} target="_blank" rel="noreferrer">
          <P className="p-1 text-gray-600 uppercase text-sm" messageKey={TEXTS.ENROLL} />
        </Link>
        <a href={GLOBALS.PHONE_NUMBER} target="_blank" rel="noreferrer">
          <P className="p-1 text-gray-600 uppercase text-sm" messageKey={TEXTS.CALL_US} />
        </a>

      </div>
    </div>
  );
};

const HamburgerMenu = () => {
  const [isOpen, { setFalse, setTrue }] = useBoolean();
  return (
    <>
      <HiMenu onClick={setTrue} size={20} className="cursor-pointer" />
      {isOpen && (
        <div className="absolute pt-4 px-10 pb-10 bg-gray-100 flex flex-col hamburger transition gap-2 shadow items-center overflow-y-scroll">
          <div className="flex justify-end w-full"><MdClear onClick={setFalse} size={20} className="cursor-pointer" /></div>
          {map(keys(ROUTES_NAME), (key: string) => (
            <Link to={key} key={key} onClick={setFalse}>
              <P className="p-1 uppercase text-xs text-gray-600" messageKey={ROUTES_NAME[key]} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
function Header() {
  return (
    <header className="fixed w-full z-50 bg-white">
      <NavHeader />
      <div className="py-4 px-14 bg-gray-200 items-center flex justify-between shadow">
        <HeaderMainLink to={HOME} messageKey={TEXTS.SCHOOL_OF_FREELANCING} />
        <div className="flex gap-6 items-center">
          <HeaderLink to={ROUTES.ABOUT} messageKey={TEXTS.WHAT_WE_DO} />
          <HeaderLink to={ROUTES.TRAINING} messageKey={TEXTS.TRAINING} />
          <HeaderLink to={GLOBALS.TRAINEE} messageKey={TEXTS.TRAINEE} target="_blank" />
          <HeaderLink to={ROUTES.CONTACT} messageKey={TEXTS.CONTACT} />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
