import { Router } from "express";
import * as tariffsController from "./tariffs.controller"
import tariffValidation from "./tariffs.validation";

const router: Router = Router(); // eslint-disable-line new-cap
const validate = require('express-validation')

router.route('/')
    .post(validate(tariffValidation), tariffsController.getTourismTariffs)

export const tourismTariffs = router