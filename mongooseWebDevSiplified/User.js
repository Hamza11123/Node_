const mongoose = require('mongoose');


// Building Schema For the structure.. 
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Modeling Proc ess of the Schema
module.exports = mongoose.model('User', userSchema);
