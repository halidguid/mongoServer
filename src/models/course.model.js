import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
Name : String,
points : Number

});

export default mongoose.model('Course', CourseSchema);
