import Notification from './Notification';
import Info from './Info';
import AuthCode from './AuthCode';

const types = {
  notification: (body) => new Notification(body),
  info: (body) => new Info(body),
  authCode: (body) => new AuthCode(body)
}

export default (body) => types[body.type](body).parse();