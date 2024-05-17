import { allure } from "allure-playwright";
import { BasePage } from "./base-page.ts";
import { MultiselectPageData as data } from "../data/multiselect-page-data.ts";
import sample from "underscore/modules/sample.js";
import { Links } from '../config/links.ts';
import { expect } from '@playwright/test'


export class MultiselectPage extends BasePage {
    readonly links = new Links();
    items = sample(data.ITEMS, 3);
    PAGE_URL = this.links.MULTISELECT;

    async selectMultipleItem() {
        await allure.step('Выбрать три элемента', async() => {
            await this.page.keyboard.down('Control');
            try{
                for (let i of this.items) {
                    await this.page.locator('div').filter( { hasText: i } ).click()
                }
            }
            finally{
                await this.page.keyboard.up('Control');
            }
        });
    }

    async expectElementsIsSelected() {
        await allure.step('Проверка того, что элементы отмечены', async() => {
            for (let i of this.items) {
                await expect(this.page.locator('div').filter( { hasText: i } )).toHaveClass(data.VALUE_ATTRIBUTE);
            }
        });
    }
}