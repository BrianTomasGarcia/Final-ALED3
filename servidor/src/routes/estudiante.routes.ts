import { Router } from "express";
import { deleteEstudiante, getEstudiante, getEstudiantes, postEstudiante, putEstudiante } from "../controllers/estudiante.controller";

const router = Router();

router.get('/', getEstudiantes);
router.get('/:id', getEstudiante);
router.delete('/:id', deleteEstudiante);
router.post('/', postEstudiante);
router.put('/:id', putEstudiante );

export default router;