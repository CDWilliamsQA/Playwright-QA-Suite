import { test, expect } from '@playwright/test';

test('API GET returns 200', async ({ request }) => {
  const res = await request.get('https://reqres.in/api/users/2');
  expect(res.status()).toBe(200);
});
