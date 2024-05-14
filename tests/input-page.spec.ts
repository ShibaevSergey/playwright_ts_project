import { test } from '@playwright/test'
import { InputPage } from '../pages/input-page.ts'

test('Тест Input Page', async( {page} ) => {
    const inputPage = new InputPage(page);
    await inputPage.navigate(inputPage.PAGE_URL);
    await inputPage.inputFullName();
    await inputPage.appendText();
    await inputPage.pressTab();
    await inputPage.expectTextInTextBox();
    await inputPage.clearTextBox();
    await inputPage.expectTextBoxDisable();
    await inputPage.expectTextBoxReadOnly();
    await inputPage.tryingClearReadonlyTextBox();
    await inputPage.expectTextInReadonlyTextBox();
})