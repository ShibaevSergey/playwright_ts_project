import { allure } from "allure-playwright";
import { WindowsPageLocators as locators, WindowsPageData as data} from '../data/windows-page-data.ts';
import { BasePage } from './base-page.ts';
import { expect, BrowserContext, Page } from '@playwright/test';
import { ContentType } from "allure-js-commons";
import { Links } from '../config/links.ts';


export class WindowsPage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.WINDOWS;

    async clickBtnOpenHomePage() {
        await allure.step('Клик на кнопку "Open Home Page"', async() => {
            await this.page.locator(locators.BTN_OPEN_HOME_PAGE).click();
        });
    }

    async waitNewTab(context: BrowserContext) {
        return allure.step('Ожидание открытия новой вкладки при клике на кнопку', async() => {
            const pagePromise = context.waitForEvent('page');
            await this.clickBtnOpenHomePage();
            const newPage = await pagePromise;
            return newPage;
        });
    }

    async clickBtnMultipleWindows() {
        await allure.step('Клик на кнопку "Multiple Windows"', async() => {
            await this.page.locator(locators.BTN_MULTIPLE_WINDOWS).click();
            await this.page.waitForTimeout(500);
        });
    }

    async expectUrlOpenTabs(context: BrowserContext) {
        await allure.step('Проверка адресов открытых вкладок', async() => {
            const listTabs = context.pages();
            for(let i = 0; i < listTabs.length; i++) {
                await expect(listTabs[i]).toHaveURL(data.LIST_URLS[i]);
            }
        });
    }

    async closeAllTabs(context: BrowserContext) {
        await allure.step('Закрытие всех вкладок', async() => {
            const listTabs = context.pages();
            for(let i of listTabs) {
                i.close();
            }
        });
    }
}