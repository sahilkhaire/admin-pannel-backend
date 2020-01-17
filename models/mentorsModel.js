let mongoose = require('../config/mongo_config')

let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId

//set Schema
let mentorsModelSchema = mongoose.Schema(
    {
        mentor_name: String,
        tasks: [String]
    },
    { timestamps: true }
)

let mentors = module.exports = mongoose.admin_panel.model('mentor', mentorsModelSchema)
module.exports.get = function (callback, limit) {
    mentors.find(callback).limit(limit)
}