import express from 'express';
import routesEstudiantes from '../routes/estudiante.routes';
import connection from '../db/connection';
import cors from 'cors';

class Server{
    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puerto ', this.port);
        })
    }

    middlewares(){
        this.app.use(express.json());

        this.app.use(cors())
    }

    routes(){
        this.app.use('/api/estudiantes', routesEstudiantes);
    }

    conectarDB(){
        connection.connect((err) => {
            if(err) throw err;
            console.log('Conexion a la base de datos exitosa');
        })
    }
}

export default Server;

