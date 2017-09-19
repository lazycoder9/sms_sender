import i18next from 'i18next';

export default class Notification {
  constructor({ to, language = 'en', payload: { event, time } }) {
    this.to = to;
    this.language = language;
    this.event = event;
    this.time = time;
  }

  getMessage() {
    i18next.changeLanguage(this.language);
    return i18next.t('notification', { event: this.event, time: this.time });
  }

  parse() {
    return { to: this.to, message: this.getMessage() };
  }
}
