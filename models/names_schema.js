const mongoose = require("mongoose")
//validates it number
//validate if value has been passed
//find by id --> document then id is found id is found else

const validate = require("mongoose-validator")

var colorValidator = [
    validate({
        validator: 'matches',
        arguments: ['^#([A-Fa-f0-9]{6})$'],
        message: 'Color should be HexColor of length > 6'
    })
];

const nameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    budget: {
        type: Number,
        trim: true,
        required: true,
    },
    backgroundColor: {
        type: String,
        trim: true,
        required: true,
        minlength: 6,
        validate: colorValidator,
    }
}, {collection: 'myBudget'})

module.exports = mongoose.model('myBudget', nameSchema)