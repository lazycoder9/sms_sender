import parser from '../src/parser';

test('Notification SMS', () => {
  const requestBody = {
    type: 'notification',
    to: '+123 45 678 99 99',
    language: 'en',
    payload: {
      event: 'Buy apples',
      time: '12:00',
    },
  };

  const expected = {
    to: '+123 45 678 99 99',
    message: 'Notification:\nEvent: Buy apples\nTime: 12:00',
  };

  expect(parser(requestBody)).toEqual(expected);
});

test('Info SMS', () => {
  const requestBody = {
    type: 'info',
    to: '+123 45 678 99 99',
    language: 'en',
    payload: {
      message: 'This is info message',
    },
  };

  const expected = {
    to: '+123 45 678 99 99',
    message: 'This is info message',
  };

  expect(parser(requestBody)).toEqual(expected);
});

test('Authorization Code SMS', () => {
  const requestBody = {
    type: 'authCode',
    to: '+123 45 678 99 99',
    language: 'en',
    payload: {
      code: 9999,
    },
  };

  const expected = {
    to: '+123 45 678 99 99',
    message: 'Your authorization code: 9999',
  };

  expect(parser(requestBody)).toEqual(expected);
});

test('RU Authorization Code SMS', () => {
  const requestBody = {
    type: 'authCode',
    to: '+123 45 678 99 99',
    language: 'ru',
    payload: {
      code: 9999,
    },
  };

  const expected = {
    to: '+123 45 678 99 99',
    message: 'Ваш код авторизации: 9999',
  };

  expect(parser(requestBody)).toEqual(expected);
});

test('Login Notification SMS', () => {
  const requestBody = {
    type: 'authCode',
    to: '+123 45 678 99 99',
    language: 'en',
    payload: {
      time: '12:00',
      device: 'web',
      location: 'Moscow, Russian Federation',
    },
  };

  const expected = {
    to: '+123 45 678 99 99',
    message: 'We detected a login into your account from a new device on 12:00.\n Device: mobile\n Location: Moscow, Russian Federation',
  };

  expect(parser(requestBody)).toEqual(expected);
});
