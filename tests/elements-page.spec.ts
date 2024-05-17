import { test } from '@playwright/test';
import { ElementsPage } from '../pages/elements-page.ts';

test('Тест Elements Page', async({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.navigate(elementsPage.PAGE_URL);
    await elementsPage.fillGithubNickname();
    await elementsPage.clickBtnSearch();
    await elementsPage.expectImgProfile();
    await elementsPage.printAllInfoAboutProfile();
    await elementsPage.expectRepoLinksCount();
})