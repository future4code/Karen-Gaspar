import { Request, Response } from 'express'
import moment from 'moment'
import { BaseDatabase } from '../../data/BaseDatabase'
import { Student } from '../../entities/Student'

export const createStudent = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try {

        const { name, email, birth_date, class_id} = req.body
        const id = 'SID' + Date.now().toString()

        if (!name || !email || !birth_date || !class_id) {
            errorCode = 422
            throw new Error("Check if the fields are filled")
        }

        const newStudent = new Student(
            id,
            name,
            email,
            moment(birth_date, 'DD/MM/YYYY').format('YYYY/MM/DD'),
            class_id,
        )
        
        const createStudent = (student: Student) => BaseDatabase.connection('labenusystem_student').insert(student)

        await createStudent(newStudent)

        res.status(201).send({message: 'Student created!'})

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}