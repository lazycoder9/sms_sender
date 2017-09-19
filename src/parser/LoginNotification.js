import i18next from 'i18next';

export default class LoginNotification {
  constructor({ to, language = 'en', payload: { time, device, location } }) {
    this.to = to;
    this.language = language;
    this.time = time;
    this.device = device;
    this.location = location;
  }

  getMessage() {
    i18next.changeLanguage(this.language);
    return i18next.t('logNotify', { time: this.time, device: this.device, location: this.location });
  }

  parse() {
    return { to: this.to, message: this.getMessage() };
  }
}
