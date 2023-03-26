import { test, expect } from '@playwright/test'

test('button text should be Battle', async ({ page }) => {
    // Start from the index page
    await page.goto('http://localhost:3000/')
    await page.goto('http://localhost:3000/selection')
    // Find a button element and check if the text contains 'Battle'
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