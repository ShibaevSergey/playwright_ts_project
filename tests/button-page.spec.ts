import { test } from '@playwright/test'
import { ButtonPage } from '../pages/button-page.ts'


test('Тест Button Page', async({ page }) => {
    const buttonPage = new ButtonPage(page);
    await buttonPage.navigate(buttonPage.PAGE_URL);
    await buttonPage.clickBtnHome();
    await buttonPage.goBack();
    await buttonPage.getXAndYCoordsBtn();
    await buttonPage.expectColorBtn();
    await buttonPage.expectWidthAndHeightBtn();
    await buttonPage.expectBtnDisable();
    await buttonPage.clickAndHoldBtn();
    await buttonPage.expectTextInHoldBtn();
})