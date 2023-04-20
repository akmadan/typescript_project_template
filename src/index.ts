
import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/routes";

const app: Express = express();
const server = http.createServer(app);


// Express Configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('PORT', process.env.PORT || 3000);
app.set("BASE_URL", process.env.BASE_URL || "localhost");

dotenv.config();
if (process.env.NODE_ENV === 'dev') {
    app.get('/dev/api', router);
}
else {
    app.get('/api', router);
}

try {
    const port: Number = app.get('PORT');
    const baseURL: String = app.get("BASE_URL");
    server.listen(port, (): void => {
        console.log("Server is listening");
    })

} catch (error) {
    console.log(error);

}


export default server;