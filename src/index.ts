import "reflect-metadata";
import "./bootstrap"
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import { Service } from "./enum/service";
import { container } from "tsyringe";
import { App } from "./types/app";
import { Book } from "./entity/Book";

const config: App.Config.Service = container.resolve(Service.Config)

createConnection().then(async connection => {
    const { Routes } = require("./routes")

    // create express app
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req: Request, res: Response) => {
        res.json({
            a: 1,
            b: 2
        })
    })

    Routes.forEach(route => {
        app[route.method](route.path, route.action)
    })

    // register express routes from defined application routes
    // Routes.forEach(route => {
    //     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    //         const result = (new (route.controller as any))[route.action](req, res, next);
    //         if (result instanceof Promise) {
    //             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

    //         } else if (result !== null && result !== undefined) {
    //             res.json(result);
    //         }
    //     });
    // });

    // setup express app here
    // ...

    // start express server
    app.listen(config.port, () => {
        console.log(`Express server has started on port ${config.port}. Open http://localhost:${config.port}/ to see results`);
    });

    // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     age: 27
    // }));
    // await connection.manager.save(connection.manager.create(Book, {
    //     title: "1 book",
    //     year: 2000
    // }));



}).catch(error => console.log(error));
