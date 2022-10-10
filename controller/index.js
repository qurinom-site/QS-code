const userInfoDataBase = require('../database/model/userInfo')
const userQueryDataBase = require('../database/model/userQuery')
const { checkMobileNumber } = require('./AllHelpingFunctions')

//cloudinary connectivity
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
})

module.exports.userInfo = async function (req, res) {
    try {

        const { name, mobile, email, query } = req.body
        if (!name || !mobile || !email) {
            return res.status(400).json({
                status: 'please enter all the detail'
            })
        }

        if (checkMobileNumber(mobile)) {
            return res.status(400).json({
                status: 'please enter  the correct number'
            })
        }

        const result = await userInfoDataBase.create({
            name: name.toLowerCase(),
            mobile,
            email: email.toLowerCase(),
            query
        })
        if (result) {
            res.status(200).json({
                status: 'info added'
            })
        }

    } catch (err) {

        const data = err.keyPattern
        console.log('key', error.message)
        res.status(400).json({
            status: `${Object.keys(data)[0]} is already register`
        })
    }
}

module.exports.userQuery = async function (req, res) {
    try {
        const { firstname, lastname, mobile, email, query, file } = req.body
        console.log('from query body', req.body)
        if (!firstname || !email) {
            return res.status(400).json({
                status: 'please enter all the detail'
            })
        }
        if (checkMobileNumber(mobile)) {
            return res.status(400).json({
                status: 'please enter the correct number'
            })
        }

        if (email) {
            const result = await userQueryDataBase.find({ email })
            console.log('from email', result)
            if (result.length > 0) return res.status(400).json({
                status: "Email is already register"
            })
        }

        const fileUrlLink = file && await cloudinary.uploader.upload(file)
        const user = userQueryDataBase({
            name: lastname ? `${firstname.toLowerCase()} ${lastname.toLowerCase()}` : firstname.toLowerCase(),
            email: email.toLowerCase(),
            mobile,
            query,
            file: file ? fileUrlLink.url : 'N/A'
        })

        const result = await user.save()
        if (result) {
            res.status(200).json({
                status: 'query added'
            })
        }

    } catch (err) {
        /*  const data = err.keyPattern
         console.log(data)
         console.log('error', err.message)
         console.log('obj',Object?.keys(data)) */
        console.log(err)
        res.status(400).json({
            status: `email is already register`
        })
    }
}



