import { allure } from "allure-playwright";
import {type Page } from '@playwright/test';


export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async navigate(PAGE_URL: string) {
        await allure.step(`Переход на страницу ${PAGE_URL}`, async() => {
            await this.page.goto(PAGE_URL, {waitUntil: 'domcontentloaded'} );
        });
    }

    async goBack() {
        await allure.step('Вернуться назад', async() => {
            await this.page.goBack({waitUntil: 'domcontentloaded'});
        });
    }

    async reload() {
        await allure.step('Перезагрузка страницы', async() => {
            await this.page.reload({waitUntil: 'domcontentloaded'});
        });
    }

    async close() {
        await allure.step(`Закрыть вкладку ${await this.page.title()}`, async() => {
            await this.page.close();
        });
    }    
}

