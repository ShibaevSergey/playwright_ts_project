import { test } from '@playwright/test';
import { AlertPage } from '../pages/alert-page.ts';

test('Тест Alert Page', async( {page} ) => {
    const alertPage = new AlertPage(page);
    await alertPage.navigate(alertPage.PAGE_URL);
    await alertPage.clickBtnSimpleAlert();
    await alertPage.clickBtnConfirmAlert();
    await alertPage.clickBtnPromptAlert();
    await alertPage.expectEnteredName();
    await alertPage.clickBtnModernAlert();
    await alertPage.expectTextInActiveModernAlert();
    await alertPage.closeModernAlert();
})
