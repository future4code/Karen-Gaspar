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

    public async selectPostById(id: string): Promise<Post> {
        try {
            const post = await BaseDatabase
                .connection('labook_posts')
                .select('photo', 'description', 'type', 'created_at as cratedAt', 'author_id as authorId')
                .where({ id })
            return post[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}