import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

export default async (to, message) => {
  try {
    const result = await client.api.messages
      .create({
        body: message,
        to,
        from: process.env.SENDING_NUMBER,
      });
    return result;
  } catch (err) {
    return err;
  }
};
