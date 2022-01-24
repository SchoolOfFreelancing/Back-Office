import { nanoid } from 'nanoid';
import * as React from 'react';
import { MessageKey, TEXTS } from '../i18n';

export class Research {
    Icon: React.FC<{ size: string}>;

    title: MessageKey;

    content: MessageKey;

    id: string;

    constructor(params: Partial<Research> = {}) {
      this.content = params.content || TEXTS.LOREM_CONTENT;
      this.title = params.title || TEXTS.LOREM_TITLE;
      this.Icon = params.Icon || function Noop() {
        return null;
      };
      this.id = nanoid();
    }
}
