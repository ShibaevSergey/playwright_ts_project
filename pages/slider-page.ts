import { allure } from "allure-playwright";
import { BasePage } from "./base-page.ts";
import { SliderPageLocators as locators } from "../data/slider-page-data.ts";
import { Links } from '../config/links.ts';
import { randint } from '../config/helper.ts'
import { expect } from '@playwright/test'


export class SliderPage extends BasePage {
    readonly links = new Links();
    randomSteps = randint(1, 50);
    PAGE_URL = this.links.SLIDER;

    async setSliderValue() {
        await allure.step(`Установить значение ${this.randomSteps} в слайдер`, async() => {
            const slider = this.page.locator(locators.SLIDER);
            const box = await slider.boundingBox();
            const step = (box!.width * 0.98) / 50;
            await this.page.mouse.click(box!.x + this.randomSteps * step, box!.y + box!.height / 2);
        });
    }

    async clickBtnGetCountries() {
        await allure.step('Клик на кнопку "Get Countries"', async() => {
            await this.page.locator(locators.GET_COUNTRIES_BTN).click(); 
        });
    }

    async expectCountDisplayedCountries() {
        await allure.step('Проверка количества отображенных стран', async() => {
            await this.page.waitForSelector(locators.COUNTRIES_LIST);
            const countries = await this.page.locator(locators.COUNTRIES_LIST).textContent();
            expect(countries!.split(' - ').length).toBe(this.randomSteps);
        });
    }
}