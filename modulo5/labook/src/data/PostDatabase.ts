import { Post } from "../model/Post"
import BaseDatabase from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public async insertPost(post: Post) {
        try {
            await BaseDatabase
                .connection("labook_posts")
                .insert({
                    id: post.getId(),
                    photo: post.getPhoto(),
                    description: post.getDescription(),
                    created_at: post.getCreatedAt(),
                    type: post.getType(),
                    author_id: post.getAuthorId()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}