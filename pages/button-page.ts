import { allure } from "allure-playwright";
import { BasePage } from "./base-page.ts";
import { ContentType } from "allure-js-commons";
import { expect } from '@playwright/test';
import { ButtonPageLocators as locators, ButtonPageData as data } from "../data/button-page-data.ts";
import { Links } from '../config/links.ts';

export class ButtonPage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.BUTTON;

    async clickBtnHome() {
        await allure.step('Клик на кнопку "Home"', async() => {
            await this.page.locator(locators.HOME_BTN).click();
        });
    }

    async getXAndYCoordsBtn() {
        await allure.step('Получить координаты x и y кнопки', async() => {
            const box = await this.page.locator(locators.POSITION_BTN).boundingBox();
            const coordinateX = box!.x;
            const coordinateY = box!.y;
            await allure.attachment('Координаты', `X: ${coordinateX}; Y: ${coordinateY}`, ContentType.TEXT);
        });
    }

    async expectColorBtn() {
        await allure.step('Проверка цвета кнопки', async() => {
            await expect(this.page.locator(locators.COLOR_BTN)).toHaveCSS('background-color', data.COLOR_BTN);
        });
    }

    async expectWidthAndHeightBtn() {
        await allure.step('Проверить ширину и длину кнопки', async() => {
            const box = await this.page.locator(locators.POSITION_BTN).boundingBox();
            expect(Math.round(box!.width)).toBe(Math.round(data.POSITION_BTN_WIDTH));
            expect(Math.round(box!.height)).toBe(Math.round(data.POSITION_BTN_HEIGHT));
        });
    }

    async expectBtnDisable() {
        await allure.step('Проверка активности кнопки', async() => {
            await expect(this.page.locator(locators.DISABLED_BTN)
            .filter({ hasText: data.DISABLED_BTN_NAME }))
            .toHaveAttribute('disabled', '');
        });
    }

    async clickAndHoldBtn() {
        await allure.step('Клик и удержание на кнопку', async() => {
            await this.page.locator(locators.DISABLED_BTN)
            .filter({ hasNotText: data.DISABLED_BTN_NAME }).click({ delay: 1500 });
        });
    }

    async expectTextInHoldBtn() {
        await allure.step('Проверка текста в кнопке', async() => {
            await expect(this.page.locator(locators.DISABLED_BTN)
        .filter({ hasNotText: data.DISABLED_BTN_NAME }))
        .toContainText(data.AFTER_HOLD_BTN_NAME);
        });
    }
}