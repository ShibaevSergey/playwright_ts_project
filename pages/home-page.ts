import { allure } from "allure-playwright";
import { BasePage } from './base-page.ts';
import { ContentType } from "allure-js-commons";

export class HomePage extends BasePage {
    async printTitlePage() {
        await allure.step('Напечатать заголовок страницы', async() => {
            this.page.waitForTimeout(1000);
            let title = await this.page.title();
            console.log(title);
            allure.attachment('Заголовок страницы', title, ContentType.TEXT);
        });
    }
}