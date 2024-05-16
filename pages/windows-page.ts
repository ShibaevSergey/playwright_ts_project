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
        const pagePromise = context.waitForEvent('page');
        await this.clickBtnOpenHomePage();
        const newPage = await pagePromise;
        return newPage;
        
        // await allure.step('Ожидание открытия новой вкладки при клике на кнопку', async() => {
            
        // });
    }

    async clickBtnMultipleWindows() {
        await allure.step('Клик на кнопку "Multiple Windows"', async() => {
            await this.page.locator(locators.BTN_MULTIPLE_WINDOWS).click();
            await this.page.waitForTimeout(500);
        });
    }


}