import { test } from '@playwright/test';
import { SliderPage } from '../pages/slider-page.ts';


test('Тест Select Page', async({page}) => {
    const sliderPage = new SliderPage(page);
    await sliderPage.navigate(sliderPage.PAGE_URL);
    await sliderPage.setSliderValue();
    await sliderPage.clickBtnGetCountries();
    await sliderPage.expectCountDisplayedCountries();
})