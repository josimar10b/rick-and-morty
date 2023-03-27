
const express = require("express")
const morgan = require("morgan");
const router = require("./routes");
const PORT = 3001;
const server = express();
const cors = require("cors")

server.use(express.json())
server.use(cors())
server.use(morgan("dev"))
server.use("/rickandmorty", router)

server.listen(PORT, () => {
    console.log("Server raised in port " + PORT);
})

// http
//     .createServer((req, res) => {

//         res.setHeader("Access-Control-Allow-Origin", "*");
//         const id = req.url.split("/").pop();

//         // if (req.url.includes("rickandmorty/character")){
//         //     const id = req.url.split("/").pop();
//         //     const character = characters.find(char => char.id === Number(id));

//         //     res
//         //         .writeHead(200, {"Content-type": "Application/json"})
//         //         .end(JSON.stringify(character))

//         // }

//         if (req.url.includes("onsearch")) {
//             getCharById(res, id);
//         };

//         if (req.url.includes("detail")) {
//             getCharDetail(res, id)
//         }
//     })
//     .listen(PORT, "localhost")