import { allure } from "allure-playwright";
import { BasePage } from "./base-page.ts";
import { ContentType } from "allure-js-commons";
import { expect } from '@playwright/test';
import { SelectPageLocators as locators, SelectPageData as data } from "../data/select-page-data.ts";
import { Links } from '../config/links.ts';
import sample from "underscore/modules/sample.js";

export class SelectPage extends BasePage {
    readonly links = new Links()
    PAGE_URL = this.links.SELECT

    async selectAppleFromFruits() {
        await allure.step('Выбор яблока из выпадающего списка "Фрукты"', async() => {
            await this.page.locator(locators.SELECT_FRUITS).selectOption(data.APPLE);
        })
    }

    async selectSuperherosFromList() {
        await allure.step('Выбор нескольких супергероев из списка', async() => {
            await this.page.locator(locators.MULTISELECT_SUPERHEROS).selectOption(sample(data.SUPERHEROS, 3));
        })
    }
    
    async selectProgrammingLanguage() {
        await allure.step('Выбор языка программирования', async() => {
            await this.page.locator(locators.SELECT_LANG).selectOption({ index: 4 })
        })
    }

    async printAllProgrammingLanguage() {
        await allure.step('Напечатать все элементы выпадающего списка (язык программирования)', async() => {
            let list = await this.page.locator(locators.SELECT_LANG).innerText()
            await allure.attachment('Список языков программирования', list, ContentType.TEXT)
        })
    }

    async selectIndiaCountry() {
        await allure.step('Выбор страны из списка по значению (value)', async() => {
            await this.page.locator(locators.SELECT_COUNTRY).selectOption({ value: data.INDIA_VALUE })
        })
    }

    async expectSelectCountry() {
        await allure.step('Проверка выбранной страны', async() => {
            await expect(this.page.locator(locators.SELECT_COUNTRY)).toHaveValue(data.INDIA_VALUE)
        })
    }
}