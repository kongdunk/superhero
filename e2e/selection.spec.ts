import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  console.log('beforeAll')
});

test.afterEach(async ({ page }) => {
  console.log('afterAll')
});

test('button text should be Battle', async ({ page }) => {
    // Start from the index page
    await page.goto('http://localhost:3000/')
    await page.goto('http://localhost:3000/selection')
    // Find a button element and check if the text contains 'Battle'
    const bbutton = page.locator('button')
    await expect(page.locator('button')).toContainText('Battle')
    
})

test('should navigate to the battle page', async ({ page }) => {
  // Start from the index page then to selection page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  await page.goto('http://localhost:3000/selection')
  // Find an input element and click on it
  await page.click('input')  
  // The new URL should be "/battle"
  await page.goto('http://localhost:3000/battle')
})

test('background image background-size should be cover',async ({ page }) => {
  // Start from the index page then to selection page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  await page.goto('http://localhost:3000/selection')
  // Find an the background image using its class name
  const background = page.locator('.bgImg');
  // Grab the background-size property
  const grabbedBackground = await background.evaluate((ele) => {
    return window.getComputedStyle(ele).getPropertyValue('background-size');
  });
  // The background image should be cover
  console.log(grabbedBackground);
  expect(grabbedBackground).toBe('cover');
})

test('testing for title gradient',async ({ page }) => {
  // Start from the index page then to selection page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  await page.goto('http://localhost:3000/selection')
  // Find an the title container using its class name
  const background = page.locator('.charSelTitle');
  // Grab the background property
  const grabbedBackground = await background.evaluate((ele) => {
    return window.getComputedStyle(ele).getPropertyValue('background');
  });
  // The background should be a radial-gradient
  console.log(grabbedBackground);
  expect(grabbedBackground).toBe("rgba(0, 0, 0, 0) radial-gradient(circle, rgb(255, 103, 0) 0%, rgb(247, 38, 38) 100%) repeat scroll 0% 0% / auto padding-box border-box");
})