import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './routes/web';
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8081;

//config view engine
configViewEngine(app);

//init web route
initWebRoute(app);

app.listen(PORT, () => {
    console.log(`>>> Web is running on the port:${PORT}`);
})