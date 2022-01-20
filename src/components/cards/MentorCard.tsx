import React from 'react';
import {
  FaFacebook, FaGithub, FaLinkedinIn, FaTrello,
} from 'react-icons/all';
import {
  P, H6,
} from '../../i18n';
import { Mentor } from '../../globals/Mentor';
import { Link } from '../../navigation';

interface Props {
    mentor: Mentor
}

export const MentorCard = ({
  mentor,
}: Props) => (
  <div
    className="p-8 bg-gray-100 flex flex-col gap-2 hover:shadow-xl cursor-pointer w-full"
  >
    <div className="justify-center flex w-full">
      <img src={mentor.image} alt="mentor" className="rounded-full shadow-2" />
    </div>
    <div className="flex items-center gap-1 my-2 flex-col">
      <H6 className="text-black font-bold">{mentor.name}</H6>
      <P
        className="text-gray-600 text-sm"
        messageKey={mentor.description}
      />
    </div>
    <div className="flex gap-2 justify-center">
      {mentor.facebook && (
      <Link
        to={mentor.facebook}
        target="_blank"
        rel="noreferrer"
        className="p-1"
      >
        <FaFacebook />
      </Link>
      )}
      {mentor.github && (
        <Link
          to={mentor.github}
          target="_blank"
          rel="noreferrer"
          className="p-1"
        >
          <FaGithub />
        </Link>
      )}
      {mentor.trello && (
        <Link
          to={mentor.trello}
          target="_blank"
          rel="noreferrer"
          className="p-1"
        >
          <FaTrello />
        </Link>
      )}
      {mentor.linkedin && (
        <Link
          to={mentor.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-1"
        >
          <FaLinkedinIn />
        </Link>
      )}
    </div>
  </div>
);
