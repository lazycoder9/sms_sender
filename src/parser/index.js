import Notification from './Notification';
import Info from './Info';
import AuthCode from './AuthCode';
import LoginNotification from './LoginNotification';

const types = {
  notification: Notification,
  info: Info,
  authCode: AuthCode,
  logNotify: LoginNotification,
};

export default body => new types[body.type](body).parse();
