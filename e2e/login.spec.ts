import { test, expect } from '@playwright/test'

test('deve logar com sucesso', async ({ page }) => {

    const user = {
        username: 'raphael',
        password: 'pwd123'
    }

    await page.goto('http://localhost:3000/login')

    await page.locator('#username').fill(user.username)
    await page.locator('#password').fill(user.password)

    await page.locator('button[type="submit"]').click()

    // Não precisa do await porque não há uma ação aqui (só procura o elemento)
    const title = page.locator('h1')
    await expect(title).toContainText('Olá, Raphael!')

    //await page.waitForTimeout(10000)
})