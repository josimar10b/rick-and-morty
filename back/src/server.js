
const http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");
// const getCharById = require("./controllers/getCharById");
// const getCharDetail = require("./controllers/getCharDetail");
const PORT = 3001;

http
    .createServer((req, res) => {

        res.setHeader("Access-Control-Allow-Origin", "*");
        const id = req.url.split("/").pop();

        // if (req.url.includes("rickandmorty/character")){
        //     const id = req.url.split("/").pop();
        //     const character = characters.find(char => char.id === Number(id));

        //     res
        //         .writeHead(200, {"Content-type": "Application/json"})
        //         .end(JSON.stringify(character))

        // }

        if (req.url.includes("onsearch")) {
            getCharById(res, id);
        };

        if (req.url.includes("detail")) {
            getCharDetail(res, id)
        }
    })
    .listen(PORT, "localhost")