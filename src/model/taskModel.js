const mongoose = require('../config/taskConfig')
const schema = mongoose.Schema

const TaskSchema = new schema({
    macaddress: {
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    km: {
        type: String,
        required: true
    },
    exchange: {
        type: String,
        required: true
    },
    doors: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    shield: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    owner: {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        },
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('CarSale', TaskSchema)