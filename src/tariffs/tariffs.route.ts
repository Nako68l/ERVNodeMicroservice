import { Router } from "express";
import * as tarrifsController from "./tariffs.controller"

const router: Router = Router(); // eslint-disable-line new-cap

router.route('/')
    .post(tarrifsController.getTourismTariffs)

export const tourismTariffs = router;