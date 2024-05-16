import { test } from '@playwright/test';
import { WindowsPage } from '../pages/windows-page.ts';
import { HomePage } from '../pages/home-page.ts';


test('Тест Windows Page > Home Page', async({context}) => {
    const page = await context.newPage()
    const windowsPage = new WindowsPage(page);
    await windowsPage.navigate(windowsPage.PAGE_URL);
    const newPage = await windowsPage.waitNewTab(context);
    const homePage = new HomePage(newPage);
    await homePage.printTitlePage();
    await windowsPage.close();
    await homePage.close();
})

test('Тест Windows Page > Multiple Windows', async({context}) => {
    const page = await context.newPage()
    const windowsPage = new WindowsPage(page);
    await windowsPage.navigate(windowsPage.PAGE_URL);
    await windowsPage.clickBtnMultipleWindows();
    await windowsPage.expectUrlOpenTabs(context);
    await windowsPage.closeAllTabs(context);
})