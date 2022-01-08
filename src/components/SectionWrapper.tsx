import React from 'react';
import { join } from 'lodash';

interface Props {
    className?: string
    children: React.ReactNode
}

const DEFAULT_CLASS_NAME = 'bg-background p-14 flex';

export const SectionWrapper = ({ className, children }: Props) => (
  <div className={join([DEFAULT_CLASS_NAME, className], ' ')}>
    {children}
  </div>
);

SectionWrapper.defaultProps = {
  className: DEFAULT_CLASS_NAME,
};
