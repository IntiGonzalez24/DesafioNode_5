import { Router } from "express";
import {
     getAllJoyasHateoas,
     getPaginatedJoyas,
     getJoyasFilter,
     
     } from "../src/controllers/joyas.controller.js";


const router = Router();

router.get('/joyas_with_hateoas',getAllJoyasHateoas);
router.get('/joyas',getAllJoyasHateoas)
router.get('/joyas/filtros',getJoyasFilter)

export default router;