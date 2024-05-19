import { allure } from "allure-playwright";
import { BasePage } from "./base-page.ts";
import { TablePageLocators as locators, TablePageData as data } from "../data/table-page-data.ts";
import { Links } from '../config/links.ts';
import { expect } from '@playwright/test'


export class TablePage extends BasePage {
    readonly links = new Links();
    summAllPrice: number = 0
    PAGE_URL = this.links.TABLE;

    async getSummAllPrice(): Promise<number> {
        await allure.step('Получение суммы всех товаров из таблицы "Shopping List"', async() => {
            const cells_table = await this.page.locator(locators.CELLS_SHOPPING_LIST_TABLE).all();
            for (let i = 0; i < cells_table.length; i++) {
                if (i % 2 == 0) {
                    continue;
                }
                else {
                    this.summAllPrice += Number(await cells_table[i].textContent());
                }
            }
        });
            return this.summAllPrice;
    }

    async expectTotalPrice() {
        await allure.step('Проверка значения суммы в таблице', async() => {
            const total = this.page.locator(locators.FOOTER_SHOPPING_LIST_TABLE).last()
            expect(Number(await total.textContent())).toBe(await this.getSummAllPrice());
        });
    }

    async checkRowWithRajName() {
        await allure.step('Отметить чек-бокс в строке с именем Raj', async() => {
            const rows = await this.page.locator(locators.ROWS_TABLE_LETS_HANDLE_IT).all();
            for (let row of rows) {
                let rowText: String[] = await row.allInnerTexts()
                let splitRowText: String[] = rowText[0].split('\t')
                if (splitRowText.includes(data.RAJ_NAME)){
                    await row.getByRole('checkbox').check();
                }
            }
        });
    }
} 