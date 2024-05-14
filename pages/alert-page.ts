import { allure } from "allure-playwright";
import { AlertPageLocators as locators} from '../data/alert-page-data.ts';
import { ContentType } from "allure-js-commons";
import { BasePage } from './base-page.ts';
import { Links } from '../config/links.ts';

export class AlertPage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.ALERT;
    
    async clickBtnSimpleAlert() {
        await allure.step('Клик на кнопку "Simple Alert"', async() => {
            await this.page.locator(locators.ACCEPT_BTN).click();
        });
    }
    
    async waitAndAcceptSimpleAlert() {
        await allure.step('Ожидание простого Alert и его закрытие', async() => {
            this.page.once('dialog', async dialog => {
                dialog.accept();
            });
        });
    }

    async clickBtnConfirmAlert() {
        await allure.step('Клик на кнопку "Confirm Alert"', async() => {
            await this.page.locator(locators.CONFIRM_BTN).click();
        });
    }
    
    async wainAndDismissAlertAndPrintMessage() {
        await allure.step('Ожидание и клик "Нет" в alert + текст уведомления', async() => {
            this.page.once('dialog', async dialog => {
                console.log(dialog.message());
                await allure.attachment('Текст диалога', dialog.message(), ContentType.TEXT);
                await dialog.dismiss();
            });
        });
    }
}