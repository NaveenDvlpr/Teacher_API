const mongoose = require('mongoose');


const TeacherSchema = new mongoose.Schema({
    TeacherId: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    Expertises: {
        type: Array
    },
    Salary: {
        type: Number,
        default: 30000
    },
    Address: {
        type: String
    }, 
    Mobile: {
        type: Number,
        required: true
    }
});

const teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = teacher;