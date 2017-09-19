import i18next from 'i18next';

export default class AuthCode {
  constructor({ to, language = 'en', payload: { code } }) {
    this.to = to;
    this.language = language;
    this.code = code;
  }

  getMessage() {
    i18next.changeLanguage(this.language);
    return i18next.t('authCode', { code: this.code });
  }

  parse() {
    return { to: this.to, message: this.getMessage() };
  }
}
