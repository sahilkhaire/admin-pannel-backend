let MentorModel = require('../models/mentorsModel');
let mongoose = require('mongoose');

var ObjectId = mongoose.Types.ObjectId;

module.exports = {
    getMentorList: async (req, res) => {
        try {
            let mentor_list = await MentorModel.find().exec();
            return res.status(200).json({ data: mentor_list })
        }
        catch (err) {
            return res.status(400).send(err)
        }
    },
    addMentor: async (req, res) => {
        try {
            let body = req.body;
            let mentor_data = {
                mentor_name: body.name,
                tasks: []
            }
            await new MentorModel(mentor_data).save()
            let mentor_list = await MentorModel.find().exec();
            return res.status(200).send({ data: mentor_list })
        }
        catch (err) {
            return res.status(400).send(err)
        }
    },
    deleteMentor: async (req, res) => {
        try {
            let mentor_id = req.params.mentor_id
            await MentorModel.remove({ _id: ObjectId(mentor_id) });
            let mentor_list = await MentorModel.find().exec();
            return res.status(200).send({ data: mentor_list })
        }
        catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }
    },
    addTask: async (req, res) => {
        try {
            let body = req.body;
            let mentor_data = await MentorModel.findOne({ _id: ObjectId(body.mentor_id) }).exec();
            if (mentor_data == null) {
                let mentor_list = await MentorModel.find().exec();
                return res.status(200).send({ data: mentor_list })
            }
            else {
                mentor_data.tasks.push(body.task)
                await mentor_data.save()
                let mentor_list = await MentorModel.find().exec();
                return res.status(200).send({ data: mentor_list })
            }
        }
        catch (err) {
            return res.status(400).send(err)
        }
    },
    deleteTask: async (req, res) => {
        try {
            let { mentor_id, index } = req.params;
            let mentor_data = await MentorModel.findOne({ _id: ObjectId(mentor_id) }).exec();
            if (mentor_data == null) {
                let mentor_list = await MentorModel.find().exec();
                return res.status(200).send({ data: mentor_list })
            }
            else {
                mentor_data.tasks.splice(index, 1);
                console.log(mentor_data.tasks)
                await mentor_data.save()
                let mentor_list = await MentorModel.find().exec();
                return res.status(200).send({ data: mentor_list })
            }
        }
        catch (err) {
            return res.status(400).send(err)
        }
    }
}