export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private created_at: string,
        private author_id: string
    ) { }

    public getId() {
        return this.id
    }
    public getPhoto() {
        return this.photo
    }
    public getDescription() {
        return this.description
    }
    public getType() {
        return this.type
    }
    public getCreatedAt() {
        return this.created_at
    }
    public getAuthorId() {
        return this.author_id
    }

    static toUserModel(data: any): Post {
        return new Post(data.id, data.photo, data.description, data.type, data.created_at, data.author_id)
    }
}