//index.js
(async () => {
    const database = require('./db');
    const Filme = require('./filme');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Filme.create({
            nome: 'Curtindo a Vida Adoidado',
            preco: 150,
            descricao: 'Um dos filmes bons antigos! No último semestre do curso do colégio, Ferris Bueller sente um incontrolável desejo de matar a aula e planeja um grande programa na cidade com sua namorada, seu melhor amigo e uma Ferrari.'
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
        // Filme.destroy({ where: { id: 0 }});

        //const filme = await filme.findByPk(0);
        //filme.destroy();
        //DELETE

        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
        //teste
    }
})();