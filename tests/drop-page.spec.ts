import { test } from '@playwright/test';
import { DropPage } from '../pages/drop-page.ts';

test('Тест Drop Page', async({ page }) => {
    const dropPage = new DropPage(page);
    await dropPage.navigate(dropPage.PAGE_URL);
    await dropPage.expectTextBeforeDragAndDrop();
    await dropPage.dragAndDropFirstBoxToSecondBox();
    await dropPage.expectTextAfterDragAndDrop();
})