import { Request, Response } from 'express'
import moment from 'moment'
import { BaseDatabase } from '../../data/BaseDatabase'
import { Teacher } from '../../entities/Teacher'

export const createTeacher = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try{
        
        const {name, email, birth_date, class_id} = req.body
        const id = 'TID' + Date.now().toString()

        if(!name ||  !email || !birth_date || !class_id) {
            errorCode = 422
            throw new Error("Check if the all the required fields are filled")
        }

        const newTeacher = new Teacher(
            id,
            name,
            email,
            moment(birth_date, 'DD/MM/YYYY').format('YYYY/MM/DD'),
            class_id
        )
       
        const createTeacher = (teacher: Teacher) => BaseDatabase.connection('labenusystem_teacher').insert(teacher)

        await createTeacher(newTeacher)

        res.status(201).send({message: 'Teacher created!'})

    } catch(error: any) {
        res.status(errorCode).send({message: error.message || error.sqlMessage})
    }
}