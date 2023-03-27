
const PORT = 3001;
const server = require("./app");
const { sequelize } = require("./DB_connection");
const saveApiData = require("./controllers/saveApiData")

server.listen(PORT, async () => {
    await sequelize.sync({ force: true })
    await saveApiData();
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