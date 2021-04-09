const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URLSlugs = require('mongoose-url-slugs');

// add your schemas
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        unique: true,
        required: [true, 'password is required']
    }
});

const WorkoutSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'userId is required']
    },
    title: {
        type: String
    },
    time: {
        type: String
    },
    difficulty: {
        type: String
    },
    content: {
        type: String
    }
});


// register your model
const User = mongoose.model('User', UserSchema);
const Workout = mongoose.model('Workouot', WorkoutSchema);

mongoose.connect('mongodb://localhost:27017/hw07', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(function() {
    console.log('DB connected');
});

module.exports = {User, Workout};
