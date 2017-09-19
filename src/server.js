import express from 'express';
import bodyParser from 'body-parser';
import i18next from 'i18next';
import routes from './controllers/router';
import en from './locales/en';
import ru from './locales/ru';
const i18nextMiddleware = require('i18next-express-middleware');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en,
      ru
    }
  });

app.use(i18nextMiddleware.handle(i18next));

routes(router);
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);