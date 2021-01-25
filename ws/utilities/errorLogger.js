const errorLogger = (err, req, res, next) => {
    console.log(err)
    setTimeout(()=>{
        res.status(err.status).send(err.body)
    }, 2000)
}

module.exports = errorLogger