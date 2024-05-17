import { allure } from "allure-playwright";
import { BasePage } from "./base-page.ts";
import { SortPageLocators as locators, SortPageData as data } from "../data/sort-page-data.ts";
import { Links } from '../config/links.ts';
import { type Locator } from '@playwright/test'


export class SortPage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.SORT;

    async moveElementToDone(elementName: string) {
        await allure.step(`Перемещение элемента ${elementName} в блок ${data.DONE}`, async() => {
            const dragElement = this.page.getByText(elementName);
            const doneElements = this.page.locator(locators.DONE_ELEMENTS);
            const listDoneElements = await doneElements.all()
            let dropTarget: Locator;
            if (listDoneElements.length != 0) {
                dropTarget = doneElements.first();
            }
            else {
                dropTarget = this.page.locator(locators.EMPTY_DONE_ELEMENTS_GROUP);
            }
            await this.drag_and_drop(dragElement, dropTarget)
            await this.pause(500);
        });
    }

    async moveElementToDo(elementName: string) {
        await allure.step(`Перемещение элемента ${elementName} в блок ${data.TO_DO}`, async() => {
            const dragElement = this.page.getByText(elementName);
            const toDoElements = this.page.locator(locators.TO_DO_ELEMENTS);
            const listToDoElements = await toDoElements.all()
            let dropTarget: Locator;
            if (listToDoElements.length != 0) {
                dropTarget = toDoElements.first();
            }
            else {
                dropTarget = this.page.locator(locators.EMPTY_TO_DO_ELEMENTS_GROUP);
            }
            await this.drag_and_drop(dragElement, dropTarget);
            await this.pause(500);
        });
    }

    async moveDragUnderDrop(dragElement: string, dropElement: string) {
        await allure.step(`Перенос элемента ${dragElement} под элемент ${dropElement}`, async() => {
            const drag = this.page.getByText(dragElement);
            const drop = this.page.getByText(dropElement);
            const box = await drop.boundingBox();
            await drag.hover();
            await this.page.mouse.down();
            await this.page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height);
            await this.page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height);
            await this.page.mouse.up();
            await this.pause(500);
        });
    }

    async moveDragAboveDrop(dragElement: string, dropElement: string) {
        await allure.step(`Перенос элемента ${dragElement} над элементом ${dropElement}`, async() => {
            const drag = this.page.getByText(dragElement);
            const drop = this.page.getByText(dropElement);
            const box = await drop.boundingBox();
            await drag.hover();
            await this.page.mouse.down();
            await this.page.mouse.move(box!.x, box!.y);
            await this.page.mouse.move(box!.x, box!.y);
            await this.page.mouse.up();
            await this.pause(500);
        });
    }
}