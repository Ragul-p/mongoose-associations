const Student = require("../model/student.model");
const Course = require("../model/course.model")


async function create(req, res) {


    const student1 = await Student.create({ name: 'ragul' });
    const student2 = await Student.create({ name: 'ram' });

    const course1 = await Course.create({ title: 'Social' });
    const course2 = await Course.create({ title: 'Science' });

    student1.courses.push(course1, course2);
    student2.courses.push(course2);

    await student1.save();
    await student2.save();

    return res.status(200).json({ message: "create" })
}

async function read(req, res) {

    const students = await Student.find().populate('courses');
    const courses = await Course.find().populate('students');


    return res.status(200).json({ students, courses })
}



module.exports = { create, read }
