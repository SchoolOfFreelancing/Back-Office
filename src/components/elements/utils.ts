import { isString, join } from 'lodash';

interface PartialDefaultProps {
    className: string,
    [key: string]: any
}
export function joinClassName<D extends PartialDefaultProps>(
  defaultProps: D | string | undefined,
  className?: string,
):string {
  if (isString(defaultProps)) {
    return join([defaultProps, className], ' ');
  }
  return join([defaultProps?.className, className], ' ');
}
