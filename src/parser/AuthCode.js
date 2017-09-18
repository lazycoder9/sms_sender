import i18next from 'i18next';

export default class AuthCode {
  constructor({ to, language = 'en', payload: { code }}) {
    this.to = to;
    this.language = language;
    this.code = code;
  }

  getMessage() {
    //return `Your authorization code: ${this.code}`;
    return i18next.t('test.title')
  }

  parse() {
    return { to: this.to, message: this.getMessage() }
  }
}