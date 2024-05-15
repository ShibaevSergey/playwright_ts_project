import { allure } from "allure-playwright";
import { FramePageLocators as locators, FramePageData as data} from '../data/frame-page-data.ts';
import { BasePage } from './base-page.ts';
import { Links } from '../config/links.ts';


export class FramePage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.FRAME;

    async inputFirsNameInFrame() {
        await allure.step('Ввод имени в поле "First Name" фрейма "firstFr"', async() => {
            await this.page.frameLocator(locators.FIRST_FRAME)
            .getByPlaceholder(data.FIRST_NAME_PLACEHOLDER).fill(data.FIRST_NAME);
        });
    }

    async inputLastNameInFrame() {
        await allure.step('Ввод имени в поле "Last Name" фрейма "firstFr"', async() => {
            await this.page.frameLocator(locators.FIRST_FRAME)
            .getByPlaceholder(data.LAST_NAME_PLACEHOLDER).fill(data.LAST_NAME);
        });
    }

    async inputEmailInInnerFrame() {
        await allure.step('Ввод email в поле "Email" внутреннего фрейма', async() => {
            await this.page.frameLocator(locators.FIRST_FRAME)
            .frameLocator(locators.INNER_FRAME)
            .getByPlaceholder(data.EMAIL_PLACEHOLDER).fill(data.EMAIL);
        });
    }
}