const express = require('express')
const bdd = require('./index.js')
const app = express()
const bodyParser = require('body-parser')
const uuidV4 = require('uuid/v4');

const PORT = 8083


let competitions = []
competitions.push({"nom":"Patisserie","icon":"flask"})
competitions.push({"nom":"DIY","icon":"flask"})
competitions.push({"nom":"Jus divers","icon":"cafe"})
competitions.push({"nom":"Jeux video","icon":"game-controller-a"})
competitions.push({"nom":"Photo","icon":"image"})
competitions.push({"nom":"Chant","icon":"microphone"})
competitions.push({"nom":"Dessin","icon":"flask"})

bdd.initSync('bdd.json')	
bdd.set('utilisateurs',[])	
bdd.set('entreprises',[])	
bdd.set('competitions',competitions)
bdd.set('competitionsEnCours',[])

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

app.use(bodyParser.json())

app.get('/',(request,response) => {
	response.send({'response':'serveur en route'})
})


app.get('/competitions',(request,response) => {
	response.send(bdd.get('competitions'))
})


app.listen(PORT,() => {
    console.log(`ok ${PORT}`)
})