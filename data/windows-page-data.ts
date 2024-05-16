import { Links } from '../config/links.ts';


export const WindowsPageLocators = {
    BTN_OPEN_HOME_PAGE: '#home',
    BTN_MULTIPLE_WINDOWS: '#multi',
}

const links = new Links()

export const WindowsPageData = {
    LIST_URLS: [
        links.WINDOWS,
        links.ALERT,
        links.SELECT,
    ]
}