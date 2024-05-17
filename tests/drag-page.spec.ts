import { test } from '@playwright/test';
import { DragPage } from '../pages/drag-page.ts';

test('Тест Drag Page', async({ page }) => {
    const dragPage = new DragPage(page);
    await dragPage.navigate(dragPage.PAGE_URL);
    await dragPage.dragAndDropBox();
    await dragPage.expectDraggedBox();
})