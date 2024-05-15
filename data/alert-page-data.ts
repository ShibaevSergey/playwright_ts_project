import { ru, Faker } from '@faker-js/faker';


export const AlertPageLocators = {
    ACCEPT_BTN: '#accept',
    CONFIRM_BTN: '#confirm',
    PROMPT_BTN: '#prompt',
    MODERN_BTN: '#modern',
    MY_NAME: '#myName',
    ACTIVE_MODAL_ALERT: '.card-content .is-active .card-content',
    CLOSE_ACTIVE_MODAL_ALERT_BTN: '.card-content .is-active .modal-close',
}


export const faker = new Faker({
    locale: [ru],
})


export const AlertPageData = {
    NAME: faker.person.firstName(),
    TEXT_MODERN_ALERT: 'Modern Alert - Some people address me as sweet alert as well ',
}