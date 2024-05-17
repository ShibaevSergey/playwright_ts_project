import { allure } from "allure-playwright";
import { DragPageLocators as locators, DragPageData as data} from '../data/drag-page-data.ts';
import { BasePage } from './base-page.ts';
import { expect } from '@playwright/test';
import { Links } from '../config/links.ts';


export class DragPage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.DRAG;

    async dragAndDropBox() {
        await allure.step('Drag and Drop box', async() => {
            const box = await this.page.locator(locators.DRAG_BOX).boundingBox();
            const dragBox = this.page.locator(locators.DRAG_BOX);
            await dragBox.hover();
            await this.page.mouse.down();
            await this.page.mouse.move(box!.x + 300, box!.y + 300);
            await this.page.mouse.move(box!.x + 300, box!.y + 300);
            await this.page.mouse.up();
        });
    }

    async expectDraggedBox() {
        await allure.step('Проверка перемещения квадрата', async() => {
            const dragBox = this.page.locator(locators.DRAG_BOX);
            await expect(dragBox).toHaveAttribute(data.ATTRIBUTE, data.DRAG_BOX_STYLE_AFTER_DRAG);
        });
    }
}