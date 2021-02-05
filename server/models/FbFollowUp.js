const mongoose = require('mongoose');

const FbFollowUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    post: {
        type: String,        
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    
    date: {
        type: Date,        
        required: true,
    },
    comment: {
        type: String,        
        required: true,
    },
});

const FollowUpModel = mongoose.model('FollowUp', FbFollowUpSchema)

module.exports = FollowUpModel;