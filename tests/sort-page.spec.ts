import { test } from '@playwright/test';
import { SortPage } from '../pages/sort-page.ts';
import { SortPageData as data } from "../data/sort-page-data.ts";


test('Тест Sort Page', async({page}) => {
    const sortPage = new SortPage(page);
    await sortPage.navigate(sortPage.PAGE_URL);
    await sortPage.moveElementToDone(data.GET_TO_WORK);
    await sortPage.moveElementToDone(data.PICK_UP_GROCERIES);
    await sortPage.moveElementToDone(data.GO_HOME);
    await sortPage.moveElementToDone(data.FALL_ASLEEP);
    await sortPage.moveElementToDo(data.CHECK_EMAIL);
    await sortPage.moveElementToDo(data.TAKE_A_SHOWER);
    await sortPage.moveDragAboveDrop(data.WALK_DOG, data.TAKE_A_SHOWER);
    await sortPage.moveDragUnderDrop(data.CHECK_EMAIL, data.BRUSH_TEETH);
})