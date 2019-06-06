module.exports = {
    create: (req, res) => {
        let db = req.app.get('db')
        db.createProduct(req.body).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({ errorMessage: 'oh no! an error!'})
            console.log(err)
        })
    },

    getOne: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        db.readProduct(id).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send({ errorMessage: 'oh no! an error!'})
            console.log(err)
        })
    }, 

    getAll: (req, res) => {
        let db = req.app.get('db')
        db.readProducts().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({ errorMessage: 'oh no! an error!'})
            console.log(err)
        })
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        let{desc} = req.query
        db.updateProduct({id, desc}).then((response) => {
            res.send(response)
        }).catch(err => {
            res.status(500).send({ errorMessage: 'oh no! an error!'})
            console.log(err)
        })
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params 
        db.deleteProduct(id).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({ errorMessage: 'oh no! an error!'})
            console.log(err)
        })
    }
}