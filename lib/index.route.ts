import { Router, Request, Response } from "express";
import { tourismTariffs } from "./tarrifs/tariffs.route"

const router: Router = Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req: Request, res: Response) =>
    res.send('OK')
);

// // mount user routes at /users
router.use('/tourism_tariffs', tourismTariffs);

// // mount auth routes at /auth
// router.use('/auth', authRoutes);

module.exports = router;