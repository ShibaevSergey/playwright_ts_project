import { allure } from "allure-playwright";
import { BasePage } from "./base-page.ts";
import { expect } from '@playwright/test';
import { InputPageLocators as locators, InputPageData as data } from "../data/input-page-data.ts";
import { Links } from '../config/links.ts';


export class InputPage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.INPUT;

    async inputFullName() {
        await allure.step('Ввод полного имени', async() => {
            await this.page.locator(locators.FULL_NAME).fill(`${data.FIRST_NAME} ${data.LAST_NAME}`);
        });
    }

    async appendText() {
        await allure.step('Дополнить текст в поле', async() => {
            let tbx = this.page.locator(locators.APPEND_TEXT);
            await tbx.focus();
            await tbx.press('End');
            await tbx.pressSequentially(` ${data.FIRST_NAME}`);
        });
    }

    async pressTab() {
        await allure.step('Нажать кнопку "Tab"', async() => {
            await this.page.press(locators.APPEND_TEXT, 'Tab');
        });
    }

    async expectTextInTextBox() {
        await allure.step('Проверка текста в текстовом поле', async() => {
            await expect(this.page.locator(locators.TEXT_BOX_FOR_GET_TEXT)).toHaveValue(data.GETTING_TEXT);
        });
    }

    async clearTextBox() {
        await allure.step('Очистка поля ввода', async() => {
            await this.page.locator(locators.CLEAR_TBX).clear();
        });
    }

    async expectTextBoxDisable() {
        await allure.step('Проверка того, что поле неактивно', async() => {
            await expect(this.page.locator(locators.DISABLE_TBX)).toBeDisabled();
        });
    }

    async expectTextBoxReadOnly() {
        await allure.step('Проверка на наличие атрибута "readonly"', async() => {
            await expect(this.page.locator(locators.DONT_WRITE)).toHaveAttribute(data.READONLY, '');
        });
    }

    async tryingClearReadonlyTextBox() {
        await allure.step('Попытка очистить поле "readonly"', async() => {
            await this.page.locator(locators.DONT_WRITE).clear({ force: true });
        });
    }
    
    async expectTextInReadonlyTextBox() {
        await allure.step('Проверка текста в поле "readonly"', async() => {
            await expect(this.page.locator(locators.DONT_WRITE)).toHaveValue(data.TEXT_READONLY);
        });
    }
}