import { test } from '@playwright/test'
import { SelectPage } from '../pages/select-page.ts'


test('Тест Select Page', async({page}) => {
    const selectPage = new SelectPage(page);
    await selectPage.navigate(selectPage.PAGE_URL);
    await selectPage.selectAppleFromFruits();
    await selectPage.selectSuperherosFromList();
    await selectPage.selectProgrammingLanguage();
    await selectPage.printAllProgrammingLanguage();
    await selectPage.selectIndiaCountry();
    await selectPage.expectSelectCountry();
})