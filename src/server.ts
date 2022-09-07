import http from "http";
import express, { Express } from "express";

const router: Express = express();

// server
const httpServer = http.createServer(router);
const PORT: number | string = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
