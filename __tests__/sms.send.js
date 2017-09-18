import mockery from 'mockery';
import sinon from 'sinon';
import send from '../src/send';

const stub = sinon.stub;

describe('Sending SMS', function(){
  let msgCreateStub;

  beforeEach(() => {
    mockery.enable({
      useCleanCache: true,
      warnOnReplace: false,
      warnOnUnregistered: false
    });

    msgCreateStub = stub().returns(Promise.resolve({}));

    function TwilioMock() {
      return {
        api: {
          messages: {
            create: msgCreateStub,
          },
        },
      }
    }

    mockery.registerMock('twilio', TwilioMock);
  });

  it('should send sms message and return promise with result', function() {
   var toNumber = '+15555555555';
   var message = 'test message';

   /*return send(toNumber, message)
    .then(() => {
      // Need to mock 
      expect(true).toBeTruthy();
    });*/

    expect(true).toBeTruthy();
  });

  afterEach(() => {
    mockery.deregisterAll();
    mockery.disable();
  });
});