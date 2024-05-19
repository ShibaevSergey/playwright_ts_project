import { test } from '@playwright/test';
import { TablePage } from '../pages/table-page.ts';


test('Тест Table Page #1', async({page}) => {
    const tablePage = new TablePage(page);
    await tablePage.navigate(tablePage.PAGE_URL);
    await tablePage.expectTotalPrice();
})

test('Тест Table Page #2', async({page}) => {
    const tablePage = new TablePage(page);
    await tablePage.navigate(tablePage.PAGE_URL);
    await tablePage.checkRowWithRajName();
})