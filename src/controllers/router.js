import parser from '../parser';

export default (router) => {
  router
    .get('/', (req, res) => {
      res.json({ message: 'Welcome to the SMS Sender service!' });   
    })
    .post('/send', (req, res) => {
      const body = req.body;
      const result = parser(body);
      res.json(result);
    })
}