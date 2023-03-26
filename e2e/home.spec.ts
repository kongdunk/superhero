import { test, expect } from '@playwright/test'

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