import { allure } from "allure-playwright";
import {type Page, type Locator } from '@playwright/test';


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

    async pause(timeout: number) {
        await allure.step(`Пауза на ${timeout} миллисекунд`, async() => {
            await this.page.waitForTimeout(timeout);
        });
    }

    async drag_and_drop(source: Locator, target: Locator) {
        await allure.step('Перенос одного элемента к другому', async() => {
            await source.hover();
            await this.page.mouse.down();
            await target.hover();
            await target.hover();
            await this.page.mouse.up();
        })
    }
}

