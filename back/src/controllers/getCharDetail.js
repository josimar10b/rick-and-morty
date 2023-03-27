const URL = "http://rickandmortyapi.com/api/character/";
const axios = require("axios");

async function getCharDetail (req, res) {
    //localhost:3001/rickandmorty/onsearch/id
    const { detailId } = req.params;
    try {
        const response = await axios(URL + detailId);
        const character = {
            id: response.data.id,
            name: response.data.name,
            image: response.data.image,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin?.name,
            status: response.data.status
        }
        res.status(200).json(character)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getCharDetail;






    //  USANDO PROMISES
    // const { detailId } = req.params;
    // axios(URL + detailId).then((response) => {
    //     const character = {
    //         id: response.data.id,
    //         name: response.data.name,
    //         image: response.data.image,
    //         gender: response.data.gender,
    //         species: response.data.species,
    //         origin: response.data.origin?.name,
    //         status: response.data.status
    //     };
    //     res.status(200).json(character)
    // }, (error) => {res.status(500).json(error.message)}
    // )





// const axios = require("axios")

// const getCharDetail = (res, id) => {
//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data) => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin?.name,
//             status: data.status
//         }
//         res
//             .writeHead(200, {"Content.type": "application/json"})
//             .end(JSON.stringify(character))
//     })
//     .catch((error) => res.writeHead(500, {"Content-Type": "text/plain"})
//         .end(`Personaje con id ${id} no encontrado`))
// }

// module.exports = getCharDetail;