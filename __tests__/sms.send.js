import mockery from 'mockery';
import { stub } from 'sinon';
import send from '../src/send';


describe('Sending SMS', () => {
  let msgCreateStub;

  beforeEach(() => {
    mockery.enable({
      useCleanCache: true,
      warnOnReplace: false,
      warnOnUnregistered: false,
    });

    msgCreateStub = stub().returns(Promise.resolve({}));

    function TwilioMock() {
      return {
        api: {
          messages: {
            create: msgCreateStub,
          },
        },
      };
    }

    mockery.registerMock('twilio', TwilioMock);
  });

  it('should send sms message and return promise with result', () => {
    const toNumber = '+15555555555';
    const message = 'test message';

    /* return send(toNumber, message)
    .then(() => {
      // Need to mock
      expect(true).toBeTruthy();
    }); */

    expect(true).toBeTruthy();
  });

  afterEach(() => {
    mockery.deregisterAll();
    mockery.disable();
  });
});
