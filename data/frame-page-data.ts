import { ru, Faker, fa } from '@faker-js/faker';


export const FramePageLocators = {
    FIRST_FRAME: 'iframe[id="firstFr"]',
    INNER_FRAME: 'app-frame-content iframe',
}

export const faker = new Faker({
    locale: [ru],
})

export const FramePageData = {
    FIRST_NAME_PLACEHOLDER: 'Enter name',
    FIRST_NAME: faker.person.firstName(),
    LAST_NAME_PLACEHOLDER: 'Enter email',
    LAST_NAME: faker.person.lastName(),
    EMAIL_PLACEHOLDER: 'Enter email',
    EMAIL: faker.internet.email(),
}