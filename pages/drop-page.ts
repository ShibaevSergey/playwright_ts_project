import { allure } from "allure-playwright";
import { DropPageLocators as locators, DropPageData as data} from '../data/drop-page-data.ts';
import { BasePage } from './base-page.ts';
import { expect } from '@playwright/test';
import { Links } from '../config/links.ts';


export class DropPage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.DROP;
    
    async expectTextBeforeDragAndDrop() {
        await allure.step('Проверка текста до перемещения', async() => {
            await expect(this.page.locator(locators.DROPPABLE)).toContainText(data.TEXT_BEFORE_DROP);
        });
    }

    async dragAndDropFirstBoxToSecondBox() {
        await allure.step('Перемещение одного квадрата в другой', async() => {
            const dragBox = this.page.locator(locators.DRAGGABLE);
            const dropBox = this.page.locator(locators.DROPPABLE);
            await dragBox.dragTo(dropBox);
        });
    }

    async expectTextAfterDragAndDrop() {
        await allure.step('Проверка текста после перемещения', async() => {
            await expect(this.page.locator(locators.DROPPABLE)).toContainText(data.TEXT_AFTER_DROP);
        });
    }
}