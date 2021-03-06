import { USER_ROLES } from '../types'
import { connection } from './connection'

export const insertUser = async (
  id: string,
  email: string,
  password: string,
  role: USER_ROLES
  ) => {
  await connection
    .insert({
      id,
      email,
      password,
      role
    })
    .into("users_table")
}