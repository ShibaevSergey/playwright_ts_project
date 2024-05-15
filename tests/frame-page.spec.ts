import { test } from '@playwright/test';
import { FramePage } from '../pages/frame-page.ts';

test('Тест Frame Page', async( {page} ) => {
    const framePage = new FramePage(page);
    await framePage.navigate(framePage.PAGE_URL);
    await framePage.inputFirsNameInFrame();
    await framePage.inputLastNameInFrame();
    await framePage.inputEmailInInnerFrame();
})