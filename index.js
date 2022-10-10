const express = require('express')
const app = express()
const { dataBaseConnectivity } = require('./database/connectivity')
require('dotenv').config()
const fileupload = require('express-fileupload')
const cors = require('cors')




//middlewears
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use('/qurinom-solutions/api/v1', require('./router/index.js'))

app.get('/',async(req,res)=>{
    res.json({
        message:'Success',
        status:true
    })
})

//connectivity
const Start = async () => {
    try {
        dataBaseConnectivity(process.env.MONGODB_CONNECTIVITY)
        app.listen(process.env.PORT || 4000, () => {
            console.log('connect')
        })
    } catch {
        console.log('not connect...')
    }
}

Start()