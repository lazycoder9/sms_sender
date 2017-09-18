export default (router) => {
  router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the SMS Sender service!' });   
  });
}