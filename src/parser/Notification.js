export default class Notification {
  constructor({ to, language = 'en', payload: { message }}) {
    this.to = to;
    this.language = language;
    this.message = message;
  }

  getMessage() {
    return this.message;
  }

  parse() {
    return { to: this.to, message: this.getMessage() }
  }
}