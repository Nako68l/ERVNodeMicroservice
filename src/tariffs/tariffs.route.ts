import { Router } from "express";
import * as tariffsController from "./tariffs.controller"

const router: Router = Router(); // eslint-disable-line new-cap

router.route('/')
    .post(tariffsController.getTourismTariffs)

export const tourismTariffs = router