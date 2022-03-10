import * as jwt from 'jsonwebtoken'

export interface AuthenticationData {
    id: string
}

export class Authenticator {
    public generateToken(
        payload: AuthenticationData
    ): string {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
    }

    public getTokenData(
        token: string
    ): AuthenticationData {
        const result: any = jwt.verify(
            token,
            process.env.JWT_KEY as string
        )

        return { id: result.id, }
    }
}