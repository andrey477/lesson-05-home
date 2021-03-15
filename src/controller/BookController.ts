import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Book } from "../entity/Book";
import { App } from "../types/app";

const bookRepository = getRepository(Book)

export const addBook: App.Action = async (req, res) => {
    await bookRepository.save(req.body)
    res.json(req.body)
}

export const getBooks: App.Action = async (req, res) => {
    const data = await bookRepository.find();
    res.json(data)
}