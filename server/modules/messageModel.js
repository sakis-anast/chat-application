const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
        message: {
    		type: String,
    		required: true
    	},
    	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        date: {
            type: Date,
            default: Date.now    
    }})
const Message = mongoose.model("Message", MessageSchema);

module.exports= Message;