import { test, expect } from
  'playwight/test';

test('API GET returns 200', aysnc
     ({ request}) => {
     const res = await
request.get('https://reqres.in/api/users/2');
  expect(res.status()).toBe(200);
});
