const router = require('express').Router()

router.post('/signIn', (req, res, next) => {
    setTimeout(()=>{
        res.send({
            data: {
                message: 'Sign in successful!'
            }
        })
    },2000)
})

module.exports = router