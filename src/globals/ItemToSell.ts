import React from 'react';
import { FcLinux } from 'react-icons/all';
import { nanoid } from 'nanoid';
import { MessageKey, TEXTS } from '../i18n';

export class ItemToSell {
    Icon: React.FC<{ size: string}>;

    title: MessageKey;

    content: MessageKey;

    id: string

    constructor(params: Partial<ItemToSell> = {}) {
      this.content = params.content || TEXTS.LOREM_CONTENT;
      this.title = params.title || TEXTS.LOREM_TITLE;
      this.Icon = params.Icon || FcLinux;
      this.id = nanoid();
    }
}
