import { addAuthor, getAuthors } from "./controller/AuthorController";
import { addBook, getBooks } from "./controller/BookController";
import { App } from "./types/app";

export const Routes: App.Route[] = [
    {
        method: 'get',
        path: '/books',
        action: getBooks
    },
    {
        method: 'post',
        path: '/books',
        action: addBook
    },
    {
        method: 'get',
        path: '/authors',
        action: getAuthors
    },
    {
        method: 'post',
        path: '/authors',
        action: addAuthor
    }
]