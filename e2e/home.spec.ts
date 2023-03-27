import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  console.log('beforeAll')
});

test.afterEach(async ({ page }) => {
  console.log('afterAll')
});

test.describe('Header area', () => {
  test('The title tag', async({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(page).toHaveTitle('Superhero Battle');
  });

  test('The meta tag', async({ page }) => {
    await page.goto('http://localhost:3000/');

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', "Created by Daesan Kim, Ivan Li, and Ivan Tong");
  });

  test('The link tag', async({ page }) => {
    await page.goto('http://localhost:3000/');

    const linkTag = page.locator('link[rel="icon"]');
    await expect(linkTag).toHaveAttribute('href', "/favicon.png");
  });
})

test('button text should be START', async ({ page }) => {
    // Start from the index page
    await page.goto('http://localhost:3000/')
    // Find a button element and check if the text contains 'START'
    await expect(page.locator('button')).toContainText('START')

})

test('test if the audio button is clickable', async ({ page }) => {
    // Start from the index page
    await page.goto('http://localhost:3000/')
    // click on sound icon button hat's a div
    await page.click('div')

})

test('should navigate to the selection page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'start' and click on it
  await page.click('text=START')
  // The new URL should be "/selection" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/selection')
})