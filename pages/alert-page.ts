import { allure } from "allure-playwright";
import { AlertPageLocators as locators, AlertPageData as data} from '../data/alert-page-data.ts';
import { ContentType } from "allure-js-commons";
import { BasePage } from './base-page.ts';
import { Links } from '../config/links.ts';
import { expect } from '@playwright/test'
import { th } from "@faker-js/faker";

export class AlertPage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.ALERT;
    
    async clickBtnSimpleAlert() {
        await allure.step('Клик на кнопку "Simple Alert"', async() => {
            await allure.step('Ожидание простого Alert и его закрытие', async() => {
                this.page.once('dialog', async dialog => {
                    dialog.accept();
                });
            });
            await this.page.locator(locators.ACCEPT_BTN).click();
        });
    }
    
    async clickBtnConfirmAlert() {
        await allure.step('Клик на кнопку "Confirm Alert"', async() => {
            await allure.step('Ожидание и клик "Нет" в alert + текст уведомления', async() => {
                this.page.once('dialog', async dialog => {
                    console.log(dialog.message());
                    await allure.attachment('Текст диалога', dialog.message(), ContentType.TEXT);
                    await dialog.dismiss();
                });
            });
            await this.page.locator(locators.CONFIRM_BTN).click();
        });
    }
    
    async clickBtnPromptAlert() {
        await allure.step('Нажать на кнопку "Prompt Alert"', async() => {
            await allure.step('Ожидание Prompt диалога и ввод имени', async() => {
                this.page.once('dialog', async dialog => {
                    await dialog.accept(data.NAME);
                });
            });
            await this.page.locator(locators.PROMPT_BTN).click()
        });
    }

    async expectEnteredName() {
        await allure.step('Проверка введенного имени', async() => {
           await expect(this.page.locator(locators.MY_NAME)).toContainText(data.NAME);
        });
    }

    async clickBtnModernAlert() {
        await allure.step('Клик на кнопку "Modern Alert"', async() => {
            await this.page.locator(locators.MODERN_BTN).click();
        });
    }

    async expectTextInActiveModernAlert() {
        await allure.step('Проверка отображения модального окна', async() => {
            await expect(this.page.locator(locators.ACTIVE_MODAL_ALERT)).toContainText(data.TEXT_MODERN_ALERT);
        });
    }

    async closeModernAlert() {
        await allure.step('Закрыть модальное окно "Modern Alert"', async() => {
            await this.page.locator(locators.CLOSE_ACTIVE_MODAL_ALERT_BTN).click();
        });
    }
}