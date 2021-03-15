import { injectable } from "tsyringe";
import { App } from "../types/app";

@injectable()
export class ConfigServiceJson implements App.Config.Service {
    port: number
    constructor() {
        const data = require("../../config/config.json")
        this.port = data.port
    }
}