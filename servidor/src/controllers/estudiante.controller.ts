import { Request, Response } from "express";
import connection from "../db/connection";

export const getEstudiantes = (req: Request, res: Response) => {

    connection.query('SELECT * FROM estudiante', (err, data) =>{
        if(err) throw err;
        res.json(data)
    })

}

export const getEstudiante = (req: Request, res: Response) => {
    const { id } = req.params;
    connection.query('SELECT * FROM estudiante WHERE dni = ?', id, (err, data) =>{
        if(err) throw err;
       res.json(data[0]);
    })
   
}

export const deleteEstudiante = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM estudiante WHERE dni = ?', id, (err, data) =>{
        if(err) throw err;
        res.json({
            msg: "Estudiante eliminado de la base de datos"
        })
    })
}

export const postEstudiante = (req: Request, res: Response) => {
    const {body} = req;

    connection.query('INSERT INTO estudiante set ?', [body], (err, data) =>{
        if(err) throw err;
        res.json({
            msg: "Estudiante agregado de la base de datos"
        })
    })
    
}

export const putEstudiante = (req: Request, res: Response) => {
    const {body} = req;
    const {id} = req.params;

    connection.query('UPDATE estudiante set ?  WHERE dni = ?', [body, id], (err, data) => {
        if(err) throw err;

        res.json({
            msg: "Estudiante actualizado con exito"
        })
    })

}