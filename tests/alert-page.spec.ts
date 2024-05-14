import { test } from '@playwright/test';
import { AlertPage } from '../pages/alert-page.ts';

test('Тест Alert Page', async( {page} ) => {
    const alertPage = new AlertPage(page);
    await alertPage.navigate(alertPage.PAGE_URL);
    await alertPage.waitAndAcceptSimpleAlert();
    await alertPage.clickBtnSimpleAlert();
    await alertPage.wainAndDismissAlertAndPrintMessage();
    await alertPage.clickBtnConfirmAlert();
})