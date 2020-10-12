const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}, { 
    timestamps: true 
}
)

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket