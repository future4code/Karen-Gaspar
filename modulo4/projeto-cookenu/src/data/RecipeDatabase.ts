import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public async createRecipe(recipe: Recipe) {
        try {
            await BaseDatabase
                .connection('cookenu_recipes')
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    created_at: recipe.getCreatedAt(),
                    user_id: recipe.getUserId()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findRecipeByTitle(title: string): Promise<Recipe> {
        try {
            const recipe = await BaseDatabase
                .connection('cookenu_recipes')
                .select('*')
                .where({ title })
            return recipe[0] && Recipe.toUserModel(recipe[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getRecipeById(id: string): Promise<Recipe> {
        try {
            const result = await BaseDatabase
                .connection('cookenu_recipes')
                .select('id', 'title', 'description', 'created_at')
                .where({ id })
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}