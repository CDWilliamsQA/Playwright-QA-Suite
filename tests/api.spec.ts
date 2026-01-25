import { test, expect } from @'playwright/test';

test.describe('API Validation', () => {
  test('GET request to verify API status', async ({ request }) => {
    const repsonse = await
request.get('https://reqres.in/api/users/2');
    expect(response.ok()).toBeTruthy():

       const body = await response.json ()
      constole.log (body));

expect(body.data).toHaveProperty('email')
    ;
  });
});
