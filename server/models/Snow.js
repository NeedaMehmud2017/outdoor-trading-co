const { Schema, model } = require('mongoose');


const snowSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    condition: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    image_id: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Snow = model('Snow', snowSchema);

module.exports = Snow;