const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    //res.send("Olá Mundo")
    res.json({"title": "Hello World"})
})

router.get('/test', (req, res) => {
    const data = {
        name: "Osvaldo",
        age: 34
    }
    res.json(data)
})


module.exports = router