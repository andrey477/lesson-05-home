import { getRepository } from "typeorm";
import { Author } from "../entity/Author";
import { App } from "../types/app";

const authorRepository = getRepository(Author)

export const addAuthor: App.Action = async (req, res) => {
    await authorRepository.save(req.body)
    res.json(req.body)
}

export const getAuthors: App.Action = async (req, res) => {
    const data = await authorRepository.find();
    res.json(data)
}