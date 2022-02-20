import { User } from "./User"

export class Teacher extends User {

    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: string,
        class_id: string,
    ) {
        super(id, name, email, birth_date, class_id)

        if (typeof id !== 'string') throw new Error('Type of id must be a "string"')
        if (typeof name !== 'string') throw new Error('Type of name must be a "string"')
        if (typeof email !== 'string') throw new Error('Type of email must be a "string"')
        if (typeof birth_date !== 'string') throw new Error('Type of birth_date must be a "string"')
        if (typeof class_id !== 'string') throw new Error('Type of class_id must be a "string"')
    }
}