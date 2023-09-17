//index.js
(async () => {
    const database = require('./db');
    const Filme = require('./filme');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Filme.create({
            nome: 'Eu sou demais',
            preco: 10,
            descricao: 'respeita o papai'
        })

        // Read, depois do findALL basta usar algum número para arrumar a posição do array ou objeto, tanto faz como queira chamar.
        // const filmes = await Filme.findAll();
        // console.log(filmes);

        // UPDATE
        // const filme = await Filme.findByPk(1);
        // console.log(filme);
        // filme.nome = "A vida de ERIC :)";

        // const resultadoSalvo = await filme.save();
        // console.log(resultadoSalvo);
        // UPDATE

        //DELETE
        //Filme.destroy({ where: { id: 1 }});

        //const filme = await filme.findByPk(1);
        //filme.destroy();
        //DELETE

        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
        //teste
    }
})();