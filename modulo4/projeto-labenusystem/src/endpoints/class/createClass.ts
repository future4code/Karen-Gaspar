import { Request, Response } from 'express'
import { BaseDatabase } from '../../data/BaseDataBase'
import { Class } from '../../entities/Class'

export const createClass = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400

    try{
        
        const {name, module} = req.body
        const id = 'CID' + Date.now().toString()

        if(!name) {
            errorCode = 422
            throw new Error("Check if the all the required fields are filled")
        }

        const newClass = new Class(
            id,
            name,
            module,
        )
        
        const createClass = (team: Class) => BaseDatabase.connection('labenusystem_class').insert(team)

        await createClass(newClass)

        res.status(201).send({message: 'Class created!'})

    } catch(error: any) {
        res.status(errorCode).send({message: error.message || error.sqlMessage})
    }
}