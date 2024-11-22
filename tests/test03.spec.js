const{test,expect}=require('@playwright/test')

test('View Leave Page', async ({page})=>{
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     await expect(page.locator('h5[class*="orangehrm-login-title"]')).toBeVisible();
     await page.locator('input[name="username"]').fill('Admin');
     await page.locator('input[type="password"]').fill('admin123');
     await page.locator('button[type="submit"]').click();
     await page.waitForTimeout(3000);
     await expect(page.locator('a[href*="orangehrm.com"][class="oxd-brand"]')).toBeVisible();

     await page.locator('a[href="/web/index.php/leave/viewLeaveModule"]').click();
     await page.waitForTimeout(4000);
     await expect(page.locator('h6[class*="topbar"]')).toHaveText('Leave');



     
})