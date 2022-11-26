import {Express, Request, Response} from "express";
import path from 'path'

module.exports = (app: Express) => {
    return app.get('/', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../../pages/Hello express.html'));
    })
}
