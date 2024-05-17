import { allure } from "allure-playwright";
import { DropPageLocators as locators, DropPageData as data} from '../data/drop-page-data.ts';
import { BasePage } from './base-page.ts';
import { expect } from '@playwright/test';
import { Links } from '../config/links.ts';


export class DropPage extends BasePage {
    readonly links = new Links();
    PAGE_URL = this.links.DROP;
    
}