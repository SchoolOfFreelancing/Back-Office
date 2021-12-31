import { keyBy, keys } from 'lodash';
import I18N from './en.json';
import { MessageKey } from './Context';

export const TEXTS: Record<MessageKey, MessageKey> = keyBy(
  keys(I18N),
) as Record<MessageKey, MessageKey>;
