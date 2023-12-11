"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putEstudiante = exports.postEstudiante = exports.deleteEstudiante = exports.getEstudiante = exports.getEstudiantes = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getEstudiantes = (req, res) => {
    connection_1.default.query('SELECT * FROM estudiante', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getEstudiantes = getEstudiantes;
const getEstudiante = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM estudiante WHERE dni = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getEstudiante = getEstudiante;
const deleteEstudiante = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM estudiante WHERE dni = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Estudiante eliminado de la base de datos"
        });
    });
};
exports.deleteEstudiante = deleteEstudiante;
const postEstudiante = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO estudiante set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Estudiante agregado de la base de datos"
        });
    });
};
exports.postEstudiante = postEstudiante;
const putEstudiante = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE estudiante set ?  WHERE dni = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Estudiante actualizado con exito"
        });
    });
};
exports.putEstudiante = putEstudiante;
