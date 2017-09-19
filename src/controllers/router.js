import parser from '../parser';
import send from '../send';

export default (router) => {
  router
    .get('/', (req, res) => {
      res.json({ message: 'Welcome to the SMS Sender service!' });
    })
    .post('/send', async (req, res) => {
      const { to, message } = parser(req.body);
      const { errorCode, body } = await send(to, message);
      if (errorCode) {
        res.json({ error: errorCode, message: 'SMS has not sent' });
      } else {
        res.json({ message: 'SMS has sent', body });
      }
    });
};
