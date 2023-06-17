const express = require('express');
const Teacher = require('../models/teacherSchema');

const app = express();

app.post('/', async (req, res) => {
    try {
        const teacher = await Teacher.create(req.body);
        res.status(200).json(teacher);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

app.get('/', async (req, res) => {
    try {
        const teachers = await Teacher.find({});
        res.status(200).json(teachers);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const teacher = await Teacher.findById(id);
        if(teacher) res.status(200).json(teacher);
        else res.status(404).json({message: "No Teacher found with the id"});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const teacher = await Teacher.findByIdAndUpdate(id, req.body);
        if(!teacher) {
            return res.status(404).json({message: `Cannot find any teacher with  the ${id}`});
        }
        const updatedTeacher = await Teacher.findById(id);
        res.status(200).json(updatedTeacher);
    } catch(err) {
        res.status(500).json({"message": err.message});
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const teacher = await Teacher.findByIdAndDelete(id);
        if(!teacher) {
            return res.status(404).json({message: `Cannot find any teacher with  the ${id}`});
        }
        res.status(200).json(teacher);
    } catch(err) {
        res.status(500).json({"message": err.message});
    }
})



module.exports = app;