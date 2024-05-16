import { test } from '@playwright/test';
import { RadioPage } from '../pages/radio-page.ts';

test('Тест Radio Page', async( {page} ) => {
    const radioPage = new RadioPage(page);
    await radioPage.navigate(radioPage.PAGE_URL);
    await radioPage.selectRbYesOrNo();
    await radioPage.searchBug();
    await radioPage.expectIsCheckedOnlyOneRb();
    await radioPage.searchCheckedRb();
    await radioPage.expectDisableRbMaybe();
    await radioPage.expectCbRememberMeIsChecked();
    await radioPage.checkCbIAgree();
})