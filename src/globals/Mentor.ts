import { nanoid } from 'nanoid';
import { MessageKey } from '../i18n';

export class Mentor {
    name: string;

    image: string;

    description?: MessageKey | undefined = undefined;

    facebook?: string | null = null

    github?: string | null = null

    trello?: string | null = null

    linkedin?: string | null = null

    id: string

    constructor(params: Partial<Mentor> = {}) {
      this.name = params.name || '';
      this.image = params.image || '';
      this.description = params.description || 'NO_MESSAGE_ID';
      this.github = params.github || null;
      this.facebook = params.facebook || null;
      this.linkedin = params.linkedin || null;
      this.trello = params.trello || null;
      this.id = nanoid();
    }
}
