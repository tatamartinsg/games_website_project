const ControllerGame = require('../api/controllers/ControllerGame.js')
const express = require('express')
const router = express.Router()

router.get('/games-imagens', async (req, res) => {
    try{
        const allGames = await ControllerGame.getGamesControl()
        res.json(allGames)
    } catch(error){
        res.json(error)
    }

})
router.get('/game/:id', async (req,res) => {
    try{
            
        const idJogo = req.params.id
        console.log(idJogo)

        const jogoById = await ControllerGame.getGameByIdControl(idJogo)
        const categoriasGameById = await ControllerGame.getCategoriasGameByIdControl(idJogo)
        const plataformasGameById = await ControllerGame.getPlataformasGameByIdControl(idJogo)
        const classificacaoGameById = await ControllerGame.getClassificacaoGameByIdControl(idJogo)
        const descricaoClassificacaoById = await ControllerGame.getDescricaoClassificacaoGameByIdControl(idJogo)

        const resultadoFinal = jogoById
        
        const categorias = []
        const descricaoClassificacao = []

        for (let i = 0; i < categoriasGameById.length; i++) {
            categorias.push(categoriasGameById[i].nomeCategoria)
        }
        for (let i = 0; i < descricaoClassificacaoById.length; i++) {
            descricaoClassificacao.push(descricaoClassificacaoById[i].descricao)
        }

        classificacaoGameById[0].descricao = descricaoClassificacao
        resultadoFinal[0].categorias = categorias
        resultadoFinal[0].plataformas = plataformasGameById
        resultadoFinal[0].classificacao = classificacaoGameById
        
        res.json(resultadoFinal)
    } catch(error){
        res.json(error)
    }

    
})
router.get('/categorias/:nomeCategorias', async (req,res) => {
    try{
        const nomeCategoria = req.params.nomeCategorias
        const result = await ControllerGame.getGamesByCategoriaControl(nomeCategoria)
        res.json(result)
    }catch(error){
        res.json(error)
    }
})
module.exports = router
