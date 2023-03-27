const express = require("express")
const morgan = require("morgan");
const router = require("./routes");
const cors = require("cors")
const { character } = require("./DB_connection")

const server = express();

server.use(express.json())
server.use(cors())
server.use(morgan("dev"))
server.use("/rickandmorty", router)

server.get("/rickandmorty/all", async (req, res) => {
    try {
        const allCharacters = await character.findAll();
        res.status(200).json(allCharacters)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
})

module.exports = server;