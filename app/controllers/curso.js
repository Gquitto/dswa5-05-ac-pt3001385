var cursos = [
    { "_id": 1, "nome": "Engenharia de Produção", "coord": "fabio.teixeira@ifsp.edu.br" },
    { "_id": 2, "nome": "Tecnologia em Análise e Desenvolvimento de Sistemas", "coord": "fabiano.teixeira@ifsp.edu.br" },
    { "_id": 3, "nome": "Licenciatura em Letras Português/Inglês", "coord": "melissa.teixeira@ifsp.edu.br" },
    { "_id": 4, "nome": "Tecnologia em Gestão Pública", "coord": "melissa.teixeira@ifsp.edu.br" }
]

module.exports = function () {
    var controller = {};
    controller.listaCursos = function (req, res) {
        res.json(cursos);
    };
    controller.obtemCurso = function (req, res) {
        console.log('Selecionou o curso: ' + req.params.id);
        var idCurso = req.params.id;
        var curso = cursos.filter(function (curso) {
            return curso._id == idCurso;
        })[0];
        curso ? res.json(curso) : res.status(404).send('Curso não encontrado!');
    };
    return controller;
};