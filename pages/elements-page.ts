import { allure } from "allure-playwright";
import { ElementsPageLocators as locators, ElementsPageData as data} from '../data/elements-page-data.ts';
import { BasePage } from './base-page.ts';
import { expect, Locator } from '@playwright/test';
import { Links } from '../config/links.ts';
import { ContentType } from "allure-js-commons";
import 'dotenv/config'


export class ElementsPage extends BasePage {
    readonly links = new Links();
    linksRepos: Locator[];
    PAGE_URL = this.links.ELEMENTS;

    async fillGithubNickname() {
        await allure.step('Ввод GitHub nickname', async() => {
            await this.page.getByPlaceholder(data.INPUT_PLACEHOLDER).fill(String(process.env.GH_NICK));
        });
    }

    async clickBtnSearch() {
        await allure.step('Клик на кнопку "Search"', async() => {
            await this.page.locator(locators.BTN_SEARCH).click();
        });
    }

    async expectImgProfile() {
        await allure.step('Проверка отображения изображения профилья GitHub', async() => {
            await this.page.waitForSelector(locators.IMG);
            await expect(this.page.locator(locators.IMG)).toBeVisible();
        });
    }

    async printAllInfoAboutProfile() {
        await allure.step('Вывести всю доступную информацию о профиле', async() => {
            let allureText: string[] = []
            const profileName = await this.page.getByPlaceholder(data.INPUT_PLACEHOLDER).inputValue();
            console.log(`Никнейм GitHub — ${profileName}`);
            allureText.push(`Никнейм GitHub — ${profileName}`);
            const tagsName = await this.page.locator(locators.TAGS_NAMES).all();
            const tagsValues = await this.page.locator(locators.TAGS_VALUES).all();
            for(let i = 0; i < tagsName.length; i++) {
                console.log(`${await tagsName[i].innerText()} ${await tagsValues[i].innerText()}`);
                allureText.push(`${await tagsName[i].innerText()} ${await tagsValues[i].innerText()}`);
            }
            await this.page.waitForSelector(locators.GIT_REPOS);
            this.linksRepos = await this.page.locator(locators.GIT_REPOS).all();
            for(let i of this.linksRepos) {
                console.log(`Ссылка на репозиторий: ${await i.innerText()}`);
                allureText.push(`Ссылка на репозиторий: ${await i.innerText()}`);
            }
            allure.attachment('Текст со страницы', allureText.join('\n'), ContentType.TEXT);
        });
    }

    async expectRepoLinksCount() {
        await allure.step('Проверка количества ссылок на репозитории', async() => {
            expect(this.linksRepos.length).toBe(Number(process.env.GH_COUNT_PUBLICK_REPO));
        });
    }
}
