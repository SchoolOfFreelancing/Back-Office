import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import { MessageKey, TEXTS } from '../i18n';

export class Notice {
    title: MessageKey;

    content: MessageKey;

    link: string;

    id: string;

    date: string;

    constructor(params: Partial<Notice> = {}) {
      this.content = params.content || TEXTS.LOREM_CONTENT;
      this.title = params.title || TEXTS.LOREM_TITLE;
      this.link = params.link || '';
      this.date = params.date || dayjs().toISOString();
      this.id = nanoid();
    }
}
