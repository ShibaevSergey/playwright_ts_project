import { ru, Faker } from '@faker-js/faker';


export const InputPageLocators = {
    FULL_NAME: '#fullName',
    APPEND_TEXT: '#join',
    TEXT_BOX_FOR_GET_TEXT: '#getMe',
    CLEAR_TBX: '#clearMe',
    DISABLE_TBX: '#noEdit',
    DONT_WRITE: '#dontwrite',
}

export const faker = new Faker({
    locale: [ru],
})

export const InputPageData = {
    FIRST_NAME: faker.person.firstName(),
    LAST_NAME: faker.person.lastName(),
    GETTING_TEXT: 'ortonikc',
    READONLY: 'readonly',
    TEXT_READONLY: 'This text is readonly',
}