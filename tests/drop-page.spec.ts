import { test } from '@playwright/test';
import { DropPage } from '../pages/drop-page.ts';

test('Тест Drag Page', async({ page }) => {
    const dropPage = new DropPage(page);
    await dropPage.navigate(dropPage.PAGE_URL);

})