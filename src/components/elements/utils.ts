import { join } from 'lodash';

interface PartialDefaultProps {
    className: string,
    [key: string]: any
}
export function joinClassName<D extends PartialDefaultProps>(
  defaultProps: D,
  className?: string,
):string {
  return join([defaultProps.className, className], ' ');
}
