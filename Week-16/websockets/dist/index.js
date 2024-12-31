"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("User connected");
        //   setInterval(() => {
        //     socket.send("Current price of sol is: " + Math.random());
        //   }, 1000);
        socket.send("Current price of sol is: " + Math.random());
        socket.on("message", (e) => {
            console.log(e.toString());
        });
    });
});
wss.on("error", function () {
    return __awaiter(this, void 0, void 0, function* () { });
});
