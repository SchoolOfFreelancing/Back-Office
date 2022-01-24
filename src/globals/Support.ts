import { nanoid } from 'nanoid';
import * as React from 'react';
import { MessageKey, TEXTS } from '../i18n';

export class Support {
    Icon: React.FC<{ size: string}>;

    preTitle: MessageKey;

    title: MessageKey;

    content: MessageKey;

    id: string;

    link: string;

    constructor(params: Partial<Support> = {}) {
      this.content = params.content || TEXTS.LOREM_CONTENT;
      this.preTitle = params.preTitle || TEXTS.LOREM_TITLE;
      this.title = params.title || TEXTS.LOREM_TITLE;
      this.Icon = params.Icon || function Noop() {
        return null;
      };
      this.id = nanoid();
      this.link = params.link || '';
    }
}
