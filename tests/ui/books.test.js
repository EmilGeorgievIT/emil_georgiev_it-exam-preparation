const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('https://emil-georgiev-it-exam-preperation.onrender.com/books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  