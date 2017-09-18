import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

export default (to, message) => {
  return client.api.messages
    .create({
      body: message,
      to: to,
      from: process.env.SENDING_NUMBER
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log('Something is wrong!');
      console.log(err);
    });
}