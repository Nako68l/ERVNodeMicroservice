import * as express from "express";
import * as routes from "./index.route"

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes()
    }

    public app;


    config(): any {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
    }

    routes(): any {
        this.app.use(routes);
    }
}

export default new App().app;