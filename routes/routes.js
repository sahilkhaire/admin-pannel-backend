let express = require('express');
let router = express.Router();
let mentorController = require('../controllers/mentorController');

router.route('/mentor')
    .get(mentorController.getMentorList)
    .post(mentorController.addMentor)

router.route('/mentor/task')
    .post(mentorController.addTask)

router.route('/mentor/:mentor_id')
    .delete(mentorController.deleteMentor)

router.route('/mentor/task/:mentor_id/:task_id')
    .delete(mentorController.deleteTask)

module.exports = router;



