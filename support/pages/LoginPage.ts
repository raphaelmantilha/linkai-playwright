import { Page } from '@playwright/test'

export function getLoginPage(page: Page) {
    return {
        open: async () => {
            await page.goto('http://localhost:3000/login')
        },
        submit: async (username: string, password: string) => {
            await page.getByPlaceholder('Seu @username incrível').fill(username)
            await page.getByPlaceholder('Digite sua senha secreta').fill(password)
            await page.locator('button[type="submit"]').click()
        }
    }
}