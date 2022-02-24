export class User {
    
    constructor(
     protected id: string,
     protected name: string,
     protected email: string,
     protected birth_date: string,
     protected class_id: string,
    ) {
         if (typeof id !== 'string') throw new Error('Type of id must be a "string"')
         if (typeof name !== 'string') throw new Error('Type of name must be a "string"')
         if (typeof email !== 'string') throw new Error('Type of email must be a "string"')
         if (typeof birth_date !== 'string') throw new Error('Type of birth_date must be a "string"')
         if (typeof class_id !== 'string') throw new Error('Type of class_id must be a "string"')
    }

    public getId():string{
         return this.id
    }
    public getName():string{
         return this.name
    }
    public getEmail():string{
         return this.email
    }
    public getBirthDate():string{
         return this.birth_date
    }
    public getClassId():string{
         return this.class_id
    }
}

