import React from 'react';

import { FaBuilding, FcLinux, IoBriefcase } from 'react-icons/all';
import { ItemToSell } from './cards/ItemToSell';
import { TEXTS } from '../i18n';

export const ItemsToSell = () => (
  <div className="flex gap-10 justify-center items-center sm:flex-col">
    <ItemToSell
      content={TEXTS.LINUX_FREELANCING_TRAINING_CONTENT}
      Icon={FcLinux}
      title={TEXTS.LINUX_FREELANCING_TRAINING}
    />
    <ItemToSell
      content={TEXTS.CORPORATE_FREELANCING_TRAINING_CONTENT}
      Icon={FaBuilding}
      title={TEXTS.CORPORATE_FREELANCING_TRAINING}
    />
    <ItemToSell
      content={TEXTS.STARTUP_DEVELOPMENT_TRAINING_CONTENT}
      Icon={IoBriefcase}
      title={TEXTS.STARTUP_DEVELOPMENT_TRAINING}
    />
  </div>
);
