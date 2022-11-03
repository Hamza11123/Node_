const mongoose = require('mongoose');
const file = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    realName: {
        type: String,
        required: true
    },
    
    password: String,

    downloadCount: {
        type: Number,
        required: true,
        default: 0
    }
});
module.exports = mongoose.model("File", file);