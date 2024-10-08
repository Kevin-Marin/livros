const livro_controller = require("../controllers/livro.js");
const estudante_controller = require("../controllers/estudante.js");
let nextId = 1

const model = (body, id = nextId++) => {
    if(livro_controller.show(body.livro_id) &&
       estudante_controller.show(body.estudante_id) &&
        body.dataAluguel != undefined &&
        body.dataAluguel != "" &&
        body.dataDevolucao != undefined &&
        body.dataDevolucao != "") {
            return {
                id, 
                livro_id: body.livro_id,
                estudante_id: body.estudante_id,
                dataAluguel: body.dataAluguel,
                dataDevolucao: body.dataDevolucao
            }
        }
}

module.exports = model