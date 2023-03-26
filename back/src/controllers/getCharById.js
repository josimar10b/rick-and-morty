const axios = require("axios")

const getCharById =  (res, id) => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.data)
        .then((data) => {
            const character = {
                id: data.id,
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species
            }
            res
                .writeHead(200, {"Content.type": "application/json"})
                .end(JSON.stringify(character))
        })
        .catch((error) => res.writeHead(500, {"Content-Type": "text/plain"})
            .end(`Personaje con id ${id} no encontrado`))
}

module.exports = getCharById;