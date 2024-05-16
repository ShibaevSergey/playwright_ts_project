import { test } from '@playwright/test';
import { WindowsPage } from '../pages/windows-page.ts';
import { HomePage } from '../pages/home-page.ts';

test('Тест Select Page', async({context}) => {
    const page = await context.newPage()
    const windowsPage = new WindowsPage(page);
    await windowsPage.navigate(windowsPage.PAGE_URL);
    const newPage = await windowsPage.waitNewTab(context);



    
    const homePage = new HomePage(newPage);
    await homePage.printTitlePage();
    await windowsPage.close();
    await homePage.close();
})