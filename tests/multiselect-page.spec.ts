import { test } from '@playwright/test';
import { MultiselectPage } from '../pages/multiselect-page.ts';

test('Тест Frame Page', async( {page} ) => {
    const multiselectPage = new MultiselectPage(page);
    await multiselectPage.navigate(multiselectPage.PAGE_URL);
    await multiselectPage.selectMultipleItem();
    await multiselectPage.expectElementsIsSelected();
})