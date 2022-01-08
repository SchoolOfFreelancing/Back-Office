import React from 'react';
import { P, TEXTS } from '../../i18n';
import { Link, HOME } from '../../navigation';

export const TrainingsCard: React.FC = () => (
  <div className="my-5">
    <P messageKey={TEXTS.NOW_PROVIDING_THREE} className="font-bold text-black mb-1" />
    <Link to={HOME}>
      <P messageKey={TEXTS.LINUX_FREELANCING_TRAINING} className="text-gray-500" />
    </Link>
    <Link to={HOME}>
      <P messageKey={TEXTS.CORPORATE_FREELANCING_TRAINING} className="text-gray-500" />
    </Link>
    <Link to={HOME}>
      <P messageKey={TEXTS.STARTUP_DEVELOPMENT_TRAINING} className="text-gray-500" />
    </Link>
  </div>
);
