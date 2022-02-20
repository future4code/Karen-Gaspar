import { app } from "./app";
import { createClass } from "./endpoints/class/createClass";
import { createStudent } from "./endpoints/student/createStudent";
import { createTeacher } from "./endpoints/teacher/createTeacher";

app.post('/class', createClass)

app.post('/student', createStudent)

app.post('/teacher', createTeacher)

