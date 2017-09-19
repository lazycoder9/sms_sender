import Notification from './Notification';
import Info from './Info';
import AuthCode from './AuthCode';

const types = {
  notification: Notification,
  info: Info,
  authCode: AuthCode,
};

export default body => new types[body.type](body).parse();
