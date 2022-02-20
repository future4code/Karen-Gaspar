
export class Class {

    constructor(
        private id: string,
        private name: string,
        private module: number
    ) {

        if (typeof id !== 'string') throw new Error('Type of id must be a "string"')
        if (typeof name !== 'string') throw new Error('Type of name must be a "string"')
    }

    public getId(): string{
        return this.id
    }
    public getName(): string{
        return this.name
    }
    public getModule(): number{
        return this.module
    }
    
}