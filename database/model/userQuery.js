const mongoose = require('mongoose')
const playList = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please entre the name'],
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'please enter the email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please enter valid email'],
    },
    mobile: {
        //required: [true, 'please enter the mobile number'],
        type: Number,
        //unique: true,
        //trim: true,
    },
    query: {
        type: String,
        default: 'N/A'
    },
    file: {
        type: String,
        default: 'N/A'
    }
})

module.exports = mongoose.model('userQuery', playList)