import parser from '../src/parser';

test('Notification SMS', () => {
  const requestBody = {
    type: 'notification',
    to: '+123 45 678 99 99',
    language: 'en',
    payload: {
      message: 'This is notification',
    },
  };

  const expected = {
    to: '+123 45 678 99 99',
    message: 'This is notification',
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
    language: 'en',
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
