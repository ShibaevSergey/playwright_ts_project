import { allure } from "allure-playwright";
import { RadioPageLocators as locators, RadioPageData as data} from '../data/radio-page-data.ts';
import { BasePage } from './base-page.ts';
import { expect } from '@playwright/test';
import { ContentType } from "allure-js-commons";
import { Links } from '../config/links.ts';


export class RadioPage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.RADIO;

    async selectRbYesOrNo() {
        await allure.step('Отметить один из RadioButton "Yes" или "No"', async() => {
            const yesAndNoRbLocators = [locators.RB_YES_ANY, locators.RB_NO_ANY];
            await this.page.locator(yesAndNoRbLocators[Math.round(Math.random())]).check();
        });       
    }

    async expectIsCheckedOnlyOneRb() {
        await allure.step('Проверка что можно выбрать только один "Radio Button"', async() => {
            const rbYesOne = this.page.locator(locators.RB_YES_ONE);
            const rbNoOne = this.page.locator(locators.RB_NO_ONE);
            await rbYesOne.check()
            await expect(rbYesOne).toBeChecked();
            await expect(rbNoOne).not.toBeChecked();
            await rbNoOne.check();
            await expect(rbYesOne).not.toBeChecked();
            await expect(rbNoOne).toBeChecked();
        });
    }

    async searchBug() {
        await allure.step('Поиск бага', async() => {
            const rbYesBug = this.page.locator(locators.RB_YES_BUG);
            const rbNoBug = this.page.locator(locators.RB_NO_BUG);
            await rbYesBug.check();
            await expect(rbYesBug).toBeChecked();
            await expect(rbNoBug).not.toBeChecked();
            await rbNoBug.check();
            if (await rbYesBug.isChecked() &&  await rbNoBug.isChecked()) {
                console.log('Bug found, Radio Button "Yes" and Radio Button "No" is checked');
                await allure.attachment('Bug description',
                'Bug found, Radio Button "Yes" and Radio Button "No" is checked',
                ContentType.TEXT);
            }
        });
    }

    async searchCheckedRb() {
        await allure.step('Поиск отмеченного Radio Button', async() => {
            const fooRb = this.page.locator(locators.FOO_RB);
            const barRb = this.page.locator(locators.BAR_RB);
            const radioButtons = [fooRb, barRb];
            for(let i of radioButtons) {
                if(await i.isChecked()) {
                    console.log(`${await i.getAttribute('id')} is checked`);
                    allure.attachment('Выбранный Radio Button', `${await i.getAttribute('id')} is checked`, ContentType.TEXT);
                }
            }
        });
    }

    async expectDisableRbMaybe() {
        await allure.step('Проверка что Radio Button "Maybe" не активен', async() => {
            await expect(this.page.locator(locators.MAYBE_RB)).toBeDisabled();
        });
    }

    async expectCbRememberMeIsChecked() {
        await allure.step('Проверка что чек-бокс "Remember me" отмечен', async() => {
            await expect(this.page.getByLabel(data.CB_REMEMBER_ME_LABEL)).toBeChecked();
        });
    }

    async checkCbIAgree() {
        await allure.step('Отметить чек-бокс "I agree"', async() => {
            await this.page.getByLabel(data.CB_I_AGREE_LABEL).check();
        });
    }
}