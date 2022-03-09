import * as jwt from "jsonwebtoken"
import { USER_ROLE } from "../model/User"


export interface AuthenticationData{
    id: string,
    role: USER_ROLE
}

export class Authenticator {
    public generateToken(input: AuthenticationData): string {
        const token = jwt.sign(input, process.env.JWT_KEY as string, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
        });
        return token
    }

    public getTokenData(token: string): AuthenticationData{
        const data = jwt.verify(token, process.env.JWT_KEY as string)
        return data as AuthenticationData
    }
}